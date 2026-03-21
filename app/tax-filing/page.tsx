import React from 'react'

export default function TaxFiling() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 border-b border-white/10 pb-6">Tax Filing Services</h1>
        
        <div className="text-slate-300 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Comprehensive Tax Solutions</h2>
            <p>At Aetos Associates, we provide end-to-end tax filing and compliance solutions for businesses operating globally. Whether you are navigating the complexities of the IRS in the United States, managing Corporate Tax in the UAE, or handling international taxation frameworks, our experts ensure your business remains compliant and tax-efficient.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Tax Services</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
              <li><strong>US Taxation:</strong> Federal and State tax returns, EIN & ITIN applications, US GAAP Accounting, and ongoing IRS compliance.</li>
              <li><strong>UAE Corporate Tax:</strong> Structuring, registration, and filing support under the UAE Corporate Tax regulations.</li>
              <li><strong>International Tax Advisory:</strong> Cross-border tax planning, avoiding double taxation, and transfer pricing.</li>
              <li><strong>Annual Accounting:</strong> Bookkeeping, financial ledger maintenance, and annual financial reporting.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Professional Tax Filing?</h2>
            <p>Global tax regulations are constantly evolving. Falling out of compliance can result in severe penalties and operational hurdles. By partnering with Aetos Associates, you benefit from expert strategies designed to minimize your liabilities while ensuring 100% adherence to all regional laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Get Started</h2>
            <p>Ready to structure your taxes efficiently? Reach out to us via our consultation form or visit us at our office to discuss your tax filing needs.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
