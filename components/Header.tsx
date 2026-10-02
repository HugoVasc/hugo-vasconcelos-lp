"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  name: string;
  nav: { about: string; skills: string; projects: string; contact: string; menu: string; lang: string };
};

export default function Header({ locale, name, nav }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const other: Locale = locale === "pt" ? "en" : "pt";

  const links = [
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#projects", label: nav.projects },
    { href: "#contact", label: nav.contact },
  ];

  function switchLanguage(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.cookie = `${LOCALE_COOKIE}=${other}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
    router.push(`/${other}${window.location.hash}`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="text-base font-semibold tracking-tight">
          {name}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <LangLink other={other} label={nav.lang} onClick={switchLanguage} />
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
          aria-label={nav.menu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Principal" className="border-t border-line bg-background md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <LangLink other={other} label={nav.lang} onClick={switchLanguage} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function LangLink({ other, label, onClick }: { other: Locale; label: string; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <a
      href={`/${other}`}
      hrefLang={other}
      lang={other}
      onClick={onClick}
      aria-label={`${label}: ${other === "pt" ? "Português" : "English"}`}
      className="rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-accent hover:text-accent"
    >
      {other}
    </a>
  );
}
