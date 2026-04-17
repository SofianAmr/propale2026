import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="top"
      className="border-b border-stone-200 bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-teal-800 sm:text-xs">
          Été 2026
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-[2.75rem]">
          Le grand bleu, tout près de chez nous.
        </h1>
        <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm">
          <Link href="/#villas" className="font-medium text-teal-800 underline-offset-4 hover:underline">
            Voir les villas
          </Link>
          <Link href="/#pourquoi" className="font-medium text-stone-600 underline-offset-4 hover:text-stone-900 hover:underline">
            Pourquoi le Verdon
          </Link>
        </p>
      </div>
    </section>
  );
}
