import React from "react";
import { useChat } from "ai/react";
import { motion } from "framer-motion";
import { Quicksand } from "next/font/google";

import FeynmanAnswer from "@/components/FeynmanAnswer";
import Link from "next/link";

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
});

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div
      className={`h-screen flex flex-col md:flex-row items-center justify-center ${quicksand.className}`}
    >
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="w-full h-screen flex flex-col items-center"
        style={{
          backgroundImage: `url('/caltech-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          filter: "grayscale(100%)",
        }}
      >
        <section className="flex-1 overflow-y-auto p-4 md:p-8 space-y-3 md:space-y-6 w-full max-w-5xl no-scrollbar">
          {messages.map((m, index) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex ${
                m.role === "user" ? "flex-row-reverse" : ""
              } items-start space-x-4`}
            >
              <div
                className={`w-full max-w-full md:max-w-[80%] p-3 ${
                  m.role === "user"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {m.role === "user" ? (
                  <p className="text-base">{m.content}</p>
                ) : (
                  <FeynmanAnswer
                    className="text-base leading-relaxed"
                    rawString={m.content}
                  />
                )}
                <p className="mt-1 text-right text-sm text-gray-500">
                  {m.role === "user" ? "You" : "Professor Feynman"}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="bg-gray-800 py-3 px-2 md:px-6 max-w-4xl w-full">
          <form
            className="flex w-full p-2 md:p-4 space-x-2 md:space-x-4 bg-gray-800 rounded-lg"
            onSubmit={handleSubmit}
          >
            <input
              className="flex-grow py-3 px-4 rounded-md text-black bg-white placeholder-gray-500"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask Professor Feynman a question..."
            />
            <button
              className="px-3 py-2 bg-gray-700 text-white rounded-md"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotate(-45deg)" }}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
          <footer className="text-sm text-center text-white bg-gray-800 p-2 md:p-4 rounded-lg">
            <p>
              FeynMind, a finetuned GPT model based on the{" "}
              <Link
                href="https://www.feynmanlectures.caltech.edu"
                target="_blank"
                className="underline"
              >
                Feynman lectures
              </Link>
              . Made by{" "}
              <Link
                href="https://twitter.com/dominik_scherm"
                target="_blank"
                className="underline"
              >
                @dominik_scherm
              </Link>
            </p>
          </footer>
        </section>
      </motion.main>
    </div>
  );
}
