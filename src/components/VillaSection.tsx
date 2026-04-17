import Image from "next/image";
import Link from "next/link";
import { VillaTripEstimate } from "@/components/VillaTripEstimate";
import { villas } from "@/config/villas";
import { villaAssetUrl } from "@/lib/villaAssetUrl";

export function VillaSection() {
  return (
    <section
      id="villas"
      className="scroll-mt-17 border-b border-stone-200 bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-teal-800">
          Cœur du projet
        </p>
        <h2 className="mt-2 font-display text-2xl text-stone-900 sm:text-3xl md:text-4xl">
          Les villas
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-stone-600 sm:text-base">
          Quatre pistes avec photos, lien Airbnb et{" "}
          <strong className="font-medium text-stone-800">estimation logement + transport / personne</strong>{" "}
          (hors repas & activités). Détail dans{" "}
          <a href="#dates-budget" className="font-medium text-teal-800 underline-offset-2 hover:underline">
            Dates & budget
          </a>
          .
        </p>
        <ul className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {villas.map((v) => {
            const cover = v.photos[0];
            return (
              <li key={v.slug}>
                <Link
                  href={`/villas/${v.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm ring-1 ring-stone-200/60 transition hover:border-teal-300 hover:shadow-md hover:ring-teal-200/60 sm:flex-row"
                >
                  <div className="relative aspect-16/10 w-full shrink-0 sm:aspect-auto sm:w-[min(44%,300px)] sm:self-stretch sm:min-h-[200px]">
                    <Image
                      src={villaAssetUrl(cover)}
                      alt={v.photoAlts[0]}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 300px, 100vw"
                      unoptimized={cover.endsWith(".svg")}
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-5 py-5 sm:px-6 sm:py-6">
                    <span className="font-display text-lg leading-snug text-stone-900 sm:text-xl">
                      {v.title}
                    </span>
                    <VillaTripEstimate villa={v} variant="compact" />
                    <span className="mt-1 inline-flex items-center gap-1 font-sans text-sm font-semibold text-teal-800">
                      Fiche complète
                      <span aria-hidden className="transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
