/**
 * Ordre : 1 = hero, puis cartes « Pourquoi le Verdon », puis (optionnel) finale.
 */
export const gorgesGallery: string[] = [
  "couverture-gorges-verdon.webp",
  "vue-aerienne-verdon-barques.png",
  "cascade-bassin-turquoise.png",
  "kayak-canyon-turquoise.png",
  "randonnee-sentiers-verdon.png",
  "lavande-village-provence.png",
];

/** Textes alternatifs par fichier (accessibilité). */
export const gorgesImageAlt: Record<string, string> = {
  "couverture-gorges-verdon.webp":
    "Gorges du Verdon, eau turquoise et paysage du Verdon",
  "vue-aerienne-verdon-barques.png":
    "Vue plongeante sur le Verdon, eau turquoise et barques entre les falaises",
  "cascade-bassin-turquoise.png":
    "Cascade tombant dans un bassin d’eau turquoise, rochers et forêt",
  "kayak-canyon-turquoise.png":
    "Canoë sur l’eau turquoise entre les parois du canyon du Verdon",
  "randonnee-sentiers-verdon.png":
    "Randonnée sur les sentiers du Verdon, falaises et paysage minéral",
  "lavande-village-provence.png":
    "Champs de lavande et village perché sous le ciel bleu de Provence",
  "via-ferrata-falaise.png":
    "Via ferrata ou escalade sécurisée sur une falaise de montagne",
};

/**
 * Fichiers dans public/gorges/ pour la slide finale (vide = on réutilise la fin
 * de gorgesGallery pour un rendu déjà rempli si tu as des visuels).
 */
export const finaleGallery: string[] = [];
