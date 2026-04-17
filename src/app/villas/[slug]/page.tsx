import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVillaBySlug, villas } from "@/config/villas";
import { VillaTripEstimate } from "@/components/VillaTripEstimate";
import { formatEuro } from "@/lib/formatEuro";
import { villaAssetUrl } from "@/lib/villaAssetUrl";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return villas.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const villa = getVillaBySlug(slug);
  if (!villa) return { title: "Villa" };
  const desc =
    villa.pitch?.intro ??
    `Photos et lien Airbnb — ${villa.title}.`;
  return {
    title: `${villa.title} · Propale Verdon`,
    description: desc,
  };
}

export default async function VillaPage({ params }: Props) {
  const { slug } = await params;
  const villa = getVillaBySlug(slug);
  if (!villa) notFound();

  const [a, b] = villa.photos;
  const [altA, altB] = villa.photoAlts;

  return (
    <main className="min-h-full pb-[max(2rem,env(safe-area-inset-bottom))]">
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 md:px-10">
        <p className="mb-8">
          <Link
            href="/#villas"
            className="font-sans text-sm font-medium text-teal-800 underline-offset-4 hover:underline"
          >
            ← Toutes les villas
          </Link>
        </p>
        <h1 className="font-display text-3xl text-stone-900 sm:text-4xl">
          {villa.title}
        </h1>
        <p className="mt-2 font-sans text-sm text-stone-600">
          Deux visuels + fiche complète sur Airbnb.
        </p>
        <div
          className={`mt-4 flex flex-wrap items-start gap-4 ${
            villa.priceTotalEur != null ? "justify-between" : "justify-start"
          }`}
        >
          {villa.priceTotalEur != null ? (
            <p className="min-w-0 flex-1 font-display text-2xl text-teal-800 sm:text-3xl">
              {formatEuro(villa.priceTotalEur)} €
              <span className="ml-2 font-sans text-sm font-normal text-stone-600">
                pour le séjour (annonce)
                {villa.extraGroupFeesEur != null && villa.extraGroupFeesEur > 0 ? (
                  <span className="block mt-1 text-stone-500">
                    + {formatEuro(villa.extraGroupFeesEur)} € frais groupe (linge / ménage…)
                  </span>
                ) : null}
              </span>
            </p>
          ) : null}
          <a
            href={villa.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center self-start rounded-xl bg-teal-800 px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition hover:bg-teal-900 sm:px-6 sm:py-3"
          >
            Voir sur Airbnb
          </a>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
          <li className="relative aspect-4/3 overflow-hidden rounded-xl bg-stone-200 shadow-sm ring-1 ring-stone-200/80">
            <Image
              src={villaAssetUrl(a)}
              alt={altA}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 45vw, 100vw"
              unoptimized={a.endsWith(".svg")}
            />
          </li>
          <li className="relative aspect-4/3 overflow-hidden rounded-xl bg-stone-200 shadow-sm ring-1 ring-stone-200/80">
            <Image
              src={villaAssetUrl(b)}
              alt={altB}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 45vw, 100vw"
              unoptimized={b.endsWith(".svg")}
            />
          </li>
        </ul>

        {villa.pitch ? (
          <div className="mt-8 rounded-xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="font-sans text-sm leading-relaxed text-stone-800 sm:text-base">
              {villa.pitch.intro}
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 font-sans text-sm text-stone-700 marker:text-teal-800 sm:text-base">
              {villa.pitch.items.map((line) => (
                <li key={line} className="pl-0.5">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <VillaTripEstimate villa={villa} variant="detailed" />
      </article>

      <footer className="border-t border-stone-200 bg-stone-100 px-4 py-8 text-center font-sans text-sm text-stone-600 sm:px-10 sm:py-10">
        Propale 2026 — Gorges du Verdon
      </footer>
    </main>
  );
}
