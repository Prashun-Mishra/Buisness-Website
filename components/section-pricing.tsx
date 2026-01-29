'use client'

import { motion } from 'framer-motion'

export default function SectionPricing() {
  const plans = [
    {
      name: 'USA',
      price: '$150+',
      description: 'Complete US incorporation',
      promo: 'File your tax return starting at just $50+',
      features: [
        'Company incorporation',
        'EIN & tax ID setup',
        'Banking assistance',
        'Compliance documentation',
        'First-year support',
      ],
    },
    {
      name: 'UAE',
      price: 'AED 10k+',
      description: 'Middle East business setup',
      features: [
        'Free zone licensing',
        'Visa processing',
        'Office space setup',
        'Legal entity formation',
        'Ongoing compliance',
      ],
      highlighted: true,
    },
    {
      name: 'FEMA',
      price: '$250+',
      description: 'Global compliance solution',
      features: [
        'RBI compliance setup',
        'FEMA declaration filing',
        'Cross-border transaction advisory',
        'Ongoing regulatory support',
        'Audit & documentation',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-black/90 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Accent line */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500" />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent text-sm font-semibold tracking-widest uppercase">
              Pricing
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-200 to-cyan-200">
              Transparent Pricing
            </span>
          </motion.h2>

          <motion.p
            className="text-white/60 max-w-xl mx-auto text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Choose the plan that best fits your global business expansion needs
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -12 }}
            >
              {/* Background glow */}
              <motion.div
                className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${plan.highlighted
                  ? 'bg-gradient-to-br from-teal-600/30 to-cyan-600/10'
                  : 'bg-gradient-to-br from-white/10 to-white/5'
                  }`}
                whileHover={{ scale: 1.1 }}
              />

              {/* Card */}
              <motion.div
                className={`relative rounded-2xl border backdrop-blur-xl p-8 md:p-10 h-full flex flex-col transition-all duration-300 ${plan.highlighted
                  ? 'bg-gradient-to-br from-white/12 to-white/6 border-cyan-500/50'
                  : 'bg-gradient-to-br from-white/8 to-white/3 border-white/10 group-hover:border-teal-400/40'
                  }`}
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <motion.div
                    className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-bl-2xl text-xs font-bold tracking-widest uppercase"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Popular
                  </motion.div>
                )}

                {/* Plan name */}
                <div className="mb-2">
                  <h3 className="text-3xl font-black text-white tracking-tight">{plan.name}</h3>
                  <p className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent text-sm font-semibold mt-1">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-white/50 text-sm font-medium">/starting</span>
                  </div>
                  {plan.promo && (
                    <p className="mt-3 text-sm text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-2 rounded-lg border border-cyan-500/20">
                      {plan.promo}
                    </p>
                  )}
                </div>

                {/* Feature list */}
                <ul className="space-y-4 flex-grow mb-8">
                  {plan.features.map((feature, fidx) => (
                    <motion.li
                      key={fidx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + fidx * 0.05, duration: 0.5 }}
                    >
                      <motion.span
                        className="text-cyan-500 font-bold text-lg mt-0.5 flex-shrink-0"
                        whileHover={{ scale: 1.2 }}
                      >
                        ✓
                      </motion.span>
                      <span className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 ${plan.highlighted
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-teal-500/50'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-cyan-400/30'
                    }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom accent */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  )
}
