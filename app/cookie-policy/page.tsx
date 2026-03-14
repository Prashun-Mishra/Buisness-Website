import React from 'react'

export default function CookiePolicy() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 border-b border-white/10 pb-6">Cookie Policy</h1>
        
        <div className="text-slate-300 space-y-6 leading-relaxed">
          <p className="text-sm text-slate-500">Last Updated: March 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They point to your browser and allow a site or a third party to recognize you and make your next visit easier and the service more useful to you.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. How We Use Cookies</h2>
            <p>Aetos Associates uses cookies for several purposes:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
              <li><strong>Essential Cookies:</strong> These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site (like our consultation forms).</li>
              <li><strong>Performance and Analytics Cookies:</strong> These cookies collect information about how you use our website, like which pages you visited and which links you clicked on (e.g., USA, UAE, FEMA sections). None of this information can be used to identify you. It is all aggregated and, therefore, anonymized.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make while browsing. For instance, we may remember your geographic location to ensure you see localized services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Third-Party Cookies</h2>
            <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website. These may include tools for analytics, tracking, or marketing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Your Choices Regarding Cookies</h2>
            <p>If you prefer to avoid the use of cookies on the website, first you must disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Contact Information</h2>
            <p>For inquiries regarding our use of cookies, please contact us at privacy@aetosassociates.com.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
