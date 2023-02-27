import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import anime from "animejs";
import { motion } from "framer-motion";
import { CaretDoubleDown } from "phosphor-react";
import { LogoSVG } from "./LogoSVG";

export const Loader = () => {
  const loaderBodyRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<HTMLDivElement>(null);

  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [toggled, setToggled] = useState(true);

  const easterEggContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // staggerChildren: 0.4,
        delayChildren: 0.4,
      },
    },
  };

  const easterEggTitle = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const toggle = () => {
    setToggled(!toggled);

    // if (loaderBodyRef.current != undefined) loaderBodyRef.current.classList.toggle("toggled");
  };

  const stagger = (index: any, toggled: boolean) => {
    anime({
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };

  const handleOnClick = (index: any, toggled: boolean) => {
    stagger(index, toggled);
  };

  // const createTile = (index: any) => {
  //   // const tile = document.createElement("div");

  //   const tile = (
  //     <motion.div
  //       key={`tile-${index}`}
  //       className={`tile ${toggled ? "opacity-0" : "opacity-100"} hover:before:bg-[rgb(220, 220, 220)]`}
  //       onClick={() => handleOnClick(index)}
  //     ></motion.div>
  //   );

  //   // tile.classList.add("tile");

  //   // tile.style.opacity = toggled ? "0" : "1";

  //   // tile.onclick = e => handleOnClick(index);

  //   return tile;
  // };

  // const createTiles = (quantity: number) => {
  //   Array.from(Array(quantity)).map((tile, index) => {
  //     if (tilesRef.current != undefined) tilesRef.current.appendChild(createTile(index));
  //   });
  // };

  const createGrid = () => {
    if (tilesRef.current != undefined) {
      tilesRef.current.innerHTML = "";

      if (loaderBodyRef.current != undefined) {
        const size = loaderBodyRef.current.clientWidth > 800 ? 100 : 50;

        let cols = Math.floor(loaderBodyRef?.current.clientWidth / size);
        let rws = Math.floor(loaderBodyRef?.current.clientHeight / size);
        setColumns(cols);
        setRows(rws);

        tilesRef.current.style.setProperty("--columns", cols.toString());
        tilesRef.current.style.setProperty("--rows", rws.toString());

        // createTiles(cols * rws);
      }
    }
  };

  useEffect(() => {
    createGrid();

    // window.onresize = () => createGrid();
  }, []);

  return (
    // bg-[url('/assets/bg.webp')] bg-cover bg-bottom sm:bg-[right_10px_bottom]
    <>
      <div className="absolute -top-6 left-0 scale-[0.7] z-10">
        <LogoSVG color="black" noLogo={true} key="header-logo" />
      </div>
      <div
        className={`flex flex-col justify-center items-center relative bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 loaderBody ${
          toggled ? "toggled" : ""
        } `}
        ref={loaderBodyRef}
      >
        <div className="heroSection flex flex-col justify-center items-center h-[100vh] w-[100vw] absolute top-0 left-0">
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

        <div id="tiles" ref={tilesRef}>
          {Array.from(Array(columns * rows)).map((_, index) => {
            return (
              <div
                key={`tile-${index}`}
                className={`tile ${toggled ? "opacity-0" : "opacity-100"}`}
                onClick={() => {
                  toggle();
                  handleOnClick(index, !toggled);
                }}
              ></div>
            );
          })}
          {!toggled ? (
            <motion.div
              variants={easterEggContainer}
              initial="hidden"
              animate="visible"
              className="flex justify-between items-center w-[90%] sm:w-[75%]"
              // transition={{
              //   staggerChildren: 0.4,
              // }}
            >
              <motion.h1
                variants={easterEggTitle}
                className="text-2xl sm:text-4xl text-black font-semibold absolute centered z-5 text-center w-[90%] sm:w-[75%]"
              >
                You are one curious soul aren&apos;t you! Watch this space for something more special soon!
              </motion.h1>
            </motion.div>
          ) : null}
        </div>
      </div>
    </>
  );
};
