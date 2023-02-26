import { motion } from "framer-motion";
import Link from "next/link";
import { Envelope, GithubLogo, LinkedinLogo, PinterestLogo, TwitterLogo } from "phosphor-react";

/* 
socials: {
        twitter: "https://twitter.com/AllDevThings",
        github: "https://github.com/ShimantaBhuyan",
        linkedin: "https://www.linkedin.com/in/shimantabhuyan",
        pinterest: "https://in.pinterest.com/shimantabhuyan/",
      },
    Return a list of social links with the appropriate Phosphor icons
*/

export type SOCIALS_TYPE = {
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
    pinterest: string;
    email: string;
  };
};

const container = {
  hidden: { x: 100 },
  visible: {
    x: 0,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Socials = ({ socials }: SOCIALS_TYPE) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center w-[100%] p-4 pt-10 sm:p-10">
      <h2 className="text-xl sm:text-4xl font-bold tracking-tight text-center mb-2 w-[100%]">Connect with me on: </h2>
      <motion.ul
        variants={container}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex justify-between items-center w-[100%] max-w-[283px]"
        transition={{
          staggerChildren: 0.4,
        }}
      >
        {Object.keys(socials).map((social: string, i: number) => {
          switch (social) {
            case "twitter":
              return (
                <motion.li key={i} variants={listItem} className="group">
                  <Link href={socials[social]}>
                    <TwitterLogo
                      size={32}
                      className="text-[#1DA1F2] group-hover:scale-110 transition-all ease-in-out duration-150"
                    />
                  </Link>
                </motion.li>
              );
            case "github":
              return (
                <motion.li key={i} variants={listItem} className="group">
                  <Link href={socials[social]}>
                    <GithubLogo
                      size={32}
                      className="text-[#171515] group-hover:scale-110 transition-all ease-in-out duration-150"
                    />
                  </Link>
                </motion.li>
              );
            case "linkedin":
              return (
                <motion.li key={i} variants={listItem} className="group">
                  <Link href={socials[social]}>
                    <LinkedinLogo
                      size={32}
                      className="text-[#0077b5] group-hover:scale-110 transition-all ease-in-out duration-150"
                    />
                  </Link>
                </motion.li>
              );
            case "pinterest":
              return (
                <motion.li key={i} variants={listItem} className="group">
                  <Link href={socials[social]}>
                    <PinterestLogo
                      size={32}
                      className="text-[#c8232c] group-hover:scale-110 transition-all ease-in-out duration-150"
                    />
                  </Link>
                </motion.li>
              );
            case "email":
              return (
                <motion.li key={i} variants={listItem} className="group">
                  <Link href={socials[social]}>
                    <Envelope
                      size={32}
                      className="text-[#c93139] group-hover:scale-110 transition-all ease-in-out duration-150"
                    />
                  </Link>
                </motion.li>
              );
          }
        })}
      </motion.ul>
    </div>
  );
};
