import { Project } from "../../components/Project";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import { motion, MotionConfig } from "framer-motion";

function ProjectsPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-4 py-10 sm:px-10">
      <MotionConfig>
        <motion.div
          className="w-full max-w-6xl mb-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
        >
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white pl-3 pr-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-200 focus:outline-0 focus:ring-2 focus:ring-purple-300 group"
          >
            <ArrowLeft size={20} className="w-5 h-5 mr-2 text-gray-300 group-hover:text-purple-200" />
            Back Home
          </Link>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold tracking-tight mb-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
          }}
        >
          My Projects
        </motion.h1>

        <motion.p
          className="text-lg mb-12 max-w-2xl text-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
        >
          Here are some of the projects I&apos;ve worked on, ranging from AI experiments to full-stack applications.
          Click on a card to learn more.
        </motion.p>

        <motion.div
          className="w-full max-w-6xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
          }}
        >
          <Project projectView="grid" />
        </motion.div>
      </MotionConfig>
    </div>
  );
}

export default ProjectsPage;
