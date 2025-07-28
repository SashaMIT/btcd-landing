import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import ErrorBoundary from '@/components/ErrorBoundary'
// import PWAInstaller from '@/components/PWAInstaller'

export const metadata: Metadata = {
  title: {
    default: 'BTCD - The First Bitcoin-Native Stablecoin | Unlock Your Bitcoin Without Selling',
    template: '%s | BTCD - Bitcoin-Native Stablecoin'
  },
  description: 'BTCD is the world\'s first fully Bitcoin-backed stablecoin. Put your Bitcoin to work without selling it. 100% transparent, Bitcoin-grade security, self-sustaining protocol built on Elastos.',
  keywords: [
    'BTCD',
    'Bitcoin stablecoin',
    'Bitcoin-native stablecoin',
    'Bitcoin DeFi',
    'Bitcoin backed stablecoin',
    'Elastos',
    'cryptocurrency',
    'DeFi',
    'Bitcoin finance',
    'non-custodial stablecoin',
    'Bitcoin collateral',
    'P2WSH',
    'Bitcoin locking scripts',
    'decentralized finance'
  ],
  authors: [{ name: 'BTCD Protocol Team' }],
  creator: 'BTCD Protocol',
  publisher: 'BTCD Protocol',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://btcd.finance'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'zh-CN': '/zh',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'BTCD - The First Bitcoin-Native Stablecoin',
    description: 'Put your Bitcoin to work without selling it. BTCD is the world\'s first fully Bitcoin-backed stablecoin with 100% transparency and Bitcoin-grade security.',
    siteName: 'BTCD Protocol',
    images: [
      {
        url: '/BTCD stars.jpg',
        width: 1200,
        height: 630,
        alt: 'BTCD - The First Bitcoin-Native Stablecoin',
        type: 'image/jpeg',
      },
      {
        url: '/BTCD Logo/BTCD Logo 1.png',
        width: 512,
        height: 512,
        alt: 'BTCD Protocol Logo',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTCD - The First Bitcoin-Native Stablecoin',
    description: 'Put your Bitcoin to work without selling it. 100% Bitcoin-backed, transparent, and secure.',
    images: ['/BTCD stars.jpg'],
    creator: '@BTCDProtocol',
    site: '@BTCDProtocol',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/BTCD%20Logo/BTCD%20%233.svg', type: 'image/svg+xml' },
      { url: '/BTCD%20Logo/BTCD%20Logo%201.png', sizes: '32x32', type: 'image/png' },
      { url: '/BTCD%20Logo/BTCD%20Logo%201.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/BTCD%20Logo/BTCD%20Logo%201.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/BTCD%20Logo/BTCD%20%233.svg'],
  },
  manifest: '/manifest.json',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'BTCD',
    'application-name': 'BTCD',
    'msapplication-TileColor': '#F6921A',
    'theme-color': '#F6921A',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Enhanced Structured Data with Organization, FAQ, and Video schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "BTCD Protocol",
                "url": "https://btcd.finance",
                "logo": "https://btcd.finance/BTCD Logo/BTCD Logo 1.png",
                "image": "https://btcd.finance/BTCD stars.jpg",
                "description": "The team behind the world's first fully Bitcoin-backed stablecoin",
                "foundingDate": "2024",
                "industry": "Cryptocurrency",
                "keywords": "Bitcoin, DeFi, Stablecoin, Cryptocurrency, Blockchain",
                "sameAs": [
                  "https://twitter.com/BTCDProtocol",
                  "https://t.me/btcd",
                  "https://github.com/BTCDProtocol"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "url": "https://t.me/btcd"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FinancialProduct",
                "name": "BTCD",
                "description": "The world's first fully Bitcoin-backed stablecoin",
                "url": "https://btcd.finance",
                "logo": "https://btcd.finance/BTCD Logo/BTCD Logo 1.png",
                "image": "https://btcd.finance/BTCD stars.jpg",
                "provider": {
                  "@type": "Organization",
                  "name": "BTCD Protocol",
                  "url": "https://btcd.finance"
                },
                "category": "Cryptocurrency",
                "additionalType": "https://schema.org/Currency",
                "mainEntity": {
                  "@type": "CryptoCurrency",
                  "name": "BTCD",
                  "alternateName": "Bitcoin-Native Stablecoin",
                  "description": "A fully Bitcoin-backed stablecoin with 100% transparency"
                },
                "offers": {
                  "@type": "Offer",
                  "description": "Mint BTCD by locking Bitcoin collateral",
                  "category": "Financial Service"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is BTCD?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "BTCD is the world's first fully Bitcoin-backed stablecoin. Unlike traditional stablecoins backed by fiat or centralized assets, every BTCD token is backed by real Bitcoin locked in verifiable locking scripts on the Bitcoin blockchain."
                    }
                  },
                  {
                    "@type": "Question", 
                    "name": "How is BTCD different from wrapped Bitcoin?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "BTCD uses Bitcoin's native locking scripts (P2WSH) to secure your Bitcoin directly on the Bitcoin blockchain, while enabling smart contracts to interact across ecosystems. Unlike wrapped Bitcoin, your Bitcoin never leaves the Bitcoin network."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens if Bitcoin's price drops?",
                    "acceptedAnswer": {
                      "@type": "Answer", 
                      "text": "BTCD maintains a minimum 135% collateral ratio. If your collateral drops below this threshold, you have a 90-day grace period to either add more Bitcoin or repay some BTCD to restore the healthy ratio."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I know my Bitcoin is safe?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Your Bitcoin is secured by Bitcoin's own network using P2WSH locking scripts. Every Bitcoin backing BTCD is verifiable on-chain with real-time proof of reserves that you can audit yourself."
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "name": "BTCD Protocol - Elastos Infrastructure",
                "description": "Learn how BTCD leverages Elastos infrastructure for Bitcoin-grade security",
                "thumbnailUrl": "https://btcd.finance/BTCD stars.jpg",
                "uploadDate": "2024-12-19",
                "embedUrl": "https://www.youtube-nocookie.com/embed/vaJ5Pguxd4M",
                "contentUrl": "https://youtu.be/vaJ5Pguxd4M",
                "duration": "PT5M",
                "publisher": {
                  "@type": "Organization",
                  "name": "BTCD Protocol",
                  "logo": "https://btcd.finance/BTCD Logo/BTCD Logo 1.png"
                }
              }
            ])
          }}
        />
      </head>
      <body className="antialiased">
        <ErrorBoundary>
          <LanguageProvider>
            {children}
            {/* <PWAInstaller /> */}
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
