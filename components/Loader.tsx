import Image from "next/image";
import { CaretDoubleDown } from "phosphor-react";
import { LogoSVG } from "./LogoSVG";

export const Loader = () => {
  return (
    // bg-[url('/assets/bg.webp')]
    <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-cover bg-bottom sm:bg-[right_10px_bottom]">
      <div className="absolute -top-6 left-0 scale-[0.7]">
        <LogoSVG color="black" noLogo={true} key="header-logo" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-10">
        {/* bg-[url('https://ik.imagekit.io/colorContrast/devkrishna-super-images/contact-image_CkCSY0m80V.png')] bg-cover bg-bottom */}
        <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] flex justify-center items-center">
          <Image
            src="/assets/avatar2.png"
            alt="avatar image"
            width={450}
            height={450}
            className="object-cover rounded-full shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-[100%] px-4">
          <h1 className="text-4xl sm:text-5xl sm:w-[100%] text-center sm:text-start font-medium bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
            i&apos;m Shimanta <br /> welcome to my space in the <br />
            <span className="text-4xl sm:text-5xl sm:w-[100%] text-center font-medium bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
              world wide web
            </span>
          </h1>
        </div>
      </div>
      <CaretDoubleDown size={32} className="animate-bounce w-8 h-8 mt-10 sm:mt-16 text-black" />
    </div>
  );
};
