import type { Metadata } from 'next'
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google'

import Header from '@/components/Header'
import SiteFooter from '@/components/SiteFooter'

import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-brand-script',
})

const siteTitle = 'Fryzjer Gliwice – Polka, salon fryzjersko-trychologiczny'
const siteDescription =
  'Polka – fryzjer w Gliwicach (ul. Daszyńskiego 226B). Kameralny salon fryzjersko-trychologiczny: strzyżenie, koloryzacja, pielęgnacja włosów i skóry głowy. 20+ lat doświadczenia.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.salonpolka.pl'),
  title: {
    default: siteTitle,
    template: '%s | Polka – fryzjer Gliwice',
  },
  description: siteDescription,
  keywords: [
    'fryzjer Gliwice',
    'salon fryzjerski Gliwice',
    'trycholog Gliwice',
    'salon fryzjersko-trychologiczny',
    'Polka Gliwice',
    'fryzjer Daszyńskiego Gliwice',
    'koloryzacja włosów Gliwice',
    'pielęgnacja włosów Gliwice',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.salonpolka.pl',
    siteName: 'Salon Polka - Fryzjerstwo Trychologiczne',
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/polka-logo-transparent.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${cormorant.variable} ${greatVibes.variable}`}>
        <div className="app">
          <Header />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
