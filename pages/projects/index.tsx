import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { projectList } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <PageShell
      title="Projects"
      lede="Things I build on weekends — AI experiments, small tools and full products. One of them got acquired."
    >
      <div className="dk-projects">
        {projectList.map((project, i) => (
          <Link
            key={project.id}
            href={project.to}
            className="dk-project dk-rise"
            style={{ ["--i" as string]: Math.min(i, 6) + 3 }}
          >
            <h2>{project.title}</h2>
            <p>{project.subheading}</p>
            <span className="thumb">
              <Image src={project.img} alt="" fill sizes="132px" />
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
