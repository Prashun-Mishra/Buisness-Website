'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Landmark, ScrollText, Building, ArrowRight, TrendingUp, CheckCircle, Star } from 'lucide-react'
import CompanyCounter from '@/components/company-counter'
import ConsultationForm from '@/components/consultation-form'

export default function SectionUSA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const features = [
    {
      title: 'Strategic Incorporation',
      subtitle: 'Delaware & Nevada',
      description: 'Benefit from Delaware or Nevada incorporation with optimized tax structures and unparalleled business flexibility. Our expert team guides you through every step.',
      features: ['LLC or C-Corp Formation', 'Tax Optimization Strategies', 'Privacy Protection'],
      icon: Building,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      stats: { label: 'Incorporated in 2026', value: 'dynamic', showCounter: true },
    },
    {
      title: 'Tax & Compliance',
      subtitle: 'IRS Certified',
      description: 'Navigate complex US tax regulations with confidence. Full IRS compliance, state filings, and ongoing tax planning support to keep your business thriving.',
      features: ['IRS Compliance', 'State Filings', 'Tax Planning'],
      icon: ScrollText,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop',
      stats: { label: 'Tax Returns Filed', value: '2000+' },
    },
    {
      title: 'Banking & Finance',
      subtitle: 'Complete Setup',
      description: 'Seamless US business banking setup with merchant accounts, payment processing, and complete financial infrastructure for your growing business.',
      features: ['Business Accounts', 'Payment Processing', 'Credit Building'],
      icon: Landmark,
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop',
      stats: { label: 'Banks Connected', value: '50+' },
    },
  ]

  return (
    <section ref={containerRef} id="usa" className="relative bg-background overflow-hidden pt-20">
      {/* Animated Background Fluid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-teal-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none z-0" />

      {/* Hero Header Part */}
      <div className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // smooth graceful ease
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 mb-8 backdrop-blur-md"
          >
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-semibold tracking-wide uppercase">Premier Market Access</span>
          </motion.div>

          <h2 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            USA
            <span className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-500 bg-clip-text text-transparent mt-2 tracking-normal">
              Expansion Simplified
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            We bridge the gap between your ambition and the American market with precision, speed, and expert compliance.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-cyan-500/50 to-transparent" />
          <span className="text-xs text-slate-500 uppercase tracking-[0.3em]">Scroll</span>
        </motion.div>
      </div>

      {/* Alternating Sections with Scroll Animations */}
      <div className="relative z-10 pb-32">
        {features.map((feature, idx) => (
          <FeatureKeyFrame key={idx} feature={feature} index={idx} onConsultClick={() => setIsFormOpen(true)} />
        ))}
      </div>

      {/* Consultation Form Modal */}
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceType="USA" />
    </section>
  )
}

function FeatureKeyFrame({ feature, index, onConsultClick }: { feature: any, index: number, onConsultClick: () => void }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

          {/* Text Content */}
          <motion.div
            style={{ opacity, scale }}
            className="flex-1 space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">{feature.subtitle}</span>
              </div>

              <h3 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                {feature.title}
              </h3>

              <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-cyan-500/30 pl-6">
                {feature.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {feature.features.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 pt-4">
              <button onClick={onConsultClick} className="group flex items-center gap-3 text-white font-semibold">
                <span className="border-b border-cyan-500 pb-1 group-hover:border-white transition-colors">Start Application</span>
                <ArrowRight className="w-5 h-5 text-cyan-500 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900 border border-slate-800">
                <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                {feature.stats.showCounter ? (
                  <CompanyCounter />
                ) : (
                  <>
                    <span className="text-sm font-bold text-white">{feature.stats.value}</span>
                    <span className="text-xs text-slate-500 uppercase">{feature.stats.label}</span>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Image Content - Parallax */}
          <motion.div
            style={{ y }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden group shadow-2xl shadow-cyan-900/20">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-white font-bold text-lg mb-1">{feature.title}</div>
                <div className="text-slate-300 text-sm">Premium Service • Instant Setup</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
