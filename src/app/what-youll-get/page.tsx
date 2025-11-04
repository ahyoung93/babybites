'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

const weeks = [
  { week: 1, topic: "Fertility 101" },
  { week: 2, topic: "Your egg prep starts now" },
  { week: 3, topic: "Extra lifestyle tweaks for fertility" },
  { week: 4, topic: "Book your preconception checkup" },
  { week: 5, topic: "Consider genetic screening early" },
  { week: 6, topic: "Boost sperm health" },
  { week: 7, topic: "Learn your fertile window and make it count" },
  { week: 8, topic: "Learn how to test" },
  { week: 9, topic: "Don't let myths sway you" },
  { week: 10, topic: "Don't mistake a marathon for a sprint" },
]

export default function WhatYoullGet() {
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

      <Navigation currentPage="what-youll-get" />

      {/* Content */}
      <div className="flex-grow max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative w-full pt-32 sm:pt-28 pb-32 sm:pb-36">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-warm-beige-900 mb-6 tracking-tight">
            What You'll Get
          </h1>
          <p className="text-lg sm:text-xl text-warm-beige-700 max-w-2xl mx-auto leading-relaxed font-light">
            Weekly bite-sized lessons designed to empower your fertility journey
          </p>
        </div>

        {/* What You'll Receive Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {/* Card 1 */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden border border-warm-blue-100/50">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-warm-blue-200/30 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-warm-blue-400 to-warm-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-warm-beige-900 mb-3">
                Facts About Your Body
              </h4>
              <p className="text-warm-beige-700 leading-relaxed text-base">
                Understand the science behind your cycle and what really impacts fertility
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden border border-soft-pink-100/50">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-soft-pink-200/40 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-soft-pink-400 to-soft-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-warm-beige-900 mb-3">
                Answers to FAQs
              </h4>
              <p className="text-warm-beige-700 leading-relaxed text-base">
                Clear, evidence-based answers to the questions keeping you up at night
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden border border-warm-beige-100/50 sm:col-span-2 lg:col-span-1">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-warm-beige-200/30 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-warm-beige-400 to-warm-beige-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-warm-beige-900 mb-3">
                Curated Product Picks
              </h4>
              <p className="text-warm-beige-700 leading-relaxed text-base">
                Time-saving recommendations for supplements, apps, and trusted tools
              </p>
            </div>
          </div>
        </div>

        {/* 10-Week Curriculum Timeline */}
        <div className="bg-gradient-to-br from-white/90 to-warm-blue-50/50 backdrop-blur-sm rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-2xl border border-warm-blue-100/30">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-warm-beige-900 mb-4 tracking-tight">
              Your 10-Week Journey
            </h2>
            <p className="text-base sm:text-lg text-warm-beige-600 font-light">
              Each week builds on the last, guiding you step-by-step
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-2xl mx-auto">
            {weeks.map((item, index) => (
              <div key={item.week} className="relative flex items-start gap-4 sm:gap-6 pb-8 sm:pb-10 last:pb-0">
                {/* Vertical Line */}
                {index !== weeks.length - 1 && (
                  <div className="absolute left-[21px] sm:left-[23px] top-[48px] sm:top-[52px] w-0.5 h-[calc(100%-48px)] sm:h-[calc(100%-52px)] bg-gradient-to-b from-warm-blue-300 to-soft-pink-200"></div>
                )}

                {/* Circle */}
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-warm-blue-500 to-soft-pink-500 flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-sm sm:text-base tabular-nums">{item.week}</span>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-warm-blue-100/30 group h-[68px] sm:h-auto flex items-center">
                  <p className="text-sm sm:text-base text-warm-beige-700 leading-relaxed flex items-center w-full">
                    <span className="font-semibold text-warm-beige-900 inline-block w-16 sm:w-20">Week {item.week}</span>
                    <span className="mx-2">|</span>
                    <span className="flex-1">{item.topic}</span>
                  </p>
                </div>
              </div>
            ))}
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
      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-warm-beige-200/50 backdrop-blur-md bg-gradient-to-br from-sky-100/95 via-blue-50/95 to-pink-50/95 py-4 sm:py-10">
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
