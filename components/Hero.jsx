"use client";
import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    assets.hero_model_img,
    assets.hero_product_img1,
    assets.hero_product_img2,
  ];

  const overlays = [
    "rgba(242,140,40,0.35)", // orange
    "rgba(147,51,234,0.35)", // purple
    "rgba(30,64,175,0.35)",  // blue
  ];

  const textColors = ["#ffffff", "#ffffff", "#f9fafb"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Handle swipe
  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    if (offset < -50) setCurrentIndex((prev) => (prev + 1) % images.length);
    else if (offset > 50) setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt="Hero Background"
              fill
              priority
              quality={100}
              className="object-cover md:object-cover sm:object-contain object-center w-full h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <motion.div
        key={currentIndex + "-overlay"}
        className="absolute inset-0 -z-10"
        animate={{ backgroundColor: overlays[currentIndex] }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16 text-center"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.h1
          style={{ color: textColors[currentIndex] }}
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
          }}
          className="text-2xl sm:text-3xl md:text-6xl font-bold max-w-xs sm:max-w-xl md:max-w-2xl leading-snug md:leading-tight"
        >
          Perfumes you'll love. <br /> Prices you'll trust.
        </motion.h1>

        <motion.p
          style={{ color: textColors[currentIndex] }}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
          }}
          className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-xl"
        >
          Starts from just <span className="font-semibold">$4.90</span>. Order now and enjoy exclusive deals with free shipping.
        </motion.p>

        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
          }}
          className="mt-4 sm:mt-6 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 bg-[#F28C28] px-4 sm:px-5 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg shadow-lg text-black"
          >
            Shop Now <ArrowRightIcon size={18} />
          </motion.button>
        </motion.div>

        {/* Swipe Indicators */}
        <div className="flex gap-2 mt-4 sm:mt-6">
          {images.map((_, idx) => (
            <motion.div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === currentIndex ? "bg-[#F28C28]" : "bg-white/50"
              }`}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
