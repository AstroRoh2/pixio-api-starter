// src/app/(marketing)/page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      {/* Hero Section */}
      <section className="mb-12">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unlock Creativity, Explore Dreams, Set Intentions
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          AI-powered tools for artistic therapy, subconscious exploration, and personal growth.
        </motion.p>
      </section>

      {/* Experience Blocks */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "🎨 Art Therapy", text: "Process emotions through AI-generated creative expressions." },
          { title: "🌙 Dream Interpretation", text: "Unlock the meaning behind your dreams with guided AI insights." },
          { title: "✨ Set Intention", text: "Manifest goals and aspirations with interactive visualization tools." },
        ].map((experience, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg shadow-md transition hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold">{experience.title}</h2>
            <p className="mt-3 text-gray-700">{experience.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Call-To-Action */}
      <section className="mt-12">
        <motion.button
          className="px-8 py-4 bg-blue-600 text-white font-bold rounded-md text-lg hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.button>
      </section>
    </div>
  );
};

export default LandingPage;
