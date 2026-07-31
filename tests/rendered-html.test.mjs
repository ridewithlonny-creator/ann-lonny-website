import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const publicRoot = new URL("../public/", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Ann&Lonny website and launch metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ann&amp;Lonny \| Personalised Ski &amp; Snowboard Lessons<\/title>/i);
  assert.match(html, /<meta name="description" content="Friendly, professional ski and snowboard lessons/i);
  assert.match(html, /<meta property="og:image" content="https?:\/\/[^\"]+\/og\.png"/i);
  assert.match(html, /<meta property="og:image:width" content="1200"/i);
  assert.match(html, /<meta property="og:image:height" content="630"/i);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/i);
  assert.match(html, /<link rel="icon" href="\/favicon\.svg" type="image\/svg\+xml"/i);
  assert.match(html, /<main id="main-content">/i);

  for (const id of ["top", "about", "lessons", "instructors", "booking", "faq", "contact"]) {
    assert.match(html, new RegExp(`<section id="${id}"`, "i"));
  }

  assert.match(html, /href="https:\/\/wa\.me\/61497131933\?text=/i);
  assert.match(html, /href="https:\/\/wa\.me\/61459495550\?text=/i);
  assert.match(html, /href="\/assets\/images\/contact\/ann-line-qr\.jpg"/i);
  assert.match(html, /href="\/assets\/images\/contact\/ann-wechat-qr\.jpg"/i);
  assert.match(html, /href="https:\/\/www\.instagram\.com\/ann_yu0309\/"/i);
  assert.match(html, /<details class="privacy-notice" id="privacy-notice">/i);
  assert.match(html, /Privacy Notice/i);
  assert.match(html, /Last updated: 31 July 2026/i);
  assert.match(html, /does not use advertising cookies, analytics trackers/i);
  assert.doesNotMatch(html, /PRIVACY NOTICE PLACEHOLDER|隱私權聲明 PLACEHOLDER/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("all local website assets referenced by the app are present", async () => {
  const sourceFiles = [
    "app/content.ts",
    "app/globals.css",
    "app/layout.tsx",
    "app/page.tsx",
  ];
  const references = new Set();

  for (const file of sourceFiles) {
    const source = await readFile(new URL(file, projectRoot), "utf8");
    for (const match of source.matchAll(/\/(?:assets\/images\/[^\"'()\s]+|og\.png|favicon\.svg)/g)) {
      references.add(match[0]);
    }
  }

  assert.ok(references.size >= 10, "Expected the app to reference its launch image set");
  for (const reference of references) {
    const asset = new URL(reference.slice(1), publicRoot);
    await access(asset);
    assert.ok((await stat(asset)).size > 0, `${reference} should not be empty`);
  }
});

test("Open Graph image and favicon have valid launch dimensions and content", async () => {
  const ogImage = await readFile(new URL("og.png", publicRoot));
  assert.deepEqual([...ogImage.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.equal(ogImage.readUInt32BE(16), 1200);
  assert.equal(ogImage.readUInt32BE(20), 630);

  const favicon = await readFile(new URL("favicon.svg", publicRoot), "utf8");
  assert.match(favicon, /<svg\b/i);
  assert.match(favicon, /viewBox="0 0 24 24"/i);
});
