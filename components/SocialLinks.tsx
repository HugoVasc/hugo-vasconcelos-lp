import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "./icons";

type Props = {
  labels: { github: string; linkedin: string; email: string };
  size?: number;
  className?: string;
  linkClassName?: string;
};

/** GitHub e LinkedIn só aparecem quando a URL está configurada (lib/site.ts). */
export default function SocialLinks({ labels, size = 18, className = "", linkClassName = "" }: Props) {
  const items = [
    site.github && { href: site.github, label: labels.github, icon: <GithubIcon size={size} />, external: true },
    site.linkedin && { href: site.linkedin, label: labels.linkedin, icon: <LinkedinIcon size={size} />, external: true },
    { href: `mailto:${site.email}`, label: labels.email, icon: <Mail size={size} aria-hidden="true" />, external: false },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode; external: boolean }[];

  return (
    <ul className={`flex items-center ${className}`}>
      {items.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            title={s.label}
            {...(s.external ? { target: "_blank", rel: "noopener noreferrer me" } : {})}
            className={`inline-flex transition-all duration-200 hover:-translate-y-0.5 hover:opacity-60 ${linkClassName}`}
          >
            {s.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
