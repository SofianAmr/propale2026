import {
  accommodationPerPersonEur,
  roundTripEuro,
  TRIP_HEADCOUNT,
  TRIP_TRANSPORT_EUR_PER_PERSON,
  tripTotalPerPersonRange,
  villaAccommodationTotalEur,
} from "@/config/tripEstimate";
import type { Villa } from "@/config/villas";
import { formatEuro } from "@/lib/formatEuro";

type Props = {
  villa: Villa;
  variant?: "compact" | "detailed";
};

export function VillaTripEstimate({ villa, variant = "compact" }: Props) {
  const rent = villa.priceTotalEur;
  if (rent == null) return null;

  const extra = villa.extraGroupFeesEur ?? 0;
  const accPp = roundTripEuro(accommodationPerPersonEur(villa, TRIP_HEADCOUNT));
  const range = tripTotalPerPersonRange(villa, TRIP_HEADCOUNT);
  const low = roundTripEuro(range.low);
  const high = roundTripEuro(range.high);
  const transport = TRIP_TRANSPORT_EUR_PER_PERSON;

  if (variant === "compact") {
    return (
      <div className="mt-1 space-y-1">
        <p className="font-display text-xl font-semibold text-teal-900 sm:text-2xl">
          ~ {formatEuro(low)} – {formatEuro(high)} €{" "}
          <span className="text-base font-normal text-stone-600">/ pers.</span>
        </p>
        <p className="font-sans text-xs text-stone-500">
          Logement + transport ({TRIP_HEADCOUNT} pers.) — hors repas & activités
        </p>
        <p className="font-sans text-sm text-stone-600">
          Dont logement :{" "}
          <span className="font-medium text-stone-800">{formatEuro(accPp)} € / pers.</span>
          {extra > 0 ? (
            <span className="text-stone-500">
              {" "}
              (annonce {formatEuro(rent)} € + {formatEuro(extra)} € frais groupe)
            </span>
          ) : (
            <span className="text-stone-500"> ({formatEuro(rent)} € séjour)</span>
          )}
        </p>
      </div>
    );
  }

  const totalRent = villaAccommodationTotalEur(villa);

  return (
    <div className="mt-6 rounded-xl border border-teal-200/80 bg-teal-50/50 p-5 sm:p-6">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
        Budget logement + transport (estimatif)
      </p>
      <p className="mt-2 font-sans text-sm text-stone-600">
        Pour {TRIP_HEADCOUNT} personnes. Repas et activités non inclus.
      </p>
      <ul className="mt-4 space-y-2.5 font-sans text-sm text-stone-800">
        <li className="flex justify-between gap-4 border-b border-teal-100 pb-2">
          <span className="text-stone-600">Logement / pers.</span>
          <span className="text-right font-medium">
            {formatEuro(accPp)} €
            <span className="mt-0.5 block text-xs font-normal text-stone-500">
              {formatEuro(totalRent)} € groupe
              {extra > 0
                ? ` (${formatEuro(rent)} € + ${formatEuro(extra)} € frais)`
                : ""}
            </span>
          </span>
        </li>
        <li className="flex justify-between gap-4 border-b border-teal-100 pb-2">
          <span className="text-stone-600">Transport AR / pers.</span>
          <span className="font-medium">
            {formatEuro(transport.low)} – {formatEuro(transport.high)} €
          </span>
        </li>
        <li className="flex justify-between gap-4 border-t border-teal-200 pt-3 font-display text-lg text-teal-900">
          <span>Total indicatif / pers.</span>
          <span>
            {formatEuro(low)} – {formatEuro(high)} €
          </span>
        </li>
      </ul>
    </div>
  );
}
