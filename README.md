# BTCD Landing Page

![BTCD Logo](./public/BTCD%20Logo/BTCD%20Logo%201.svg)

A modern, responsive landing page for BTCD - the world's first fully Bitcoin-backed stablecoin. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### 🌍 **Bilingual Support**
- Full English/Chinese translations
- Seamless language switching
- Contextual language persistence

### 🎨 **Modern Design**
- Responsive design for all screen sizes
- Custom BTCD branding and 3D assets
- Framer Motion animations
- Glass morphism effects
- Cinematic banner with gradient overlays

### 🔧 **Technical Excellence**
- Built with Next.js 14 and TypeScript
- Tailwind CSS for styling
- Optimized performance and SEO
- Custom font integration (PP Telegraf)
- Accessible UI components

### 📱 **Responsive Components**
- Interactive FAQ section with category filtering
- Bitcoin testimonials carousel
- Multi-step "How BTCD Works" flow
- Protocol feature showcase
- Professional footer with organized links

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Custom components built on Radix UI
- **Package Manager**: pnpm

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Setup
```bash
# Clone the repository
git clone https://github.com/SashaMIT/btcd-landing.git
cd btcd-landing

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open in browser
# Navigate to http://localhost:3000
```

## 🛠️ Development

### Available Scripts
```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Type checking
pnpm type-check   # Run TypeScript compiler check
```

### Project Structure
```
btcd-landing/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── bitcoin-testimonials.tsx
│   ├── professional-faq.tsx
│   └── LanguageToggle.tsx
├── contexts/             # React contexts
│   └── LanguageContext.tsx
├── lib/                  # Utilities and configurations
│   ├── translations.ts   # i18n translations
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   ├── BTCD Logo/       # Brand assets
│   └── *.png, *.jpg     # Images and icons
└── styles/              # Additional styles
```

## 🌐 Key Sections

### 🏠 **Hero Section**
- Dynamic headline with language support
- Call-to-action buttons
- Partner logos showcase

### ⚙️ **How BTCD Works**
- 4-step interactive process
- Custom illustrations for each step
- Sticky scroll animations

### 🔬 **Protocol Features**
- Bitcoin-Native Architecture
- BTCD Stablecoin details
- Elastos Infrastructure overview
- Technical specifications

### 💰 **Liquidations**
- Interactive liquidation flow
- Dynamic image switching
- Earnings calculator

### ❓ **FAQ**
- Categorized questions
- Inline category tags
- Expandable answers
- Multi-language support

## 🎨 Design Features

### **Typography**
- PP Telegraf custom font family
- 4% letter-spacing for optimal readability
- Responsive font sizing

### **Visual Elements**
- Custom BTCD 3D logos and branding
- Bitcoin secure lock illustrations
- Cryptographic credential graphics
- Smart risk management meter
- Merge mining icons
- Starfield background effects

### **Animations**
- Smooth scroll-triggered animations
- Hover effects and transitions
- Interactive component states
- Loading states and micro-interactions

## 🌍 Internationalization

The project supports full bilingual functionality:

- **Translation System**: Context-based with `lib/translations.ts`
- **Language Toggle**: Header-mounted language switcher
- **Content Coverage**: 100% of UI text and content
- **SEO Support**: Language-specific meta tags

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Connect to Vercel
npx vercel

# Deploy
npx vercel --prod
```

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Add translations for new content
- Test across different screen sizes

## 📄 License

This project is private and proprietary.

## 🔗 Links

- **Repository**: https://github.com/SashaMIT/btcd-landing
- **Demo**: [Coming Soon]
- **BTCD Protocol**: [Documentation Coming Soon]

## 📞 Contact

For questions or support regarding this landing page, please contact the development team.

---

**Built with ❤️ for the Bitcoin DeFi revolution** 