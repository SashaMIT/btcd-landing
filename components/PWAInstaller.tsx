'use client'

import { useEffect, useState } from 'react'
import { Download, X, WifiOff } from 'lucide-react'

interface PWAInstallerProps {
  autoRegister?: boolean
}

export function PWAInstaller({ autoRegister = true }: PWAInstallerProps) {
  const [isOnline, setIsOnline] = useState(true)
  const [isInstallable, setIsInstallable] = useState(false)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [swRegistration, setSwRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    // Register service worker
    if (autoRegister && 'serviceWorker' in navigator) {
      registerServiceWorker()
    }

    // Handle online/offline status
    const updateOnlineStatus = () => setIsOnline(navigator.onLine)
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)

    // Handle PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
      
      // Show install prompt after a delay (better UX)
      setTimeout(() => {
        setShowInstallPrompt(true)
      }, 3000)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Handle successful PWA installation
    const handleAppInstalled = () => {
      console.log('[PWA] App was installed successfully')
      setIsInstallable(false)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus)
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [autoRegister])

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      })

      setSwRegistration(registration)
      console.log('[PWA] Service worker registered successfully:', registration)

      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available
              console.log('[PWA] New content available, please refresh')
              // Could show update notification here
            }
          })
        }
      })

    } catch (error) {
      console.error('[PWA] Service worker registration failed:', error)
    }
  }

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    // Hide the install prompt
    setShowInstallPrompt(false)

    // Show the install prompt
    deferredPrompt.prompt()

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice
    console.log(`[PWA] User ${outcome} the install prompt`)

    // Clear the deferred prompt
    setDeferredPrompt(null)
    setIsInstallable(false)
  }

  const dismissInstallPrompt = () => {
    setShowInstallPrompt(false)
    // Don't show again for this session
    setIsInstallable(false)
  }

  return (
    <>
      {/* Offline Indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 px-4 z-50">
          <div className="flex items-center justify-center gap-2">
            <WifiOff className="w-4 h-4" />
            <span className="text-sm font-medium">
              You're offline. Some features may be limited.
            </span>
          </div>
        </div>
      )}

      {/* PWA Install Prompt */}
      {showInstallPrompt && isInstallable && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 z-50 shadow-2xl">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-elastos-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Download className="w-5 h-5 text-elastos-orange" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm mb-1">
                Install BTCD App
              </h3>
              <p className="text-gray-400 text-xs mb-3">
                Add BTCD to your home screen for quick access and offline features.
              </p>
              
              <div className="flex gap-2">
                <button
                  onClick={handleInstallClick}
                  className="bg-elastos-orange hover:bg-elastos-orange/80 text-black text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                >
                  Install
                </button>
                <button
                  onClick={dismissInstallPrompt}
                  className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1.5 rounded-lg transition-colors"
                >
                  Later
                </button>
              </div>
            </div>
            
            <button
              onClick={dismissInstallPrompt}
              className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Online Status Indicator (when back online) */}
      {isOnline && (
        <div className="hidden">
          {/* Could show "Back online" notification here */}
        </div>
      )}
    </>
  )
}

export default PWAInstaller 