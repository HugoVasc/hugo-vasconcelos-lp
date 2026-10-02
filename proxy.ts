import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/lib/i18n";

function pickLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .slice(0, 10)
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) || 0 : 1 };
    })
    .sort((a, b) => b.q - a.q);

  const match = ranked.find((r) => isLocale(r.lang));
  return match && isLocale(match.lang) ? match.lang : defaultLocale;
}

// Só roda em "/": redireciona para /pt ou /en. As páginas localizadas continuam 100% estáticas.
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${pickLocale(request)}`;
  const res = NextResponse.redirect(url, 307);
  res.headers.set("Vary", "Accept-Language, Cookie");
  return res;
}

export const config = { matcher: "/" };
