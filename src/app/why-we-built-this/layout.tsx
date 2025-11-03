import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why We Built This - Baby Bites',
  description: 'Our story and what drives us to help you. Parents in tech who believe trying to conceive deserves better support.',
  openGraph: {
    title: 'Why We Built This - Baby Bites',
    description: 'Our story and what drives us to help you. Parents in tech who believe trying to conceive deserves better support.',
  },
}

export default function WhyWeBuiltThisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
