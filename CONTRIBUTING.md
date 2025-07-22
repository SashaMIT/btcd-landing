# Contributing to BTCD Landing Page

Thank you for your interest in contributing to the BTCD Landing Page! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker to report bugs
- Check existing issues before creating new ones
- Provide detailed information including:
  - Browser and version
  - Screen size/device
  - Steps to reproduce
  - Expected vs actual behavior
  - Screenshots if applicable

### Feature Requests
- Open an issue to discuss new features before implementing
- Explain the use case and benefits
- Consider backwards compatibility
- Discuss implementation approaches

## 🛠️ Development Setup

### Prerequisites
- Node.js 18 or higher
- pnpm (preferred) or npm
- Git

### Getting Started
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/btcd-landing.git
   cd btcd-landing
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start development server:
   ```bash
   pnpm dev
   ```

### Branch Naming
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `style/` - UI/styling changes
- `i18n/` - Translation updates

Example: `feature/add-mobile-navigation`

## 📝 Code Standards

### TypeScript
- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type usage
- Use strict mode configurations

### React Components
- Use functional components with hooks
- Follow component naming conventions (PascalCase)
- Keep components focused and reusable
- Use proper prop typing with interfaces

### Styling
- Use Tailwind CSS utility classes
- Follow responsive design principles
- Maintain consistency with existing design system
- Use semantic class names for custom styles

### File Structure
```
components/
├── ui/              # Reusable UI components
├── sections/        # Page-specific sections
└── [ComponentName].tsx

lib/
├── utils.ts         # Utility functions
├── translations.ts  # i18n content
└── constants.ts     # App constants
```

## 🌍 Internationalization

### Adding Translations
1. Update `lib/translations.ts` with new keys
2. Provide both English and Chinese translations
3. Use descriptive key names following existing patterns
4. Test language switching functionality

### Translation Guidelines
- Keep translations contextually accurate
- Maintain consistent terminology
- Consider cultural nuances
- Test text length in both languages

## 🎨 Design Guidelines

### Visual Consistency
- Follow existing color palette
- Use consistent spacing (Tailwind spacing scale)
- Maintain typography hierarchy
- Ensure proper contrast ratios

### Responsive Design
- Mobile-first approach
- Test on multiple screen sizes
- Use Tailwind responsive prefixes
- Ensure touch-friendly interactions

### Animations
- Use Framer Motion for complex animations
- Keep animations purposeful and smooth
- Consider reduced motion preferences
- Test performance on lower-end devices

## 🧪 Testing

### Manual Testing
- Test all interactive elements
- Verify responsive design
- Check both language versions
- Test across different browsers

### Performance
- Check Lighthouse scores
- Optimize images and assets
- Monitor bundle size
- Test loading performance

## 📦 Pull Request Process

### Before Submitting
1. Ensure code follows style guidelines
2. Test changes thoroughly
3. Update documentation if needed
4. Check for console errors
5. Verify responsive design

### PR Requirements
- Clear, descriptive title
- Detailed description of changes
- Link to related issues
- Screenshots for UI changes
- List any breaking changes

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/UI improvement
- [ ] Refactoring

## Screenshots
Include screenshots for UI changes

## Testing
- [ ] Tested locally
- [ ] Tested responsive design
- [ ] Tested both languages
- [ ] No console errors

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed changes
- [ ] Added/updated translations
- [ ] Updated documentation
```

## 🚀 Release Process

### Version Management
- Follow semantic versioning (SemVer)
- Update CHANGELOG.md
- Tag releases appropriately

### Deployment
- All changes merged to main branch
- Automatic deployment via CI/CD
- Verify production deployment

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tools
- [React Developer Tools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 💬 Communication

### Getting Help
- Check existing documentation
- Search through closed issues
- Open a discussion for questions
- Join community channels

### Code Review
- Be respectful and constructive
- Explain reasoning behind suggestions
- Test changes locally when reviewing
- Approve when ready

## 🙏 Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- Project documentation

Thank you for contributing to BTCD Landing Page! 🚀 