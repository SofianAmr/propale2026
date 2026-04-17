/** Fichier dans public/gorges/villa/ */
export function villaAssetUrl(filename: string): string {
  return `/gorges/villa/${encodeURIComponent(filename)}`;
}
