import Image from "next/image";
import { pages } from "../data/pages";

export const Chronicle = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* <div className="flex justify-between gap-5 w-full"> */}
      <div className="overflow-hidden hidden w-[60%] sm:flex justify-center max-h-screen mt-10">
        <Image
          src={pages["for-chronicle"].superImg}
          alt={pages["for-chronicle"].title}
          placeholder="blur"
          blurDataURL={pages["for-chronicle"].placeholder}
          width={parseInt(pages["for-chronicle"].width)}
          height={parseInt(pages["for-chronicle"].height)}
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
