'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 border border-gray-600 rounded-full p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-xs font-pp-telegraf rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-elastos-orange text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 text-xs font-pp-telegraf rounded-full transition-all duration-200 ${
          language === 'zh'
            ? 'bg-elastos-orange text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        中文
      </button>
    </div>
  )
} 