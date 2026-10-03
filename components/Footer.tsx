import SocialLinks from "./SocialLinks";

type Props = {
  name: string;
  nav: { about: string; skills: string; projects: string; contact: string };
  t: { tagline: string; rights: string; top: string; github: string; linkedin: string; emailLabel: string };
};

export default function Footer({ name, nav, t }: Props) {
  const links = [
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#projects", label: nav.projects },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <footer className="bg-accent px-6 py-12 text-background">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col items-center justify-between gap-8 border-b border-background/15 pb-10 md:flex-row">
          <div className="text-center md:text-left">
            <div className="mb-1 text-sm uppercase tracking-widest">{name}</div>
            <div className="text-xs opacity-60">{t.tagline}</div>
          </div>

          <nav aria-label="Rodapé" className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-xs tracking-wide opacity-70 transition-opacity hover:opacity-100">
                {l.label}
              </a>
            ))}
          </nav>

          <SocialLinks
            labels={{ github: t.github, linkedin: t.linkedin, email: t.emailLabel }}
            size={16}
            className="gap-4"
            linkClassName="opacity-70 hover:opacity-100"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-3 text-xs opacity-60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {name}. {t.rights}
          </p>
          <a href="#top" className="transition-opacity hover:opacity-100">
            {t.top} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
