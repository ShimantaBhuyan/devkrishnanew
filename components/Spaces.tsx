import Link from "next/link";
import { pages, PAGE_TYPE } from "../data/pages";
import Image from "next/image";
import { HandPointing } from "phosphor-react";

export const Spaces = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
      <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black p-8 flex flex-col rounded-2xl justify-center items-center">
        <h1 className="font-extrabold text-3xl xl:text-5xl text-purple-200 leading-tight">
          Explore <p className="text-white">my spaces</p> in{" "}
          <p className="text-white">
            the interweb
            <span className="text-purple-300">.</span>
            <span className="text-purple-300/70">.</span>
            <span className="text-purple-300/40">.</span>
            <span className="text-purple-300/10">.</span>
          </p>
        </h1>
        <div className="rotate-180 mt-10">
          <HandPointing size={32} className="block sm:hidden animate-bounce w-8 h-8 text-white" />
        </div>
      </div>
      {Object.values(pages).map((page: PAGE_TYPE) => {
        return page.id !== 4 ? (
          <Link
            href={page.to}
            scroll={false}
            key={page.id}
            className="overflow-hidden flex flex-col rounded-2xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:scale-105 hover:shadow-[10px_10px_0px_0px_rgba(109,40,217)] hover:z-10 transition-all ease-in-out relative duration-300 "
          >
            <Image
              src={page.superImg}
              alt={page.title}
              width={parseInt(page.width)}
              height={parseInt(page.height)}
              placeholder="blur"
              blurDataURL={page.placeholder}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              // className="group-hover:opacity-30"
            />
            <div className="flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300 p-5">
              <h2 className="text-2xl text-white font-semibold">{page.title}</h2>
            </div>
          </Link>
        ) : null;
      })}
    </div>
  );
};
