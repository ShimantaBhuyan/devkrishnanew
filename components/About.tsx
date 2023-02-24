import Image from "next/image";
import { pages } from "../data/pages";

export const About = () => {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="flex justify-between gap-5 w-[100%]">
        <div className="overflow-hidden hidden w-[60%] sm:flex justify-center max-h-[100vh]">
          <Image
            src={pages.myspace.superImg}
            alt={pages.myspace.title}
            placeholder="blur"
            blurDataURL={pages.myspace.placeholder}
            width={parseInt(pages.myspace.width)}
            height={parseInt(pages.myspace.height)}
            style={{
              objectFit: "cover",
            }}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
