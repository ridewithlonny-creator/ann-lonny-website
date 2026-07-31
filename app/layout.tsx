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
    title: "Ann&Lonny | Personalised Ski & Snowboard Lessons",
    description:
      "Friendly, professional ski and snowboard lessons designed around your goals, confidence and enjoyment.",
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
      title: "Ann&Lonny | Personalised Ski & Snowboard Lessons",
      description:
        "Friendly, professional lessons designed around your goals, confidence and enjoyment.",
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "Ann&Lonny personalised ski and snowboard lessons",
        },
      ],
      locale: "en_AU",
      alternateLocale: ["zh_TW"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ann&Lonny | Personalised Ski & Snowboard Lessons",
      description:
        "Friendly, professional lessons designed around your goals, confidence and enjoyment.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
