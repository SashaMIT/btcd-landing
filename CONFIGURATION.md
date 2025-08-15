# BTCD Landing Page Configuration

This document explains how to configure external URLs and application settings in the BTCD landing page.

## Configuration File

All configurable values are centralized in `lib/config.ts`.

## Available Configuration Options

### App URLs
```typescript
appUrl: "https://app.btcdprotocol.com"
```
- **Purpose**: Main application URL for all "Launch App" and "Mint Today" buttons
- **Usage**: Used in navigation, hero section, and final CTA buttons

### External Links
```typescript
external: {
  elastos: "https://elastos.net",
  elastosBuyEla: "https://elastos.net/buy-ela", 
  nbwLabs: "https://www.nbwlabs.org/offerings",
  twitter: "https://x.com/PGProtocol",
}
```

### App Settings
```typescript
app: {
  name: "BTCD",
  description: "The world's first fully Bitcoin-backed stablecoin",
  launchDate: "August 2025",
}
```

## How to Update URLs

### 1. Change App URL
To change where all the "Launch App" buttons redirect:
```typescript
// In lib/config.ts
export const config = {
  appUrl: "https://your-new-app-url.com",
  // ... rest of config
}
```

### 2. Change External Links
To update any external link:
```typescript
// In lib/config.ts
external: {
  elastos: "https://new-elastos-url.com",
  // ... other links
}
```

### 3. Update App Information
To change app details:
```typescript
// In lib/config.ts
app: {
  name: "New App Name",
  description: "New description",
  launchDate: "New Date",
}
```

## Files Using Configuration

The following files now use configurable URLs instead of hard-coded ones:

- `app/page.tsx` - Main landing page
- `app/privacy/page.tsx` - Privacy policy page  
- `app/terms/page.tsx` - Terms of service page
- `app/risk-disclaimer/page.tsx` - Risk disclaimer page
- `components/professional-faq.tsx` - FAQ component

## Benefits

1. **Centralized Management**: All URLs in one place
2. **Easy Updates**: Change URLs without searching through code
3. **Environment Support**: Easy to switch between staging/production URLs
4. **Team Collaboration**: Developers can easily see and update all external links
5. **Maintenance**: No more hunting for hard-coded URLs throughout the codebase

## Example: Switching to Staging

```typescript
// For staging environment
export const config = {
  appUrl: "https://staging.btcdprotocol.com",
  // ... rest of config
}

// For production environment  
export const config = {
  appUrl: "https://app.btcdprotocol.com",
  // ... rest of config
}
```

## Example: Updating Social Media Links

```typescript
// Update Twitter/X link
external: {
  twitter: "https://x.com/YourNewHandle",
  // ... other links
}
```

## Migration Complete

All hard-coded URLs have been replaced with configurable values. The landing page is now much easier to maintain and update.
