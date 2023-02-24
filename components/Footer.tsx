import React from "react";
import Image from "next/image";
import { pages } from "../data/pages";
import { Socials } from "./Socials";
import { LogoSVG } from "./LogoSVG";

export const Footer = () => {
  return (
    <footer className="flex flex-col w-[100%] justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] pt-4 pb-8 sm:pb-4 sm:px-10">
      <div className="flex justify-center items-center">
        <div className="max-w-[178px] max-h-[250px]">
          <Image src="/assets/avatar.png" alt="avatar image" width={178.125} height={250} className="object-cover" />
        </div>
        {/* <h2 className="flex flex-col sm:flex-row text-black uppercase font-medium">
          Made with ☕ by &nbsp;
          <a
            href="https://twitter.com/AllDevThings"
            target="_blank"
            rel="noreferrer noopener"
            className="w-auto inline-block underline"
          >
            Shimanta
          </a>
        </h2> */}
        <Socials socials={pages.contact.meta.socials} title="Connect with me on: " />
        <div className="hidden sm:block">
          <LogoSVG color="black" key={"footer-logo"} noLogo={true} />
        </div>
      </div>

      <div className="sm:hidden">
        <LogoSVG color="black" key={"footer-logo"} />
      </div>
      <div className="flex flex-col sm:flex-row w-[100%] sm:w-[50%] justify-evenly items-center">
        <p>&copy; 2023 - Present</p>
        <p>Shimanta Krishna Bhuyan</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};
