"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  name: string;
  nav: { about: string; skills: string; projects: string; contact: string; hire: string; menu: string; lang: string };
};

export default function Header({ locale, name, nav }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const other: Locale = locale === "pt" ? "en" : "pt";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#projects", label: nav.projects },
    { href: "#contact", label: nav.contact },
  ];

  // Link nativo: funciona mesmo sem JS. No clique, só grava a preferência e preserva a seção (#hash).
  function switchLanguage(e: React.MouseEvent<HTMLAnchorElement>) {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${LOCALE_COOKIE}=${other}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    e.currentTarget.href = `/${other}${window.location.hash}`;
  }

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-line bg-background/95 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-medium uppercase tracking-widest text-accent transition-opacity hover:opacity-70">
          {name}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm tracking-wide text-accent transition-opacity duration-200 hover:opacity-60">
              {l.label}
            </a>
          ))}
          <LangLink other={other} label={nav.lang} onClick={switchLanguage} />
          <a href="#contact" className="rounded-full bg-accent px-5 py-2 text-sm text-background transition-opacity hover:opacity-90">
            {nav.hire}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-accent md:hidden"
          aria-label={nav.menu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Principal" className="flex flex-col gap-5 px-6 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm tracking-wide text-accent">
              {l.label}
            </a>
          ))}
          <div>
            <LangLink other={other} label={nav.lang} onClick={switchLanguage} />
          </div>
          <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-accent px-5 py-2 text-center text-sm text-background">
            {nav.hire}
          </a>
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
      className="rounded-full border border-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:border-accent hover:bg-accent hover:text-background"
    >
      {other}
    </a>
  );
}
