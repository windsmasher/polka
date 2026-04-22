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

const siteTitle = 'Polka – Salon fryzjerski'
const siteDescription = 'Salon fryzjersko trychologiczny.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.salonpolka.pl'),
  title: {
    default: siteTitle,
    template: '%s | Polka',
  },
  description: siteDescription,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.salonpolka.pl',
    siteName: 'Polka',
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
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
