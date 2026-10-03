import type { Locale } from "./i18n";

export const site = {
  name: "Hugo Vasconcelos",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hugo.svasc@gmail.com",
  // Somente dígitos, com DDI + DDD. Ex.: 5511999999999. Vazio => botão de WhatsApp oculto.
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/HugoVasc",
};

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export type ContactMessages = {
  emailSubject: string;
  emailBody: string;
  whatsappText: string;
};

export function mailtoLink(m: ContactMessages) {
  return `mailto:${site.email}?subject=${encodeURIComponent(m.emailSubject)}&body=${encodeURIComponent(m.emailBody)}`;
}

export function whatsappLink(m: ContactMessages) {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(m.whatsappText)}`;
}

export const localePath = (l: Locale) => `/${l}`;
