import React from "react";
// import Navbar from "./Navbar";
// import { Footer } from "./Footer";
import Head from "next/head";
// import styles from "../styles/Home.module.css";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex flex-col items-center min-h-screen max-w-[100%]">
      <Head>
        <title>DevKrishna | Personal Website</title>
        <meta name="description" content="Personal Website of Shimanta Krishna Bhuyan" />
        <meta name="og:url" content="https://devkrishna.in" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="DevKrishna | Personal Website" />
        <meta name="og:description" content="Personal Website of Shimanta Krishna Bhuyan" />
        <meta name="og:image" content="https://ik.imagekit.io/colorContrast/AssetsAILogo.png" />
        <meta name="og:image:type" content="image/png" />
        <meta name="og:image:width" content="410" />
        <meta name="og:image:height" content="436" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="devkrishna.in" />
        <meta name="twitter:url" content="https://devkrishna.in" />
        <meta name="twitter:title" content="DevKrishna | Personal Website" />
        <meta name="twitter:description" content="Personal Website of Shimanta Krishna Bhuyan" />
        <meta name="twitter:image" content="https://ik.imagekit.io/colorContrast/AssetsAILogo.png" />
        <meta name="og:image:type" content="image/png" />
        <meta name="og:image:width" content="410" />
        <meta name="og:image:height" content="436" />

        <link rel="icon" href="/icon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>
      {/* <Navbar /> */}
      <main
        className={
          "bg-[url('/assets/bgImage.webp')] bg-cover bg-right-bottom h-[100vh] w-[100vw] flex flex-col justify-center items-center p-5"
        }
      >
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
