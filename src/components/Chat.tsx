import React, { useState, useEffect } from "react";
import { useChat } from "ai/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 3000);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-chalkboard bg-no-repeat bg-cover text-white"
    >
      {/* {showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
        >
          <p className="text-4xl mb-4">Talk to the grandmaster</p>
          <p className="text-3xl">Professor Dr. Feynman</p>
        </motion.div>
      )} */}

      <section className="flex-1 overflow-y-auto p-4 space-y-4 w-full">
        {messages.map((m, index) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-2 rounded-lg bg-white ${
                m.role === "user" ? "bg-gray-200" : "bg-green-200"
              }`}
            >
              {m.role === "user" ? "You:" : "FeynMind:"} {m.content}
            </div>
          </motion.div>
        ))}
      </section>

      <form
        className="flex w-full p-4 space-x-4 bg-gray-100"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full p-2 rounded-md text-black"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </motion.main>
  );
}
