'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Our Team', href: '#' },
        { text: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'USA Expansion', href: '#usa' },
        { text: 'UAE Setup', href: '#uae' },
        { text: 'FEMA Compliance', href: '#fema' },
        { text: 'Tax Filing', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Client Guides', href: '#' },
        { text: 'FAQs', href: '#' },
        { text: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '/privacy-policy' },
        { text: 'Terms of Service', href: '#' },
        { text: 'Cookie Policy', href: '#' },
        { text: 'Disclaimer', href: '#' },
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
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-teal-500/20">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-tight text-lg">Aetos</span>
                <span className="text-slate-500 text-xs font-bold tracking-widest">ASSOCIATES</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Your trusted partner for global business expansion, tax compliance, and regulatory services. We simplify complex international business requirements for your growth.
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
                    <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium block hover:translate-x-1 duration-300">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-slate-900 pt-12 pb-12"
        >
          <div className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
              <p className="text-slate-400 text-sm">Get the latest updates on international compliance regulations and business opportunities.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-background/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary w-full md:w-80"
              />
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all flex items-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
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
    </footer>
  )
}
