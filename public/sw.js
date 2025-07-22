// BTCD Landing Page Service Worker
// Version 1.0.0

const CACHE_NAME = 'btcd-landing-v1.0.0'
const STATIC_CACHE_NAME = 'btcd-static-v1.0.0'
const DYNAMIC_CACHE_NAME = 'btcd-dynamic-v1.0.0'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/BTCD%20Logo/BTCD%20%233.svg',
  '/BTCD%20Logo/BTCD%20Logo%201.png',
  '/BTCD%20Logo/BTCD%203D%203.png',
  '/BTCD%20Logo/BTC%20lock.png',
  '/Bitcoin%20secure%20lock.png',
  '/Cryptographic%20Credential.png', 
  '/Meter.png',
  '/Merge%20mining.png',
  '/Elastos%20Logo%20Dark%20-%204.png',
  '/2.jpg'
]

// Network-first resources (dynamic content)
const NETWORK_FIRST_PATTERNS = [
  /\/api\//,
  /\/sitemap\.xml$/,
  /\/robots\.txt$/
]

// Cache-first resources (static assets)
const CACHE_FIRST_PATTERNS = [
  /\.(?:js|css|woff2|woff|ttf|otf)$/,
  /\/BTCD%20Logo\//,
  /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME && 
                cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('[SW] Service worker activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }
  
  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return
  }

  event.respondWith(
    handleRequest(request)
  )
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  try {
    // Network-first strategy for dynamic content
    if (NETWORK_FIRST_PATTERNS.some(pattern => pattern.test(url.pathname))) {
      return await networkFirstStrategy(request)
    }
    
    // Cache-first strategy for static assets
    if (CACHE_FIRST_PATTERNS.some(pattern => pattern.test(url.pathname))) {
      return await cacheFirstStrategy(request)
    }
    
    // Default: Network-first with cache fallback
    return await networkFirstStrategy(request)
    
  } catch (error) {
    console.error('[SW] Request failed:', error)
    return await getOfflineFallback(request)
  }
}

async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    throw error
  }
}

async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request)
  
  if (cachedResponse) {
    // Update cache in background
    fetch(request)
      .then(networkResponse => {
        if (networkResponse.ok) {
          caches.open(STATIC_CACHE_NAME)
            .then(cache => cache.put(request, networkResponse))
        }
      })
      .catch(() => {}) // Ignore network errors for background updates
    
    return cachedResponse
  }
  
  // Not in cache, fetch from network
  const networkResponse = await fetch(request)
  
  if (networkResponse.ok) {
    const cache = await caches.open(STATIC_CACHE_NAME)
    cache.put(request, networkResponse.clone())
  }
  
  return networkResponse
}

async function getOfflineFallback(request) {
  // Try to serve from cache first
  const cachedResponse = await caches.match(request)
  if (cachedResponse) {
    return cachedResponse
  }
  
  // If requesting HTML page, return offline page
  if (request.headers.get('accept')?.includes('text/html')) {
    const offlineResponse = await caches.match('/')
    if (offlineResponse) {
      return offlineResponse
    }
  }
  
  // Return a basic offline response
  return new Response(
    JSON.stringify({
      error: 'Offline',
      message: 'You are currently offline. Please check your internet connection.'
    }),
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics())
  }
})

async function syncAnalytics() {
  try {
    // Sync cached analytics data when back online
    console.log('[SW] Syncing analytics data...')
    // Implement analytics sync logic here
  } catch (error) {
    console.error('[SW] Analytics sync failed:', error)
  }
}

// Push notifications (future feature)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json()
    
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/BTCD%20Logo/BTCD%20Logo%201.png',
        badge: '/BTCD%20Logo/BTCD%20%233.svg',
        tag: 'btcd-notification',
        requireInteraction: false,
        actions: [
          {
            action: 'open',
            title: 'Open BTCD',
            icon: '/BTCD%20Logo/BTCD%20Logo%201.png'
          }
        ]
      })
    )
  }
})

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Error handling
self.addEventListener('error', (event) => {
  console.error('[SW] Service worker error:', event.error)
})

self.addEventListener('unhandledrejection', (event) => {
  console.error('[SW] Unhandled promise rejection:', event.reason)
}) 