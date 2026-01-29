'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'

const locations = [
  {
    id: 'wyoming',
    name: 'Wyoming',
    desc: 'Strategic Business Hub',
    image: '/wyoming-nature.png',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
  },
  {
    id: 'delaware',
    name: 'Delaware',
    desc: 'Corporate Foundation',
    image: '/delaware-detail.png',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    desc: 'Middle East Gateway',
    image: '/dubai-night.png',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'new-york',
    name: 'New York',
    desc: 'Financial Center',
    image: '/newyork-street.png',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'new-jersey',
    name: 'New Jersey',
    desc: 'Innovation Hub',
    image: 'https://images.unsplash.com/photo-1574786306560-63ce60754865?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const, // Custom layout-like ease
    },
  },
}

export default function SectionLocations() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-cyan-500" />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
              Global Presence
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-cyan-500">Locations</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Strategic operational bases in key economic zones across the globe.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]"
        >
          {locations.map((loc) => (
            <motion.div
              key={loc.id}
              variants={itemVariants}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${loc.colSpan} ${loc.rowSpan}`}
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              {/* Hover Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-3xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                      {loc.name}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {loc.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
