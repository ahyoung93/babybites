'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'

export default function Home() {
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
        const errorData = await response.json()
        console.error('Error details:', errorData)
        alert(`Error: ${errorData.error}${errorData.details ? '\nDetails: ' + errorData.details : ''}`)
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Fetch error:', error)
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

      <Navigation currentPage="home" />

      {/* Hero Section */}
      <div className="flex-grow relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-36 sm:pt-32 pb-32 sm:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-beige-900 leading-tight tracking-tight">
                Conceive with Clarity
              </h1>
              <div className="space-y-1">
                <p className="text-base sm:text-lg lg:text-xl text-warm-beige-800 leading-relaxed">
                  5 minutes a week, 10 weeks to clarity
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-warm-beige-800 leading-relaxed">
                  Step-by-step guidance reviewed by OB/GYNs
                </p>
              </div>
            </div>

            {/* Subscribe Button */}
            <div id="signup">
              <form onSubmit={handleSubmit} className="max-w-md">
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

          {/* Right Side - Trust Features */}
          <div className="space-y-3 sm:space-y-4">
            <div className="group flex items-start gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:shadow-lg transition-all duration-300 border border-warm-blue-100/30">
              <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-warm-blue-500 to-warm-blue-700 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-warm-beige-900 mb-2">
                  Made by Parents in Tech
                </h4>
                <p className="text-warm-beige-700 leading-relaxed text-sm sm:text-base">
                  We've been through this journey ourselves and understand what you're searching for
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:shadow-lg transition-all duration-300 border border-soft-pink-100/30">
              <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-soft-pink-400 to-soft-pink-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-warm-beige-900 mb-2">
                  Powered by AI
                </h4>
                <p className="text-warm-beige-700 leading-relaxed text-sm sm:text-base">
                  Latest technology to curate and synthesize research from trusted medical sources
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:shadow-lg transition-all duration-300 border border-warm-beige-100/30">
              <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-warm-beige-400 to-warm-beige-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-warm-beige-900 mb-2">
                  Expert-Reviewed by OB/GYNs
                </h4>
                <p className="text-warm-beige-700 leading-relaxed text-sm sm:text-base">
                  Every lesson is fact-checked by board-certified OB/GYNs for medical accuracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-warm-beige-200/50 backdrop-blur-md bg-gradient-to-br from-sky-100/95 via-blue-50/95 to-pink-50/95 py-4 sm:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-warm-beige-600 text-sm font-light">
            &copy; 2025 Baby Dust. Made with care for your journey.
            {' · '}
            <Link href="/privacy" className="hover:text-warm-blue-500 transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </main>
  )
}
