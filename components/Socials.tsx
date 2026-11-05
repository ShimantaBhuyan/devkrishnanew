import { socials } from "../data/site";

/** Contact links, rendered from data/site.ts. */
export const Socials = () => (
  <div className="dk-socials">
    {socials.map((s, i) => (
      <a
        key={s.href}
        href={s.href}
        target={s.href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="dk-social dk-rise"
        style={{ ["--i" as string]: i + 3 }}
      >
        <span>{s.label}</span>
        <span>{s.handle} ↗</span>
      </a>
    ))}
  </div>
);
