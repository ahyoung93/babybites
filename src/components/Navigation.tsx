'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavigationProps {
  currentPage?: 'home' | 'what-youll-get' | 'why-we-built-this'
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-sky-100/95 via-blue-50/95 to-pink-50/95 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-semibold text-warm-blue-400 hover:text-warm-blue-500 transition-colors tracking-tight">
            Baby Bites
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-4">
            <Link
              href="/what-youll-get"
              className={`px-6 py-2.5 text-base font-medium backdrop-blur-sm rounded-full transition-all duration-300 shadow-sm whitespace-nowrap ${
                currentPage === 'what-youll-get'
                  ? 'text-warm-blue-700 bg-white/80 border border-warm-blue-200'
                  : 'text-warm-beige-800 hover:text-warm-blue-700 bg-white/60 hover:bg-white/80 border border-warm-blue-100/50 hover:border-warm-blue-200 hover:shadow-md'
              }`}
            >
              What You'll Get
            </Link>
            <Link
              href="/why-we-built-this"
              className={`px-6 py-2.5 text-base font-medium backdrop-blur-sm rounded-full transition-all duration-300 shadow-sm whitespace-nowrap ${
                currentPage === 'why-we-built-this'
                  ? 'text-warm-blue-700 bg-white/80 border border-warm-blue-200'
                  : 'text-warm-beige-800 hover:text-warm-blue-700 bg-white/60 hover:bg-white/80 border border-warm-blue-100/50 hover:border-warm-blue-200 hover:shadow-md'
              }`}
            >
              Why We Built This
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 text-warm-blue-400 hover:text-warm-blue-500 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/what-youll-get"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-warm-beige-800 hover:text-warm-blue-700 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-2xl transition-all duration-300 border border-warm-blue-100/50 hover:border-warm-blue-200 shadow-sm"
            >
              What You'll Get
            </Link>
            <Link
              href="/why-we-built-this"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-warm-beige-800 hover:text-warm-blue-700 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-2xl transition-all duration-300 border border-warm-blue-100/50 hover:border-warm-blue-200 shadow-sm"
            >
              Why We Built This
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
