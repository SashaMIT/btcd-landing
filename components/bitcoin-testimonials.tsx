"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Twitter } from 'lucide-react';
import Image from 'next/image';

// Utils function
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Avatar components
const AvatarRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
AvatarRoot.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }
>(({ className, src, alt, width = 40, height = 40, ...props }, _ref) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

// Background Pattern Component
type BGVariantType = 'dots' | 'diagonal-stripes' | 'grid' | 'horizontal-lines' | 'vertical-lines' | 'checkerboard';
type BGMaskType = 'fade-center' | 'fade-edges' | 'fade-top' | 'fade-bottom' | 'fade-left' | 'fade-right' | 'fade-x' | 'fade-y' | 'none';

interface BGPatternProps extends React.ComponentProps<'div'> {
  variant?: BGVariantType;
  mask?: BGMaskType;
  size?: number;
  fill?: string;
}

const maskClasses: Record<BGMaskType, string> = {
  'fade-edges': '[mask-image:radial-gradient(ellipse_at_center,var(--background),transparent)]',
  'fade-center': '[mask-image:radial-gradient(ellipse_at_center,transparent,var(--background))]',
  'fade-top': '[mask-image:linear-gradient(to_bottom,transparent,var(--background))]',
  'fade-bottom': '[mask-image:linear-gradient(to_bottom,var(--background),transparent)]',
  'fade-left': '[mask-image:linear-gradient(to_right,transparent,var(--background))]',
  'fade-right': '[mask-image:linear-gradient(to_right,var(--background),transparent)]',
  'fade-x': '[mask-image:linear-gradient(to_right,transparent,var(--background),transparent)]',
  'fade-y': '[mask-image:linear-gradient(to_bottom,transparent,var(--background),transparent)]',
  none: '',
};

function getBgImage(variant: BGVariantType, fill: string, size: number) {
  switch (variant) {
    case 'dots':
      return `radial-gradient(${fill} 1px, transparent 1px)`;
    case 'grid':
      return `linear-gradient(to right, ${fill} 1px, transparent 1px), linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
    case 'diagonal-stripes':
      return `repeating-linear-gradient(45deg, ${fill}, ${fill} 1px, transparent 1px, transparent ${size}px)`;
    case 'horizontal-lines':
      return `linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
    case 'vertical-lines':
      return `linear-gradient(to right, ${fill} 1px, transparent 1px)`;
    case 'checkerboard':
      return `linear-gradient(45deg, ${fill} 25%, transparent 25%), linear-gradient(-45deg, ${fill} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${fill} 75%), linear-gradient(-45deg, transparent 75%, ${fill} 75%)`;
    default:
      return undefined;
  }
}

const BGPattern = ({
  variant = 'grid',
  mask = 'none',
  size = 24,
  fill = '#252525',
  className,
  style,
  ...props
}: BGPatternProps) => {
  const bgSize = `${size}px ${size}px`;
  const backgroundImage = getBgImage(variant, fill, size);

  return (
    <div
      className={cn('absolute inset-0 z-[-10] size-full', maskClasses[mask], className)}
      style={{
        backgroundImage,
        backgroundSize: bgSize,
        ...style,
      }}
      {...props}
    />
  );
};

// Testimonial Card Interface
interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
  verified?: boolean;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

// Bitcoin Testimonial Card Component
const BitcoinTestimonialCard = ({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const Card = href ? 'a' : 'div';
  
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      onHoverStart={() => setIsCardHovered(true)}
      onHoverEnd={() => setIsCardHovered(false)}
      className="group"
    >
      <Card
        {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cn(
          "relative flex flex-col rounded-2xl border border-zinc-800/50",
          "bg-gradient-to-b from-zinc-900/90 to-zinc-950/80 backdrop-blur-md",
          "p-5 text-start transition-all duration-300",
          "hover:border-[#F6921A]/40 hover:shadow-xl hover:shadow-[#F6921A]/20",
          "w-full h-auto min-h-[180px] max-w-[320px]",
          "overflow-hidden shadow-lg",
          className
        )}
      >
        {/* Bitcoin Orange Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F6921A]/10 via-transparent to-[#5C8EFF]/5 rounded-2xl" />
        </div>
        
        {/* Social Media Header */}
        <div className="relative flex items-start gap-3 mb-4">
          <AvatarRoot className="h-10 w-10 ring-2 ring-zinc-800 group-hover:ring-[#F6921A]/40 transition-all duration-300 flex-shrink-0">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="bg-zinc-800 text-zinc-300 text-xs">
              {author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </AvatarRoot>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-1">
              <h3 className="text-sm font-medium text-zinc-100 group-hover:text-white transition-colors truncate">
                {author.name}
              </h3>
              {author.verified && (
                <CheckCircle className="h-4 w-4 text-[#F6921A] flex-shrink-0" />
              )}
            </div>
            <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
              {author.handle}
            </p>
          </div>
          
          <Twitter className="h-4 w-4 text-zinc-600 group-hover:text-[#F6921A] transition-colors flex-shrink-0" />
        </div>

                {/* Testimonial Text */}
        <div className="relative flex-1">
          <p className="text-sm text-zinc-300 group-hover:text-zinc-100 leading-relaxed transition-colors" style={{ fontFamily: 'PP Telegraf Ultralight, system-ui, sans-serif', fontWeight: 200 }}>
            {text}
          </p>
        </div>
        
        

        {/* Bitcoin Orange Accent Line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#F6921A] to-[#5C8EFF] rounded-b-2xl"
          initial={{ width: 0 }}
          animate={{ width: isCardHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
};

// Main Testimonials Section Component
interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  badge?: string;
  testimonials?: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export const BitcoinTestimonialsSection = ({ 
  title = "What Bitcoin Leaders Are Saying",
  description = "See what leading voices in the Bitcoin and cryptocurrency space are saying about BTCD",
  badge = "TESTIMONIALS",
  testimonials = [],
  className 
}: TestimonialsSectionProps) => {
  // Container ref removed - not used in current implementation
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Create 2 rows for horizontal scrolling
  const createRows = (items: TestimonialCardProps[], rowCount: number) => {
    const rows: TestimonialCardProps[][] = Array.from({ length: rowCount }, () => []);
    items.forEach((item, index) => {
      rows[index % rowCount].push(item);
    });
    return rows;
  };

  const rows = createRows(testimonials, 2);
  
  // Duplicate testimonials for seamless loop with unique keys
  const duplicatedRows = rows.map(row => {
    return [
      ...row.map((item, i) => ({ ...item, _key: `original-${i}` })),
      ...row.map((item, i) => ({ ...item, _key: `duplicate1-${i}` })),
      ...row.map((item, i) => ({ ...item, _key: `duplicate2-${i}` }))
    ];
  });

  return (
        <section className={cn(
              "relative text-zinc-100 overflow-hidden",
      "py-24 sm:py-28 md:py-32",
      className
    )}>
      {/* Background Pattern */}
      <BGPattern 
        variant="dots" 
        mask="fade-edges" 
        fill="rgba(251, 146, 60, 0.1)" 
        size={32}
      />
      


      <div className="relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
                          <div className="w-6 h-6 border-2 border-[#5C8EFF] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#5C8EFF] rounded-full"></div>
            </div>
            <span className="text-[#5C8EFF] text-sm font-medium tracking-wider">{badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Horizontal Scrolling Testimonial Wall */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left fade mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade mask */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#141414] via-[#141414]/80 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="flex flex-col gap-6 py-8">
            {duplicatedRows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="flex gap-4 min-w-max"
                animate={isMounted ? {
                  x: rowIndex % 2 === 0 ? [-1920, -3840] : [-3840, -1920],
                } : {}}
                transition={isMounted ? {
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                  ...(isHovered && { duration: 120 })
                } : {}}
              >
                {row.map((testimonial, index) => (
                  <div key={testimonial._key || `${rowIndex}-${index}`} className="flex-shrink-0 w-80">
                    <BitcoinTestimonialCard {...testimonial} className="h-full" />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-orange-500/10 to-transparent blur-3xl" />
      </div>
    </section>
  );
}; 