import { ArrowDown, BarChart3, BrainCircuit, CircleCheck, Database, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import ContactButtons from "@/components/ContactButtons";
// import CompanyInfo from "@/components/CompanyInfo"; // ← descomente quando tiver CNPJ (veja lib/company.ts)
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import { getDictionary } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { site, siteUrl } from "@/lib/site";

const pillarIcons = [Database, BrainCircuit, BarChart3];
const projectIcons = [Database, BrainCircuit];

const eyebrow = "mb-3 text-xs uppercase tracking-widest text-accent/60";
const h2 = "text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold leading-tight text-accent";

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
  const socialLabels = { github: t.footer.github, linkedin: t.footer.linkedin, email: t.footer.emailLabel };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header locale={lang} name={site.name} nav={t.nav} />

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28 text-center">
          <div aria-hidden="true" className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full bg-accent opacity-20 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-20 left-10 h-56 w-56 rounded-full bg-accent opacity-10 blur-3xl" />

          <div className="relative mb-8 inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {t.hero.badge}
          </div>

          <h1 className="relative mx-auto mb-4 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight tracking-tight text-accent">
            {t.hero.titleA}
            <br />
            <span className="text-gold">{t.hero.titleB}</span>
          </h1>

          <p className="relative mx-auto mb-10 max-w-xl text-[clamp(1rem,2vw,1.15rem)] leading-relaxed text-muted">{t.hero.subtitle}</p>

          <div className="relative mb-10 flex flex-col items-center gap-4">
            <ContactButtons messages={t.contact.messages} emailLabel={t.hero.ctaEmail} whatsappLabel={t.hero.ctaWhatsapp} />
            <a href="#projects" className="py-2 text-sm font-medium text-accent underline-offset-4 hover:underline">
              {t.hero.ctaProjects} →
            </a>
          </div>

          <SocialLinks labels={socialLabels} className="relative gap-6" linkClassName="text-accent" />

          <a
            href="#about"
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-accent opacity-40 transition-opacity hover:opacity-70"
          >
            <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
            <ArrowDown size={14} className="animate-bounce motion-reduce:animate-none" aria-hidden="true" />
          </a>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="px-6 py-28">
          <div className="mx-auto grid max-w-5xl items-center gap-16 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-xs">
              <div aria-hidden="true" className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-accent/20" />
              <div className="relative z-10 flex aspect-[3/4] w-full items-center justify-center rounded-2xl bg-accent shadow-lg">
                <span aria-hidden="true" className="text-8xl font-bold tracking-tight text-background/90">HV</span>
              </div>
              <div className="absolute -right-4 bottom-6 z-20 rounded-xl bg-gold px-4 py-3 text-sm text-background shadow-md">
                <div className="mb-0.5 text-xs uppercase tracking-wide opacity-80">{t.about.cardLabel}</div>
                <div className="font-semibold">{t.about.cardValue}</div>
              </div>
            </div>

            <div>
              <p className={eyebrow}>{t.about.eyebrow}</p>
              <h2 id="about-title" className={`${h2} mb-5`}>{t.about.title}</h2>
              <div className="mb-8 space-y-4 leading-relaxed text-muted">
                {t.about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <ul className="flex flex-col gap-3">
                {t.about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CircleCheck size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="skills" aria-labelledby="skills-title" className="bg-alt px-6 py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <p className={eyebrow}>{t.skills.eyebrow}</p>
              <h2 id="skills-title" className={`${h2} mx-auto max-w-lg`}>{t.skills.title}</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {t.skills.pillars.map((p, i) => {
                const Icon = pillarIcons[i];
                const dark = i === 1;
                return (
                  <article
                    key={p.name}
                    className={`flex flex-col gap-5 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      dark ? "bg-accent text-background" : "bg-background text-foreground"
                    }`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${dark ? "bg-background/15" : "bg-accent-soft text-accent"}`}>
                      <Icon size={28} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold">{p.name}</h3>
                      <p className="text-sm leading-relaxed opacity-75">{p.description}</p>
                    </div>
                    <ul className={`mt-auto flex flex-col gap-2 border-t pt-4 ${dark ? "border-background/20" : "border-line"}`}>
                      {p.tools.map((tool) => (
                        <li key={tool} className="flex items-center gap-2 text-xs opacity-80">
                          <span aria-hidden="true" className={`h-1 w-1 shrink-0 rounded-full ${dark ? "bg-background" : "bg-accent"}`} />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" aria-labelledby="projects-title" className="px-6 py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14">
              <p className={eyebrow}>{t.projects.eyebrow}</p>
              <h2 id="projects-title" className={h2}>{t.projects.title}</h2>
            </div>

            <div className="flex flex-col gap-6">
              {t.projects.items.map((p, i) => {
                const Icon = projectIcons[i];
                const flip = i % 2 === 1;
                return (
                  <article key={p.title} className="group grid overflow-hidden rounded-2xl bg-alt transition-shadow duration-300 hover:shadow-lg md:grid-cols-2">
                    <div
                      className={`relative flex min-h-48 items-center justify-center overflow-hidden bg-linear-to-br from-accent to-accent-dark ${
                        flip ? "md:order-2" : ""
                      }`}
                    >
                      <div aria-hidden="true" className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-background/10 blur-2xl" />
                      <Icon size={72} strokeWidth={1.25} className="relative text-background/80 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                      <span className="absolute left-4 top-4 rounded-full bg-background px-3 py-1 text-xs text-accent">{p.tag}</span>
                    </div>

                    <div className={`flex flex-col justify-between p-8 ${flip ? "md:order-1" : ""}`}>
                      <div>
                        <h3 className="mb-4 text-xl font-bold text-accent">{p.title}</h3>
                        <dl className="space-y-4 text-sm leading-6">
                          <div>
                            <dt className="font-semibold text-accent">{t.projects.context}</dt>
                            <dd className="text-muted">{p.context}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold text-accent">{t.projects.delivered}</dt>
                            <dd>
                              <ul className="list-disc space-y-1 pl-5 text-muted">
                                {p.delivered.map((d) => (
                                  <li key={d}>{d}</li>
                                ))}
                              </ul>
                            </dd>
                          </div>
                        </dl>
                        <p className="sr-only">{t.projects.stack}</p>
                        <ul className="my-6 flex flex-wrap gap-2">
                          {p.stack.map((s) => (
                            <li key={s} className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent">{s}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="border-t border-line pt-4 text-xs text-accent/70">
                        <span className="font-semibold">{t.projects.results}: </span>
                        {p.results}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="bg-alt px-6 py-28">
          <div className="mx-auto grid max-w-5xl items-start gap-16 md:grid-cols-2">
            <div>
              <p className={eyebrow}>{t.contact.eyebrow}</p>
              <h2 id="contact-title" className={`${h2} mb-5`}>{t.contact.title}</h2>
              <p className="mb-10 leading-relaxed text-muted">{t.contact.text}</p>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                  <Mail size={16} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <div className="mb-0.5 text-xs text-muted/70">{t.contact.emailLabel}</div>
                  <a href={`mailto:${site.email}`} className="text-sm text-accent transition-opacity hover:opacity-60">
                    {site.email}
                  </a>
                </div>
              </div>

              <SocialLinks labels={socialLabels} size={20} className="mt-8 gap-5" linkClassName="text-accent" />
            </div>

            <div className="rounded-2xl border border-line bg-background p-8">
              <h3 className="mb-2 text-lg font-bold text-accent">{t.contact.chooseTitle}</h3>
              <p className="mb-6 text-sm text-muted">{t.contact.chooseText}</p>
              <ContactButtons messages={t.contact.messages} emailLabel={t.contact.email} whatsappLabel={t.contact.whatsapp} size="lg" stacked />
              <div className="mt-6 rounded-xl bg-accent-soft p-4">
                <p className="mb-1 text-xs uppercase tracking-wide text-accent/60">{t.contact.previewLabel}</p>
                <p className="text-sm italic text-muted">“{t.contact.messages.whatsappText}”</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <CompanyInfo locale={lang} /> ← dados de PJ aqui, acima do rodapé, quando ativado */}

      <Footer name={site.name} nav={t.nav} t={t.footer} />
    </>
  );
}
