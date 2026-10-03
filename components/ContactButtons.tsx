import { Mail, MessageCircle } from "lucide-react";
import { mailtoLink, whatsappLink, type ContactMessages } from "@/lib/site";

type Props = {
  messages: ContactMessages;
  emailLabel: string;
  whatsappLabel: string;
  size?: "md" | "lg";
  stacked?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full tracking-wide transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function ContactButtons({ messages, emailLabel, whatsappLabel, size = "md", stacked = false }: Props) {
  const wa = whatsappLink(messages);
  const pad = size === "lg" ? "px-7 py-3.5 text-sm" : "px-7 py-3 text-sm";

  return (
    <div className={`flex gap-3 ${stacked ? "flex-col" : "flex-col sm:flex-row"}`}>
      <a href={mailtoLink(messages)} className={`${base} ${pad} bg-accent text-background hover:opacity-90`}>
        <Mail size={16} aria-hidden="true" />
        {emailLabel}
      </a>
      {wa && (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${pad} border border-accent text-accent hover:opacity-70`}
        >
          <MessageCircle size={16} aria-hidden="true" />
          {whatsappLabel}
        </a>
      )}
    </div>
  );
}
