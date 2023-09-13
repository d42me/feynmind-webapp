/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
});

export default function Welcome() {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-chalkboard text-white ${quicksand.className}`}
    >
      <h1 className="text-6xl font-semibold mb-4">Welcome to the FeynMind</h1>
      <p className="text-xl mb-4">A place to explore the wonders of science!</p>
      <img
        className="mb-4"
        src="/Richard_Feynman_Nobel.jpg"
        alt="Richard Feynman"
      />
      <div className="flex flex-row">
        <q className="text-center mb-6 text-xl leading-relaxed my-4 italic">
          Physics is like sex: sure, it may give some practical results, but
          that&#39;s not why we do it.
        </q>
      </div>

      <Link href="/chat" className="bg-white text-black py-3 px-6 rounded">
        Get Started
      </Link>
    </div>
  );
}
