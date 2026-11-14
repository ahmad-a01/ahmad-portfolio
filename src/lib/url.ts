/** Prefix an internal path with the configured base (needed on GitHub Pages project sites). */
export function url(path: string): string {
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
