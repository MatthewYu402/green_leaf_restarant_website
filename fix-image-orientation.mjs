// One-time fix: bakes EXIF orientation into pixel data for every image
// under src/assets, then strips the (now-redundant) orientation tag.
//
// Run once with:  node fix-image-orientation.mjs
// Requires "sharp" — already a dependency of vite-plugin-image-optimizer,
// so no extra install should be needed.

import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const IMAGE_DIR = path.resolve('src/assets'); // adjust if your images live elsewhere
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tiff']);

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(fullPath)));
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function fixOrientation(filePath) {
  const image = sharp(filePath);
  const metadata = await image.metadata();

  // orientation 1 (or missing) means no rotation is needed — skip it
  // so we don't needlessly re-encode/re-compress every single file.
  if (!metadata.orientation || metadata.orientation === 1) {
    return false;
  }

  const buffer = await sharp(filePath).rotate().toBuffer();
  await sharp(buffer).toFile(filePath);
  return true;
}

async function main() {
  const images = await collectImages(IMAGE_DIR);
  console.log(`Found ${images.length} image(s) to check in ${IMAGE_DIR}`);

  let fixedCount = 0;

  for (const filePath of images) {
    try {
      const wasFixed = await fixOrientation(filePath);
      if (wasFixed) {
        fixedCount++;
        console.log(`Fixed orientation: ${path.relative(process.cwd(), filePath)}`);
      }
    } catch (err) {
      console.error(`Failed on ${filePath}:`, err.message);
    }
  }

  console.log(`\nDone. ${fixedCount} of ${images.length} image(s) had their orientation corrected.`);
}

main();
