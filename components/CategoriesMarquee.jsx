'use client'
import { categories } from '@/assets/assets'
import { motion } from 'framer-motion'

const CategoriesMarquee = () => {
  return (
    <section className="w-full bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 py-16 relative overflow-hidden">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Trending <span className="text-[#F28C28]">Brands</span>
        </h2>
        <p className="mt-2 text-slate-600 text-base sm:text-lg">
          Explore our most popular categories loved by our customers
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden select-none group">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-purple-50 to-transparent" />

        {/* Scrolling items */}
        <div className="flex min-w-[200%] animate-[marqueeScroll_25s_linear_infinite] group-hover:[animation-play-state:paused] gap-6">
          {[...categories, ...categories].map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 250, damping: 15 }}
              className="flex items-center justify-center px-8 py-4 bg-white rounded-xl text-slate-700 text-lg sm:text-xl font-semibold shadow-md hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#F28C28] hover:to-pink-500 hover:text-white transition-all duration-300"
              style={{ minWidth: '160px' }}
            >
              {category}
            </motion.div>
          ))}
        </div>

        {/* Right gradient */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-yellow-50 to-transparent" />
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

export default CategoriesMarquee
