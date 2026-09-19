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
  assert.match(html, /<html lang="zh-Hant">/i);
  assert.match(html, /<title>Ann&amp;Lonny｜專屬雙板與單板課程<\/title>/i);
  assert.match(html, /<meta name="description" content="由 Ann 與 Lonny 提供個人化雙板與單板課程/i);
  assert.match(html, /<meta property="og:image" content="https?:\/\/[^\"]+\/og\.png"/i);
  assert.match(html, /<meta property="og:image:width" content="1200"/i);
  assert.match(html, /<meta property="og:image:height" content="630"/i);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/i);
  assert.match(html, /<link rel="icon" href="\/favicon\.svg" type="image\/svg\+xml"/i);
  assert.match(html, /<main id="main-content">/i);
  assert.match(html, /<div class="language-switcher" aria-label="選擇語言">/i);
  assert.match(html, /aria-pressed="true">繁中<\/button>/i);
  assert.match(html, /aria-pressed="false">EN<\/button>/i);
  assert.match(html, /都是 APSI 單板三級教練/i);
  assert.match(html, /把動作、技術與背後理論解釋得更清楚/i);
  assert.match(html, /同時考量地形、雪況與雪道人流/i);
  assert.match(html, /隨時調整上課內容/i);
  assert.match(html, /更快找出問題的原因/i);
  assert.match(html, /用清楚易懂的方式說明如何調整/i);
  assert.match(html, /滑雪是一項極限運動/i);
  assert.match(html, /讓 Ann 帶著你們/i);
  assert.match(html, /用安全、簡單的方式享受滑雪的樂趣/i);
  assert.match(html, /為什麼我們在日本的課程價格比一般教練高/i);
  assert.match(html, /原本可能需要多堂課處理的問題/i);
  assert.doesNotMatch(html, /雪票和裝備是否包含/i);
  assert.match(html, /依照當天開放的地形、纜車與雪況/i);
  assert.match(html, /不用擔心天氣不好就學不到東西/i);
  assert.match(html, /雙板課程從 4 歲開始，單板課程從 7 歲開始/);
  assert.match(html, /6 歲以下的孩子建議安排 1 對 1 教學/);
  assert.match(html, /6 歲以下兒童建議安排 1 對 1 教學/);
  assert.doesNotMatch(html, /6 歲以下兒童僅安排/);
  assert.match(html, /src="\/assets\/images\/ann-lonny-about-2026\.jpg"/);

  for (const id of ["top", "about", "lessons", "instructors", "booking", "faq", "contact"]) {
    assert.match(html, new RegExp(`<section id="${id}"`, "i"));
  }

  assert.match(html, /href="https:\/\/wa\.me\/61497131933\?text=/i);
  assert.match(html, /href="https:\/\/wa\.me\/61459495550\?text=/i);
  assert.match(html, /href="\/assets\/images\/contact\/ann-line-qr\.jpg"/i);
  assert.match(html, /href="\/assets\/images\/contact\/ann-wechat-qr\.jpg"/i);
  assert.match(html, /href="https:\/\/www\.instagram\.com\/ann_yu0309\/"/i);
  assert.match(html, /<details class="privacy-notice" id="privacy-notice">/i);
  assert.match(html, /隱私權聲明/i);
  assert.match(html, /最後更新日期：2026 年 7 月 31 日/i);
  assert.match(html, /不使用廣告 Cookie、網站分析追蹤/i);
  assert.match(html, /class="section testimonials-section"/i);
  assert.match(html, /兩寶的滑雪初體驗很開心/i);
  assert.match(html, /Thanks very much for the review/i);
  assert.match(html, /感謝Lonny教練/i);
  assert.match(html, /感谢Lonny教练两个小时的教学/i);
  for (const name of ["Ingrid", "Anthony", "Dan Lee", "Neko"]) {
    assert.match(html, new RegExp(`<strong>${name}</strong>`, "i"));
  }
  assert.equal((html.match(/<blockquote\b/gi) ?? []).length, 4);
  assert.doesNotMatch(html, /PRIVACY NOTICE PLACEHOLDER|隱私權聲明 PLACEHOLDER/i);
  assert.doesNotMatch(html, /TESTIMONIAL PLACEHOLDER|學生評價 PLACEHOLDER|placeholder-badge/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("sections follow the agreed reading order and pricing defaults to Japan", async () => {
  const html = await (await render()).text();
  const order = ["top", "about", "lessons", "instructors", "why", "testimonials", "booking", "pricing", "faq", "contact", "instagram"];
  let previous = -1;
  for (const id of order) {
    const position = html.indexOf(`<section id="${id}"`);
    assert.ok(position > previous, `${id} should exist after the preceding section`);
    previous = position;
  }
  assert.match(html, /aria-label="選擇課程價格地區"/);
  assert.match(html, /aria-pressed="true" aria-controls="pricing-region-panel">日本<\/button>/);
  assert.match(html, /aria-pressed="false" aria-controls="pricing-region-panel">澳洲 · Perisher<\/button>/);
  assert.match(html, /110,000/);
  assert.match(html, /130,000/);
});

test("Hokkaido, HANAZONO FAQ, group limits and shared Instagram render correctly", async () => {
  const html = await (await render()).text();
  assert.match(html, /日本北海道 ACCENT/);
  assert.doesNotMatch(html, /日本北海道二世谷|日本二世谷 Accent/);
  const questions = [...html.matchAll(/<summary><span>(\d+)<\/span>(.*?)<i /g)];
  assert.match(questions[2][2], /住在 HANAZONO/);
  assert.match(questions[4][2], /最多幾人/);
  assert.match(html, /Hirafu 或 Annupuri 開始上課/);
  assert.match(html, /2026 年 10 月多再次確認/);
  assert.match(html, /澳洲私人教練課每位教練最多帶 5 人/);
  assert.match(html, /日本課程每位教練帶一組，最多 4 人/);
  assert.match(html, /href="https:\/\/www\.instagram\.com\/alcouplelife\/" target="_blank" rel="noopener noreferrer"/);
  assert.match(html, /@alcouplelife/);
  assert.match(html, /href="https:\/\/www\.instagram\.com\/lonny0614\/"/);
  assert.match(html, /href="https:\/\/www\.instagram\.com\/ann_yu0309\/"/);
});

test("published testimonials contain no placeholder source", async () => {
  const [contentSource, pageSource, stylesheet] = await Promise.all([
    readFile(new URL("app/content.ts", projectRoot), "utf8"),
    readFile(new URL("app/page.tsx", projectRoot), "utf8"),
    readFile(new URL("app/globals.css", projectRoot), "utf8"),
  ]);

  assert.doesNotMatch(
    `${contentSource}\n${pageSource}\n${stylesheet}`,
    /TESTIMONIAL PLACEHOLDER|學生評價 PLACEHOLDER|placeholder-badge/i,
  );
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
