import { company } from "@/lib/company";
import type { Locale } from "@/lib/i18n";

const labels = {
  pt: { title: "Dados da empresa", legalName: "Razão social", tradeName: "Nome fantasia", cnpj: "CNPJ", address: "Endereço", email: "E-mail", phone: "Telefone" },
  en: { title: "Company details", legalName: "Legal name", tradeName: "Trade name", cnpj: "Tax ID (CNPJ)", address: "Address", email: "Email", phone: "Phone" },
} as const;

/**
 * Bloco com dados de PJ. NÃO está em uso.
 * Para ativar: preencha `company` em lib/company.ts e adicione
 * `<CompanyInfo locale={lang} />` ao final de app/[lang]/page.tsx.
 */
export default function CompanyInfo({ locale }: { locale: Locale }) {
  if (!company) return null;
  const t = labels[locale];
  const rows: [string, string | undefined][] = [
    [t.legalName, company.legalName],
    [t.tradeName, company.tradeName],
    [t.cnpj, company.cnpj],
    [t.address, [company.address, company.city].filter(Boolean).join(" — ") || undefined],
    [t.email, company.email],
    [t.phone, company.phone],
  ];

  return (
    <section aria-labelledby="company-title" className="border-t border-line bg-alt">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <h2 id="company-title" className="text-sm font-semibold uppercase tracking-wider text-muted">
          {t.title}
        </h2>
        <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
          {rows
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k}>
                <dt className="text-muted">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
        </dl>
      </div>
    </section>
  );
}
