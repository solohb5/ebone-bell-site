import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const TARGET_MAX_SIZE_KB = 300;

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  
  try {
    const stats = await stat(filePath);
    const sizeKB = stats.size / 1024;
    
    // Skip if already small enough
    if (sizeKB < TARGET_MAX_SIZE_KB) {
      console.log(`✓ Skip: ${filePath} (${Math.round(sizeKB)}KB - already optimized)`);
      return;
    }
    
    console.log(`⚙️  Optimizing: ${filePath} (${Math.round(sizeKB)}KB)`);
    
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Resize if too large (max 1920px wide)
    if (metadata.width > 1920) {
      image.resize(1920, null, { withoutEnlargement: true });
    }
    
    // Optimize based on format
    if (ext === '.jpg' || ext === '.jpeg') {
      await image.jpeg({ quality: 82, progressive: true }).toFile(filePath + '.tmp');
    } else if (ext === '.png') {
      await image.png({ quality: 85, compressionLevel: 9 }).toFile(filePath + '.tmp');
    } else if (ext === '.webp') {
      await image.webp({ quality: 85 }).toFile(filePath + '.tmp');
    } else {
      console.log(`✗ Skip: ${filePath} (unsupported format)`);
      return;
    }
    
    const newStats = await stat(filePath + '.tmp');
    const newSizeKB = newStats.size / 1024;
    const savings = ((sizeKB - newSizeKB) / sizeKB * 100).toFixed(1);
    
    // Replace original with optimized
    await import('fs/promises').then(fs => fs.rename(filePath + '.tmp', filePath));
    
    console.log(`✓ Done: ${filePath} (${Math.round(sizeKB)}KB → ${Math.round(newSizeKB)}KB, saved ${savings}%)`);
  } catch (error) {
    console.error(`✗ Error: ${filePath}`, error.message);
  }
}

async function processDirectory(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = join(dir, file.name);
    
    if (file.isDirectory()) {
      await processDirectory(fullPath);
    } else if (['.jpg', '.jpeg', '.png', '.webp'].includes(extname(file.name).toLowerCase())) {
      await optimizeImage(fullPath);
    }
  }
}

console.log('🚀 Starting image optimization...\n');

Promise.all([
  processDirectory('client/public'),
  processDirectory('attached_assets/generated_images')
]).then(() => {
  console.log('\n✅ Image optimization complete!');
}).catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});

