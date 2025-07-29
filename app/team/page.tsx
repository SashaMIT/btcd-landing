"use client"

import { motion } from "framer-motion"
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageToggle } from '@/components/LanguageToggle'
import { ArrowLeft, ExternalLink, Shield, Building } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

export default function TeamPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header */}
      <header className="relative z-50 border-b border-gray-800/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Back */}
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to BTCD</span>
              </Link>
              <Image 
                src="/BTCD Logo/BTCD Logo 1.svg" 
                alt="BTCD Logo" 
                width={120}
                height={56}
                className="h-12 w-auto"
                priority
              />
            </div>
            
            {/* Language Toggle */}
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-6 h-6 border-2 border-elastos-blue rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-elastos-blue rounded-full"></div>
              </div>
              <span className="text-elastos-blue text-sm font-pp-telegraf-regular tracking-wider">{t.about.badge}</span>
            </div>
            <h1 className="text-5xl heading-elastos text-white mb-6">{t.about.title}</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-pp-telegraf">
              {t.about.subtitle}
            </p>
          </motion.div>

          {/* Company Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elastos p-8 mb-12"
          >
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-elastos-orange to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl emphasis-elastos text-white mb-2">{t.about.company.title}</h2>
                <p className="text-elastos-orange text-sm mb-4 font-pp-telegraf">{t.about.company.subtitle}</p>
                <p className="text-gray-400 mb-6 leading-relaxed font-pp-telegraf">
                  {t.about.company.description}
                </p>
                
                {/* Company Details Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h4 className="text-white text-sm font-medium mb-2">License Information</h4>
                    <p className="text-gray-400 text-xs font-pp-telegraf">{t.about.company.details.license}</p>
                    <p className="text-gray-400 text-xs font-pp-telegraf mt-1">{t.about.company.details.regulator}</p>
                    <a 
                      href="/Thecreekbusinesslicense2026.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-elastos-orange hover:text-white transition-colors text-xs"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {t.about.company.details.licenseLink}
                    </a>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h4 className="text-white text-sm font-medium mb-2">Jurisdiction</h4>
                    <p className="text-gray-400 text-xs font-pp-telegraf">{t.about.company.details.jurisdiction}</p>
                    <p className="text-gray-400 text-xs font-pp-telegraf mt-1">{t.about.company.details.businessType}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>



          {/* Transparency Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-elastos p-8"
          >
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl emphasis-elastos text-white mb-4">{t.about.transparency.title}</h2>
                <p className="text-gray-400 mb-6 leading-relaxed font-pp-telegraf">
                  {t.about.transparency.description}
                </p>
                
                <div className="space-y-3">
                  {t.about.transparency.points.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400 text-sm font-pp-telegraf">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 