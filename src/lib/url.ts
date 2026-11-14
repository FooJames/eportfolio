// Prefix a site-relative path with the configured `base` (e.g. /eportfolio).
export const url = (path: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + path;
