'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'
import { LanguageToggle } from '@/components/LanguageToggle'
import { config } from '@/lib/config'

export default function TermsOfService() {
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
                href={config.appUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 text-sm sm:text-base font-pp-telegraf inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 ease focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-[200] bg-[rgba(246,146,26,0.25)] text-white hover:bg-[rgba(246,26,0.25)] text-white hover:bg-[rgba(246,146,26,0.25)] rounded-full h-10"
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
            <h1 className="text-4xl md:text-5xl font-bold heading-elastos">{t.legal.terms.title}</h1>
            <p className="text-gray-400 text-lg">{t.legal.terms.effectiveDate}</p>
            <p className="text-gray-400">{t.legal.terms.lastUpdated}</p>
          </div>

          {/* Acceptance */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-elastos-orange mb-4">{t.legal.terms.sections.importantNotice.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.legal.terms.sections.importantNotice.content}
            </p>
          </div>

          {/* Company Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.aboutUs.title}</h2>
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                {t.legal.terms.sections.aboutUs.content}
              </p>
              <div className="text-gray-300">
                <p><strong>Trade License:</strong> No. 1293230</p>
                <p><strong>Jurisdiction:</strong> Dubai, United Arab Emirates</p>
                <p><strong>Regulator:</strong> Dubai Department of Economy and Tourism</p>
                <p><strong>Address:</strong> Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE</p>
              </div>
            </div>
          </div>

          {/* Platform Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.platform.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.legal.terms.sections.platform.content}
            </p>
          </div>

          {/* Eligibility */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.eligibility.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.legal.terms.sections.eligibility.content}
            </p>
          </div>

          {/* Platform Services */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.services.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.terms.sections.services.bitcoinCollateral.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.terms.sections.services.bitcoinCollateral.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.terms.sections.services.minting.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.terms.sections.services.minting.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.terms.sections.services.arbitration.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.terms.sections.services.arbitration.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* User Obligations */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.userObligations.title}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.terms.sections.userObligations.prohibited.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-3">{t.legal.terms.sections.userObligations.prohibited.intro}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.terms.sections.userObligations.prohibited.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.terms.sections.userObligations.security.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.terms.sections.userObligations.security.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.terms.sections.userObligations.loan.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.terms.sections.userObligations.loan.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Fees and Payments */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.fees.title}</h2>
            <p className="text-gray-300 leading-relaxed">{t.legal.terms.sections.fees.intro}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {t.legal.terms.sections.fees.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 font-semibold">
              {t.legal.terms.sections.fees.disclosure}
            </p>
          </div>

          {/* Risk Disclosure */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.riskDisclosure.title}</h2>
            <p className="text-gray-300 leading-relaxed">{t.legal.terms.sections.riskDisclosure.intro}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {t.legal.terms.sections.riskDisclosure.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 font-semibold">
              {t.legal.terms.sections.riskDisclosure.reference}
            </p>
          </div>

          {/* Dispute Resolution */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.disputeResolution.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.terms.sections.disputeResolution.bel2.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-3">{t.legal.terms.sections.disputeResolution.bel2.intro}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.terms.sections.disputeResolution.bel2.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.terms.sections.disputeResolution.legal.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.legal.terms.sections.disputeResolution.legal.content}
                </p>
              </div>
            </div>
          </div>

          {/* Limitations of Liability */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.liability.title}</h2>
            <p className="text-gray-300 leading-relaxed">{t.legal.terms.sections.liability.intro}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {t.legal.terms.sections.liability.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Platform Modifications */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.modifications.title}</h2>
            <p className="text-gray-300 leading-relaxed">{t.legal.terms.sections.modifications.intro}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {t.legal.terms.sections.modifications.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Termination */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.terms.sections.termination.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.terms.sections.termination.user.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.legal.terms.sections.termination.user.content}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t.legal.terms.sections.termination.platform.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.legal.terms.sections.termination.platform.content}
                </p>
              </div>
            </div>
          </div>

          {/* Final Sections */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-elastos-orange mb-4">{t.legal.terms.sections.finalSections.indemnification.title}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t.legal.terms.sections.finalSections.indemnification.content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-elastos-orange mb-4">{t.legal.terms.sections.finalSections.forceMajeure.title}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t.legal.terms.sections.finalSections.forceMajeure.content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-elastos-orange mb-4">{t.legal.terms.sections.finalSections.severability.title}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t.legal.terms.sections.finalSections.severability.content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-elastos-orange mb-4">{t.legal.terms.sections.finalSections.changes.title}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t.legal.terms.sections.finalSections.changes.content}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-elastos-orange mb-4">{language === 'en' ? 'Contact Information' : '联系方式'}</h2>
            <div className="text-gray-300">
              <p><strong>Address:</strong> Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE</p>
              <p><strong>Business Hours:</strong> {language === 'en' ? 'Sunday - Thursday, 9:00 AM - 5:00 PM GST' : '星期日 - 星期四，上午 9:00 - 下午 5:00 阿联酋标准时间'}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-400 space-y-2">
            <p>{t.legal.terms.sections.footer.copyright}</p>
            <p>{t.legal.terms.sections.footer.license}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 