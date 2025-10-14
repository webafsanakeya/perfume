'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl font-semibold text-slate-800'>{title}</h2>
      <Link href={href} className='flex items-center gap-5 text-base font-bold text-slate-600 mt-2'>
        <p className='max-w-lg text-center'>{description}</p>
        {visibleButton && (
          <motion.button
            className='text-[#F28C28] flex items-center gap-1'
            whileHover={{ scale: 1.05 }} // button slightly grows
          >
            View more
            <motion.span
              className='inline-block'
              whileHover={{ x: 5 }} // arrow moves 5px to the right
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </motion.button>
        )}
      </Link>
    </div>
  )
}

export default Title
