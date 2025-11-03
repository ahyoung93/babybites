import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What You\'ll Get - Baby Bites',
  description: 'Weekly bite-sized lessons designed to empower your fertility journey. Your 10-week curriculum reviewed by OB/GYNs.',
  openGraph: {
    title: 'What You\'ll Get - Baby Bites',
    description: 'Weekly bite-sized lessons designed to empower your fertility journey. Your 10-week curriculum reviewed by OB/GYNs.',
  },
}

export default function WhatYoullGetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
