/** URL vers un fichier dans public/gorges/ (espaces dans le nom gérés). */
export function gorgesAssetUrl(filename: string): string {
  return `/gorges/${encodeURIComponent(filename)}`;
}
