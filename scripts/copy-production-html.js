const fs = require('fs');
const path = require('path');

// Ensure dist/spa directory exists
const distDir = path.join(__dirname, '..', 'dist', 'spa');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy production HTML file
const sourceFile = path.join(__dirname, '..', 'index.production.html');
const targetFile = path.join(distDir, 'index.html');

try {
  fs.copyFileSync(sourceFile, targetFile);
  console.log('✅ Production HTML file copied successfully');
} catch (error) {
  console.error('❌ Error copying HTML file:', error);
  process.exit(1);
}
