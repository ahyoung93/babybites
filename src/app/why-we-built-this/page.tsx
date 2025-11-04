'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function WhyWeBuiltThis() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        router.push(`/thank-you?email=${encodeURIComponent(email)}`)
      } else {
        alert('Something went wrong. Please try again.')
        setIsSubmitting(false)
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

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
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-warm-blue-700 bg-white/80 backdrop-blur-sm rounded-full border border-warm-blue-200 shadow-sm"
            >
              Why We Built This
            </Link>
          </div>
        </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative w-full pt-32 sm:pt-28 pb-32 sm:pb-36">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-warm-beige-900 mb-6 tracking-tight">
            Why We Built This
          </h1>
          <p className="text-lg sm:text-xl text-warm-beige-700 max-w-2xl mx-auto leading-relaxed font-light">
            Our story and what drives us to help you
          </p>
        </div>

        {/* Story Content */}
        <div className="bg-gradient-to-br from-warm-blue-50/70 via-soft-pink-50/50 to-warm-beige-50/60 backdrop-blur-sm rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-warm-blue-100/30 shadow-xl mb-12">
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/40 rounded-full -ml-24 -mt-24"></div>

          <div className="relative">
            <div className="max-w-3xl mx-auto leading-relaxed space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-warm-beige-900 mb-8">
                We've been there
              </h3>

              <p className="text-warm-beige-800 text-base sm:text-lg font-light">
                We're parents in tech who have been through the trying-to-conceive fog.
              </p>

              <p className="text-warm-beige-800 text-base sm:text-lg font-light">
                So we built the thing we wish we'd had: a single, trusted resource that does all the scouring for you. Our goal is to make this process feel less confusing and a lot more human.
              </p>

              <p className="text-warm-beige-800 text-base sm:text-lg font-light">
                We use AI to curate the latest research, then have board-certified OB/GYNs fact-check everything.
              </p>

              <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-warm-blue-400 shadow-sm">
                <p className="text-warm-beige-900 text-base sm:text-lg font-medium">
                  Your fertility journey deserves clarity. We're here to support you along the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3.5 rounded-full border-2 border-warm-blue-200 focus:border-warm-blue-400 focus:outline-none text-base text-warm-beige-900 placeholder:text-warm-blue-400"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 bg-gradient-to-r from-soft-pink-400 to-soft-pink-500 hover:from-soft-pink-500 hover:to-soft-pink-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold rounded-full transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                {isSubmitting ? 'Sending...' : 'Subscribe'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-warm-beige-200/50 backdrop-blur-md bg-gradient-to-br from-sky-100/95 via-blue-50/95 to-pink-50/95 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-warm-beige-600 text-sm font-light">
            &copy; 2025 Baby Bites. Made with care for your journey.
            {' · '}
            <Link href="/privacy" className="hover:text-warm-blue-500 transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </main>
  )
}
