import React from "react";

const classes = {
  white: "logoFont text-4xl text-white",
  black: "logoFont text-4xl text-black",
};

export const LogoSVG = ({ color, noLogo }: { color: "white" | "black"; noLogo?: boolean }) => {
  const classNames = classes[color];
  return (
    <div className={`group flex justify-center items-center p-2 sm:gap-2 h-[150px]`}>
      {noLogo == undefined || noLogo == false ? (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="0"
          height="100%"
          viewBox="0 0 120.000000 110.000000"
          preserveAspectRatio="xMidYMid meet"
          className="w-0 [@media(hover:hover)]:group-hover:w-[100%] transition-all duration-700 ease-in-out"
        >
          <g transform="translate(0.000000,110.000000) scale(0.100000,-0.100000)" fill={color} stroke={color}>
            <path
              d="M531 912 c-67 -10 -103 -75 -100 -179 1 -38 -3 -69 -9 -75 -7 -7 -12
-29 -12 -50 0 -32 -5 -40 -31 -53 -35 -19 -59 -67 -59 -120 l0 -35 -70 0 -70
0 0 -29 c0 -16 7 -64 15 -107 8 -44 16 -90 18 -104 l4 -25 330 -3 c285 -2 332
0 343 13 20 25 -5 45 -56 45 -42 0 -44 1 -44 30 l0 30 93 0 c137 0 131 -9 135
209 4 235 16 221 -188 221 l-150 0 0 70 c0 71 -14 114 -44 139 -19 16 -73 28
-105 23z m26 -32 c14 -11 41 -20 59 -20 41 0 53 -16 19 -24 -51 -13 -125 22
-125 58 0 12 23 5 47 -14z m63 10 c8 -5 11 -12 8 -15 -9 -9 -66 4 -73 16 -8
12 46 11 65 -1z m-106 -25 c9 -25 75 -48 118 -41 29 5 38 3 38 -8 0 -10 -15
-17 -43 -21 -66 -10 -146 29 -147 73 0 17 27 15 34 -3z m-31 -29 c7 -17 -18
-42 -27 -27 -7 11 3 41 14 41 4 0 10 -6 13 -14z m63 -42 c24 -10 54 -14 81
-11 l43 5 0 -54 0 -54 -109 0 c-121 0 -121 0 -121 78 0 25 4 32 19 32 11 0 23
5 26 10 8 13 16 13 61 -6z m442 -132 c9 -7 12 -53 10 -198 l-3 -189 -102 -3
-103 -3 0 110 c0 99 -2 111 -19 121 -29 15 -93 12 -119 -6 -20 -14 -22 -23
-22 -120 l0 -104 -99 0 c-81 0 -100 3 -105 16 -9 22 -7 347 2 360 4 6 14 14
22 17 24 9 523 8 538 -1z m-578 -246 c0 -112 3 -136 17 -147 10 -9 50 -15 110
-17 l93 -4 0 -29 c0 -27 -3 -29 -36 -29 -40 0 -77 -16 -69 -31 4 -5 -18 -9
-53 -9 l-60 0 -22 121 c-18 99 -26 122 -41 126 -48 13 1 151 54 153 4 0 7 -60
7 -134z m368 -78 l3 -148 -71 0 -70 0 0 134 c0 74 3 142 6 151 5 13 19 15 68
13 l61 -3 3 -147z m-406 -38 c29 -149 30 -145 -19 -148 -48 -4 -50 1 -34 85 9
47 0 63 -35 63 -29 0 -40 -16 -49 -68 -4 -24 -9 -41 -12 -38 -7 7 -32 141 -32
174 -1 22 1 23 82 20 l82 -3 17 -85z m-67 -62 c-10 -80 -14 -88 -42 -88 -26 0
-26 0 -19 62 6 62 16 78 49 78 17 0 18 -6 12 -52z m580 -78 c-4 -6 -73 -10
-176 -10 -106 0 -169 4 -169 10 0 6 65 10 176 10 114 0 173 -3 169 -10z"
              className="svg-elem-1"
            ></path>
            <path
              d="M495 750 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"
              className="svg-elem-2"
            ></path>
            <path
              d="M595 750 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"
              className="svg-elem-3"
            ></path>
          </g>
        </svg>
      ) : null}
      <p className={`glowText ${classNames}`}>DevKrishna</p>
    </div>
  );
};
