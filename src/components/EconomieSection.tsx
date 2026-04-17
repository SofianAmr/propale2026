const ARGUMENTS: { title: string; body: string }[] = [
  {
    title: "Activités",
    body:
      "Randonnées, via ferrata, kayak, baignade, pédalo… tout est " +
      "là pour varier les journées sans repartir à zéro chaque matin.",
  },
  {
    title: "Cuisine & terroir",
    body:
      "Vin local, saucisson, olives, fougasse : le plein de " +
      "saveurs françaises entre deux sorties.",
  },
  {
    title: "Organisation & transports",
    body:
      "Un seul lieu de base, des trajets courts une fois sur place — " +
      "moins de logistique, plus de temps pour profiter.",
  },
  {
    title: "Prix",
    body:
      "Pour ce qu’on embarque (lieu, durée, activités), un prix " +
      "imbattable — le détail des lignes est plus bas, les montants se " +
      "décident ensemble.",
  },
];

export function EconomieSection() {
  return (
    <section className="border-y border-stone-200 bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl text-stone-900 sm:text-3xl md:text-4xl">
          Les arguments
        </h2>
        <p className="mt-2 max-w-2xl font-sans text-sm text-stone-600 sm:text-base">
          En résumé, ce qui fait la différence pour ce séjour au Verdon.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {ARGUMENTS.map((item) => (
            <li
              key={item.title}
              className="rounded-xl bg-stone-50/80 p-5 shadow-sm ring-1 ring-stone-200 sm:p-6"
            >
              <h3 className="font-sans text-sm font-semibold text-teal-800">
                {item.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-stone-700">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
