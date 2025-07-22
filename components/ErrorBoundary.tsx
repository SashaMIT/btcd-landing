'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  showDetails?: boolean
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
}

export class ErrorBoundary extends Component<Props, State> {
  private retryCount = 0
  private maxRetries = 3

  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    console.error('Error Boundary caught an error:', error, errorInfo)
    
    this.setState({
      error,
      errorInfo
    })

    // Report to error tracking service (if available)
    this.reportError(error, errorInfo)
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      url: typeof window !== 'undefined' ? window.location.href : 'SSR',
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',
      timestamp: new Date().toISOString()
    }

    // Send to monitoring service (example)
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Example: Sentry, LogRocket, or custom analytics
      console.log('Error reported:', errorData)
    }
  }

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++
      this.setState({ hasError: false, error: undefined, errorInfo: undefined })
    }
  }

  private handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  private handleHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-elastos-darker flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center">
            {/* Error Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </div>

            {/* Error Title */}
            <h1 className="text-2xl font-bold text-white mb-2 font-pp-telegraf">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-400 mb-6 text-sm">
              We encountered an unexpected error. Our team has been notified and is working on a fix.
            </p>

            {/* Error Details (Development only) */}
            {(this.props.showDetails || process.env.NODE_ENV === 'development') && this.state.error && (
              <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-600/30 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-semibold text-red-400">Error Details</span>
                </div>
                <p className="text-xs text-gray-300 font-mono break-words">
                  {this.state.error.message}
                </p>
                {this.state.errorId && (
                  <p className="text-xs text-gray-500 mt-2">
                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              {this.retryCount < this.maxRetries && (
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-elastos-orange hover:bg-elastos-orange/80 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again ({this.maxRetries - this.retryCount} remaining)
                </button>
              )}
              
              <button
                onClick={this.handleReload}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>
              
              <button
                onClick={this.handleHome}
                className="w-full bg-transparent border border-gray-600 hover:bg-gray-700/50 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>

            {/* Help Text */}
            <p className="text-xs text-gray-500 mt-6">
              If this problem persists, please contact support with Error ID: {this.state.errorId}
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Functional wrapper for easier usage
interface ErrorBoundaryWrapperProps {
  children: ReactNode
  fallback?: ReactNode
  showDetails?: boolean
}

export function ErrorBoundaryWrapper({ children, fallback, showDetails }: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary fallback={fallback} showDetails={showDetails}>
      {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundary 