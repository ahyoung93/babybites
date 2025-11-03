import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Baby Bites',
  description: 'Our commitment to protecting your privacy. Learn how we collect, use, and protect your information.',
  openGraph: {
    title: 'Privacy Policy - Baby Bites',
    description: 'Our commitment to protecting your privacy. Learn how we collect, use, and protect your information.',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
