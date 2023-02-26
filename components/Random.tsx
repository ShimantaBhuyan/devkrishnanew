import Image from "next/image";
import { pages } from "../data/pages";

export const Random = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%]">
      {/* <div className="flex justify-between gap-5 w-[100%]"> */}
      <div className="overflow-hidden hidden w-[60%] sm:flex justify-center max-h-[100vh] mt-10">
        <Image
          src={pages.random.superImg}
          alt={pages.random.title}
          placeholder="blur"
          blurDataURL={pages.random.placeholder}
          width={parseInt(pages.random.width)}
          height={parseInt(pages.random.height)}
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg"
        />
      </div>
      {/* </div> */}
    </div>
  );
};
