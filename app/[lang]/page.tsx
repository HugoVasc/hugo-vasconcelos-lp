import { notFound } from "next/navigation";
import ContactButtons from "@/components/ContactButtons";
import Header from "@/components/Header";
// import CompanyInfo from "@/components/CompanyInfo"; // ← descomente quando tiver CNPJ (veja lib/company.ts)
import { getDictionary } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { site, siteUrl } from "@/lib/site";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  const sameAs = [site.linkedin, site.github].filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `${siteUrl}/${lang}`,
    jobTitle: t.jobTitle,
    email: `mailto:${site.email}`,
    knowsAbout: ["Data Engineering", "Artificial Intelligence", "Analytics"],
    ...(sameAs.length ? { sameAs } : {}),
  };

  const card = "rounded-2xl border border-line bg-surface p-6";
  const chip = "rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-dark";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header locale={lang} name={site.name} nav={t.nav} />

      <main id="top" className="flex-1">
        <section className="mx-auto max-w-5xl px-5 pb-16 pt-16 sm:pt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{t.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{t.hero.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ContactButtons messages={t.contact.messages} emailLabel={t.hero.ctaEmail} whatsappLabel={t.hero.ctaWhatsapp} />
            <a href="#projects" className="px-2 py-3 text-sm font-semibold text-foreground underline-offset-4 hover:underline">
              {t.hero.ctaProjects} →
            </a>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 id="about-title" className="text-2xl font-bold tracking-tight sm:text-3xl">{t.about.title}</h2>
            <div className="mt-5 max-w-2xl space-y-4 text-lg leading-8 text-muted">
              {t.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title" className="border-t border-line bg-surface/60">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 id="skills-title" className="text-2xl font-bold tracking-tight sm:text-3xl">{t.skills.title}</h2>
            <p className="mt-3 text-muted">{t.skills.intro}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {t.skills.pillars.map((p) => (
                <article key={p.name} className={card}>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tools.map((tool) => (
                      <li key={tool} className={chip}>{tool}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 id="projects-title" className="text-2xl font-bold tracking-tight sm:text-3xl">{t.projects.title}</h2>
            <p className="mt-3 text-muted">{t.projects.intro}</p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {t.projects.items.map((p) => (
                <article key={p.title} className={`${card} flex flex-col`}>
                  <span className="w-fit rounded-full border border-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
                  <h3 className="mt-4 text-xl font-semibold leading-snug">{p.title}</h3>
                  <dl className="mt-4 space-y-4 text-sm leading-6">
                    <div>
                      <dt className="font-semibold">{t.projects.context}</dt>
                      <dd className="text-muted">{p.context}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">{t.projects.delivered}</dt>
                      <dd>
                        <ul className="list-disc space-y-1 pl-5 text-muted">
                          {p.delivered.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">{t.projects.results}</dt>
                      <dd className="text-muted">{p.results}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto pt-5">
                    <p className="sr-only">{t.projects.stack}</p>
                    <ul className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s} className={chip}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-accent-soft/60">
          <div className="mx-auto max-w-5xl px-5 py-20 text-center">
            <h2 id="contact-title" className="text-3xl font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-muted">{t.contact.text}</p>
            <div className="mt-8 flex justify-center">
              <ContactButtons messages={t.contact.messages} emailLabel={t.contact.email} whatsappLabel={t.contact.whatsapp} size="lg" />
            </div>
          </div>
        </section>
      </main>

      {/* <CompanyInfo locale={lang} /> ← dados de PJ aqui, acima do rodapé, quando ativado */}

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. {t.footer.rights}</p>
          <a href="#top" className="hover:text-foreground">{t.footer.top} ↑</a>
        </div>
      </footer>
    </>
  );
}
