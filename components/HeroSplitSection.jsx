'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { assets } from '@/assets/assets'

// Slides data
const slides = [
  {
    image: assets.product_model_img1,
    title: 'Discover Our Premium Collection',
    description:
      'Explore our best-selling products and newest arrivals. Each item is crafted with quality and care to bring you the ultimate shopping experience.',
  },
  {
    image: assets.product_model_img2,
    title: 'Elegance Meets Fragrance',
    description:
      'Our perfumes are designed to leave a lasting impression — sophisticated, bold, and unforgettable.',
  },
  {
    image: assets.product_model_img3,
    title: 'Luxury in Every Bottle',
    description:
      'Handpicked ingredients and timeless aromas, crafted to perfection for your everyday moments.',
  },
  {
    image: assets.product_model_img4,
    title: 'Redefine Your Style',
    description:
      'Step into a world of elegance and uniqueness. Find your signature scent today.',
  },
]

const HeroSplitSection = () => {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)

  // autoplay always running
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)

  return (
    <section className="w-full bg-gradient-to-r from-pink-50 via-purple-50 to-yellow-50 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image Slider */}
        <div className="w-full md:w-1/2 relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute w-full h-full"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Image
                  src={slides[current].image}
                  alt={slides[current].title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows inside image */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right: Text content */}
        <motion.div
          key={`text-${current}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6"
        >
          <h2 className="text-4xl font-bold text-slate-800 leading-snug">
            {slides[current].title}
          </h2>
          <p className="text-slate-600 text-lg max-w-lg">
            {slides[current].description}
          </p>

          {/* Dots moved here */}
          <div className="flex gap-2 justify-center md:justify-start">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  current === idx ? 'bg-[#F28C28] scale-110' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Link href="/shop">
            <motion.button
              className="relative px-8 py-3 bg-[#F28C28] text-white font-semibold rounded-full shadow-md overflow-hidden"
              whileHover={{ scale: 1.1, backgroundColor: '#d97706' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute left-0 top-0 h-full w-full bg-white opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
              Shop Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSplitSection
