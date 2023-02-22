import Link from "next/link";
import { pages, PAGE_TYPE } from "../data/pages";
import Image from "next/image";

export const Spaces = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
      <div className="bg-gradient-to-tr from-purple-400 to-indigo-600 p-8 flex rounded-2xl items-center">
        <h1 className="font-extrabold text-3xl xl:text-5xl text-indigo-200 leading-tight">
          Explore <p className="text-white">my spaces</p> in{" "}
          <p className="text-white">
            the interweb
            <span className="text-purple-300">.</span>
            <span className="text-purple-300/70">.</span>
            <span className="text-purple-300/40">.</span>
            <span className="text-purple-300/10">.</span>
          </p>
        </h1>
      </div>
      {Object.values(pages).map((page: PAGE_TYPE) => (
        <Link
          href={page.to}
          scroll={false}
          key={page.id}
          className="overflow-hidden flex flex-col rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:z-10 transition-all ease-in-out relative"
        >
          <Image
            src={page.img}
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
          <div className="flex flex-col justify-center items-center bg-purple-500 p-5">
            <h2 className="text-2xl text-white font-semibold">{page.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};
