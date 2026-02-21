"use client";

import type React from "react";

import { useState, useEffect } from "react";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { WordScrambler } from "../components/WordScrambler";
import LinePortrait from "../components/LinePortrait";
import { useTheme } from "../components/Layout";

const akkuratFont = localFont({ src: "../public/assets/AkkuratFont.woff2" });

export default function HomePage() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const getSectionImg = (section: string) => {
    if (theme === "light") {
      switch (section) {
        case "professional":
          return "/assets/landing_page_cards_light/ProfessionalSection.svg";
        case "skills":
          return "/assets/landing_page_cards_light/SkillsSection.svg";
        case "about":
          return "/assets/landing_page_cards_light/AboutSection.svg";
        case "contact":
          return "/assets/landing_page_cards_light/ContactSection.svg";
        default:
          return "";
      }
    }

    switch (section) {
      case "professional":
        return "/assets/landing_page_cards_dark_colored/ProfessionalSection.svg";
      case "skills":
        return "/assets/landing_page_cards_dark_colored/SkillsSection.svg";
      case "about":
        return "/assets/landing_page_cards_dark_colored/AboutSection.svg";
      case "contact":
        return "/assets/landing_page_cards_dark_colored/ContactSection.svg";
      default:
        return "";
    }
  };

  return (
    <div
      className={`min-h-screen w-screen p-6 md:p-12 transition-all duration-500 ${akkuratFont.className} ${
        theme === "light" ? "bg-[#ebebeb] text-[#4D4D4D]" : "bg-[#0e0e12] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-6 pt-8 md:p-0 rounded-lg group border-none transition-all duration-500 ${
            theme == "light" ? "border-[#B7B7B7] bg-[#ebebeb]" : "border-[#2260ee] bg-[#0e0e12]"
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start">
              <h1
                className={`text-3xl md:text-6xl font-bold tracking-tighter transition-all duration-500 ${
                  theme === "light" ? "text-[#4D4D4D]" : "text-[#9ed7ea]"
                }`}
              >
                Hello World, this is Shimanta
              </h1>

              <WordScrambler
                words={[
                  "SERIAL PRODUCT BUILDER",
                  "SENIOR FULLSTACK ENGINEER @ SPRINTO",
                  "EX-FOUNDING ENGINEER @ TUNNEL",
                ]}
                theme={theme}
              />
            </div>

            {!isMobile ? (
              <LinePortrait
                className={`block w-[500px] h-[500px] transition-all rounded-xl duration-500 ${
                  theme === "light" ? "text-[#4D4D4D]" : "text-[#9ed7ea]"
                }`}
                aria-label="line portrait image"
                alt="line portrait of Shimanta"
              />
            ) : null}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Professional Section */}
          <Link href="/space/work">
            <div
              className={`relative rounded-lg pb-4 transition-all duration-300 cursor-pointer hover:transition-shadow ${
                theme === "light"
                  ? "border-2 border-[#B7B7B7] bg-[#ebebeb] hover:shadow-2xl"
                  : "border-2 border-[#2260ee] bg-transparent hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              }`}
            >
              <Image
                src={getSectionImg("professional")}
                alt="professional section abstract image"
                width={516}
                height={276}
                className={`object-cover w-full h-full max-h-[312px] scale-90 mb-2`}
              />
              <h2
                className={`absolute bottom-2 md:bottom-6 left-6 md:text-2xl font-bold mt-6 tracking-tight transition-all duration-500 ${
                  theme === "light" ? "text-[#4D4D4D]" : "text-[#9ed7ea]"
                }`}
              >
                PROFESSIONAL
              </h2>
            </div>
          </Link>

          {/* Skills Section */}
          <Link href="/space/skills">
            <div
              className={`relative rounded-lg pb-4 transition-all duration-300 cursor-pointer hover:transition-shadow ${
                theme === "light"
                  ? "border-2 border-[#B7B7B7] bg-[#ebebeb] hover:shadow-2xl"
                  : "border-2 border-[#2260ee] bg-transparent hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              }`}
            >
              <Image
                src={getSectionImg("skills")}
                alt="skills section abstract image"
                width={516}
                height={276}
                className={`object-cover w-full h-full max-h-[312px] scale-90 mb-2`}
              />
              <h2
                className={`absolute bottom-2 md:bottom-6 left-6 md:text-2xl font-bold mt-6 tracking-tight transition-all duration-500 ${
                  theme === "light" ? "text-[#4D4D4D]" : "text-[#9ed7ea]"
                }`}
              >
                SKILLS
              </h2>
            </div>
          </Link>

          {/* Projects Section */}
          <Link href="/projects">
            <div
              className={`relative rounded-lg pb-4 transition-all duration-300 cursor-pointer hover:transition-shadow ${
                theme === "light"
                  ? "border-2 border-[#B7B7B7] bg-[#ebebeb] hover:shadow-2xl"
                  : "border-2 border-[#2260ee] bg-transparent hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              }`}
            >
              <Image
                src={getSectionImg("about")}
                alt="projects section abstract image"
                width={516}
                height={276}
                className={`object-cover w-full h-full max-h-[312px] scale-90 mb-2`}
              />
              <h2
                className={`absolute bottom-2 md:bottom-6 left-6 md:text-2xl font-bold mt-6 tracking-tight transition-all duration-500 ${
                  theme === "light" ? "text-[#4D4D4D]" : "text-[#9ed7ea]"
                }`}
              >
                PROJECTS
              </h2>
            </div>
          </Link>

          {/* Contact Section */}
          <Link href="/space/contact">
            <div
              className={`relative rounded-lg pb-4 transition-all duration-300 cursor-pointer hover:transition-shadow ${
                theme === "light"
                  ? "border-2 border-[#B7B7B7] bg-[#ebebeb] hover:shadow-2xl"
                  : "border-2 border-[#2260ee] bg-transparent hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              }`}
            >
              <Image
                src={getSectionImg("contact")}
                alt="contact section abstract image"
                width={516}
                height={276}
                className={`object-cover w-full h-full max-h-[312px] scale-90 mb-2`}
              />
              <h2
                className={`absolute bottom-2 md:bottom-6 left-6 md:text-2xl font-bold mt-6 tracking-tight transition-all duration-500 ${
                  theme === "light" ? "text-[#4D4D4D]" : "text-[#9ed7ea]"
                }`}
              >
                CONTACT ME
              </h2>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div
          className={`mt-8 text-center text-xs flex flex-col gap-4 tracking-tighter transition-all duration-500 ${
            theme === "light" ? "text-[#888]" : "text-[#aaa]"
          }`}
        >
          <p className="text-sm">
            © 2023 - {new Date().getFullYear()} |{" "}
            <a className="underline" href="https://x.com/AllDevThings" target="_blank" rel="noopener noreferrer">
              SHIMANTA
            </a>
            {/* {" "}
            - BUILT WITH PRECISION */}
          </p>
          <p>
            Illustrations by{" "}
            <a href="https://twitter.com/crlhsr" target="_blank" rel="noopener noreferrer">
              @crlhsr
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
