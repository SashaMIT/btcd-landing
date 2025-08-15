'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'
import { LanguageToggle } from '@/components/LanguageToggle'

export default function RiskDisclaimer() {
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
            <h1 className="text-4xl md:text-5xl font-bold heading-elastos">{t.legal.riskDisclaimer.title}</h1>
            <p className="text-gray-400 text-lg">{t.legal.riskDisclaimer.effectiveDate}</p>
            <p className="text-gray-400">{t.legal.riskDisclaimer.lastUpdated}</p>
          </div>

          {/* Critical Warning */}
          <div className="bg-red-500/20 border-2 border-red-500/50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <h2 className="text-2xl font-semibold text-red-400">{t.legal.riskDisclaimer.sections.criticalWarning.title}</h2>
            </div>
            <div className="text-gray-200 leading-relaxed text-lg">
              {t.legal.riskDisclaimer.sections.criticalWarning.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className={index === 0 ? "mb-4" : ""}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* About This Document */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.riskDisclaimer.sections.aboutDisclaimer.title}</h2>
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
              {t.legal.riskDisclaimer.sections.aboutDisclaimer.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className={`text-gray-300 leading-relaxed ${index < 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Cryptocurrency Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.riskDisclaimer.sections.cryptoRisks.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.cryptoRisks.volatility.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  {t.legal.riskDisclaimer.sections.cryptoRisks.volatility.intro}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.cryptoRisks.volatility.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.cryptoRisks.regulatory.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.cryptoRisks.regulatory.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.cryptoRisks.market.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.cryptoRisks.market.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* BTCD Platform Specific Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.riskDisclaimer.sections.platformRisks.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.platformRisks.liquidation.title}</h3>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-3">
                  <p className="text-gray-300 leading-relaxed mb-3">
                    {t.legal.riskDisclaimer.sections.platformRisks.liquidation.intro}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    {t.legal.riskDisclaimer.sections.platformRisks.liquidation.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.platformRisks.custody.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.platformRisks.custody.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.platformRisks.bel2.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.platformRisks.bel2.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.platformRisks.gsm.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.platformRisks.gsm.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technical and Operational Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.riskDisclaimer.sections.technicalRisks.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.technicalRisks.smartContract.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.technicalRisks.smartContract.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.technicalRisks.blockchain.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.technicalRisks.blockchain.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.technicalRisks.operational.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.technicalRisks.operational.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Financial and Economic Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.riskDisclaimer.sections.financialRisks.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.financialRisks.interestRate.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.financialRisks.interestRate.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.financialRisks.stablecoin.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.financialRisks.stablecoin.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.financialRisks.macroeconomic.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.financialRisks.macroeconomic.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Business and Regulatory Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.riskDisclaimer.sections.businessRisks.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.businessRisks.business.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.businessRisks.business.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.businessRisks.regulatory.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.businessRisks.regulatory.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* User-Specific Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.riskDisclaimer.sections.userRisks.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.userRisks.security.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.userRisks.security.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.userRisks.knowledge.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.userRisks.knowledge.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">{t.legal.riskDisclaimer.sections.userRisks.legal.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.legal.riskDisclaimer.sections.userRisks.legal.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Risk Mitigation Measures */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.riskDisclaimer.sections.mitigation.title}</h2>
            <p className="text-gray-300 leading-relaxed">{t.legal.riskDisclaimer.sections.mitigation.intro}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {t.legal.riskDisclaimer.sections.mitigation.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 font-semibold text-red-400">
              {t.legal.riskDisclaimer.sections.mitigation.warning}
            </p>
          </div>

          {/* Regulatory and Legal Status */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.riskDisclaimer.sections.regulatoryStatus.title}</h2>
            <p className="text-gray-300 leading-relaxed">{t.legal.riskDisclaimer.sections.regulatoryStatus.intro}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {t.legal.riskDisclaimer.sections.regulatoryStatus.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Professional Advice Recommended */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">{t.legal.riskDisclaimer.sections.professionalAdvice.title}</h2>
            <p className="text-gray-300 leading-relaxed">{t.legal.riskDisclaimer.sections.professionalAdvice.intro}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {t.legal.riskDisclaimer.sections.professionalAdvice.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Final Risk Acknowledgment */}
          <div className="bg-red-500/20 border-2 border-red-500/50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-red-400 mb-4">{t.legal.riskDisclaimer.sections.finalAcknowledgment.title}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{t.legal.riskDisclaimer.sections.finalAcknowledgment.intro}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              {t.legal.riskDisclaimer.sections.finalAcknowledgment.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-red-400 font-bold text-lg">
              {t.legal.riskDisclaimer.sections.finalAcknowledgment.warning}
            </p>
          </div>



          {/* Contact Information */}
          <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-elastos-orange mb-4">{t.legal.riskDisclaimer.sections.contact.title}</h2>
            <div className="text-gray-300">
              <p><strong>Address:</strong> {t.legal.riskDisclaimer.sections.contact.address}</p>
              <p className="text-red-400 mt-4 font-semibold">
                {t.legal.riskDisclaimer.sections.contact.note}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2025 Creek Business Center. All rights reserved.<br/>
              Licensed in Dubai, United Arab Emirates (Trade License No. 1293230)<br/>
              This disclaimer is part of our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 