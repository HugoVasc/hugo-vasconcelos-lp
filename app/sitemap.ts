import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((l) => ({
    url: `${siteUrl}/${l}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: { "pt-BR": `${siteUrl}/pt`, en: `${siteUrl}/en` } },
  }));
}
