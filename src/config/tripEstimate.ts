import type { Villa } from "@/config/villas";

export type TripTotalRange = {
  low: number;
  high: number;
};

/** Effectif du groupe pour tous les montants « par personne ». */
export const TRIP_HEADCOUNT = 8;

/** Nombre de nuits (aligné sur les dates de la propale). */
export const TRIP_NIGHTS = 8;

/** Places « moyennes » par voiture pour estimer le nombre de véhicules. */
export const TRIP_PEOPLE_PER_CAR = 3;

/** Pleins d’essence comptés par voiture pour le séjour (AR). */
export const TRIP_FULL_TANKS_PER_CAR = 3;

/**
 * Fourchette pour un plein (réservoir, type de carburant, prix à la pompe).
 */
export const TRIP_EUR_PER_FULL_TANK = {
  low: 70,
  high: 120,
} as const;

export function tripCarCount(headcount: number): number {
  if (headcount <= 0) return 0;
  return Math.ceil(headcount / TRIP_PEOPLE_PER_CAR);
}

/** Coût carburant par voiture : 3 pleins × fourchette € / plein (hors péages). */
export function fuelCostPerCarEur(): TripTotalRange {
  return {
    low: TRIP_FULL_TANKS_PER_CAR * TRIP_EUR_PER_FULL_TANK.low,
    high: TRIP_FULL_TANKS_PER_CAR * TRIP_EUR_PER_FULL_TANK.high,
  };
}

/**
 * Transport / pers. = (nb voitures × coût carburant voiture) / effectif, nb voitures = ⌈effectif / 3⌉.
 */
export function transportPerPersonEur(headcount: number): TripTotalRange {
  if (headcount <= 0) return { low: 0, high: 0 };
  const cars = tripCarCount(headcount);
  const fuel = fuelCostPerCarEur();
  return {
    low: (cars * fuel.low) / headcount,
    high: (cars * fuel.high) / headcount,
  };
}

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

/** Logement + transport uniquement. */
export function tripTotalPerPersonRange(
  villa: Villa,
  headcount: number,
): TripTotalRange {
  const acc = accommodationPerPersonEur(villa, headcount);
  const { low: tLow, high: tHigh } = transportPerPersonEur(headcount);
  return {
    low: acc + tLow,
    high: acc + tHigh,
  };
}

export function roundTripEuro(n: number): number {
  return Math.round(n);
}
