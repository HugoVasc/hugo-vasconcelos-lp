import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { htmlLang, isLocale, locales, ogLocale } from "@/lib/i18n";
import { site, siteUrl } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });

export const viewport: Viewport = { themeColor: "#f3eee4", width: "device-width", initialScale: 1 };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).meta;

  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: site.name }],
    creator: site.name,
    alternates: {
      canonical: `/${lang}`,
      languages: { "pt-BR": "/pt", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: site.name,
      title: t.title,
      description: t.description,
      locale: ogLocale[lang],
      alternateLocale: ogLocale[lang === "pt" ? "en" : "pt"],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description },
    robots: { index: true, follow: true },
    formatDetection: { email: false, address: false, telephone: false },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={htmlLang[lang]} className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
