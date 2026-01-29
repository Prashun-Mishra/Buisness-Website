'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ConsultationForm from '@/components/consultation-form'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [active, setActive] = useState<string>('home')
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setActive(id)

    // If not on home page, navigate to home first
    if (pathname !== '/') {
      router.push('/')
      // Wait for navigation and page load, then scroll
      setTimeout(() => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { id: 'usa', label: 'USA Expansion' },
    { id: 'uae', label: 'UAE Setup' },
    { id: 'fema', label: 'FEMA Compliance' },
  ]



  // ... (existing code)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/aetos_associates_logo.jpg"
                alt="Aetos Associates"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-white font-bold text-lg tracking-tight leading-none group-hover:text-primary transition-colors">Aetos</span>
              <span className="text-slate-500 text-xs font-bold tracking-widest leading-none">ASSOCIATES</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
            <button onClick={() => setIsFormOpen(true)} className="ml-4 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all hover:scale-105">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[55] md:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-background/95 backdrop-blur-xl border-l border-white/10 z-[60] p-6 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-white font-bold text-lg">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleNavClick(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${active === item.id
                        ? 'bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-white border border-teal-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-auto pt-8 border-t border-white/10">
                  <button onClick={() => { setIsFormOpen(true); setIsMobileMenuOpen(false); }} className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all active:scale-95">
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Consultation Form Modal */}
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceType="General" />
    </>
  )
}
