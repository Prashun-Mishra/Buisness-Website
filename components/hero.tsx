'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Globe, ShieldCheck, TrendingUp } from 'lucide-react'
import AnimatedGradientBackground from '@/components/animated-gradient-background'
import CompanyCounter from '@/components/company-counter'
import RotatingImages from '@/components/rotating-images'
import ConsultationForm from '@/components/consultation-form'

export default function Hero() {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-20 md:pt-20 md:pb-0">
            {/* Dynamic Background */}
            <AnimatedGradientBackground />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/0 via-black/40 to-black z-0" />

            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="space-y-8"
                    >
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                        >
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-slate-300 text-sm font-medium tracking-wide">Global Business Simplified</span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] md:leading-[0.95] tracking-tight">
                            Scale Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-emerald-500">
                                Business
                            </span> <br />
                            Globally
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                            Complete guidance for US incorporation, UAE business setup, and FEMA compliance. We handle the regulations so you can focus on growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <motion.button
                                onClick={() => setIsFormOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 group"
                            >
                                Start Your Journey
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center"
                            >
                                Explore Services
                            </motion.button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-8 grid grid-cols-2 md:flex md:items-center gap-6 md:gap-8 border-t border-white/10">
                            <div className="flex flex-col">
                                <CompanyCounter />
                            </div>
                            <div className="hidden md:block w-px h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <div className="text-2xl font-bold text-white">500+</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">Clients Served</div>
                            </div>
                            <div className="hidden md:block w-px h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <div className="text-2xl font-bold text-white">99%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">Success Rate</div>
                            </div>
                            <div className="hidden md:block w-px h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <div className="text-2xl font-bold text-white">24/7</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">Expert Support</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block h-[600px]"
                    >


                        {/* Central Abstract Shape/Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-full blur-[100px] animate-pulse" />

                        {/* Rotating Grid Images */}
                        <RotatingImages />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
            >
                <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll to explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>

            {/* Consultation Form Modal */}
            <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceType="General" />
        </section>
    )
}
