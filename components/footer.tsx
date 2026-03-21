'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Facebook, Instagram, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react'
import ConsultationForm from '@/components/consultation-form'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const sections = [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about-us' },
        { text: 'Contact Us', onClick: () => setIsFormOpen(true) },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'USA Expansion', href: '/usa' },
        { text: 'UAE Setup', href: '/uae' },
        { text: 'FEMA Compliance', href: '/fema' },
        { text: 'Tax Filing', href: '/tax-filing' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '/privacy-policy' },
        { text: 'Terms of Service', href: '/terms-of-service' },
        { text: 'Cookie Policy', href: '/cookie-policy' },
        { text: 'Disclaimer', href: '/disclaimer' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="relative bg-background border-t border-slate-800 pt-20 pb-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand section (2 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/aetos_associates_logo.jpg" 
                alt="Aetos Associates Logo" 
                width={40} 
                height={40} 
                className="rounded-md object-contain"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-tight text-lg">Aetos</span>
                <span className="text-slate-500 text-xs font-bold tracking-widest">ASSOCIATES</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              1. Office Number 268, Sector 37, Faridabad, Haryana - 121003
            </p>

            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link sections */}
          {sections.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants} className="md:col-span-1">
              <h4 className="text-white font-bold mb-6 text-sm">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, lidx) => (
                  <li key={lidx}>
                    {link.onClick ? (
                      <button onClick={link.onClick} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium block hover:translate-x-1 duration-300 text-left">
                        {link.text}
                      </button>
                    ) : (
                      <Link href={link.href!} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium block hover:translate-x-1 duration-300">
                        {link.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>



        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 border-t border-slate-900 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Aetos Associates. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceType="General" />
    </footer>
  )
}
