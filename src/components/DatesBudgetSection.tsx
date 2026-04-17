import { TripBudgetExplainer } from "@/components/TripBudgetExplainer";
import {
  accommodationPerPersonEur,
  roundTripEuro,
  TRIP_HEADCOUNT,
  tripTotalPerPersonRange,
} from "@/config/tripEstimate";
import { villas } from "@/config/villas";
import { formatEuro } from "@/lib/formatEuro";

export function DatesBudgetSection() {
  return (
    <section
      id="dates-budget"
      className="scroll-mt-17 border-t border-stone-200 bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-teal-800">
              Dates
            </p>
            <p className="mt-4 font-display text-3xl text-stone-900 sm:text-4xl md:text-5xl">
              24 août → 1er septembre
            </p>
            <p className="mt-2 font-sans text-sm text-stone-600">2026 · 8 nuits</p>
            <p className="mt-6 font-sans text-sm leading-relaxed text-stone-600">
              Groupe visé :{" "}
              <strong className="font-medium text-stone-800">
                8 personnes (base des calculs) · jusqu’à 10 selon qui peut
              </strong>
              . Les totaux « par personne » partent de{" "}
              <strong className="font-medium text-stone-800">{TRIP_HEADCOUNT} personnes</strong>.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-teal-800">
              Budget par personne
            </p>
            <p className="mt-2 font-sans text-sm text-stone-600">
              <strong className="font-medium text-stone-800">Logement + transport</strong> par personne pour chaque
              villa (repas et activités en sus).
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl bg-stone-50/90 shadow-sm ring-1 ring-stone-200">
          <table className="w-full min-w-[320px] border-collapse text-left font-sans text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-100">
                <th className="px-4 py-3 font-medium text-stone-600 sm:px-5">Villa</th>
                <th className="px-4 py-3 font-medium text-stone-600 sm:px-5">
                  Logement / pers. ({TRIP_HEADCOUNT})
                </th>
                <th className="px-4 py-3 font-medium text-teal-900 sm:px-5">
                  Logement + transport / pers.
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {villas.map((v) => {
                const rent = v.priceTotalEur;
                if (rent == null) return null;
                const acc = roundTripEuro(accommodationPerPersonEur(v, TRIP_HEADCOUNT));
                const { low, high } = tripTotalPerPersonRange(v, TRIP_HEADCOUNT);
                return (
                  <tr key={v.slug} className="border-b border-stone-100 last:border-0">
                    <td className="max-w-[200px] px-4 py-3.5 font-medium text-stone-900 sm:max-w-none sm:px-5">
                      {v.title}
                    </td>
                    <td className="px-4 py-3.5 text-stone-700 sm:px-5">{formatEuro(acc)} €</td>
                    <td className="px-4 py-3.5 font-display text-base font-semibold text-teal-900 sm:px-5">
                      {formatEuro(roundTripEuro(low))} – {formatEuro(roundTripEuro(high))} €
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <TripBudgetExplainer />
      </div>
    </section>
  );
}
