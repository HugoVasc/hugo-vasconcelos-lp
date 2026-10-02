import { mailtoLink, whatsappLink, type ContactMessages } from "@/lib/site";

type Props = {
  messages: ContactMessages;
  emailLabel: string;
  whatsappLabel: string;
  size?: "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function ContactButtons({ messages, emailLabel, whatsappLabel, size = "md" }: Props) {
  const wa = whatsappLink(messages);
  const pad = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-3 text-sm";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a href={mailtoLink(messages)} className={`${base} ${pad} bg-accent text-white hover:bg-accent-dark`}>
        {emailLabel}
      </a>
      {wa && (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${pad} border border-accent bg-transparent text-accent hover:bg-accent hover:text-white`}
        >
          {whatsappLabel}
        </a>
      )}
    </div>
  );
}
