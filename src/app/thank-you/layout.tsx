import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You - Baby Bites',
  description: 'Thanks for joining Baby Bites. You\'ve taken the first step toward a calmer trying-to-conceive journey.',
  robots: {
    index: false, // Don't index thank-you page
    follow: true,
  },
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
