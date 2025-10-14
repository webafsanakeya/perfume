'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const ProductCard = ({ product, index = 0 }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

  // Calculate average rating
  const rating =
    product.rating && product.rating.length > 0
      ? Math.round(
          product.rating.reduce((acc, curr) => acc + curr.rating, 0) /
            product.rating.length
        )
      : 0

  // 3D tilt effect setup
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [15, -15])
  const rotateY = useTransform(x, [-50, 50], [-15, 15])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const posX = e.clientX - rect.left - rect.width / 2
    const posY = e.clientY - rect.top - rect.height / 2
    x.set(posX)
    y.set(posY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={`/product/${product.id}`} className="group max-xl:mx-auto">
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
        className="bg-gradient-to-b from-gray-900 to-black text-white rounded-2xl p-6 shadow-xl relative overflow-hidden cursor-pointer"
      >
        {/* Product image with bigger zoom and higher quality */}
        <motion.div
          className="w-36 h-44 mx-auto mb-4" // slightly bigger for better visual
          whileHover={{ scale: 1.25 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            quality={100} // sharper image
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Product info */}
        <motion.div
          className="flex justify-between gap-3 text-sm text-slate-200 relative overflow-hidden pt-2 max-w-60"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Left: name + rating */}
          <div className="flex flex-col">
            <p className="font-medium">{product.name}</p>
            <div className="flex mt-1">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    size={14}
                    fill={rating >= i + 1 ? '#00C950' : '#D1D5DB'}
                    className="mr-0.5"
                  />
                ))}
            </div>
          </div>

          {/* Right: price */}
          <p className="font-semibold">{currency}{product.price}</p>
        </motion.div>

        {/* Shop Now button appears on hover */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md group-hover:bg-indigo-700 transition">
            Shop Now
          </button>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default ProductCard
