/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Quicksand } from "next/font/google"; // Please check if this import is correct as it looks non-standard

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
});

export default function Welcome() {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-chalkboard bg-cover bg-no-repeat text-white ${quicksand.className} p-4`}
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center">
        Welcome to FeynMind
      </h1>
      <p className="text-lg md:text-2xl mb-4 text-center">
        A place to explore the wonders of science.
      </p>
      <img
        className="mb-4 w-2/3 md:w-auto h-auto md:max-w-md"
        src="/Richard_Feynman_Nobel.jpg"
        alt="Richard Feynman"
      />
      <div className="flex flex-col md:flex-row items-center">
        <q className="text-center mb-6 text-lg md:text-xl leading-relaxed my-4 italic">
          Physics is like sex: sure, it may give some practical results, but
          that&#39;s not why we do it.
        </q>
      </div>

      <Link
        href="/chat"
        className="bg-white text-black py-3 px-6 text-center block w-full md:w-auto"
      >
        Get Started
      </Link>
    </div>
  );
}
