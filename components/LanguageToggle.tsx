'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { LoadingSpinner } from '@/components/ui/loading-states'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)

  const handleLanguageChange = async (newLanguage: 'en' | 'zh') => {
    if (newLanguage === language) return
    
    setIsLoading(true)
    
    // Simulate language loading delay for better UX feedback
    await new Promise(resolve => setTimeout(resolve, 300))
    
    setLanguage(newLanguage)
    setIsLoading(false)
  }

  return (
    <div className="flex items-center space-x-1 border border-gray-600 rounded-full p-1 relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 rounded-full backdrop-blur-sm z-10">
          <LoadingSpinner size="sm" color="orange" />
        </div>
      )}
      
      <button
        onClick={() => handleLanguageChange('en')}
        disabled={isLoading}
        className={`px-2 sm:px-3 py-1 text-xs font-pp-telegraf rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-elastos-orange text-black font-semibold'
            : 'text-gray-400 hover:text-white'
        } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('zh')}
        disabled={isLoading}
        className={`px-2 sm:px-3 py-1 text-xs font-pp-telegraf rounded-full transition-all duration-200 ${
          language === 'zh'
            ? 'bg-elastos-orange text-black font-semibold'
            : 'text-gray-400 hover:text-white'
        } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        中文
      </button>
    </div>
  )
} 