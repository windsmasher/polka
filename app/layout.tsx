import type { Metadata } from 'next'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-body',
})

const siteTitle = 'Polka – Salon fryzjerski'
const siteDescription =
  'Polka – Salon fryzjerski. Strona w budowie. Niedługo nowa strona salonu.'

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${cormorant.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
