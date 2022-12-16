import Head from "next/head";
import { LogoSVG } from "../components/LogoSVG";

function HomePage() {
  return (
    <>
      {/* <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="bg-[url('/assets/bgImage.webp')] bg-cover bg-right-bottom h-[100vh] flex flex-col justify-center items-center p-5"> */}
      <LogoSVG color="white" />
      <h1 className="text-4xl sm:text-7xl sm:w-[75%] text-center text-white">
        welcome to my space in the <br />
        <span className="text-4xl sm:text-7xl sm:w-[75%] text-center font-medium bg-clip-text text-transparent bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800">
          world wide web
        </span>
      </h1>
      {/* </div> */}
    </>
  );
}

export default HomePage;
