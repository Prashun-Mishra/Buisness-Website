'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function SectionCarousel() {
  const locations = [
    { name: 'Wyoming', image: '/wyoming-location.jpg', description: 'Strategic Business Hub' },
    { name: 'Delaware', image: '/delaware-new.png', description: 'Corporate Foundation' },
    { name: 'New Jersey', image: 'https://images.unsplash.com/photo-1574786306560-63ce60754865?q=80&w=2070&auto=format&fit=crop', description: 'Innovation Corridor' },
    { name: 'Dubai', image: '/dubai-new.png', description: 'Middle East Gateway' },
    { name: 'New York', image: '/newyork-new.png', description: 'Financial Center' },
  ]

  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % locations.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [autoPlay, locations.length])

  const handleManualChange = (idx: number) => {
    setCurrent(idx)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 3000)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`slide-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          {/* Ken Burns zoom effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 7, ease: 'easeInOut' }}
          >
            <Image
              src={locations[current].image}
              alt={locations[current].name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Subtitle */}
            <motion.p
              className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent text-sm md:text-base font-semibold tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {locations[current].description}
            </motion.p>

            {/* Main title */}
            <motion.h2
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              {locations[current].name}
            </motion.h2>

            {/* Accent line */}
            <motion.div
              className="h-1 w-24 mx-auto bg-gradient-to-r from-teal-500 to-cyan-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
        {locations.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleManualChange(idx)}
            className="relative group"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`h-2 rounded-full transition-all duration-300 ${idx === current
                ? 'w-10 bg-gradient-to-r from-teal-500 to-cyan-500'
                : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
              layoutId="indicator"
              initial={false}
              animate={{
                backgroundColor: idx === current ? undefined : 'rgba(255, 255, 255, 0.4)',
              }}
            />
            {idx === current && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-teal-400"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </div>



      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  )
}
