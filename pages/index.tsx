import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ParticlePortrait, type ParticlePortraitHandle } from "../components/ParticlePortrait";
import { useTheme } from "../components/Layout";
import { nav, profile } from "../data/site";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>@#";

function useScrambler(lines: string[], interval = 3600) {
  const [text, setText] = useState(lines[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let i = 0;
      const id = setInterval(() => setText(lines[(i = (i + 1) % lines.length)]), interval);
      return () => clearInterval(id);
    }
    let i = 0,
      tick: ReturnType<typeof setInterval> | undefined;
    const id = setInterval(() => {
      const next = lines[(i = (i + 1) % lines.length)];
      let f = 0;
      clearInterval(tick);
      tick = setInterval(() => {
        f++;
        let out = "";
        for (let c = 0; c < next.length; c++)
          out += c < f / 2 ? next[c] : next[c] === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        setText(out);
        if (f / 2 >= next.length) clearInterval(tick);
      }, 28);
    }, interval);
    return () => {
      clearInterval(id);
      clearInterval(tick);
    };
  }, [lines, interval]);
  return text;
}

export default function HomePage() {
  const { theme } = useTheme();
  const router = useRouter();
  const portrait = useRef<ParticlePortraitHandle>(null);
  const role = useScrambler(profile.roles);
  const [leaving, setLeaving] = useState(false);

  const go = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return void router.push(href);
    setLeaving(true);
    portrait.current?.explode();
    setTimeout(() => router.push(href), 650);
  };

  return (
    <>
      <ParticlePortrait ref={portrait} theme={theme} />
      <div
        className={`relative z-10 w-screen min-h-svh grid grid-rows-[auto_1fr_auto] gap-8 p-5 md:p-14 pointer-events-none transition-[opacity,filter] duration-500 ${
          leaving ? "opacity-0 blur-sm" : ""
        }`}
      >
        <header className="flex justify-between items-baseline text-[13px] text-[var(--muted)] pr-12">
          <span>
            <b className="text-[var(--ink)]">devkrishna</b> / {profile.fullName}
          </span>
        </header>

        <section className="self-end md:self-center w-full md:max-w-[min(46vw,640px)] pt-[52vh] md:pt-0">
          <h1
            className="dk-rise font-bold text-[clamp(2.6rem,6.2vw,5.8rem)] leading-[0.92] tracking-[-0.04em] [text-wrap:balance]"
            style={{ ["--i" as string]: 0 }}
          >
            Hello world,
            <br />
            this is <span className="text-[var(--accent)]">{profile.name}</span>.
          </h1>
          <p
            className="dk-rise mt-5 text-[clamp(14px,1.3vw,17px)] text-[var(--muted)] min-h-[1.5em]"
            style={{ ["--i" as string]: 1 }}
          >
            <span className="text-[var(--ink)]" aria-hidden="true">
              {role}
            </span>
            <span className="sr-only">{profile.roles.join(". ")}</span>
          </p>

          <nav className="mt-[clamp(28px,6vh,64px)] flex flex-col" aria-label="Sections">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={e => go(e, item.href)}
                onMouseEnter={() => portrait.current?.morph(item.shape)}
                onMouseLeave={() => portrait.current?.morph(null)}
                onFocus={() => portrait.current?.morph(item.shape)}
                onBlur={() => portrait.current?.morph(null)}
                className="dk-rise pointer-events-auto grid grid-cols-[1fr_auto] items-baseline gap-6 py-3 border-t last:border-b border-[var(--line)] text-[clamp(20px,2.2vw,30px)] font-bold tracking-[-0.02em] text-[var(--ink)] no-underline transition-[color,padding] duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:text-[var(--accent)] hover:pl-3.5 focus-visible:text-[var(--accent)] focus-visible:pl-3.5 focus-visible:outline-none"
                style={{ ["--i" as string]: i + 2 }}
              >
                {item.label}
                <small className="text-[13px] font-normal tracking-normal text-[var(--muted)]">{item.note}</small>
              </Link>
            ))}
          </nav>
        </section>

        <footer className="flex justify-between gap-4 text-xs text-[var(--muted)]">
          <span className="hidden md:inline">Move your cursor through me. Hover a section.</span>
          <span>
            © 2023 – {new Date().getFullYear()} ·{" "}
            <a
              className="pointer-events-auto underline underline-offset-2"
              href="https://x.com/AllDevThings"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shimanta
            </a>
          </span>
        </footer>
      </div>
    </>
  );
}
