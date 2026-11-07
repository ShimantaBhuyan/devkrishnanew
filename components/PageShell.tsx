import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  lede?: ReactNode;
  backHref?: string;
  backLabel?: string;
  children?: ReactNode;
};

/** Shared frame for every inner page: back link, big title, lede, content. */
export function PageShell({ title, lede, backHref = "/", backLabel = "devkrishna", children }: Props) {
  return (
    <div className="dk-page">
      <Head>
        <title key="title">{`${title} — devkrishna`}</title>
        <meta key="og:title" property="og:title" content={`${title} — devkrishna`} />
        <meta key="twitter:title" name="twitter:title" content={`${title} — devkrishna`} />
      </Head>
      <Link href={backHref} className="dk-back dk-rise">
        <span aria-hidden="true">←</span> <b>{backLabel}</b>
      </Link>
      <h1 className="dk-title dk-rise" style={{ ["--i" as string]: 1 }}>
        {title}
      </h1>
      {lede ? (
        <div className="dk-lede dk-rise" style={{ ["--i" as string]: 2 }}>
          {lede}
        </div>
      ) : null}
      {children}
    </div>
  );
}
