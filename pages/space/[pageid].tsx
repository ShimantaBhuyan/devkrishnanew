import type { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { pages } from "../../data/pages";
import { PageShell } from "../../components/PageShell";
import { Socials } from "../../components/Socials";
import { Work } from "../../components/Work";
import { Random } from "../../components/Random";
import { About } from "../../components/About";
import { Skills } from "../../components/Skills";

export async function getStaticPaths() {
  return {
    paths: Object.keys(pages).map(key => ({ params: { pageid: key } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageid = params?.pageid as keyof typeof pages;
  const page = pages[pageid];
  return { props: { pageid, title: page.title, description: page.description } };
};

const SECTIONS: Record<string, () => JSX.Element> = {
  work: Work,
  skills: Skills,
  contact: Socials,
  random: Random,
  myspace: About,
};

export default function PageDetail({ pageid, title, description }: InferGetStaticPropsType<typeof getStaticProps>) {
  const Section = SECTIONS[pageid as string];
  return (
    <PageShell title={title} lede={description}>
      {Section ? <Section /> : null}
    </PageShell>
  );
}
