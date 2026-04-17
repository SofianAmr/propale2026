export function PourToutLeMondeSection() {
  return (
    <section className="bg-stone-50 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-10">
        <div>
          <h2 className="font-display text-2xl text-stone-900 sm:text-3xl md:text-4xl">
            Pour tout le monde
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-stone-600 sm:text-base">
            Une même semaine, deux vitesses possibles — sans se séparer. On reste en
            France : simple pour celles et ceux qui ne partent qu’ici, sans rogner
            sur le décor.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-teal-200 bg-teal-50/80 p-5 shadow-sm sm:p-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Aventure
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-stone-700">
              Kayak, sentiers, routes de crêtes, eau vive.
            </p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Détente
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-stone-700">
              Lac, villages, siestes à l’ombre, apéros longs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
