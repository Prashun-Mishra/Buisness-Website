import React from 'react'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 border-b border-white/10 pb-6">Privacy Policy</h1>
        
        <div className="text-slate-300 space-y-6 leading-relaxed">
          <p className="text-sm text-slate-500">Last Updated: March 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Information We Collect</h2>
            <p>At Aetos Associates, we collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the website.</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
              <li><strong>Contact Data:</strong> Name, email address, phone number, and company name.</li>
              <li><strong>Service Data:</strong> Details about your inquiry (e.g., USA Expansion, UAE Setup, FEMA Compliance).</li>
              <li><strong>Automated Data:</strong> IP address, browser and device characteristics, operating system, language preferences, and referring URLs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. How We Use Your Information</h2>
            <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
              <li>To facilitate account creation and logon process.</li>
              <li>To post testimonials with your consent.</li>
              <li>To respond to user inquiries and offer support.</li>
              <li>To send administrative information to you.</li>
              <li>To send you marketing and promotional communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Security of Your Information</h2>
            <p>We implement appropriate technical and organizational security measures to protect the security of any personal information we process, including ISO 27001 certified mechanisms and bank-grade security protocols. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Your Privacy Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to request access, correction, deletion, or restriction of your information. Contact us for any privacy-related requests.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Contact Us</h2>
            <p>If you have questions or comments about this policy, you may email us at privacy@aetosassociates.com.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
