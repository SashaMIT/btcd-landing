"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useMemo } from "react"
import { BitcoinFAQSection } from "@/components/professional-faq"
import { motion } from "framer-motion"
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useIsMobile } from '@/hooks/use-mobile'
import { startPerformanceMonitoring } from '@/lib/performance'
import { LoadingOverlay } from '@/components/ui/loading-states'
import Image from 'next/image'



export default function BTCDLanding() {
  const { t, language } = useLanguage()
  const isMobile = useIsMobile()
  const [selectedLiquidatorImage, setSelectedLiquidatorImage] = useState("/Arbiter.jpg")
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(true)
  
  const liquidatorImages = {
    purchase: "/Arbiter.jpg",
    profit: "/Arbiter.jpg", 
    peg: "/Arbiter.jpg",
    sustainability: "/Arbiter.jpg"
  }

  const handleLiquidationClick = async (key: keyof typeof liquidatorImages) => {
    if (selectedLiquidatorImage === liquidatorImages[key]) return
    
    setIsImageLoading(true)
    
    // Simulate image loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 200))
    
    setSelectedLiquidatorImage(liquidatorImages[key])
    setIsImageLoading(false)
  }

  // Memoized particles to prevent regeneration on scroll (mobile-optimized)
  const particles = useMemo(() => 
    [...Array(isMobile ? 25 : 65)].map((_, i) => ({
      id: i,
      size: Math.random() > 0.85 ? 'w-1 h-1' : Math.random() > 0.6 ? 'w-0.5 h-0.5' : 'w-px h-px',
      opacity: Math.random() > 0.5 ? 'bg-white/50' : 'bg-orange-300/40',
      left: Math.random() * 100,
      top: Math.random() * 100,
      floatDirection: Math.random() > 0.5 ? 1 : -1,
      floatDistance: 15 + Math.random() * 20,
      rotateAmount: Math.random() * 360,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 20
    })), [isMobile]
  )

  const starParticles = useMemo(() => 
    [...Array(isMobile ? 4 : 10)].map((_, i) => ({
      id: i,
      left: 15 + Math.random() * 70,
      top: 15 + Math.random() * 70,
      floatDirection: Math.random() > 0.5 ? 1 : -1,
      floatDistance: 10 + Math.random() * 15,
      rotateAmount: Math.random() * 180,
      duration: 12 + Math.random() * 8,
      delay: Math.random() * 15
    })), [isMobile]
  )

  // Hero section particles with continuous drift motion (mobile-optimized)
  const heroParticles = useMemo(() => 
    [...Array(isMobile ? 50 : 150)].map((_, i) => {
      const direction = Math.random() * 360; // Random direction in degrees
      const distance = 150 + Math.random() * 300; // How far they travel (in pixels)
      const startX = Math.random() * 120 - 10; // Start slightly off-screen
      const startY = Math.random() * 120 - 10;
      const maxOpacity = Math.random() > 0.4 ? 0.5 : 0.4;
      
      return {
        id: i,
        size: Math.random() > 0.8 ? 'w-1.5 h-1.5' : Math.random() > 0.5 ? 'w-1 h-1' : Math.random() > 0.3 ? 'w-0.5 h-0.5' : 'w-px h-px',
        opacity: Math.random() > 0.4 ? 'bg-white/50' : 'bg-orange-300/40',
        left: startX,
        top: startY,
        driftX: Math.cos(direction * Math.PI / 180) * distance,
        driftY: Math.sin(direction * Math.PI / 180) * distance,
        maxOpacity,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 30
      };
    }), [isMobile]
  )

  // Additional hero star particles for more dynamic movement (mobile-optimized)
  const heroStarParticles = useMemo(() => 
    [...Array(isMobile ? 8 : 25)].map((_, i) => {
      const direction = Math.random() * 360;
      const distance = 120 + Math.random() * 200;
      const startX = Math.random() * 120 - 10;
      const startY = Math.random() * 120 - 10;
      
      return {
        id: i,
        left: startX,
        top: startY,
        driftX: Math.cos(direction * Math.PI / 180) * distance,
        driftY: Math.sin(direction * Math.PI / 180) * distance,
        maxOpacity: 0.6,
        duration: 10 + Math.random() * 15,
        delay: Math.random() * 35
      };
    }), [isMobile]
  )

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        // Always show header at top of page
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Initialize performance monitoring and page loading
  useEffect(() => {
    startPerformanceMonitoring()
    
    // Simulate initial page load completion
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingOverlay 
      isLoading={isPageLoading}
      className="min-h-screen bg-elastos-darker text-white"
      spinnerSize="lg"
      spinnerColor="orange"
      blur={false}
    >
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 bg-elastos-darker/80 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile/Tablet Layout */}
          <div className="flex items-center justify-between h-16 lg:hidden">
            {/* Logo */}
            <div className="flex items-center justify-start">
              <Image 
                src="/BTCD Logo/BTCD Logo 1.svg" 
                alt="BTCD Logo" 
                width={120}
                height={56}
                className="h-12 sm:h-14 w-auto"
                priority
              />
            </div>
            
            {/* Right Section - Actions */}
            <div className="flex items-center justify-end space-x-2 sm:space-x-4">
              <LanguageToggle />
              <Button className="px-4 sm:px-6 py-2 text-sm sm:text-base font-pp-telegraf">
                {t.nav.launchApp}
              </Button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 items-center h-16">
            {/* Left Section - Logo */}
            <div className="flex items-center justify-start">
              <Image 
                src="/BTCD Logo/BTCD Logo 1.svg" 
                alt="BTCD Logo" 
                width={120}
                height={56}
                className="h-14 w-auto"
                priority
              />
            </div>
            
            {/* Center Section - Navigation */}
            <div className="flex items-center justify-center space-x-8 text-sm font-pp-telegraf">
              <a 
                href="#how-it-works" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t.nav.howItWorks}
              </a>
              <a 
                href="#protocol" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('protocol')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t.nav.protocol}
              </a>
              <a 
                href="#liquidations" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('liquidations')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t.nav.liquidations}
              </a>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-white transition-colors flex items-center cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t.nav.faq}
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            
            {/* Right Section - Actions */}
            <div className="flex items-center justify-end space-x-4">
              <LanguageToggle />
              <Button className="px-6 py-2 font-pp-telegraf">
                {t.nav.launchApp}
            </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Optimized Particle Effects - Fixed positioning to prevent scroll glitches */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
          {/* Mobile particles (fewer) */}
          <div className="block md:hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={`mobile-${i}`}
                className="absolute w-0.5 h-0.5 bg-white/8 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                  transform: `translate3d(0, 0, 0)`,
                  willChange: 'opacity',
                  animation: `twinkle ${2 + Math.random() * 3}s ${Math.random() * 5}s infinite ease-in-out alternate`,
              }}
            ></div>
          ))}
        </div>

          {/* Desktop particles (more) */}
          <div className="hidden md:block">
            {[...Array(30)].map((_, i) => (
              <div
                key={`desktop-${i}`}
                className="absolute w-1 h-1 bg-white/12 rounded-full opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `translate3d(0, 0, 0)`,
                  willChange: 'opacity',
                  animation: `twinkle ${2 + Math.random() * 4}s ${Math.random() * 6}s infinite ease-in-out alternate`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Hero Particles Background - Outside the card container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 particles-container">
          {/* Main animated particles in dark background areas */}
          {heroParticles.map((particle) => (
            <div
              key={`hero-${particle.id}`}
              className="absolute"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `drift-particles ${particle.duration}s linear infinite`,
                animationDelay: `${particle.delay}s`,
                '--drift-x': `${particle.driftX}px`,
                '--drift-y': `${particle.driftY}px`,
                '--max-opacity': particle.maxOpacity
              } as React.CSSProperties}
            >
              <div className={`${particle.size} ${particle.opacity} rounded-full`}></div>
            </div>
          ))}
          
          {/* Hero star particles with cross effects */}
          {heroStarParticles.map((star) => (
            <div
              key={`hero-star-${star.id}`}
              className="absolute"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animation: `drift-particles ${star.duration}s linear infinite`,
                animationDelay: `${star.delay}s`,
                '--drift-x': `${star.driftX}px`,
                '--drift-y': `${star.driftY}px`,
                '--max-opacity': star.maxOpacity
              } as React.CSSProperties}
            >
              <div className="w-0.5 h-0.5 bg-orange-200/60 rounded-full relative">
                {/* Star effect */}
                <div className="absolute inset-0 bg-orange-200/40 rounded-full animate-ping"></div>
                <div className="absolute -top-px -bottom-px left-1/2 w-px bg-orange-200/50 transform -translate-x-1/2"></div>
                <div className="absolute -left-px -right-px top-1/2 h-px bg-orange-200/50 transform -translate-y-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          {/* Hero Container with Rounded Edges */}
          <div className="card-elastos mx-1 sm:mx-2 my-6 sm:my-8">
                      <div className="relative z-20 text-center pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8">
            {/* Supporting Statement */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center space-x-2 text-gray-400 mx-auto font-pp-telegraf text-sm justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm">{t.hero.watchIntro}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="relative mb-4 sm:mb-6">
              {/* Gradient effects behind headline - responsive sizing */}
              <div className="absolute inset-0 bg-gradient-to-br from-elastos-blue/20 via-transparent to-elastos-orange/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"></div>
              <div className="absolute -top-8 sm:-top-12 lg:-top-20 -left-8 sm:-left-12 lg:-left-20 w-32 h-32 sm:w-60 sm:h-60 lg:w-96 lg:h-96 bg-glow-orange"></div>
              <div className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-20 -right-8 sm:-right-12 lg:-right-20 w-32 h-32 sm:w-60 sm:h-60 lg:w-96 lg:h-96 bg-glow-blue"></div>
              
              <h1 className="relative text-3xl sm:text-4xl lg:text-5xl xl:text-6xl heading-elastos text-white leading-tight max-w-4xl mx-auto px-2">
                {t.hero.headline} <span className="text-elastos-orange emphasis-elastos">{t.hero.bitcoin}</span> {t.hero.headlineEnd}
            </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-10 lg:mb-12 font-pp-telegraf max-w-3xl mx-auto px-2 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTA Button */}
            <Button className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-pp-telegraf mb-12 sm:mb-14 lg:mb-16">
              {t.hero.mintToday}
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative z-20 max-w-6xl mx-auto px-2 sm:px-4">
            <div className="card-elastos overflow-hidden">
              <Image 
                src="/Mint BTCD 1 copy.jpg" 
                alt="BTCD Dashboard Preview" 
                width={1200}
                height={675}
                className="w-full h-auto rounded-[1.25rem]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
                    </div>
                </div>

          {/* Partner Logos */}
          <div className="mt-12 sm:mt-16 lg:mt-20 pb-12 sm:pb-16 lg:pb-20 px-2 sm:px-4">
            <div className="relative">
              {/* Gradient effects behind partner logos section - responsive sizing */}
              <div className="absolute inset-0 bg-gradient-to-br from-elastos-orange/15 via-transparent to-elastos-blue/15 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"></div>
              <div className="absolute -top-8 sm:-top-12 lg:-top-16 -left-8 sm:-left-12 lg:-left-16 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-glow-blue"></div>
              <div className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 -right-8 sm:-right-12 lg:-right-16 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-glow-orange"></div>
              
              <div className="relative text-center mb-6 sm:mb-8">
                <p className="text-gray-500 text-xs sm:text-sm font-pp-telegraf">{t.hero.securedBy}</p>
                    </div>
              <div className="relative flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
              <div className="h-6 sm:h-8 lg:h-10 flex items-center justify-center">
                <Image 
                  src="/Bit-w.png" 
                  alt="Bitcoin Infrastructure Provider" 
                  width={120}
                  height={40}
                  className="max-h-6 sm:max-h-8 lg:max-h-10 max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] w-auto h-auto object-contain filter brightness-75"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
                    </div>
              <div className="h-6 sm:h-8 lg:h-10 flex items-center justify-center">
                <Image 
                  src="/f2.png" 
                  alt="F2Pool" 
                  width={120}
                  height={40}
                  className="max-h-6 sm:max-h-8 lg:max-h-10 max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] w-auto h-auto object-contain filter brightness-75"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
                  </div>
              <div className="h-6 sm:h-8 lg:h-10 flex items-center justify-center">
                <Image 
                  src="/Via.png" 
                  alt="ViaPool" 
                  width={120}
                  height={40}
                  className="max-h-6 sm:max-h-8 lg:max-h-10 max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] w-auto h-auto object-contain filter brightness-75"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
                        </div>
              <div className="h-6 sm:h-8 lg:h-10 flex items-center justify-center">
                <Image 
                  src="/PGAwhite.png" 
                  alt="OKX Pool" 
                  width={120}
                  height={40}
                  className="max-h-6 sm:max-h-8 lg:max-h-10 max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] w-auto h-auto object-contain filter brightness-75"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
                      </div>
              <div className="h-6 sm:h-8 lg:h-10 flex items-center justify-center">
                <Image 
                  src="/BeL2 logo Special.png" 
                  alt="BeL2" 
                  width={110}
                  height={36}
                  className="max-h-5 sm:max-h-7 lg:max-h-9 max-w-[70px] sm:max-w-[90px] lg:max-w-[110px] w-auto h-auto object-contain filter brightness-75"
                  sizes="(max-width: 640px) 70px, (max-width: 1024px) 90px, 110px"
                />
                      </div>
              <div className="h-6 sm:h-8 lg:h-10 flex items-center justify-center">
                <Image 
                  src="/NBW Logo.png" 
                  alt="NBW Infrastructure" 
                  width={120}
                  height={40}
                  className="max-h-6 sm:max-h-8 lg:max-h-10 max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] w-auto h-auto object-contain filter brightness-75"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
                    </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* How BTCD Works */}
      <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-elastos-orange rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-elastos-orange rounded-full"></div>
              </div>
              <span className="text-elastos-orange text-xs sm:text-sm font-pp-telegraf-regular tracking-wider">{t.howWorks.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl heading-elastos text-white mb-4 px-2">{t.howWorks.title}</h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto font-pp-telegraf px-2 leading-relaxed">
              {t.howWorks.subtitle}
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-32">
            {/* Step 1: Lock Your Bitcoin */}
            <motion.div 
              className="card-elastos p-6 sm:p-8 lg:p-12 sticky top-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ zIndex: 10 }}
            >
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl heading-elastos text-white">{t.howWorks.step1.title}</h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-pp-telegraf">
                  {t.howWorks.step1.description}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {t.howWorks.step1.points.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-elastos-orange rounded-full"></div>
                      <span className="text-white font-pp-telegraf">{point}</span>
                  </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="flex justify-center">
                  <Image 
                    src="/Bitcoin secure lock.png" 
                    alt="Bitcoin Secure Lock" 
                    width={384}
                    height={384}
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>
            </div>
            </motion.div>

            {/* Step 2: Zero-Knowledge Verification */}
            <motion.div 
              className="card-elastos p-6 sm:p-8 lg:p-12 sticky top-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              style={{ zIndex: 20 }}
            >
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl heading-elastos text-white">{t.howWorks.step2.title}</h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-pp-telegraf">
                  {t.howWorks.step2.description}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {t.howWorks.step2.points.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-elastos-orange rounded-full"></div>
                      <span className="text-white font-pp-telegraf">{point}</span>
                  </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="flex justify-center">
                  <Image 
                    src="/Cryptographic Credential.png" 
                    alt="Cryptographic Credential" 
                    width={384}
                    height={384}
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                  </div>
              </div>
            </div>
            </motion.div>

            {/* Step 3: Mint BTCD Stablecoin */}
            <motion.div 
              className="card-elastos p-6 sm:p-8 lg:p-12 sticky top-28"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              style={{ zIndex: 30 }}
            >
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl heading-elastos text-white">{t.howWorks.step3.title}</h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-pp-telegraf">
                  {t.howWorks.step3.description}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {t.howWorks.step3.points.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-elastos-orange rounded-full"></div>
                      <span className="text-white font-pp-telegraf">{point}</span>
                  </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-elastos-orange/20 via-elastos-blue/10 to-elastos-blue/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-800">
                  <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center border-2 border-elastos-orange relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-md sm:rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-1.5 h-0.5 sm:w-2 sm:h-0.5 bg-elastos-orange"></div>
                      <div className="w-1.5 h-0.5 sm:w-2 sm:h-0.5 bg-elastos-orange"></div>
                      <div className="w-1.5 h-0.5 sm:w-2 sm:h-0.5 bg-elastos-orange"></div>
                    </div>
                    <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                      <Image 
                        src="/BTCD Logo/BTCD 3D 3.png" 
                        alt="BTCD Logo" 
                        width={160}
                        height={160}
                        className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                        sizes="(max-width: 640px) 128px, 160px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>

            {/* Step 4: Smart Risk Management */}
            <motion.div 
              className="card-elastos p-6 sm:p-8 lg:p-12 sticky top-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              style={{ zIndex: 40 }}
            >
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl heading-elastos text-white">{t.howWorks.step4.title}</h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-pp-telegraf">
                  {t.howWorks.step4.description}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {t.howWorks.step4.points.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-elastos-orange rounded-full"></div>
                      <span className="text-white font-pp-telegraf">{point}</span>
                  </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="flex justify-center">
                  <Image 
                    src="/Meter.png" 
                    alt="Smart Risk Management Meter" 
                    width={384}
                    height={384}
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exploring the Protocol */}
      <section id="protocol" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 border-2 border-elastos-blue rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-elastos-blue rounded-full"></div>
              </div>
              <span className="text-elastos-blue text-sm font-pp-telegraf-regular tracking-wider">{t.protocol.badge}</span>
            </div>
            <h2 className="text-5xl heading-elastos text-white mb-4">{t.protocol.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-pp-telegraf">
              {language === 'en' ? (
                <>
                  Built by <a 
                    href="https://cointelegraph.com/news/harvard-students-launch-new-bretton-woods-project-to-tackle-global-debt-crisis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-elastos-orange hover:text-white transition-colors duration-200 underline"
                  >
                    Harvard alumni
                  </a> and secured by Bitcoin's own mining network. This isn't just another stablecoin—it's the future of Bitcoin finance.
                </>
              ) : (
                <>
                  由<a 
                    href="https://cointelegraph.com/news/harvard-students-launch-new-bretton-woods-project-to-tackle-global-debt-crisis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-elastos-orange hover:text-white transition-colors duration-200 underline"
                  >
                    哈佛校友
                  </a>构建，由比特币自己的挖矿网络保障。这不仅仅是另一个稳定币——这是比特币金融的未来。
                </>
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Bitcoin-Native Architecture */}
            <div className="card-elastos p-8">
              <h3 className="text-xl emphasis-elastos text-white mb-4">{t.protocol.bitcoinNative.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed font-pp-telegraf">
                {t.protocol.bitcoinNative.description}
              </p>

              <div className="relative mb-8">
                <div className="w-48 h-48 mx-auto flex items-center justify-center">
                  <Image 
                    src="/BTCD Logo/BTC lock.png" 
                    alt="BTC Lock" 
                    width={192}
                    height={192}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h4 className="text-white font-pp-telegraf-regular mb-3">{t.protocol.bitcoinNative.smartContractsTitle}</h4>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-xs">
                  <div className="text-gray-500 mb-2">{t.protocol.bitcoinNative.codeComment}</div>
                  <div className="text-blue-400 mb-1">
                    let <span className="text-white">btcd_vault</span>: <span className="text-green-400">P2WSH</span> ={" "}
                    <span className="text-green-400">P2WSH</span> &#123;
                  </div>
                  <div className="text-blue-400 ml-4">
                    collateral: <span className="text-yellow-400">bitcoin_address</span>,
                  </div>
                  <div className="text-blue-400 ml-4">
                    owner: <span className="text-white">user_pubkey</span>,
                  </div>
                  <div className="text-blue-400 ml-4">
                    threshold: <span className="text-yellow-400">135_percent</span>,
                  </div>
                  <div className="text-gray-500">&#125;;</div>
                </div>
                <p className="text-gray-400 text-xs mt-3 leading-relaxed font-pp-telegraf">
                  {t.protocol.bitcoinNative.codeDescription}
                </p>
              </div>
            </div>

            {/* BTCD Token */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/80 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-slate-800/95 backdrop-blur-sm p-8">
                        {/* Particles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-20 particles-container">
                {/* Animated particles */}
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute"
                    style={{
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      animation: `float-particles ${particle.duration}s ease-in-out infinite`,
                      animationDelay: `${particle.delay}s`,
                      '--float-x': `${particle.floatDistance * particle.floatDirection}px`,
                      '--float-y': `${particle.floatDistance * particle.floatDirection * 0.7}px`,
                      '--rotate': `${particle.rotateAmount}deg`
                    } as React.CSSProperties}
                  >
                    <div className={`${particle.size} ${particle.opacity} rounded-full animate-pulse`}></div>
                  </div>
                ))}
                
                {/* Larger star particles */}
                {starParticles.map((star) => (
                  <div
                    key={`star-${star.id}`}
                    className="absolute"
                    style={{
                      left: `${star.left}%`,
                      top: `${star.top}%`,
                      animation: `float-particles ${star.duration}s ease-in-out infinite`,
                      animationDelay: `${star.delay}s`,
                      '--float-x': `${star.floatDistance * star.floatDirection}px`,
                      '--float-y': `${star.floatDistance * star.floatDirection * 0.5}px`,
                      '--rotate': `${star.rotateAmount}deg`
                    } as React.CSSProperties}
                  >
                    <div className="w-0.5 h-0.5 bg-orange-300/50 rounded-full relative">
                      {/* Star effect */}
                      <div className="absolute inset-0 bg-orange-300/30 rounded-full animate-ping"></div>
                      <div className="absolute -top-px -bottom-px left-1/2 w-px bg-orange-300/40 transform -translate-x-1/2"></div>
                      <div className="absolute -left-px -right-px top-1/2 h-px bg-orange-300/40 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Orange glow background */}
              <div className="absolute inset-0 bg-gradient-radial from-orange-500/8 via-orange-600/4 to-transparent z-10"></div>
              
              {/* Subtle brand warmth overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 via-transparent to-amber-900/3 z-10"></div>
              
              <div className="relative z-30">
                <div className="text-center mb-8">
                  <div className="w-48 h-48 mx-auto flex items-center justify-center mb-6 relative">
                    {/* Orange glow effect behind logo */}
                    <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-orange-600/10 to-transparent rounded-full blur-xl scale-150"></div>
                    <div className="absolute inset-0 bg-gradient-radial from-yellow-400/15 via-orange-500/8 to-transparent rounded-full blur-lg scale-125"></div>
                    
                    {/* BTCD Logo */}
                    <Image 
                      src="/BTCD Logo/BTCD 3D 3.png" 
                      alt="BTCD Logo" 
                      width={192}
                      height={192}
                      className="w-48 h-48 object-contain relative z-10 drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.3))'
                      }}
                    />
                  </div>
                  <h3 className="text-2xl emphasis-elastos text-white">{t.protocol.btcdToken.title}</h3>
                </div>

                <p className="text-gray-300 text-sm text-center leading-relaxed mb-6 font-pp-telegraf">
                  {t.protocol.btcdToken.description}
                </p>

                <div className="space-y-3 text-sm font-pp-telegraf mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t.protocol.btcdToken.backingAsset}</span>
                    <span className="text-white">{t.protocol.btcdToken.bitcoin100}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t.protocol.btcdToken.collateralRatio}</span>
                    <span className="text-white">{t.protocol.btcdToken.ratioRequired}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t.protocol.btcdToken.liquidation}</span>
                    <span className="text-white">{t.protocol.btcdToken.gracePeriod}</span>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-gradient-to-br from-slate-800/60 via-gray-900/50 to-slate-800/40 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
                  <h4 className="text-white text-xs font-medium mb-3 text-center">{t.protocol.btcdToken.comparison.title}</h4>
                  <div className="space-y-2 text-xs">
                    {/* Header Row */}
                    <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                      <span className="text-gray-400 w-20"></span>
                      <span className="text-elastos-orange font-medium text-center flex-1">{t.protocol.btcdToken.comparison.btcd}</span>
                      <span className="text-gray-400 text-center flex-1">{t.protocol.btcdToken.comparison.others}</span>
                    </div>
                    
                    {/* Custody Row */}
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-20">{t.protocol.btcdToken.comparison.custody}</span>
                      <span className="text-green-400 text-center flex-1">✓ {t.protocol.btcdToken.comparison.btcdCustody}</span>
                      <span className="text-red-400 text-center flex-1">✗ {t.protocol.btcdToken.comparison.othersCustody}</span>
                    </div>
                    
                    {/* Backing Row */}
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-20">{t.protocol.btcdToken.comparison.backing}</span>
                      <span className="text-green-400 text-center flex-1">✓ {t.protocol.btcdToken.comparison.btcdBacking}</span>
                      <span className="text-red-400 text-center flex-1">✗ {t.protocol.btcdToken.comparison.othersBacking}</span>
                    </div>
                    
                    {/* Grace Period Row */}
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-20">{t.protocol.btcdToken.comparison.grace}</span>
                      <span className="text-green-400 text-center flex-1">✓ {t.protocol.btcdToken.comparison.btcdGrace}</span>
                      <span className="text-red-400 text-center flex-1">✗ {t.protocol.btcdToken.comparison.othersGrace}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elastos Infrastructure */}
            <div className="card-elastos p-8">
              <h3 className="text-xl emphasis-elastos text-white mb-4">{t.protocol.elastos.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-pp-telegraf">
                We built BTCD on the <a 
                  href="https://elastos.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-elastos-orange hover:text-white transition-colors duration-200 underline"
                >
                  Elastos SmartWeb
                </a>—the only blockchain secured by Bitcoin's hashpower. Your BTCD benefits from the combined security of Bitcoin mining and cross-ecosystem smart contract innovation.
              </p>

              {/* Elastos Video */}
              <div className="mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-700">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/vaJ5Pguxd4M?si=M-Aq9xDcLpSH7LUJ" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden mb-6">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <div className="flex items-center">
                    <Image 
                      src="/Elastos Logo Dark - 4.png" 
                      alt="Elastos" 
                      width={80}
                      height={20}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-elastos-orange text-sm">366 EH/s</div>
                    <div className="text-gray-400 text-xs font-pp-telegraf">{t.protocol.elastos.hashpowerLabel}</div>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400 text-sm font-pp-telegraf">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>{t.protocol.elastos.securityLabel}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 text-sm font-pp-telegraf">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>{t.protocol.elastos.mergedLabel}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 text-sm font-pp-telegraf">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>{t.protocol.elastos.poolsLabel}</span>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Image 
                        src="/Merge mining.png" 
                        alt="Merge Mining" 
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-white emphasis-elastos mb-1">$7.74B</div>
                      <div className="text-gray-400 text-xs font-pp-telegraf">{t.protocol.elastos.annualSecurity}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="card-elastos p-6 text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
                              <h4 className="text-white emphasis-elastos mb-2">{t.protocol.elastos.features[0].title}</h4>
              <p className="text-gray-400 text-sm font-pp-telegraf">
                {t.protocol.elastos.features[0].description}
              </p>
            </div>

            <div className="card-elastos p-6 text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-white emphasis-elastos mb-2">{t.protocol.elastos.features[1].title}</h4>
              <p className="text-gray-400 text-sm font-pp-telegraf">
                {t.protocol.elastos.features[1].description}
              </p>
            </div>

            <div className="card-elastos p-6 text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h4 className="text-white emphasis-elastos mb-2">{t.protocol.elastos.features[2].title}</h4>
              <p className="text-gray-400 text-sm font-pp-telegraf">
                {t.protocol.elastos.features[2].description}
              </p>
            </div>

            <div className="card-elastos p-6 text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </div>
              <h4 className="text-white emphasis-elastos mb-2">{t.protocol.elastos.features[3].title}</h4>
              <p className="text-gray-400 text-sm font-pp-telegraf">
                {t.protocol.elastos.features[3].description}
              </p>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="relative mt-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6921A]/8 to-[#5C8EFF]/8 rounded-3xl blur-xl" />
            <div className="relative bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">{t.protocol.bottomBanner.title}</h3>
              <p className="text-gray-400 mb-0 max-w-2xl mx-auto font-pp-telegraf">
                {t.protocol.bottomBanner.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Earning Yield */}
      <section id="liquidations" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 border-2 border-elastos-blue rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-elastos-blue rounded-full"></div>
              </div>
              <span className="text-elastos-blue text-sm font-pp-telegraf-regular tracking-wider">{t.liquidations.badge}</span>
            </div>
            <h2 className="text-5xl heading-elastos text-white mb-4">{t.liquidations.title}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-pp-telegraf mb-8">
              {language === 'en' ? (
                <>
                  Participate in protocol security while earning Bitcoin rewards.{' '}
                  <a 
                    href="https://elastos.net/buy-ela" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-elastos-orange hover:text-white transition-colors duration-200 underline"
                  >
                    Stake ELA
                  </a>{' '}
                  to become a BeL2 arbiter providing dispute resolution and earning fees from Bitcoin transactions.
                </>
              ) : (
                <>
                  参与协议安全性的同时赚取比特币奖励。
                  <a 
                    href="https://elastos.net/buy-ela" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-elastos-orange hover:text-white transition-colors duration-200 underline"
                  >
                    质押ELA
                  </a>
                  成为BeL2仲裁者提供争议解决并从比特币交易中赚取费用。
                </>
              )}
            </p>
            
            {/* Details Soon Button */}
            <div className="mb-8">
              <Button 
                disabled
                className="px-6 py-3 bg-[rgba(156,163,175,0.15)] border border-[rgba(156,163,175,0.25)] text-gray-400 hover:bg-[rgba(156,163,175,0.15)] font-pp-telegraf cursor-not-allowed opacity-60"
              >
                {t.liquidations.detailsButton}
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl emphasis-elastos text-white mb-6">{t.liquidations.howItWorks}</h3>
                <div className="space-y-6">
                  <button 
                                    onClick={() => handleLiquidationClick('purchase')}
                    className={`w-full text-left border-l-4 pl-6 hover:bg-gray-800/30 rounded-r-lg transition-all p-4 group ${
                      selectedLiquidatorImage === liquidatorImages.purchase 
                  ? 'border-elastos-orange bg-gray-800/20' 
                  : 'border-gray-600'
                    }`}
                  >
              <p className={`leading-relaxed group-hover:text-white font-pp-telegraf ${
                      selectedLiquidatorImage === liquidatorImages.purchase ? 'text-white' : 'text-gray-400'
                    }`}>
                {t.liquidations.purchaseDesc}
                    </p>
                  </button>
                  <button 
                                    onClick={() => handleLiquidationClick('profit')}
                    className={`w-full text-left border-l-4 pl-6 hover:bg-gray-800/30 rounded-r-lg transition-all p-4 group ${
                      selectedLiquidatorImage === liquidatorImages.profit 
                  ? 'border-elastos-orange bg-gray-800/20' 
                  : 'border-gray-600'
                    }`}
                  >
              <p className={`leading-relaxed group-hover:text-white font-pp-telegraf ${
                      selectedLiquidatorImage === liquidatorImages.profit ? 'text-white' : 'text-gray-400'
                    }`}>
                {t.liquidations.earnDesc}
                    </p>
                  </button>
                  <button 
                                    onClick={() => handleLiquidationClick('peg')}
                    className={`w-full text-left border-l-4 pl-6 hover:bg-gray-800/30 rounded-r-lg transition-all p-4 group ${
                      selectedLiquidatorImage === liquidatorImages.peg 
                  ? 'border-elastos-orange bg-gray-800/20' 
                  : 'border-gray-600'
                    }`}
                  >
              <p className={`leading-relaxed group-hover:text-white font-pp-telegraf ${
                      selectedLiquidatorImage === liquidatorImages.peg ? 'text-white' : 'text-gray-400'
                    }`}>
                {t.liquidations.pegDesc}
                    </p>
                  </button>
                  <button 
                                    onClick={() => handleLiquidationClick('sustainability')}
                    className={`w-full text-left border-l-4 pl-6 hover:bg-gray-800/30 rounded-r-lg transition-all p-4 group ${
                      selectedLiquidatorImage === liquidatorImages.sustainability 
                  ? 'border-elastos-orange bg-gray-800/20' 
                  : 'border-gray-600'
                    }`}
                  >
              <p className={`leading-relaxed group-hover:text-white font-pp-telegraf ${
                      selectedLiquidatorImage === liquidatorImages.sustainability ? 'text-white' : 'text-gray-400'
                    }`}>
                {t.liquidations.sustainDesc}
                    </p>
                  </button>
                  </div>
              </div>
            </div>

            {/* Right Dashboard Preview */}
            <div className="relative lg:pt-14">
              <LoadingOverlay 
                isLoading={isImageLoading}
                className="card-elastos overflow-hidden"
                spinnerColor="orange"
                blur={true}
              >
                <Image 
                  src={selectedLiquidatorImage} 
                  alt="BTCD Liquidation Dashboard Preview" 
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover rounded-[1.25rem] transition-all duration-500"
                  key={selectedLiquidatorImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
              </LoadingOverlay>
                </div>
              </div>
                    </div>
      </section>



      {/* Enhanced Professional FAQ */}
      <div id="faq">
        <BitcoinFAQSection 
          title={t.faq.title}
          subtitle={t.faq.subtitle}
          badge={t.faq.badge}
          items={t.faq.items}
          contactInfo={{
            title: t.faq.contact.title,
            description: t.faq.contact.description,
            buttonText: t.faq.contact.button,
            onContact: () => window.open('https://t.me/btcd', '_blank')
          }}
        />
          </div>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-elastos-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl heading-elastos text-white mb-4">
              {t.finalCta.title} <span className="text-elastos-orange emphasis-elastos">{t.finalCta.titleSpan || t.finalCta.title.split(' ').slice(-1)[0]}</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-elastos-orange/20 to-elastos-blue/20 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden">
              <div className="p-8">
                {/* Dashboard Preview - Centered and Larger */}
                <div className="flex justify-center mb-12">
                  <div className="w-full max-w-4xl">
                    <Image 
                      src="/My Activity.jpg" 
                      alt="BTCD Vault Dashboard" 
                      width={1200}
                      height={675}
                      className="w-full h-auto object-contain rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    />
                      </div>
                    </div>

                {/* CTA Section - Centered below image */}
                <div className="text-center space-y-6">
                  <div>
                    <h3 className="text-3xl emphasis-elastos text-white mb-4">{t.finalCta.subtitle}</h3>
                    <p className="text-gray-400 text-lg mb-8 font-pp-telegraf">
                      {t.finalCta.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Button className="px-12 py-4 text-lg flex items-center justify-center space-x-2">
                      <span>{t.finalCta.launchApp}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  </div>
                  <p className="text-xs text-gray-500 font-pp-telegraf">{t.finalCta.disclaimer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Side - Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/BTCD Logo/BTCD Logo 1.svg" 
                  alt="BTCD Logo" 
                  width={120}
                  height={80}
                  className="h-20 w-auto"
                />
                </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md font-pp-telegraf">
                {t.footer.descriptionParts.beforeLink}
                <a 
                  href="https://www.nbwlabs.org/offerings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors underline"
                >
                  {t.footer.descriptionParts.linkText}
                </a>
                {t.footer.descriptionParts.afterLink}
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product */}
              <div>
                <h4 className="text-white emphasis-elastos mb-4">{t.footer.product.title}</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors font-pp-telegraf text-sm">
                      {t.footer.product.howItWorks}
                    </a>
                  </li>
                  <li>
                    <a href="#protocol" className="text-gray-400 hover:text-white transition-colors font-pp-telegraf text-sm">
                      {t.footer.product.protocol}
                    </a>
                  </li>
                  <li>
                    <a href="#liquidations" className="text-gray-400 hover:text-white transition-colors font-pp-telegraf text-sm">
                      {t.footer.product.liquidations}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors font-pp-telegraf text-sm">
                      {t.footer.product.documentation}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white emphasis-elastos mb-4">{t.footer.company.title}</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/team" className="text-gray-400 hover:text-white transition-colors font-pp-telegraf text-sm">
                      {t.footer.company.about}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="pt-8 border-t border-gray-800">
            <div className="text-center space-y-2 mb-6">
              <p className="text-gray-400 text-sm font-pp-telegraf">
                {t.footer.businessAddress}
              </p>
              <p className="text-gray-400 text-sm font-pp-telegraf" dir="rtl">
                {t.footer.businessAddressArabic}
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-gray-800">
            <div className="flex md:flex-row flex-col md:items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm font-pp-telegraf">
                {t.footer.copyright}
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-pp-telegraf">{t.footer.legal.privacy}</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-pp-telegraf">{t.footer.legal.terms}</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-pp-telegraf">{t.footer.legal.disclaimer}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </LoadingOverlay>
  )
}
