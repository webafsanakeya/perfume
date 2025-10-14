"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; 
import { assets } from '@/assets/assets';

const perfumes = [
  {
    id: 1,
    image: assets.perfume1,
    name: "Oud Elegance",
    role: "Luxury Collection",
  },
  {
    id: 2,
    image: assets.perfume2,
    name: "Rose Whisper",
    role: "Floral Essence",
    video: true,
  },
  {
    id: 3,
    image: assets.perfume3,
    name: "Citrus Bloom",
    role: "Fresh Collection",
  },
];

const Reviews = () => {
  return (
    <section className="w-full bg-gradient-to-r from-pink-50 via-purple-50 to-yellow-50 py-10">
      {/* Title */}
      <div className="text-center mb-12 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-md">
          2000+ HAPPY CUSTOMERS
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Discover how our perfumes have delighted fragrance lovers worldwide,
          bringing elegance, charm, and uniqueness to their everyday lives.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        {perfumes.map((perfume) => (
          <motion.div
            key={perfume.id}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={perfume.image}
              alt={perfume.name}
              width={400}
              height={500}
              className="w-full h-[400px] object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="font-semibold text-lg">{perfume.name}</h3>
              <p className="text-sm opacity-80">{perfume.role}</p>
            </div>

            {perfume.video && (
              <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                ▶
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
