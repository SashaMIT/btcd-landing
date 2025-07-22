# Deployment Guide

This guide covers how to deploy the BTCD Landing Page to various hosting platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)
Vercel provides the best Next.js deployment experience with zero configuration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SashaMIT/btcd-landing)

**Manual Deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Features:**
- ✅ Zero-config deployment
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments for PRs
- ✅ Built-in analytics

---

### Netlify
```bash
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

**Build Settings:**
- **Build Command:** `npm run build`
- **Publish Directory:** `out`
- **Node Version:** 18.x

---

### AWS Amplify
1. Connect your GitHub repository
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

---

### Digital Ocean App Platform
Create `app.yaml`:
```yaml
name: btcd-landing
services:
  - name: web
    source_dir: /
    github:
      repo: SashaMIT/btcd-landing
      branch: main
    run_command: npm start
    build_command: npm run build
    environment_slug: node-js
    instance_count: 1
    instance_size_slug: basic-xxs
    routes:
      - path: /
```

---

### Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy
railway deploy
```

---

## 🔧 Build Configuration

### Environment Variables
Create a `.env.local` file for local development:
```bash
# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Language Configuration
NEXT_PUBLIC_DEFAULT_LANGUAGE=en
```

### Production Optimizations
The project includes several optimizations for production:

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Custom font loading with font-display: swap
- **Code Splitting**: Automatic code splitting by route
- **Compression**: Gzip compression enabled
- **Caching**: Static assets cached with optimal headers

## 📊 Performance Monitoring

### Lighthouse Scores
Target scores for production:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 🌐 Custom Domain Setup

### Vercel
1. Add domain in Vercel dashboard
2. Configure DNS records:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### Netlify
1. Add domain in Netlify dashboard
2. Configure DNS records:
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   
   Type: ALIAS/ANAME
   Name: @
   Value: apex-loadbalancer.netlify.com
   ```

## 🔒 Security Headers

Add security headers to your deployment:

```javascript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

export default nextConfig
```

## 📈 Analytics Setup

### Google Analytics
1. Create a GA4 property
2. Add tracking ID to environment variables
3. Deploy with updated configuration

### Vercel Analytics
Add to your project:
```bash
npm install @vercel/analytics
```

## 🚨 Troubleshooting

### Common Issues

**Build Failures:**
- Check Node.js version (18+ required)
- Clear node_modules and reinstall dependencies
- Verify all environment variables are set

**Performance Issues:**
- Optimize images (use Next.js Image component)
- Implement proper caching strategies
- Monitor bundle size with `npm run build:analyze`

**Deployment Errors:**
- Check build logs for specific errors
- Verify package.json scripts
- Ensure all dependencies are in package.json

### Debug Commands
```bash
# Check bundle size
npm run build:analyze

# Type checking
npm run type-check

# Linting
npm run lint

# Local production test
npm run preview
```

## 📞 Support

For deployment issues:
1. Check platform-specific documentation
2. Review build logs
3. Test locally with production build
4. Contact platform support if needed

---

**Happy Deploying! 🚀** 