'use client'

import Link from 'next/link'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-pink-50 relative overflow-hidden flex flex-col">
      {/* Cloud background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[8%] w-[500px] h-32 bg-white rounded-[100%] blur-[60px] opacity-80"></div>
        <div className="absolute top-10 right-[15%] w-[450px] h-28 bg-white rounded-[100%] blur-[50px] opacity-75"></div>
        <div className="absolute top-40 left-[35%] w-[400px] h-24 bg-white rounded-[100%] blur-[55px] opacity-70"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-sky-100/95 via-blue-50/95 to-pink-50/95 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-semibold text-warm-blue-400 hover:text-warm-blue-500 transition-colors tracking-tight"
            >
              Baby Bites
            </Link>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="/what-youll-get"
                className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-warm-beige-800 hover:text-warm-blue-700 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 border border-warm-blue-100/50 hover:border-warm-blue-200 shadow-sm hover:shadow-md"
              >
                What You'll Get
              </Link>
              <Link
                href="/why-we-built-this"
                className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-warm-beige-800 hover:text-warm-blue-700 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 border border-warm-blue-100/50 hover:border-warm-blue-200 shadow-sm hover:shadow-md"
              >
                Why We Built This
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 relative w-full pt-32 sm:pt-28 pb-32 sm:pb-36">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-warm-blue-100/30">
          <h1 className="text-3xl sm:text-4xl font-semibold text-warm-beige-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-warm-beige-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-warm max-w-none space-y-6 text-warm-beige-800">
            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Baby Bites ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you visit our website and subscribe to our newsletter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email Address:</strong> When you subscribe to our newsletter</li>
                <li><strong>Submission Timestamp:</strong> When you signed up</li>
                <li><strong>Source Page:</strong> Which page you signed up from (for analytics purposes)</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website (via analytics tools)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send you our weekly fertility guidance newsletter</li>
                <li>Provide you with the 10-week educational series</li>
                <li>Improve our content and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong>We will never:</strong> Sell, rent, or share your email address with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">4. Data Storage and Security</h2>
              <p className="leading-relaxed">
                Your email address is stored securely in our database hosted by Vercel. We use industry-standard security measures including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Encrypted connections (SSL/TLS)</li>
                <li>Secure database storage</li>
                <li>Regular security updates</li>
                <li>Access controls and authentication</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">5. Your Rights</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your data</li>
                <li><strong>Unsubscribe:</strong> Opt out of emails at any time (unsubscribe link in every email)</li>
                <li><strong>Object:</strong> Object to processing of your data</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, please contact us by responding to any email from us or at the email provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">6. Cookies and Analytics</h2>
              <p className="leading-relaxed">
                We use analytics tools (such as Google Analytics) to understand how visitors use our website. These tools may use cookies to collect anonymous usage data. You can opt out of analytics tracking through your browser settings or using browser extensions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">7. Third-Party Services</h2>
              <p className="leading-relaxed mb-4">We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Vercel:</strong> Website hosting and database storage</li>
                <li><strong>Google Analytics:</strong> Website analytics (if enabled)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These services have their own privacy policies and may collect data as described in their respective policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">8. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our service is intended for adults aged 18 and over. We do not knowingly collect information from children under 18.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">9. International Data Transfers</h2>
              <p className="leading-relaxed">
                Your data may be stored on servers located outside your country of residence. By subscribing, you consent to this transfer. We ensure appropriate safeguards are in place.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify subscribers of any material changes via email. The "Last updated" date at the top of this policy indicates when it was last revised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-beige-900 mt-8 mb-4">11. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy or want to exercise your rights, please contact us by responding to any email from Baby Bites.
              </p>
              <p className="leading-relaxed mt-4">
                <strong>Email:</strong> Reply to any Baby Bites email
                <br />
                <strong>Response Time:</strong> We respond within 24 hours
              </p>
            </section>

            <section className="mt-12 pt-6 border-t border-warm-beige-200">
              <h2 className="text-2xl font-semibold text-warm-beige-900 mb-4">GDPR Compliance</h2>
              <p className="leading-relaxed">
                For users in the European Union, we comply with the General Data Protection Regulation (GDPR). Your data is processed lawfully based on your consent when you subscribe to our newsletter. You may withdraw consent at any time by unsubscribing.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-warm-beige-900 mb-4">CAN-SPAM Compliance</h2>
              <p className="leading-relaxed">
                We comply with the CAN-SPAM Act. Every email includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Clear sender identification</li>
                <li>Accurate subject lines</li>
                <li>A working unsubscribe mechanism</li>
                <li>Our physical mailing address</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-warm-beige-200">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-soft-pink-400 to-soft-pink-500 hover:from-soft-pink-500 hover:to-soft-pink-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-warm-beige-200/50 backdrop-blur-md bg-gradient-to-br from-sky-100/95 via-blue-50/95 to-pink-50/95 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-warm-beige-600 text-sm font-light">
            &copy; 2025 Baby Bites. Made with care for your journey.
          </p>
        </div>
      </footer>
    </main>
  )
}
