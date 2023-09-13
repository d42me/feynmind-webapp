/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-chalkboard text-white">
      <h1 className="text-4xl font-serif">Welcome to the FeynMind</h1>
      <p className="text-lg mb-4">A place to explore the wonders of science!</p>
      <img
        className="mb-4"
        src="/Richard_Feynman_Nobel.jpg"
        alt="Richard Feynman"
      />
      <q className="text-center mb-6 text-xl leading-relaxed my-4">
        Physics is like sex: sure, it may give some practical results, but
        that&#39;s not why we do it.
      </q>

      <Link href="/chat" className="bg-white text-black py-2 px-4 rounded">
        Get Started
      </Link>
      <audio src="/path/to/feynman_audio.mp3" autoPlay loop></audio>
    </div>
  );
}
