import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/content";
import { defaultLocale, isLocale } from "@/lib/i18n";

export const alt = "Hugo Vasconcelos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(isLocale(lang) ? lang : defaultLocale);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#f3eee4", color: "#1e2a2d" }}>
        <div style={{ fontSize: 28, color: "#14503f", letterSpacing: 4, textTransform: "uppercase" }}>{t.footer.tagline}</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24 }}>Hugo Vasconcelos</div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#56666a", maxWidth: 900 }}>{t.hero.titleA} {t.hero.titleB}</div>
      </div>
    ),
    size,
  );
}
