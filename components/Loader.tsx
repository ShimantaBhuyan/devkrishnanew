import { CaretDoubleDown } from "phosphor-react";
import { LogoSVG } from "./LogoSVG";

export const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('/assets/bg.webp')] h-[100vh] w-[100vw] bg-cover bg-bottom sm:bg-[right_10px_bottom]">
      <LogoSVG color="black" />
      <h1 className="text-4xl sm:text-7xl sm:w-[75%] text-center font-medium bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
        welcome to my space in the <br />
        <span className="text-4xl sm:text-7xl sm:w-[75%] text-center font-medium bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
          world wide web
        </span>
      </h1>
      <CaretDoubleDown size={32} className="animate-bounce w-8 h-8 mt-20 text-white" />
    </div>
  );
};
