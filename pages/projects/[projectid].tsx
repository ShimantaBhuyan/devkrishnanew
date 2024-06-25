import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { motion, MotionConfig } from "framer-motion";
import { ArrowLeft } from "phosphor-react";
import { InferGetStaticPropsType } from "next/types";
import { GetStaticProps, GetStaticPaths } from "next/types";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

export async function getStaticPaths() {
  return {
    paths: Object.values(projects).map(page => ({ params: { projectid: page.id } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const projectid = params?.projectid;
  const page = Object.values(projects).find(page => page.id == (projectid as string));
  const processedContent = await remark()
    .use(html)
    .process(page?.description || "");
  const contentHtml = processedContent.toString();
  return {
    props: {
      title: page?.title,
      img: page?.img,
      link: page?.link,
      contentHtml,
    },
  };
};

const ProjectDetail: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ title, link, img, contentHtml }) => {
  const router = useRouter();
  useEffect(() => {
    // scroll to top on load
    if (window != undefined) window.scrollTo(0, 0);
  }, []);

  if (!contentHtml) {
    // TODO: Return 404 page
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen w-[100%] sm:w-[75vw] sm:min-w-[75vw] p-10">
      {/* <div className="sticky top-10"> */}
      <MotionConfig>
        <motion.div
          className="flex justify-between mb-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
        >
          <button
            role={"button"}
            onClick={() => router.back()}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white pl-3 pr-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-200 focus:outline-0 focus:ring-2 focus:ring-purple-300 group"
          >
            <ArrowLeft size={20} className="w-5 h-5 mr-2 text-gray-300 group-hover:text-purple-200" />
            Back
          </button>
          {/* <a
              href={page.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-purple-600 text-sm tracking-tight font-medium focus:outline-0 focus:ring-2 focus:ring-purple-400 group"
            >
              View Source
              <ArrowUpRightIcon className="w-4 h-4 text-gray-400 ml-2 group-hover:text-purple-400" />
            </a> */}
        </motion.div>
        <div className="flex flex-col w-[100%] sm:w-[75vw] sm:min-w-[75vw] gap-10">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
            }}
            className="text-4xl font-bold tracking-tight"
          >
            {title}
          </motion.h2>
          <Link href={link} className="self-center" target="_blank">
            <Image
              src={img}
              alt={title}
              //   placeholder="blur"
              //   blurDataURL={page.placeholder}
              width={300}
              height={300}
              style={{
                objectFit: "contain",
              }}
              className="rounded-lg flex mt-4 bg-purple-500/30 shadow-2xl p-4"
            />
          </Link>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
            }}
            className="mt-5 text-md text-gray-600 space-y-5 *:w-full *:text-pretty *:whitespace-pre-line *:leading-relaxed *:box-border *:px-5"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></motion.div>
          {link != "" ? (
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
              }}
              className="text-lg text-gray-800 self-center"
            >
              You can check out the project{" "}
              <Link href={link} className="font-semibold underline" target="_blank">
                here
              </Link>
            </motion.h2>
          ) : null}
        </div>
      </MotionConfig>
      {/* </div> */}
    </div>
  );
};

export default ProjectDetail;
