import React from 'react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  color?: 'white' | 'orange' | 'gray'
}

export function LoadingSpinner({ size = 'md', className, color = 'orange' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  }

  const colorClasses = {
    white: 'border-white/30 border-t-white',
    orange: 'border-orange-300/30 border-t-orange-500',
    gray: 'border-gray-300/30 border-t-gray-600'
  }

  return (
    <div 
      className={cn(
        'animate-spin rounded-full border-2',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular'
  lines?: number
}

export function Skeleton({ className, variant = 'rectangular', lines = 1 }: SkeletonProps) {
  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'animate-pulse bg-gradient-to-r from-gray-200/60 via-gray-300/80 to-gray-200/60 bg-[length:200%_100%] rounded',
              i === lines - 1 ? 'w-3/4' : 'w-full',
              'h-4',
              className
            )}
            style={{
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    )
  }

  const variantClasses = {
    text: 'h-4 w-full rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full aspect-square'
  }

  return (
    <div
      className={cn(
        'animate-pulse bg-gradient-to-r from-gray-200/60 via-gray-300/80 to-gray-200/60 bg-[length:200%_100%]',
        variantClasses[variant],
        className
      )}
      style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 2s ease-in-out infinite'
      }}
    />
  )
}

interface LoadingOverlayProps {
  isLoading: boolean
  children: React.ReactNode
  className?: string
  spinnerSize?: 'sm' | 'md' | 'lg'
  spinnerColor?: 'white' | 'orange' | 'gray'
  blur?: boolean
}

export function LoadingOverlay({ 
  isLoading, 
  children, 
  className,
  spinnerSize = 'md',
  spinnerColor = 'orange',
  blur = true
}: LoadingOverlayProps) {
  return (
    <div className={cn('relative', className)}>
      {children}
      {isLoading && (
        <div className={cn(
          'absolute inset-0 flex items-center justify-center',
          'bg-black/20 backdrop-blur-sm',
          blur && 'backdrop-blur-md',
          'transition-all duration-200 ease-in-out',
          'z-50'
        )}>
          <div className="flex flex-col items-center space-y-2">
            <LoadingSpinner size={spinnerSize} color={spinnerColor} />
            <span className="text-sm text-white/80 font-medium">Loading...</span>
          </div>
        </div>
      )}
    </div>
  )
}

interface ProgressiveImageProps {
  src: string
  alt: string
  className?: string
  blurDataURL?: string
  width?: number
  height?: number
}

export function ProgressiveImage({ 
  src, 
  alt, 
  className, 
  blurDataURL,
  width,
  height 
}: ProgressiveImageProps) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  return (
    <div className={cn('relative', className)}>
      {isLoading && !hasError && (
        <Skeleton className="absolute inset-0" />
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          hasError && 'opacity-50',
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
        style={{
          backgroundImage: blurDataURL ? `url(${blurDataURL})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  )
}

interface ButtonLoadingProps {
  isLoading: boolean
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export function ButtonLoading({ 
  isLoading, 
  children, 
  className, 
  disabled,
  onClick 
}: ButtonLoadingProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        'relative transition-all duration-200',
        isLoading && 'cursor-not-allowed',
        className
      )}
    >
      <span className={cn(
        'flex items-center justify-center',
        isLoading && 'opacity-0'
      )}>
        {children}
      </span>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" color="white" />
        </div>
      )}
    </button>
  )
}

// Add shimmer keyframes to global CSS
export const shimmerKeyframes = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
` 