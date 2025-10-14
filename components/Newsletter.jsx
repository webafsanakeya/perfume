"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const Newsletter = () => {
  const [showInput, setShowInput] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollY = useMotionValue(0);

  // Detect screen size safely (client-side)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    if (typeof window !== "undefined") {
      handleResize(); // set initial size
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", () => scrollY.set(window.scrollY));
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", () => scrollY.set(window.scrollY));
      }
    };
  }, [scrollY]);

  // Parallax transforms
  const bgY = useTransform(scrollY, [0, 500], [0, -50]);
  const glowY1 = useTransform(scrollY, [0, 500], [0, 30]);
  const glowY2 = useTransform(scrollY, [0, 500], [0, -30]);
  const titleY = useTransform(scrollY, [0, 500], [0, -20]);
  const buttonY = useTransform(scrollY, [0, 500], [0, -10]);

  return (
    <div className="relative px-4 py-24 md:py-36 flex flex-col items-center bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#111111] text-white overflow-hidden shadow-2xl">
      
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{ y: bgY }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-[#ff6a00] via-[#f28c28] to-[#ff0066] opacity-30 blur-[100px]" />
      </motion.div>

      {/* Title */}
      <motion.div className="relative z-10 text-center" style={{ y: titleY }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Join Newsletter</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week.
        </p>
      </motion.div>

      {/* Button & Input */}
      <motion.div className="relative z-10 flex flex-col items-center w-full max-w-xl my-8 md:my-10" style={{ y: buttonY }}>
        <motion.button
          className="font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white bg-gradient-to-r from-[#ff6a00] via-[#f28c28] to-[#ff0066] shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
          onClick={() => setShowInput(!showInput)}
        >
          Get Updates
        </motion.button>

        <AnimatePresence>
          {showInput && (
            <motion.div
              className="w-full flex bg-gray-900/50 backdrop-blur-md p-1 rounded-full border border-white shadow-xl mt-4 sm:mt-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <input
                className="flex-1 pl-4 sm:pl-5 py-2 sm:py-3 rounded-full bg-transparent text-white placeholder-gray-300 outline-none text-sm sm:text-base"
                type="text"
                placeholder="Enter your email address"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Animated Glows */}
      <motion.div
        className="absolute -top-16 -left-16 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-green-500 opacity-20 blur-3xl"
        style={{ y: glowY1 }}
        animate={{ x: isMobile ? [0, 20, 0] : [0, 100, 0], y: isMobile ? [0, 10, 0] : [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-16 -right-16 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-orange-500 opacity-20 blur-3xl"
        style={{ y: glowY2 }}
        animate={{ x: isMobile ? [0, -20, 0] : [0, -100, 0], y: isMobile ? [0, -10, 0] : [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default Newsletter;
