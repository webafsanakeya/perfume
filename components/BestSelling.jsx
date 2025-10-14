'use client'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const BestSelling = () => {
  const displayQuantity = 8
  const products = useSelector((state) => state.product.list)

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: {
      scale: 1.05,
      rotate: 1,
      boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  }

  return (
    <section className="w-full py-20 bg-gradient-to-r from-pink-50 via-purple-50 to-yellow-50">
      <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <Title
          title="Best Selling"
          description={`Showing ${
            products.length < displayQuantity ? products.length : displayQuantity
          } of ${products.length} products`}
          href="/shop"
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {products
            .slice()
            .sort((a, b) => (b.rating?.length || 0) - (a.rating?.length || 0))
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
                  delay: index * 0.1,
                }}
                className="bg-white bg-opacity-80 rounded-2xl p-4 backdrop-blur-md"
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default BestSelling
