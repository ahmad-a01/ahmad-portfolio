import type { ImageMetadata } from 'astro';

// Every image in src/assets, so site.ts can refer to one by its path
// (for example "images/ghost-of-tsushima.jpg" or "certificates/ixdf.jpg").
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export function asset(path: string): ImageMetadata {
  const file = files[`../assets/${path}`];
  if (!file) {
    throw new Error(
      `Image "src/assets/${path}" was not found. Check the file name (including .jpg/.png) and that it was uploaded to src/assets.`,
    );
  }
  return file.default;
}
