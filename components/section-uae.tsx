'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Building2, FileCheck, Scale, ArrowRight, Sparkles, CheckCircle, Star } from 'lucide-react'
import ConsultationForm from '@/components/consultation-form'

export default function SectionUAE() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const services = [
    {
      title: 'Free Zone & Mainland',
      subtitle: '100% Ownership',
      description: 'Establish your business with 100% foreign ownership in premium UAE Free Zones. Access world-class infrastructure and strategic mainland support.',
      features: ['100% Foreign Ownership', 'Tax Benefits & Incentives', 'Fast Setup Process'],
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
      stats: { label: 'Free Zones', value: '45+' },
    },
    {
      title: 'Visa & Legal Support',
      subtitle: 'End-to-End Processing',
      description: 'Complete end-to-end visa processing, work permits, and legal entity formation with dedicated expert guidance throughout your UAE business journey.',
      features: ['Investor Visas', 'Work Permits', 'Legal Entity Setup'],
      icon: FileCheck,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop',
      stats: { label: 'Visas Processed', value: '1000+' },
    },
    {
      title: 'Compliance & Audit',
      subtitle: 'Regulatory Assurance',
      description: 'Stay compliant with ongoing regulatory support, audit preparation, and complete peace of mind for your UAE operations and business growth.',
      features: ['Regulatory Filing', 'Audit Support', '24/7 Expert Help'],
      icon: Scale,
      image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974&auto=format&fit=crop',
      stats: { label: 'Compliance Rate', value: '99%' },
    },
  ]

  return (
    <section ref={containerRef} id="uae" className="relative bg-background overflow-hidden pt-20">
      {/* Animated Background Fluid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-teal-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[-10%] w-[60vw] h-[60vw] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Header Part */}
      <div className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-semibold tracking-wide uppercase">Middle East Gateway</span>
          </motion.div>

          <h2 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            UAE
            <span className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-500 bg-clip-text text-transparent mt-2 tracking-normal">
              Business Redefined
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Transform your global ambitions into reality with our comprehensive, expedited UAE incorporation solutions.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-teal-500/50 to-transparent" />
          <span className="text-xs text-slate-500 uppercase tracking-[0.3em]">Scroll</span>
        </motion.div>
      </div>

      {/* Alternating Sections with Scroll Animations */}
      <div className="relative z-10 pb-32">
        {services.map((service, idx) => (
          <ServiceKeyFrame key={idx} service={service} index={idx} onConsultClick={() => setIsFormOpen(true)} />
        ))}
      </div>

      {/* Consultation Form Modal */}
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceType="UAE" />
    </section>
  )
}

function ServiceKeyFrame({ service, index, onConsultClick }: { service: any, index: number, onConsultClick: () => void }) {
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/20 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-teal-400" />
                </div>
                <span className="text-teal-400 font-bold tracking-widest text-sm uppercase">{service.subtitle}</span>
              </div>

              <h3 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                {service.title}
              </h3>

              <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-teal-500/30 pl-6">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 pt-4">
              <button onClick={onConsultClick} className="group flex items-center gap-3 text-white font-semibold">
                <span className="border-b border-teal-500 pb-1 group-hover:border-white transition-colors">Get Started</span>
                <ArrowRight className="w-5 h-5 text-teal-500 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900 border border-slate-800">
                <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <span className="text-sm font-bold text-white">{service.stats.value}</span>
                <span className="text-xs text-slate-500 uppercase">{service.stats.label}</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content - Parallax */}
          <motion.div
            style={{ y }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden group shadow-2xl shadow-teal-900/20">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-white font-bold text-lg mb-1">{service.title}</div>
                <div className="text-slate-300 text-sm">Dubai & Abu Dhabi • 7-Day Setup</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
