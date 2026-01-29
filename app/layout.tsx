import React from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import LenisScroll from '@/components/lenis-scroll'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aetos Associates | USA, UAE & FEMA Compliance Services',
  description: 'Expert guidance for company formation in Wyoming, Delaware, and Dubai. Complete FEMA compliance, tax filing, and business solutions by Aetos Associates.',
  icons: {
    icon: [
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#1a1a1a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} antialiased text-white bg-background`}>
        <LenisScroll />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
