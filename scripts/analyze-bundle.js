#!/usr/bin/env node

/**
 * Bundle Analysis Script for BTCD Landing Page
 * Run with: npm run build:analyze
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Analyzing BTCD Landing Page Bundle...\n');

try {
  // Run the build with analysis
  console.log('📦 Building with bundle analysis...');
  process.env.ANALYZE = 'true';
  execSync('npm run build', { stdio: 'inherit' });

  // Check if .next directory exists
  const nextDir = path.join(process.cwd(), '.next');
  if (!fs.existsSync(nextDir)) {
    console.error('❌ .next directory not found. Build may have failed.');
    process.exit(1);
  }

  // Get build info
  const buildManifest = path.join(nextDir, 'build-manifest.json');
  if (fs.existsSync(buildManifest)) {
    const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));
    console.log('\n📊 Build Statistics:');
    console.log(`📄 Pages: ${Object.keys(manifest.pages).length}`);
    console.log(`🎯 Main bundles: ${manifest.pages['/']?.length || 0}`);
  }

  // Image optimization report
  const publicDir = path.join(process.cwd(), 'public');
  const imageFiles = fs.readdirSync(publicDir, { withFileTypes: true })
    .filter(dirent => dirent.isFile())
    .filter(dirent => /\.(jpg|jpeg|png|webp|avif|svg)$/i.test(dirent.name))
    .map(dirent => {
      const filePath = path.join(publicDir, dirent.name);
      const stats = fs.statSync(filePath);
      return {
        name: dirent.name,
        size: stats.size,
        sizeKB: Math.round(stats.size / 1024),
      };
    })
    .sort((a, b) => b.size - a.size);

  console.log('\n🖼️  Image Analysis:');
  console.log(`📁 Total images: ${imageFiles.length}`);
  
  const totalImageSize = imageFiles.reduce((sum, file) => sum + file.size, 0);
  console.log(`💾 Total image size: ${Math.round(totalImageSize / 1024 / 1024 * 100) / 100} MB`);
  
  console.log('\n📊 Largest images:');
  imageFiles.slice(0, 10).forEach((file, index) => {
    const indicator = file.sizeKB > 500 ? '🔴' : file.sizeKB > 100 ? '🟡' : '🟢';
    console.log(`${index + 1}. ${indicator} ${file.name} - ${file.sizeKB} KB`);
  });

  console.log('\n✅ Bundle analysis complete!');
  console.log('\n💡 Optimization Tips:');
  console.log('   • Use Next.js Image component for automatic optimization');
  console.log('   • Convert large PNGs to WebP format');
  console.log('   • Consider lazy loading for below-fold images');
  console.log('   • Use appropriate image sizes for different viewports');

} catch (error) {
  console.error('❌ Bundle analysis failed:', error.message);
  process.exit(1);
} 