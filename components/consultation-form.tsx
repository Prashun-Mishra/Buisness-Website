'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Mail, Phone, Building2, MessageSquare, Globe } from 'lucide-react'

interface ConsultationFormProps {
    isOpen: boolean
    onClose: () => void
    serviceType?: string // USA, UAE, or FEMA
}

export default function ConsultationForm({ isOpen, onClose, serviceType = 'General' }: ConsultationFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: serviceType,
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/send-consultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setTimeout(() => {
                    onClose()
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: serviceType,
                        message: '',
                    })
                    setSubmitStatus('idle')
                }, 2000)
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-2xl shadow-2xl pointer-events-auto overflow-hidden"
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 pointer-events-none" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            {/* Content */}
                            <div className="relative p-8">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 mb-4"
                                    >
                                        <Globe className="w-4 h-4 text-teal-400" />
                                        <span className="text-teal-300 text-sm font-semibold uppercase tracking-wide">{serviceType} Services</span>
                                    </motion.div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                        Start Your Consultation
                                    </h2>
                                    <p className="text-slate-400 text-sm">
                                        Fill out the form below and we'll get back to you within 24 hours
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                                <User className="w-4 h-4 text-teal-400" />
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-500 text-white placeholder:text-slate-500 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-teal-400" />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-500 text-white placeholder:text-slate-500 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-teal-400" />
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-500 text-white placeholder:text-slate-500 transition-colors"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>

                                        {/* Company */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                                <Building2 className="w-4 h-4 text-teal-400" />
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-500 text-white placeholder:text-slate-500 transition-colors"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    {/* Service Type */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-teal-400" />
                                            Service Type *
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-lg focus:outline-none focus:border-teal-500 text-white transition-colors"
                                        >
                                            <option value="USA" className="bg-slate-900 text-white py-2">USA Incorporation</option>
                                            <option value="UAE" className="bg-slate-900 text-white py-2">UAE Business Setup</option>
                                            <option value="FEMA" className="bg-slate-900 text-white py-2">FEMA Compliance</option>
                                            <option value="General" className="bg-slate-900 text-white py-2">General Inquiry</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4 text-teal-400" />
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-500 text-white placeholder:text-slate-500 transition-colors resize-none"
                                            placeholder="Tell us about your business needs..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${submitStatus === 'success'
                                            ? 'bg-green-600 hover:bg-green-700'
                                            : submitStatus === 'error'
                                                ? 'bg-red-600 hover:bg-red-700'
                                                : 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700'
                                            } text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : submitStatus === 'success' ? (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Sent Successfully!
                                            </>
                                        ) : submitStatus === 'error' ? (
                                            'Error - Please Try Again'
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Consultation Request
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
