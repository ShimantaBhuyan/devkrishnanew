import Link from "next/link";
import Image from "next/image";
import { pages } from "../data/pages";
import { Project } from "./Project";
import { useState } from "react";
import { SquaresFour, Stack } from "phosphor-react";

export const Work = () => {
  const [projectView, setProjectView] = useState<"grid" | "stack">("stack");
  return (
    <div className="flex flex-col items-center w-[100%] gap-10">
      <div className="flex flex-col justify-center gap-5 my-5">
        <h2 className="text-xl text-black">Work Experience</h2>
        <ol className="relative border-l border-gray-400 p-5">
          {/* <li className="mb-10 ml-6">
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
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
              Builder - &nbsp;{" "}
              <Link href="https://chatgptunwrapped.com" className="underline" >
                ChatGPT UnWrapped
              </Link>{" "}
              
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">December 2023</time>
            <ul className="mb-4 text-base font-normal text-gray-500 list-disc">
              <li>Get your year in review in ChatGPT</li>
              <li>Analyse your conversations (only the topics) to get a detailed report</li>
              <li>80000+ ChatGPT conversations analysed!!</li>
            </ul>
          </li> */}
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
            <h3 className="items-center mb-1 text-lg font-semibold text-gray-900">
              Founding Engineer -{" "}
              <Link href="https://viatunnel.com" className="underline" target="_blank">
                Tunnel Platforms
              </Link>{" "}
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span> */}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">July 2023 - Present</time>
            <ul className="mb-4 text-base font-normal text-gray-500 list-disc">
              <li>
                Building the simplest Accounts Payables automation platform - alpha launch with select customers in Q1
                2024
              </li>
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
            <h3 className="items-center mb-1 text-lg font-semibold text-gray-900">
              Founder -{" "}
              <Link
                href="https://drive.google.com/file/d/1fM4TGBCTc3NSbOEXJYezQTInrJk7s_DA/view?usp=sharing"
                className="underline"
                target="_blank"
              >
                tellmeaboutyourself (Acquired)
              </Link>{" "}
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span> */}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">February 2023</time>
            <ul className="mb-4 text-base font-normal text-gray-500 list-disc">
              <li>An interview prep assistant to help prepare for behavioral interviews</li>
              <li>Powered by GPT-3.5-Turbo</li>
              <li>100+ reports generated by users</li>
            </ul>
          </li>
          {/* <li className="mb-10 ml-6">
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
            <h3 className="items-center mb-1 text-lg font-semibold text-gray-900">
              Founder -{" "}
              <Link href="https://www.assetsai.art" className="underline">
                AssetsAI
              </Link>{" "}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">December 2022</time>
            <ul className="mb-4 text-base font-normal text-gray-500 list-disc">
              <li>Built a marketplace for AI generated game assets</li>
              <li>Assets built with Stable Diffusion</li>
              <li>More than 300+ game assets of 10+ categories</li>
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
            <h3 className="items-center mb-1 text-lg font-semibold text-gray-900">
              Founder -{" "}
              <Link href="https://www.strategyqr.com" className="underline">
                StrategyQR
              </Link>{" "}}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">November 2022</time>
            <ul className="mb-4 text-base font-normal text-gray-500 list-disc">
              <li>Built a custom QR code generator tool for all kinds of marketing/advertising</li>
              <li>Custom ticket generator tool to create customised tickets</li>
              <li>Fully customisable QR codes with business pages</li>
            </ul>
          </li> */}
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
            <h3 className="items-center mb-1 text-lg font-semibold text-gray-900">
              SDE 2 - Jupiter Money{" "}
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span> */}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">May - October, 2022</time>
            <ul className="mb-4 text-base font-normal text-gray-500 list-disc">
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
            <h3 className="items-center mb-1 text-lg font-semibold text-gray-900">
              SDE 1 - Swiggy{" "}
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span> */}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              February 2021 - April 2022
            </time>
            <ul className="mb-4 text-base font-normal text-gray-500 list-disc">
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
            <h3 className="tems-center mb-1 text-lg font-semibold text-gray-900">
              Associate Software Development Engineer - AVEVA{" "}
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span> */}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">July 2019 - January 2021</time>
            <ul className="mb-4 text-base font-normal text-gray-500 list-disc">
              <li>
                Introduced modern UI implementation of the enterprise product for an upcoming major release, with an
                older framework, and delivered the release before the promised date.
              </li>
              <li>Developed new and rewrote key existing features to improve code coverage results by 12%.</li>
              <li>Refined load time by 11%.</li>
            </ul>
          </li>
        </ol>
      </div>
      {/* <div className="overflow-hidden hidden w-[60%] sm:flex justify-center max-h-[100vh]">
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
      <h2 className="text-lg text-black">
        These are some of my most coveted projects and which I&apos;ve loved spending my time building!
      </h2>
      {/* <div className="grid grid-cols-3 w-[100%]"> */}
      <div className="flex justify-between items-center p-5 w-fit gap-20">
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
      <Project projectView={projectView} />
      {/* </div> */}
    </div>
  );
};
