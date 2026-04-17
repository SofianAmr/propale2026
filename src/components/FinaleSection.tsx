import Image from "next/image";
import { finaleGallery, gorgesGallery, gorgesImageAlt } from "@/config/gallery";
import { gorgesAssetUrl } from "@/lib/gorgesAssetUrl";

function resolveFinaleFiles(): string[] {
  if (finaleGallery.length > 0) return finaleGallery;
  const tail = gorgesGallery.slice(-3);
  return tail.length > 0 ? tail : [];
}

export function FinaleSection() {
  const files = resolveFinaleFiles();
  const slots = files.length >= 3 ? files.slice(-3) : files;
  const placeholders = Math.max(0, 3 - slots.length);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-teal-50/60 to-stone-100 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(20,184,166,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-display text-[clamp(1.5rem,5vw,2.75rem)] font-medium leading-snug text-stone-900">
          Le Verdon, c&apos;est le prétexte.{" "}
          <span className="text-teal-800">Vous, c&apos;est la raison.</span>
        </p>
        {placeholders > 0 ? (
          <p className="mx-auto mt-5 max-w-lg font-sans text-sm text-stone-600">
            Ajoutez vos clichés dans{" "}
            <code className="rounded border border-stone-200 bg-white px-1.5 py-0.5 text-xs text-stone-800 shadow-sm">
              public/gorges/
            </code>{" "}
            et listez-les dans{" "}
            <code className="rounded border border-stone-200 bg-white px-1.5 py-0.5 text-xs text-stone-800 shadow-sm">
              finaleGallery
            </code>
            .
          </p>
        ) : null}
      </div>
      <ul className="relative mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-2 sm:gap-3">
        {slots.map((file) => (
          <li
            key={file}
            className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-stone-200 sm:rounded-xl"
          >
            <Image
              src={gorgesAssetUrl(file)}
              alt={gorgesImageAlt[file] ?? "Souvenir du Verdon"}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 200px, 33vw"
            />
          </li>
        ))}
        {Array.from({ length: placeholders }).map((_, i) => (
          <li
            key={`ph-${i}`}
            className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-stone-300 bg-white/80 font-sans text-[0.65rem] text-stone-500 sm:rounded-xl sm:text-xs"
          >
            Votre photo
          </li>
        ))}
      </ul>
    </section>
  );
}
