import Link from "next/link";
import Image from "next/image";
import { pages } from "../data/pages";
import { Project } from "./Project";
import { useState } from "react";
import { SquaresFour, Stack } from "phosphor-react";
import { motion } from "framer-motion";

export const Work = () => {
  const [projectView, setProjectView] = useState<"grid" | "stack">("stack");

  return (
    <div className="flex flex-col items-center w-[100%] gap-10">
      <motion.div
        className="flex flex-col justify-center gap-5 my-5 w-full px-4 sm:px-0 sm:w-[80%]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
      >
        <ol className="relative border-l border-gray-400 p-5">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-600">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="items-center mb-1 text-lg font-semibold">
              Senior Fullstack Engineer -{" "}
              <Link href="https://sprinto.com" className="underline" target="_blank">
                Sprinto
              </Link>{" "}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none">June 2025 - Present</time>
            <ul className="mb-4 text-base font-normal list-disc">
              <li>
                Building the AI native compliance and risk management platform for enterprise & SMBs
              </li>
              <li>
                Worked on making the platform more robust and scalable, as part of the platform team
              </li>
              <li>
                Part of the SpecialOps team, solving direct customer issues and urgent requests on priority
              </li>
              <li>
                Built in-house AI automations to help the Accounts Payables (Finance) team with their day to day tasks
              </li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-600">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="items-center mb-1 text-lg font-semibold">
              Founding Engineer -{" "}
              <Link href="https://viatunnel.com" className="underline" target="_blank">
                Tunnel Platforms
              </Link>{" "}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none">July 2023 - June 2025</time>
            <ul className="mb-4 text-base font-normal list-disc">
              <li>
                Building the simplest Accounts Payables automation platform - alpha launch with select customers in Q1
                2024
              </li>
              <li>
                Built scalable and performant payment facilation services which processed payments over $2mn in a week
              </li>
              <li>
                Supported customers with custom integrations and onboarding, facilitating a smooth transition from their
                manual processes to automated ones
              </li>
              <li>Set up a SOC2 - Type 2 compliant infrastructure and processes for the company</li>
              <li>
                Designed and built the entire system architecture of the platform from frontend app (a performant SPA
                built with React), backend services &amp; utilities (Golang, C#) and infrastructure (AWS, Digital Ocean)
              </li>
              <li>
                Built an ERP Connector utility tool that connects to your on-premise ERP and syncs data directly to
                Tunnel platform for easy and seamless payments transmission
              </li>
              <li>
                Built custom tools to transform ERP data to payment files in multiple formats like CSV, Flatfile &amp;
                EDI and push them to the banks
              </li>
              <li>
                Built a custom, generic file mapper that can take in any CSV/Excel file and a configurable destination
                dataset, to convert the input file data to required dataset, all on the browser
              </li>
              <li>
                Refactored the backend codebase with clean code architecture and added unit tests to cover ~80% of
                codebase
              </li>
              <li>Designed crucial payments streaming system architecture and developed core modules in Go</li>
              <li>
                Set up engineering handbooks to drive engineering efforts across the full stack of the application
              </li>
              <li>
                Connected with our designer, prospective customers and industry experts to learn more about the pain
                points and drive design in that direction
              </li>
              <li>Set up monitoring and observability pipeline in dev environment with Prometheus, Grafana, ELK</li>
              <li>
                Mentored a backend engineer intern with daily responsibilities, from coding best practices to pair
                programming on features
              </li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-600">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="items-center mb-1 text-lg font-semibold">
              Founder -{" "}
              <Link
                href="https://drive.google.com/file/d/1fM4TGBCTc3NSbOEXJYezQTInrJk7s_DA/view?usp=sharing"
                className="underline"
                target="_blank"
              >
                tellmeaboutyourself (Acquired)
              </Link>{" "}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none">February 2023</time>
            <ul className="mb-4 text-base font-normal list-disc">
              <li>An interview prep assistant to help prepare for behavioral interviews</li>
              <li>Powered by GPT-3.5-Turbo</li>
              <li>100+ reports generated by users</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-600">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="items-center mb-1 text-lg font-semibold">SDE 2 - Jupiter Money </h3>
            <time className="block mb-2 text-sm font-normal leading-none">May - October, 2022</time>
            <ul className="mb-4 text-base font-normal list-disc">
              <li>
                Led the development of the personal finance vertical and revamped the money tab using Remix, a web-app
                integrated into our react-native mobile app, resulting in quick releases for our million-strong customer
                base.
              </li>
              <li>Pioneered the use of Remix and React-native technology stack in the organization.</li>
              <li>Achieved 22% improvements in load times and other performance metrics of the web-app.</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-600">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="items-center mb-1 text-lg font-semibold">SDE 1 - Swiggy </h3>
            <time className="block mb-2 text-sm font-normal leading-none">
              February 2021 - April 2022
            </time>
            <ul className="mb-4 text-base font-normal list-disc">
              <li>
                Worked on restaurant partner apps and became the co-owner of partner.swiggy.com web-app serving millions
                of customers.
              </li>
              <li>
                Created a headless CMS dashboard powering the owner app homepage of the partner mobile app serving ~80%
                of our users..
              </li>
              <li>
                Directed the migration and refactoring of legacy code in AngularJS/React Native to React Native/React
                Native for Web, implementing a single codebase following the monorepo approach.
              </li>
              <li>Improved web perf scores on lighthouse by 15% with a focus on accessibility.</li>
              <li>Received MVP award for taking ownership of migration activities and our web-app</li>
            </ul>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-600">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="tems-center mb-1 text-lg font-semibold">
              Associate Software Development Engineer - AVEVA{" "}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none">July 2019 - January 2021</time>
            <ul className="mb-4 text-base font-normal list-disc">
              <li>
                Introduced modern UI implementation of the enterprise product for an upcoming major release, with an
                older framework, and delivered the release before the promised date.
              </li>
              <li>Developed new and rewrote key existing features to improve code coverage results by 12%.</li>
              <li>Refined load time by 11%.</li>
            </ul>
          </li>
        </ol>
      </motion.div>
      {/* <div className="overflow-hidden hidden w-[60%] sm:flex justify-center max-h-screen">
          <Image
            src={pages.work.superImg}
            alt={pages.work.title}
            placeholder="blur"
            blurDataURL={pages.work.placeholder}
            width={parseInt(pages.work.width)}
            height={parseInt(pages.work.height)}
            style={{
              objectFit: "cover",
            }}
            className="rounded-lg"
          />
        </div> */}
      {/* <h2 className="text-lg text-black">
        These are some of my most coveted projects and which I&apos;ve loved spending my time building!
      </h2> */}
      {/* <div className="grid grid-cols-3 w-[100%]"> */}
      {/* <div className="flex justify-between items-center p-5 w-fit gap-20">
        <Stack
          size={30}
          className={`${
            projectView === "stack" ? "text-purple-600 font-semibold scale-125" : ""
          } sm:hover:scale-125 transition-all ease-in-out duration-150 cursor-pointer`}
          onClick={() => setProjectView("stack")}
        />
        <SquaresFour
          size={30}
          className={`${
            projectView === "grid" ? "text-purple-600 font-semibold scale-125" : ""
          } sm:hover:scale-125 transition-all ease-in-out duration-150 cursor-pointer`}
          onClick={() => setProjectView("grid")}
        />
      </div>
      <Project projectView={projectView} /> */}
      {/* </div> */}
    </div>
  );
};
