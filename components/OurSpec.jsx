"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ourSpecsData } from "@/assets/assets";

const OurSpecs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="w-full py-16 md:py-24 relative overflow-hidden text-white"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          background:
            "linear-gradient(135deg, #1a1a1a, #2c2c2c, #1a1a1a, #3b3b3b)",
          backgroundSize: "400% 400%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Title Section */}
      <div className="relative z-10 text-center mb-12 md:mb-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-md">
          Our Specifications
        </h2>
        <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base max-w-xl mx-auto">
          We offer top-tier service and convenience to ensure your shopping
          experience is smooth, secure, and completely hassle-free.
        </p>
      </div>

      {/* Custom Grid Layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
        {/* Top Row - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ourSpecsData.slice(0, 4).map((spec, index) => (
            <motion.div
  key={index}
  className="flex flex-col items-center text-center px-6 sm:px-8"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 200, damping: 20 }}
>
  {/* Icon Circle */}
  <motion.div
    className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg mb-4"
    style={{ backgroundColor: spec.accent }}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <spec.icon size={24} className="text-white" />
  </motion.div>

  {/* Title + Description */}
  <h3 className="text-base sm:text-lg font-semibold">{spec.title}</h3>
  <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed max-w-xs">
    {spec.description}
  </p>
</motion.div>
          ))}
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ourSpecsData.slice(4, 7).map((spec, index) => (
            <motion.div
  key={index}
  className="flex flex-col items-center text-center px-6 sm:px-8"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 200, damping: 20 }}
>
  {/* Icon Circle */}
  <motion.div
    className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg mb-4"
    style={{ backgroundColor: spec.accent }}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <spec.icon size={24} className="text-white" />
  </motion.div>

  {/* Title + Description */}
  <h3 className="text-base sm:text-lg font-semibold">{spec.title}</h3>
  <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed max-w-xs">
    {spec.description}
  </p>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpecs;
