'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SectionMarquee() {
  const companies = [
    { name: 'Filix Consulting Pvt. Ltd.', logo: '/icon1.jpg' },
    { name: 'Webtel Electrosoft Ltd.', logo: '/icon 2.jpg' },
    { name: 'Innostax Tech LLC', logo: '/icon3.jpg' },
    { name: 'CloudVandana', logo: '/icon4.jpg' },
    { name: 'Gatefare', logo: '/icon5.png' },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-black/90 to-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_24%,rgba(168,85,247,.05)_25%,rgba(236,72,153,.05)_26%,transparent_27%,transparent_74%,rgba(168,85,247,.05)_75%,rgba(236,72,153,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Accent line */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent text-xs font-bold tracking-widest uppercase">
              Partners
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl font-black text-white text-center tracking-tight mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-cyan-100">
              Trusted by Businesses Worldwide
            </span>
          </motion.h2>

          <motion.p
            className="text-white/60 text-sm md:text-base max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Leading enterprises rely on our expertise for global business solutions
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Fade gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />

        {/* Marquee animation */}
        <motion.div
          animate={{ x: [0, -1800] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="flex gap-6 md:gap-8 whitespace-nowrap py-8 md:py-12"
        >
          {[...companies, ...companies, ...companies].map((company, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600/30 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"
                whileHover={{ scale: 1.2 }}
              />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl border border-white/10 rounded-lg px-4 py-3 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-3">
                {/* Logo Image */}
                <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={64}
                    height={64}
                    className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>

                {/* Company Name */}
                <motion.p
                  className="text-white/70 font-semibold text-sm tracking-tight group-hover:text-cyan-300 whitespace-nowrap"
                  whileHover={{ letterSpacing: '0.02em' }}
                >
                  {company.name}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom accent glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  )
}
