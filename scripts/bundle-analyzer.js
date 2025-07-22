#!/usr/bin/env node

/**
 * Comprehensive Bundle Analysis Script for BTCD Landing Page
 * Analyzes JavaScript bundles, dependencies, and performance metrics
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting Comprehensive Bundle Analysis...\n');

// Color codes for better output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function getPerformanceGrade(size) {
  if (size < 100 * 1024) return { grade: 'A+', color: colors.green };
  if (size < 200 * 1024) return { grade: 'A', color: colors.green };
  if (size < 300 * 1024) return { grade: 'B', color: colors.yellow };
  if (size < 500 * 1024) return { grade: 'C', color: colors.yellow };
  return { grade: 'D', color: colors.red };
}

try {
  // Step 1: Clean build with bundle analysis
  console.log('📦 Building with bundle analysis...');
  process.env.ANALYZE = 'true';
  execSync('npm run build', { stdio: 'inherit' });

  // Step 2: Analyze build output
  const nextDir = path.join(process.cwd(), '.next');
  if (!fs.existsSync(nextDir)) {
    console.error('❌ .next directory not found. Build may have failed.');
    process.exit(1);
  }

  // Step 3: Read build manifest for bundle analysis
  const buildManifestPath = path.join(nextDir, 'build-manifest.json');
  let buildStats = {};
  
  if (fs.existsSync(buildManifestPath)) {
    const buildManifest = JSON.parse(fs.readFileSync(buildManifestPath, 'utf8'));
    
    console.log('\n📊 JavaScript Bundle Analysis:');
    console.log('═'.repeat(50));
    
    // Analyze main page bundles
    const mainPage = buildManifest.pages['/'] || [];
    let totalJSSize = 0;
    
    console.log(`📄 Main Page Bundles (${mainPage.length} files):`);
    
    mainPage.forEach((bundle, index) => {
      const bundlePath = path.join(nextDir, 'static', bundle);
      if (fs.existsSync(bundlePath)) {
        const stats = fs.statSync(bundlePath);
        const { grade, color } = getPerformanceGrade(stats.size);
        console.log(`  ${index + 1}. ${color}${grade}${colors.reset} ${path.basename(bundle)} - ${formatBytes(stats.size)}`);
        totalJSSize += stats.size;
      }
    });
    
    console.log(`\n${colors.bold}📈 Bundle Performance Summary:${colors.reset}`);
    const totalGrade = getPerformanceGrade(totalJSSize);
    console.log(`   Total JS Size: ${totalGrade.color}${formatBytes(totalJSSize)} (${totalGrade.grade})${colors.reset}`);
    
    buildStats.totalJSSize = totalJSSize;
    buildStats.bundleCount = mainPage.length;
  }

  // Step 4: Analyze static assets
  const staticDir = path.join(nextDir, 'static');
  if (fs.existsSync(staticDir)) {
    const chunks = fs.readdirSync(path.join(staticDir, 'chunks'), { withFileTypes: true })
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.js'))
      .map(dirent => {
        const filePath = path.join(staticDir, 'chunks', dirent.name);
        const stats = fs.statSync(filePath);
        return {
          name: dirent.name,
          size: stats.size,
          type: dirent.name.includes('framework') ? 'Framework' : 
                dirent.name.includes('main') ? 'Main' :
                dirent.name.includes('pages') ? 'Pages' : 'Vendor'
        };
      })
      .sort((a, b) => b.size - a.size);

    console.log('\n🧩 Chunk Analysis (Top 10):');
    console.log('═'.repeat(50));
    
    chunks.slice(0, 10).forEach((chunk, index) => {
      const { grade, color } = getPerformanceGrade(chunk.size);
      const typeColor = chunk.type === 'Framework' ? colors.blue :
                       chunk.type === 'Main' ? colors.green :
                       chunk.type === 'Pages' ? colors.yellow : colors.magenta;
      
      console.log(`  ${index + 1}. ${color}${grade}${colors.reset} ${typeColor}[${chunk.type}]${colors.reset} ${chunk.name.substring(0, 30)}... - ${formatBytes(chunk.size)}`);
    });

    buildStats.largestChunk = chunks[0];
    buildStats.totalChunks = chunks.length;
  }

  // Step 5: Package analysis from package.json
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const dependencies = Object.keys(packageJson.dependencies || {});
  const devDependencies = Object.keys(packageJson.devDependencies || {});
  
  console.log('\n📦 Dependency Analysis:');
  console.log('═'.repeat(50));
  console.log(`   Production Dependencies: ${colors.green}${dependencies.length}${colors.reset}`);
  console.log(`   Development Dependencies: ${colors.blue}${devDependencies.length}${colors.reset}`);
  
  // Highlight heavy packages
  const heavyPackages = [
    'framer-motion', 'react', 'react-dom', 'next', 
    '@radix-ui/react-accordion', '@radix-ui/react-dialog'
  ].filter(pkg => dependencies.includes(pkg));
  
  if (heavyPackages.length > 0) {
    console.log(`   Heavy Packages Detected: ${colors.yellow}${heavyPackages.join(', ')}${colors.reset}`);
  }

  // Step 6: Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  console.log('═'.repeat(50));
  
  if (buildStats.totalJSSize > 300 * 1024) {
    console.log(`   ${colors.red}⚠️  Large bundle size detected${colors.reset}`);
    console.log('      → Implement code splitting for below-fold components');
    console.log('      → Consider dynamic imports for heavy features');
  }
  
  if (buildStats.bundleCount > 5) {
    console.log(`   ${colors.yellow}📊 Multiple bundles detected${colors.reset}`);
    console.log('      → Good code splitting already in place');
  }
  
  if (heavyPackages.includes('framer-motion')) {
    console.log(`   ${colors.cyan}🎬 Framer Motion detected${colors.reset}`);
    console.log('      → Consider lazy loading animation components');
    console.log('      → Use dynamic imports for motion components');
  }

  console.log('\n✅ Bundle analysis complete!');
  console.log(`\n📝 Summary Report:`);
  console.log(`   • Total JS Bundle: ${formatBytes(buildStats.totalJSSize || 0)}`);
  console.log(`   • Bundle Grade: ${getPerformanceGrade(buildStats.totalJSSize || 0).grade}`);
  console.log(`   • Chunk Count: ${buildStats.totalChunks || 0}`);
  console.log(`   • Dependencies: ${dependencies.length} production, ${devDependencies.length} dev`);
  
  // Step 7: Open bundle analyzer (if in interactive mode)
  if (process.env.OPEN_ANALYZER === 'true') {
    console.log('\n🌐 Opening interactive bundle analyzer...');
    console.log('   → Browser will open with detailed bundle visualization');
    console.log('   → Press Ctrl+C to close when done analyzing');
  }

} catch (error) {
  console.error('❌ Bundle analysis failed:', error.message);
  process.exit(1);
} 