'use client'
import React from 'react'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

export default function Banner() {
  const [isOpen, setIsOpen] = React.useState(true)

  const handleClaim = () => {
    setIsOpen(false)
    toast.success('Coupon copied to clipboard!')
    navigator.clipboard.writeText('NEW20')
  }

  return (
    isOpen && (
      <motion.div
        className="relative w-full overflow-hidden rounded-b-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Glow */}
        <motion.div
          className="absolute inset-0 rounded-b-xl"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255,192,203,0.25), transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />

        {/* Banner Content */}
        <div className="relative w-full bg-gradient-to-r from-pink-100 via-purple-50 to-indigo-50 px-6 py-2 text-gray-800 flex items-center justify-between font-medium text-sm">
          {/* Marquee */}
          <div className="flex-1 overflow-hidden relative">
            <div className="marquee-wrapper">
              <div className="marquee-content flex gap-10">
                <span>Get 20% OFF on Your First Order! Use code: NEW20</span>
                <span>Limited time offer! Free shipping on orders over $50.</span>
                <span>Subscribe to our newsletter for exclusive deals.</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4 ml-6 ">
         <motion.button
  onClick={handleClaim}
  className="font-normal text-gray-800 bg-white px-6 py-1.5 rounded-full max-sm:hidden shadow-lg border"
  style={{ borderColor: 'rgba(242, 140, 40, 0.7)' }} // outline color
  whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(218,192,255,0.5)' }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
>
  Claim Offer
</motion.button>

            <motion.button
              onClick={() => setIsOpen(false)}
              className="font-normal text-gray-800 p-1 rounded-full hover:bg-white/20 transition"
              whileHover={{ scale: 1.1 }}
            >
              &#10005;
            </motion.button>
          </div>
        </div>

        {/* Marquee CSS */}
        <style jsx>{`
          .marquee-wrapper {
            overflow: hidden;
            position: relative;
          }
          .marquee-content {
            display: inline-flex;
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }
          .marquee-wrapper:hover .marquee-content {
            animation-play-state: paused;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </motion.div>
    )
  )
}
