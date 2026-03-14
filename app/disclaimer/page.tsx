import React from 'react'

export default function Disclaimer() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 border-b border-white/10 pb-6">Legal Disclaimer</h1>
        
        <div className="text-slate-300 space-y-6 leading-relaxed">
          <p className="text-sm text-slate-500">Last Updated: March 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. General Information Purpose Only</h2>
            <p>The information provided by Aetos Associates on this website is for general informational purposes only. While we provide specialized consulting and processing services for USA Incorporation, UAE Business Setup, and FEMA Compliance, the content on this website should not be construed as strict legal or financial advice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Professional Advice</h2>
            <p>We are a business consultancy and incorporation service, not a substitute for traditional legal counsel or certified public accounting firms in all jurisdictions. While we assist with IRS compliance, state filings, tax planning, and RBI case management, clients should conduct their own due diligence or consult independent legal professionals when dealing with particularly complex or unprecedented legal matters.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Accuracy of Information</h2>
            <p>While we strive to keep our information, including statistics like "500+ Clients Served", "99% Success Rate", pricing figures ($150+ for USA, AED 10k+ for UAE), and processing timelines up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics. Regulatory frameworks change frequently.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. External Links</h2>
            <p>Through this website, you are able to link to other websites which are not under the control of Aetos Associates. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Limitation of Liability</h2>
            <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or our consultation services.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
