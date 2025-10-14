'use client'
import React from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const LatestProducts = () => {
  const displayQuantity = 4
  const products = useSelector((state) => state.product.list)

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, rotate: -2 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: 1,
      boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  }

  return (
    <section className="w-full bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-50 py-20">
      <div className="px-6 max-w-6xl mx-auto">
        <Title
          title="Latest Products"
          description={`Showing ${
            products.length < displayQuantity ? products.length : displayQuantity
          } of ${products.length} products`}
          href="/shop"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products
            .slice()
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, displayQuantity)
            .map((product, index) => (
              <motion.div
                key={product.id || index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: index * 0.2,
                }}
                className="bg-white bg-opacity-80 rounded-2xl p-4 backdrop-blur-md"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default LatestProducts
