import {
  TRIP_EUR_PER_FULL_TANK,
  TRIP_FULL_TANKS_PER_CAR,
  TRIP_HEADCOUNT,
  TRIP_NIGHTS,
  TRIP_PEOPLE_PER_CAR,
  fuelCostPerCarEur,
  transportPerPersonEur,
  tripCarCount,
  roundTripEuro,
} from "@/config/tripEstimate";

export function TripBudgetExplainer() {
  const cars = tripCarCount(TRIP_HEADCOUNT);
  const transport = transportPerPersonEur(TRIP_HEADCOUNT);
  const fuelCar = fuelCostPerCarEur();
  return (
    <div className="mt-8 rounded-xl border border-stone-200 bg-stone-50/80 p-5 font-sans text-sm leading-relaxed text-stone-600 sm:p-6">
      <p className="font-medium text-stone-800">Comment lire ces montants</p>
      <ul className="mt-3 list-inside list-disc space-y-1.5 marker:text-teal-800">
        <li>
          <strong className="font-medium text-stone-800">{TRIP_NIGHTS} nuits</strong> (24 août → 1ᵉʳ septembre 2026),
          montants calculés pour <strong className="font-medium text-stone-800">{TRIP_HEADCOUNT} personnes</strong>.
        </li>
        <li>
          <strong className="font-medium text-stone-800">Logement</strong> : loyer Airbnb annoncé pour le séjour,
          réparti sur {TRIP_HEADCOUNT}.
        </li>
        <li>
          <strong className="font-medium text-stone-800">Transport</strong> : {cars} voitures pour {TRIP_HEADCOUNT}{" "}
          personnes (≈ {TRIP_PEOPLE_PER_CAR} par voiture). Carburant : {TRIP_FULL_TANKS_PER_CAR} pleins par voiture,
          fourchette {TRIP_EUR_PER_FULL_TANK.low}–{TRIP_EUR_PER_FULL_TANK.high} € / plein → soit{" "}
          {fuelCar.low}–{fuelCar.high} € essence / voiture (péages non inclus). Total réparti sur le groupe →{" "}
          <strong className="font-medium text-stone-800">
            {roundTripEuro(transport.low)}–{roundTripEuro(transport.high)} € / pers.
          </strong>
        </li>
      </ul>
    </div>
  );
}
