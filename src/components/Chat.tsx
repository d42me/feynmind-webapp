import React from "react";
import { useChat } from "ai/react";
import { motion } from "framer-motion";
import { Quicksand } from "next/font/google";

import FeynmanAnswer from "@/components/FeynmanAnswer";

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
});

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-center ${quicksand.className}`}
      style={{
        backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5f33132c8758c705bb28a841/1600728617215-03H5TU4R20N3I2TMJSX9/Caltech+East+Bridge+AV+punch+111118+040+photoshopped+2.jpg')`,
        backgroundSize: "cover",
        filter: "grayscale(100%)",
      }}
    >
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-4/5 h-[90vh] flex flex-col items-center bg-gray-800 bg-opacity-95 text-white rounded-lg shadow-lg p-6 border-4 border-white"
      >
        <section className="flex-1 overflow-y-auto p-4 space-y-6 w-full">
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
                className={`max-w-2/3 p-4 rounded-lg ${
                  m.role === "user"
                    ? "bg-gray-200 text-gray-800"
                    : "bg-green-100 text-gray-800"
                }`}
              >
                {m.role === "user" ? (
                  <p className="text-base">{m.content}</p>
                ) : (
                  <FeynmanAnswer rawString={m.content} />
                )}
                <p className="mt-2 text-right text-sm text-gray-500">
                  {m.role === "user" ? "You" : "Professor Feynman"}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        <form
          className="flex w-full p-4 space-x-4 bg-gray-800 rounded-lg"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full py-3 px-4 rounded-md text-black bg-white placeholder-gray-500"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask Professor Feynman a question..."
          />
          <button
            className="px-6 py-2 bg-gray-700 text-white rounded-md"
            type="submit"
          >
            Send
          </button>
        </form>
        <footer className="mt-4 text-center text-white bg-gray-800 p-4 rounded-lg">
          <p>
            FeynMind, a finetuned GPT model based on the Feynman lectures. Made
            by{" "}
            <a
              href="https://twitter.com/dominik_scherm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              @dominik_scherm
            </a>
          </p>
        </footer>
      </motion.main>
    </div>
  );
}
