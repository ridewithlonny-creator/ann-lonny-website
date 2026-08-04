import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    title: "Ann&Lonny｜專屬雙板與單板課程",
    description:
      "由 Ann 與 Lonny 提供個人化雙板與單板課程，根據你的程度、目標與信心安排安全、專業且有趣的雪上學習體驗。",
    keywords: [
      "ski lessons",
      "snowboard lessons",
      "private ski instructor",
      "滑雪課程",
      "單板課程",
    ],
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      type: "website",
      url: baseUrl,
      siteName: "Ann&Lonny",
      title: "Ann&Lonny｜專屬雙板與單板課程",
      description:
        "根據你的程度、目標與信心，提供安全、專業且有趣的雙板與單板課程。",
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "Ann&Lonny 專屬雙板與單板課程",
        },
      ],
      locale: "zh_TW",
      alternateLocale: ["en_AU"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ann&Lonny｜專屬雙板與單板課程",
      description:
        "根據你的程度、目標與信心，提供安全、專業且有趣的雙板與單板課程。",
      images: [`${baseUrl}/og.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
