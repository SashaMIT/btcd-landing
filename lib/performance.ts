import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals'

export interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
  url: string
  userAgent: string
  isMobile: boolean
}

export interface PerformanceSummary {
  metrics: PerformanceMetric[]
  scores: {
    performance: number
    grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F'
  }
  recommendations: string[]
}

// Web Vitals thresholds (Google recommendations)
const VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte
  INP: { good: 200, poor: 500 }    // Interaction to Next Paint
}

function getRating(metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = VITALS_THRESHOLDS[metricName as keyof typeof VITALS_THRESHOLDS]
  if (!threshold) return 'good'
  
  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

function detectMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function calculatePerformanceScore(metrics: PerformanceMetric[]): number {
  const weights = {
    LCP: 0.3,  // Core Web Vital (increased weight)
    CLS: 0.3,  // Core Web Vital (increased weight)  
    INP: 0.25, // Core Web Vital (replaces FID)
    FCP: 0.1,
    TTFB: 0.05
  }

  let totalScore = 0
  let totalWeight = 0

  metrics.forEach(metric => {
    const weight = weights[metric.name as keyof typeof weights] || 0
    if (weight > 0) {
      const score = metric.rating === 'good' ? 100 : 
                   metric.rating === 'needs-improvement' ? 70 : 30
      totalScore += score * weight
      totalWeight += weight
    }
  })

  return totalWeight > 0 ? Math.round(totalScore / totalWeight) : 0
}

function getPerformanceGrade(score: number): 'A+' | 'A' | 'B' | 'C' | 'D' | 'F' {
  if (score >= 95) return 'A+'
  if (score >= 90) return 'A'
  if (score >= 80) return 'B'
  if (score >= 70) return 'C'
  if (score >= 60) return 'D'
  return 'F'
}

function generateRecommendations(metrics: PerformanceMetric[]): string[] {
  const recommendations: string[] = []
  
  metrics.forEach(metric => {
    if (metric.rating === 'poor') {
      switch (metric.name) {
        case 'LCP':
          recommendations.push('🖼️ Optimize images and implement lazy loading for faster LCP')
          recommendations.push('🚀 Consider code splitting to reduce bundle size')
          break

        case 'CLS':
          recommendations.push('📐 Set explicit dimensions for images and media')
          recommendations.push('🎨 Avoid dynamically inserting content above existing content')
          break
        case 'FCP':
          recommendations.push('📦 Optimize Critical Rendering Path')
          recommendations.push('⚡ Minimize render-blocking resources')
          break
        case 'TTFB':
          recommendations.push('🌐 Optimize server response times')
          recommendations.push('🗄️ Consider using a CDN or caching strategy')
          break
        case 'INP':
          recommendations.push('🎯 Optimize event handlers and reduce processing time')
          recommendations.push('🧵 Use web workers for heavy computations')
          break
      }
    }
  })

  return [...new Set(recommendations)] // Remove duplicates
}

export class PerformanceMonitor {
  private metrics: PerformanceMetric[] = []
  private observers: ((summary: PerformanceSummary) => void)[] = []

  constructor() {
    // Only initialize on client side
    if (typeof window !== 'undefined') {
      this.initializeWebVitals()
    }
  }

  private initializeWebVitals() {
    const handleMetric = (metric: any) => {
      const performanceMetric: PerformanceMetric = {
        name: metric.name,
        value: metric.value,
        rating: getRating(metric.name, metric.value),
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        isMobile: detectMobile()
      }

      this.addMetric(performanceMetric)
      console.log(`📊 Performance Metric: ${metric.name}`, performanceMetric)
    }

    // Initialize Web Vitals tracking
    onCLS(handleMetric)
    onFCP(handleMetric)
    onLCP(handleMetric)
    onTTFB(handleMetric)
    onINP(handleMetric)
  }

  private addMetric(metric: PerformanceMetric) {
    this.metrics.push(metric)
    this.notifyObservers()
  }

  public subscribe(callback: (summary: PerformanceSummary) => void) {
    this.observers.push(callback)
    return () => {
      this.observers = this.observers.filter(obs => obs !== callback)
    }
  }

  private notifyObservers() {
    const summary = this.getSummary()
    this.observers.forEach(callback => callback(summary))
  }

  public getSummary(): PerformanceSummary {
    const performanceScore = calculatePerformanceScore(this.metrics)
    const grade = getPerformanceGrade(performanceScore)
    const recommendations = generateRecommendations(this.metrics)

    return {
      metrics: [...this.metrics],
      scores: {
        performance: performanceScore,
        grade
      },
      recommendations
    }
  }

  public logSummary() {
    const summary = this.getSummary()
    
    console.group('🎯 BTCD Performance Summary')
    console.log(`📊 Performance Score: ${summary.scores.performance}/100 (${summary.scores.grade})`)
    console.log(`📈 Metrics Collected: ${summary.metrics.length}`)
    
    if (summary.metrics.length > 0) {
      console.table(summary.metrics.map(m => ({
        Metric: m.name,
        Value: `${Math.round(m.value)}${m.name === 'CLS' ? '' : 'ms'}`,
        Rating: m.rating,
        Mobile: m.isMobile ? '📱' : '💻'
      })))
    }

    if (summary.recommendations.length > 0) {
      console.group('💡 Recommendations')
      summary.recommendations.forEach(rec => console.log(rec))
      console.groupEnd()
    }
    
    console.groupEnd()
  }

  public getMetricsByName(name: string): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.name === name)
  }

  public getAverageMetric(name: string): number {
    const metrics = this.getMetricsByName(name)
    if (metrics.length === 0) return 0
    return metrics.reduce((sum, metric) => sum + metric.value, 0) / metrics.length
  }

  public clear() {
    this.metrics = []
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor()

// Utility function to start monitoring
export function startPerformanceMonitoring(): PerformanceMonitor {
  // Only run on client side
  if (typeof window === 'undefined') {
    return performanceMonitor
  }

  // Auto-log summary after 5 seconds
  setTimeout(() => {
    performanceMonitor.logSummary()
  }, 5000)

  // Log summary when page is about to unload
  window.addEventListener('beforeunload', () => {
    performanceMonitor.logSummary()
  })

  return performanceMonitor
} 