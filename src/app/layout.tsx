import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baby Dust - Conceive with Clarity',
  description: '5 minutes a week, 10 weeks to clarity. Step-by-step guidance reviewed by OB/GYNs. Your fertility journey deserves clarity.',
  keywords: ['fertility', 'trying to conceive', 'TTC', 'pregnancy', 'conception', 'fertility tips', 'OBGYN', 'preconception'],
  authors: [{ name: 'Baby Dust Team' }],
  creator: 'Baby Dust',
  publisher: 'Baby Dust',
  metadataBase: new URL('https://babydust.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://babydust.io',
    title: 'Baby Dust - Conceive with Clarity',
    description: '5 minutes a week, 10 weeks to clarity. Step-by-step guidance reviewed by OB/GYNs.',
    siteName: 'Baby Dust',
    images: [
      {
        url: '/og-image.png', // We'll create this
        width: 1200,
        height: 630,
        alt: 'Baby Dust - Fertility guidance reviewed by OB/GYNs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baby Dust - Conceive with Clarity',
    description: '5 minutes a week, 10 weeks to clarity. Step-by-step guidance reviewed by OB/GYNs.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '6vHoYNO4OG2II9FtU66wVT2AvKdJobJEN3JVOjq2F2E',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
