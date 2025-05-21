"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      {/* 🔥 TEST BOX to Check Tailwind */}
      <div className="bg-red-500 text-white p-6 rounded-lg text-center text-xl font-bold">
        🚀 If this box appears **RED with white text**, Tailwind is working!
      </div>

      <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background/55 to-secondary/10 text-foreground">
        {/* Hero Section */}
        <section className="container mx-auto text-center py-24">
          <motion.h1
            className="text-6xl font-extrabold leading-tight text-primary-foreground drop-shadow-xl tracking-wide"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unlock Your Inner World Through Art Therapy
          </motion.h1>
        </section>
      </div>
    </>
  );
}
