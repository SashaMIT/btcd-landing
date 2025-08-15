'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'
import { LanguageToggle } from '@/components/LanguageToggle'

export default function PrivacyPolicy() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-elastos-darker text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-elastos-darker/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/BTCD Logo/BTCD Logo 1.svg" 
                alt="BTCD Logo" 
                width={120}
                height={56}
                className="h-12 w-auto"
                priority
              />
            </Link>
            
            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <a 
                href="https://app.btcdprotocol.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 text-sm sm:text-base font-pp-telegraf inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 ease focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-[200] bg-[rgba(246,146,26,0.15)] border border-[rgba(246,146,26,0.25)] text-white hover:bg-[rgba(246,146,26,0.25)] rounded-full h-10"
              >
                {t.nav.launchApp}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold heading-elastos">{t.legal.privacy.title}</h1>
            <p className="text-gray-400 text-lg">{t.legal.privacy.effectiveDate}</p>
            <p className="text-gray-400">{t.legal.privacy.lastUpdated}</p>
          </div>

          {/* Company Info */}
          <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-elastos-orange">{t.legal.privacy.sections.aboutUs.title}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.legal.privacy.sections.aboutUs.content}
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>{t.legal.privacy.sections.aboutUs.contact}</strong><br/>
              Creek Business Center<br/>
              Office G-01-MEZZ, Al Sabkha, The Creek Business Center<br/>
              Dubai, United Arab Emirates
            </p>
          </div>

          {/* Information Collection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.privacy.sections.informationCollection.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.privacy.sections.informationCollection.personalInfo.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  {t.legal.privacy.sections.informationCollection.personalInfo.intro}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.privacy.sections.informationCollection.personalInfo.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.privacy.sections.informationCollection.technicalInfo.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  {t.legal.privacy.sections.informationCollection.technicalInfo.intro}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.privacy.sections.informationCollection.technicalInfo.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.privacy.sections.dataUsage.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.legal.privacy.sections.dataUsage.intro}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {t.legal.privacy.sections.dataUsage.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Data Sharing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.privacy.sections.dataSharing.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.legal.privacy.sections.dataSharing.intro}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {t.legal.privacy.sections.dataSharing.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 font-semibold">
              {t.legal.privacy.sections.dataSharing.noSale}
            </p>
          </div>

          {/* User Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.privacy.sections.userRights.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.legal.privacy.sections.userRights.intro}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {t.legal.privacy.sections.userRights.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Security */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.privacy.sections.security.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.legal.privacy.sections.security.content}
            </p>
          </div>

          {/* Updates */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.privacy.sections.updates.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.legal.privacy.sections.updates.content}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.privacy.sections.contact.title}</h2>
            <div className="text-gray-300">
              <p><strong>Address:</strong> {t.legal.privacy.sections.contact.address}</p>
              <p><strong>Response Time:</strong> {t.legal.privacy.sections.contact.responseTime}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2025 Creek Business Center. All rights reserved.<br/>
              Licensed in Dubai, United Arab Emirates (Trade License No. 1293230)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 