export function cn(
  ...classes: (string | undefined | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}


export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}


export function absoluteUrl(path: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.seaspire.com";

  return `${baseUrl}${path}`;
}