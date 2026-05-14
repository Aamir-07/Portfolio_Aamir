/** Public files live under `public/`; with `basePath`, URLs must be prefixed. */
export function publicUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const clean = path.replace(/^\//, "");
  if (!base) return `/${clean}`;
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${b}/${clean}`;
}
