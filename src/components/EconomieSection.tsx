export function EconomieSection() {
  const rows = [
    {
      label: "Paysage & eau",
      nous: "Canyon, lac, baignade naturelle",
      autres: "Souvent mer OU montagne, rarement les deux",
    },
    {
      label: "Trajet depuis la région",
      nous: "Route raisonnable, un seul fuseau",
      autres: "Côte basque / Atlantique : plus long",
    },
    {
      label: "Météo été",
      nous: "Ensoleillé, sec, prévisible à l’échelle de la semaine",
      autres: "Bretagne / nord : plus capricieux",
    },
    {
      label: "Charge mentale",
      nous: "Un lieu unique, peu de changement de base",
      autres: "Road-trips : plus de logistique",
    },
  ];

  return (
    <section className="border-y border-stone-200 bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl text-stone-900 sm:text-3xl md:text-4xl">
          L’argument économique
        </h2>
        <p className="mt-2 max-w-2xl font-sans text-sm text-stone-600 sm:text-base">
          Comparatif simple — pas pour dénigrer les autres idées, pour cadrer
          honnêtement ce qu’on propose.
        </p>
        <div className="mt-10 overflow-x-auto rounded-xl bg-stone-50/80 shadow-sm ring-1 ring-stone-200">
          <table className="w-full min-w-[520px] border-collapse text-left font-sans text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-100">
                <th className="px-4 py-3 font-medium text-stone-500 sm:px-5">
                  Critère
                </th>
                <th className="px-4 py-3 font-medium text-teal-800 sm:px-5">
                  Verdon (cette propale)
                </th>
                <th className="px-4 py-3 font-medium text-stone-600 sm:px-5">
                  Autres pistes fréquentes
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-stone-100 last:border-0"
                >
                  <td className="px-4 py-3.5 text-stone-500 sm:px-5">
                    {row.label}
                  </td>
                  <td className="px-4 py-3.5 text-stone-900 sm:px-5">
                    {row.nous}
                  </td>
                  <td className="px-4 py-3.5 text-stone-600 sm:px-5">
                    {row.autres}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-sans text-xs text-stone-500">
          Budget détaillé plus bas — les montants se décident ensemble.
        </p>
      </div>
    </section>
  );
}
