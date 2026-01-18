import React, { createContext, useContext, useEffect, useState } from "react";
// import Navbar from "./Navbar";
import Head from "next/head";
import { Footer } from "./Footer";
import { Inter } from "next/font/google";
// import styles from "../styles/Home.module.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const akkuratFont = localFont({ src: "../public/assets/AkkuratFont.woff2" });

const ThemeContext = createContext<{
  theme: "dark" | "light";
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function Layout({ children }: { children: React.ReactElement }) {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  // On mount, sync theme state with DOM/system preference
  useEffect(() => {
    let initialTheme: "dark" | "light" =
      (document.documentElement.dataset.theme as "dark" | "light") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    document.documentElement.dataset.style = "swipe";
  }, []);

  // When theme changes, update DOM
  useEffect(() => {
    if (!theme) return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.style = "swipe";
  }, [theme]);

  const toggleTheme = () => {
    if (!theme) return;
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (typeof (document as any).startViewTransition === "function") {
      (document as any).startViewTransition(() => setTheme(nextTheme));
    } else {
      setTheme(nextTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="flex flex-col items-center min-h-screen max-w-[100%]">
        <Head>
          <title>DevKrishna | Personal Website</title>
          <meta name="description" content="Personal Website of Shimanta Krishna Bhuyan" />
          <meta name="og:url" content="https://devkrishna.in" />
          <meta name="og:type" content="website" />
          <meta name="og:title" content="DevKrishna | Personal Website" />
          <meta name="og:description" content="Personal Website of Shimanta Krishna Bhuyan" />
          <meta name="og:image" content="https://ik.imagekit.io/colorContrast/devkrishna_0PCwodeWS.png" />
          <meta name="og:image:type" content="image/png" />
          <meta name="og:image:width" content="378" />
          <meta name="og:image:height" content="185" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:domain" content="devkrishna.in" />
          <meta name="twitter:url" content="https://devkrishna.in" />
          <meta name="twitter:title" content="DevKrishna | Personal Website" />
          <meta name="twitter:description" content="Personal Website of Shimanta Krishna Bhuyan" />
          <meta name="twitter:image" content="https://ik.imagekit.io/colorContrast/devkrishna_0PCwodeWS.png" />
          <meta name="og:image:type" content="image/png" />
          <meta name="og:image:width" content="378" />
          <meta name="og:image:height" content="185" />

          <link rel="icon" href="/assets/icon.ico" />
          {/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css" crossOrigin="anonymous" /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
        </Head>
        {/* Theme Toggler Button */}
        <button
          aria-pressed={theme === "light"}
          className={`theme-toggle fixed top-4 right-4 z-50 rounded-xl border-none p-2 bg-transparent cursor-pointer transition-all duration-500 ${
            theme === "light" ? "text-[#4D4D4D]" : "text-white"
          }`}
          onClick={toggleTheme}
          title="Toggle theme"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={theme === "light" ? "#4D4D4D" : "white"}
            style={{ width: 28, height: 28 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              style={{ display: theme === "light" ? "block" : "none" }}
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              style={{ display: theme === "light" ? "none" : "block" }}
            />
          </svg>
          <span className="sr-only">Toggle Theme</span>
        </button>
        {/* <Navbar /> */}
        <main
          className={`flex flex-col justify-center items-center box-border overflow-x-hidden overscroll-none ${akkuratFont.className}`}
        >
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </ThemeContext.Provider>
  );
}
