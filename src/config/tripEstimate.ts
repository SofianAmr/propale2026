import type { Villa } from "@/config/villas";

/** Base utilisée pour les montants « par personne » affichés sur le site. */
export const TRIP_HEADCOUNT = 8;

/** Nombre de nuits (aligné sur les dates de la propale). */
export const TRIP_NIGHTS = 8;

/**
 * Aller-retour : partage des frais véhicule (essence, péages). Varie selon le point de départ.
 * Repas et activités ne sont pas inclus dans les totaux affichés.
 */
export const TRIP_TRANSPORT_EUR_PER_PERSON = {
  low: 70,
  high: 140,
} as const;

export function villaAccommodationTotalEur(villa: Villa): number {
  const rent = villa.priceTotalEur ?? 0;
  const fees = villa.extraGroupFeesEur ?? 0;
  return rent + fees;
}

export function accommodationPerPersonEur(villa: Villa, headcount: number): number {
  const total = villaAccommodationTotalEur(villa);
  if (headcount <= 0) return 0;
  return total / headcount;
}

export type TripTotalRange = {
  low: number;
  high: number;
};

/** Logement + transport uniquement (hors repas, activités, dépenses perso). */
export function tripTotalPerPersonRange(
  villa: Villa,
  headcount: number,
): TripTotalRange {
  const acc = accommodationPerPersonEur(villa, headcount);
  const { low: tLow, high: tHigh } = TRIP_TRANSPORT_EUR_PER_PERSON;
  return {
    low: acc + tLow,
    high: acc + tHigh,
  };
}

export function roundTripEuro(n: number): number {
  return Math.round(n);
}
