import React from 'react'

export default function AboutUs() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 border-b border-white/10 pb-6">About Us</h1>
        
        <div className="text-slate-300 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who We Are</h2>
            <p>Aetos Associates is your trusted partner for global business expansion, tax compliance, and regulatory services. We simplify complex international business requirements for your growth. Whether you are expanding to the USA, setting up in the UAE, or ensuring FEMA compliance in India, our expert team provides end-to-end guidance to streamline your global journey.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Mission</h2>
            <p>Our mission is to empower businesses to scale globally with confidence. We take the friction out of cross-border operations by handling the intricate legal, tax, and regulatory compliance frameworks so that you can focus on what matters most: growing your business.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
              <li><strong>Global Expertise:</strong> Specialized knowledge in US incorporations, UAE free trade zones, and Indian FEMA regulations.</li>
              <li><strong>End-to-End Solutions:</strong> From entity formation to banking, tax filing, and annual compliance.</li>
              <li><strong>Client-Centric Approach:</strong> Dedicated support and strategic advisory tailored to your specific business model.</li>
              <li><strong>Reliability:</strong> Trusted by forward-thinking companies to manage comprehensive cross-border compliance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Contact</h2>
            <p>Ready to take your business global? Reach out to us via our consultation form or visit us at our office to discuss your expansion strategy.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
