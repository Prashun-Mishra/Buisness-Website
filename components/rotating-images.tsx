'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const locations = [
  { id: 'wyoming', name: 'Wyoming', image: '/wyoming-nature.png' },
  { id: 'delaware', name: 'Delaware', image: '/delaware-detail.png' },
  { id: 'dubai', name: 'Dubai', image: '/dubai-night.png' },
  { id: 'new-york', name: 'New York', image: '/newyork-street.png' },
  { id: 'new-jersey', name: 'New Jersey', image: '/getlstd-property-photo.jpg' },
]

export default function RotatingImages() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locations.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto h-[500px] flex items-center justify-center perspective-[1000px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, rotateY: 90, scale: 0.9 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          exit={{ opacity: 0, rotateY: -90, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-cyan-900/40 border border-white/10"
        >
          <img
            src={locations[currentIndex].image}
            alt={locations[currentIndex].name}
            className="object-cover w-full h-full absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 cursor-pointer hover:opacity-60 transition-opacity duration-500" />
          
          <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 transform translate-y-2 hover:translate-y-0 transition-transform">
             <h3 className="text-3xl font-bold text-white mb-2">{locations[currentIndex].name}</h3>
             <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase">Global Operational Base</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
