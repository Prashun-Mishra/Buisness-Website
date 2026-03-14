import React from 'react'

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 border-b border-white/10 pb-6">Terms of Service</h1>
        
        <div className="text-slate-300 space-y-6 leading-relaxed">
          <p className="text-sm text-slate-500">Last Updated: March 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Agreement to Terms</h2>
            <p>These Terms of Service constitute a legally binding agreement made between you and Aetos Associates concerning your access to and use of our website and services. You agree that by accessing the site, you have read, understood, and agreed to be bound by all of these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Services</h2>
            <p>Aetos Associates provides consulting and facilitation services for USA Expansion, UAE Setup, and FEMA Compliance, among others. While we strive to ensure accurate processing of incorporations, tax filings, and legal setups, all services are subject to the rules and regulations of the respective jurisdictions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. User Representations</h2>
            <p>By using the Site and our services, you represent and warrant that:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
              <li>All registration information you submit is true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
              <li>You have the legal capacity to enter into these Terms of Service.</li>
              <li>Your use of the site or services does not violate any applicable law or regulation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Fees and Payment</h2>
            <p>All pricing (such as our USA incorporation packages starting at $150+ and UAE setups from AED 10k+) are subject to change without notice. You agree to provide current, complete, and accurate purchase and account information for all purchases made via our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Disclaimer of Warranties</h2>
            <p>Our site and services are provided on an "as-is" and "as-available" basis. We disclaim all warranties of any kind, whether express or implied, relating to our services, including but not limited to, implied warranties of merchantability and fitness for a particular purpose.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Contact Information</h2>
            <p>For any questions or concerns regarding these terms, please contact us at legal@aetosassociates.com.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
