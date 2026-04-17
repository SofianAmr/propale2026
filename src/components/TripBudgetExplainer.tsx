import {
  TRIP_HEADCOUNT,
  TRIP_NIGHTS,
  TRIP_TRANSPORT_EUR_PER_PERSON,
} from "@/config/tripEstimate";

export function TripBudgetExplainer() {
  const { low, high } = TRIP_TRANSPORT_EUR_PER_PERSON;
  return (
    <div className="mt-8 rounded-xl border border-stone-200 bg-stone-50/80 p-5 font-sans text-sm leading-relaxed text-stone-600 sm:p-6">
      <p className="font-medium text-stone-800">Comment lire ces montants</p>
      <ul className="mt-3 list-inside list-disc space-y-1.5 marker:text-teal-800">
        <li>
          Calcul pour <strong className="font-medium text-stone-800">{TRIP_HEADCOUNT} personnes</strong> et{" "}
          <strong className="font-medium text-stone-800">{TRIP_NIGHTS} nuits</strong> (24 août → 1ᵉʳ septembre
          2026).
        </li>
        <li>
          <strong className="font-medium text-stone-800">Logement</strong> : loyer Airbnb + éventuels frais groupe
          (ex. ménage / linge) répartis sur le groupe.
        </li>
        <li>
          <strong className="font-medium text-stone-800">Transport</strong> : {low}–{high} € / pers. (AR, partage
          essence & péages — selon départ et nombre de voitures).
        </li>
        <li>
          <strong className="font-medium text-stone-800">Repas, activités et extras</strong> : non inclus — chacun
          budgète ça à part (courses, restos, sorties, etc.).
        </li>
        <li>
          À <strong className="font-medium text-stone-800">10 personnes</strong>, seul le poste logement baisse (même loyer
          divisé par 10) ; le transport peut aussi se diluer un peu selon le covoiturage.
        </li>
      </ul>
    </div>
  );
}
