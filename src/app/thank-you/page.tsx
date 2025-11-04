'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-pink-50 relative overflow-hidden flex flex-col">
      {/* Cloud background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large visible clouds */}
        <div className="absolute top-20 left-[8%] w-[500px] h-32 bg-white rounded-[100%] blur-[60px] opacity-80"></div>
        <div className="absolute top-10 right-[15%] w-[450px] h-28 bg-white rounded-[100%] blur-[50px] opacity-75"></div>
        <div className="absolute top-40 left-[35%] w-[400px] h-24 bg-white rounded-[100%] blur-[55px] opacity-70"></div>
        <div className="absolute top-64 right-[25%] w-[480px] h-30 bg-white rounded-[100%] blur-[58px] opacity-78"></div>
        <div className="absolute top-96 left-[20%] w-[420px] h-26 bg-white rounded-[100%] blur-[52px] opacity-72"></div>
        <div className="absolute top-[450px] right-[8%] w-[460px] h-28 bg-white rounded-[100%] blur-[56px] opacity-76"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-sky-100/95 via-blue-50/95 to-pink-50/95 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="text-xl sm:text-2xl font-semibold text-warm-blue-400 hover:text-warm-blue-500 transition-colors tracking-tight"
          >
            Baby Bites
          </a>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="/what-youll-get"
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-warm-beige-800 hover:text-warm-blue-700 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 border border-warm-blue-100/50 hover:border-warm-blue-200 shadow-sm hover:shadow-md"
            >
              What You'll Get
            </a>
            <a
              href="/why-we-built-this"
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-warm-beige-800 hover:text-warm-blue-700 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 border border-warm-blue-100/50 hover:border-warm-blue-200 shadow-sm hover:shadow-md"
            >
              Why We Built This
            </a>
          </div>
        </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative w-full pt-32 sm:pt-28 pb-32 sm:pb-36">
      <div className="max-w-3xl text-center mx-auto animate-fade-in-up">
        {/* Success Icon */}
        <div className="mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-warm-blue-500 to-warm-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <svg className="w-11 h-11 sm:w-14 sm:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-warm-beige-900 mb-4 tracking-tight">
            You're In!
          </h1>
          <div className="h-1 bg-gradient-to-r from-warm-blue-400 via-soft-pink-400 to-warm-beige-400 rounded-full w-24 mx-auto opacity-60"></div>
        </div>

        <p className="text-lg sm:text-xl lg:text-2xl text-warm-beige-800 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Thanks for joining Baby Bites.
        </p>

        {email && (
          <p className="text-sm sm:text-base text-warm-beige-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We'll send updates to: <span className="font-semibold text-warm-beige-900">{email}</span>
          </p>
        )}

        {/* What to Expect Section */}
        <div className="bg-gradient-to-br from-white/90 to-warm-blue-50/50 backdrop-blur-sm rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-2xl border border-warm-blue-100/30 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-warm-beige-900 mb-6 sm:mb-8 tracking-tight">
            What to expect next
          </h2>
          <div className="space-y-4 sm:space-y-5 text-left max-w-2xl mx-auto">
            <div className="group flex items-start gap-4 sm:gap-5 bg-gradient-to-r from-warm-blue-50/80 to-transparent backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 border border-warm-blue-100/30">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-warm-blue-500 to-warm-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-semibold text-warm-beige-900 mb-1">
                  A welcome email
                </h3>
                <p className="text-warm-beige-700 leading-relaxed text-sm sm:text-base">
                  is heading to your inbox by end of day today.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 sm:gap-5 bg-gradient-to-r from-soft-pink-50/80 to-transparent backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 border border-soft-pink-100/30">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-soft-pink-400 to-soft-pink-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-semibold text-warm-beige-900 mb-1">
                  Your first issue
                </h3>
                <p className="text-warm-beige-700 leading-relaxed text-sm sm:text-base">
                  will arrive this Sunday.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 sm:gap-5 bg-gradient-to-r from-warm-beige-50/80 to-transparent backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 border border-warm-beige-100/30">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-warm-beige-400 to-warm-beige-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-semibold text-warm-beige-900 mb-1">
                  Reach us
                </h3>
                <p className="text-warm-beige-700 leading-relaxed text-sm sm:text-base">
                  by responding to any emails from us. We respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* From Our Team */}
        <div className="bg-gradient-to-br from-warm-blue-50/70 via-soft-pink-50/50 to-warm-beige-50/60 backdrop-blur-sm rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-warm-blue-100/30 shadow-xl">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/40 rounded-full -ml-20 -mt-20"></div>

          <div className="relative">
            <div className="mb-6">
              <span className="text-2xl sm:text-3xl">🤍</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-warm-beige-900 mb-4 sm:mb-6 tracking-tight">
              From our team
            </h2>
            <p className="text-base sm:text-lg text-warm-beige-800 leading-relaxed max-w-2xl mx-auto mb-4 font-light">
              We built this because we needed it, too. We're parents in tech who believe trying to conceive deserves better support. Thank you for trusting us.
            </p>
            <p className="text-warm-beige-600 font-medium">
              – The Baby Bites Team
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-warm-beige-200/50 backdrop-blur-md bg-gradient-to-br from-sky-100/95 via-blue-50/95 to-pink-50/95 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-warm-beige-600 text-sm font-light">
            &copy; 2025 Baby Bites. Made with care for your journey.
            {' · '}
            <a href="/privacy" className="hover:text-warm-blue-500 transition-colors">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </main>
  )
}

export default function ThankYou() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}
