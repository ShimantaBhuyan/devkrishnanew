import Link from "next/link";
import Image from "next/image";
import { pages } from "../data/pages";

export const Work = () => {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="flex justify-between gap-5 w-[100%]">
        <div className="flex flex-col justify-center gap-5 my-5">
          <h2 className="text-xl text-black">Work Experience</h2>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                Founder - &nbsp; <Link href="https://www.assetsai.art">AssetsAI</Link>{" "}
                {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span> */}
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                Founder - &nbsp; <Link href="https://www.strategyqr.com">StrategyQR</Link>{" "}
                {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span> */}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">November 2022</time>
              <ul className="mb-4 text-base font-normal text-gray-500 list-disc">
                <li>Built a custom QR code generator tool for all kinds of marketing/advertising</li>
                <li>Custom ticket generator tool to create customised tickets</li>
                <li>Fully customisable QR codes with business pages</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                SDE 2 - Jupiter Money{" "}
                {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span> */}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">May - October, 2022</time>
              <ul className="mb-4 text-base font-normal text-gray-500 list-disc">
                <li>
                  Led the development of the personal finance vertical and revamped the money tab using Remix, a web-app
                  integrated into our react-native mobile app, resulting in quick releases for our million-strong
                  customer base.
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
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
                  Worked on restaurant partner apps and became the co-owner of partner.swiggy.com web-app serving
                  millions of customers.
                </li>
                <li>
                  Created a headless CMS dashboard powering the owner app homepage of the partner mobile app serving
                  ~80% of our users..
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                Associate Software Development Engineer - AVEVA{" "}
                {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span> */}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                July 2019 - January 2021
              </time>
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
      </div>
      {/* <div className="grid grid-cols-3 w-[100%]">
        <h2>Projects</h2>
      </div> */}
    </div>
  );
};
