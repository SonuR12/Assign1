// src/components/Loading.tsx
"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Glowing rotating ring */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute w-24 h-24 rounded-full border-4 border-blue-500/30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        />
        <motion.div
          className="absolute w-16 h-16 rounded-full border-4 border-blue-500/60"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />

        {/* Center icon */}
        <motion.div
          className="text-blue-400"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Cpu className="w-10 h-10" />
        </motion.div>
      </motion.div>

      {/* Brand text */}
      <motion.h1
        className="mt-6 text-2xl sm:text-3xl font-semibold tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <span className="text-blue-400">Future</span> of <span className="text-gray-300">Gadgets</span>
      </motion.h1>

      {/* Sub text */}
      <motion.p
        className="mt-2 text-gray-400 text-sm italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Powering your next innovation...
      </motion.p>
    </div>
  );
}
