import { brandOpenGraphImage } from "@/lib/brandOgImage";

export const alt = "Propale 2026 · Gorges du Verdon — vacances d’été";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return brandOpenGraphImage();
}
