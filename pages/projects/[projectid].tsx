import Image from "next/image";
import type { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { remark } from "remark";
import html from "remark-html";
import { projectList } from "../../data/projects";
import { ImageModal } from "../../components/ImageModal";
import { PageShell } from "../../components/PageShell";

export async function getStaticPaths() {
  return {
    paths: projectList.map(p => ({ params: { projectid: p.id } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = projectList.find(p => p.id === params?.projectid)!;
  const processed = await remark().use(html).process(page.description);
  return {
    props: {
      title: page.title,
      subheading: page.subheading,
      img: page.img,
      link: page.link,
      contentHtml: processed.toString(),
      zoomable: page.zoomable ?? false,
      largeImage: page.largeImage ?? false,
    },
  };
};

export default function ProjectDetail({
  title,
  subheading,
  link,
  img,
  contentHtml,
  zoomable,
  largeImage,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const size = largeImage ? 640 : 320;
  return (
    <PageShell title={title} lede={subheading} backHref="/projects" backLabel="projects">
      <div className="dk-figure dk-rise" style={{ ["--i" as string]: 3 }}>
        {zoomable ? (
          <ImageModal src={img} alt={title} width={size} height={size} className="flex" />
        ) : (
          <Image src={img} alt={title} width={size} height={size} style={{ objectFit: "contain" }} />
        )}
      </div>
      <div className="dk-prose dk-rise" style={{ ["--i" as string]: 4 }} dangerouslySetInnerHTML={{ __html: contentHtml }} />
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="dk-cta">
          Open {title} <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </PageShell>
  );
}
