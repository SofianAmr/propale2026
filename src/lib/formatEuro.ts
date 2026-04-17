export function formatEuro(amount: number): string {
  return new Intl.NumberFormat("fr-FR").format(amount);
}
