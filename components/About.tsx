import Image from "next/image";
import { pages } from "../data/pages";

export const About = () => {
  return (
    <div className="flex flex-col items-center w-full mt-10 gap-10">
      {/* <div className="flex justify-center gap-5 w-full"> */}
      <div className="overflow-hidden hidden w-[60%] sm:flex justify-center max-h-screen">
        <Image
          src={"https://ik.imagekit.io/colorContrast/devkrishna-super-images/me_p3i7WVNw-.png"}
          alt={pages.myspace.title}
          placeholder="blur"
          blurDataURL={"/assets/blurred/me.png"}
          width={parseInt(pages.myspace.width)}
          height={parseInt(pages.myspace.height)}
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-lg text-black font-semibold">
        Currently building with LLMs and Diffusion Models, a glimpse of which is my avatar picture above.
      </h2>
      {/* </div> */}
    </div>
  );
};
