import { LogoSVG } from "./LogoSVG";

export const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('/assets/bgImage.webp')] h-[100vh] w-[100vw] bg-cover bg-right-bottom ">
      <LogoSVG color="white" />
      <h1 className="text-4xl sm:text-7xl sm:w-[75%] text-center text-white">
        welcome to my space in the <br />
        <span className="text-4xl sm:text-7xl sm:w-[75%] text-center font-medium bg-clip-text text-transparent bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800">
          world wide web
        </span>
      </h1>
    </div>
  );
};
