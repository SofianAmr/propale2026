export type Villa = {
  slug: string;
  title: string;
  photos: [string, string];
  photoAlts: [string, string];
  airbnbUrl: string;
  /** Prix total du séjour annoncé sur l’annonce (optionnel). */
  priceTotalEur?: number;
  /**
   * Frais groupe une fois sur place (linge, ménage…) en plus du loyer — inclus dans le coût
   * / pers. quand renseigné.
   */
  extraGroupFeesEur?: number;
  /** Résumé court pour la propale (optionnel). */
  pitch?: { intro: string; items: string[] };
};

/**
 * Renseigne les URLs Airbnb réelles dès qu’elles sont dispo.
 */
export const villas: Villa[] = [
  {
    slug: "piscine-vue-lac-st-croix",
    title: "Villa piscine avec vue sur lac de St Croix",
    photos: [
      "lac-st-croix-piscine-vue-jour.png",
      "lac-st-croix-terrasse-apero.png",
    ],
    photoAlts: [
      "Piscine et vue sur le lac de Sainte-Croix par une journée ensoleillée",
      "Terrasse au coucher du soleil, apéro et vue sur le lac de Sainte-Croix",
    ],
    airbnbUrl:
      "https://www.airbnb.fr/rooms/32282520?check_in=2026-08-24&check_out=2026-09-01&guests=10&adults=10&s=67&unique_share_id=c6ea7e93-ff91-4040-8206-4113ae27eac8",
    priceTotalEur: 7356,
    pitch: {
      intro:
        "5 chambres, belles pièces à vivre, vue sur le lac de Sainte-Croix — idéal comme QG pour le groupe.",
      items: [
        "2 salles de bain + 1 douche · cuisine équipée · grand living & salle à manger",
        "Piscine chauffée · grand jardin · terrasse couverte",
        "Ping-pong · piste de pétanque · 2 paddles · barbecue & plancha · salon de jardin & transats",
        "Parking extérieur · 4 voitures",
        "À côté : tennis possible, randos (GR), activités dans le Verdon, équitation le long du lac",
      ],
    },
  },
  {
    slug: "villa-bellazur",
    title: "Villa Bellazur — restanques, oliviers & vue",
    photos: [
      "bellazur-piscine-exterieur.png",
      "bellazur-sejour-coucher-soleil.png",
    ],
    photoAlts: [
      "Villa Bellazur, piscine et terrasse face à la maison",
      "Grand séjour avec baie vitrée et vue au coucher du soleil",
    ],
    airbnbUrl:
      "https://www.airbnb.fr/rooms/52241576?check_in=2026-08-24&check_out=2026-09-01&guests=1&adults=10&s=67&unique_share_id=7df3ff0f-4224-4f5c-b497-70c2adedb006",
    priceTotalEur: 5835,
    pitch: {
      intro:
        "Au cœur d’une propriété d’environ 4 000 m², entre restanques, oliviers et pins : villa tout confort où se mêlent authenticité et modernité, avec vue dégagée.",
      items: [
        "Plusieurs chambres et espaces nuit (baignoire, douches, mezzanines — détail des couchages sur Airbnb) ; grande pièce à vivre très lumineuse (une partie sans volet)",
        "Baby-foot · terrain de pétanque · cuisine équipée (gros électroménager) · buanderie (lave-linge, sèche-linge, fer, sèche-cheveux)",
        "Grande terrasse · terrasse couverte avec salon de jardin · barbecue gaz · une bouteille offerte · lits faits à l’arrivée",
        "Linge / ménage éventuels sur place selon l’annonce · lit bébé & chaise haute gratuits sur demande",
        "Consigne hôte : le local technique de la piscine n’est pas accessible aux voyageurs",
        "Verdon & lac de Ste-Croix ~45 min · Thoronet ~20 min · Sillans ~25 min · Lorgues (marché mardi) · nombreux domaines viticoles, spa, adresses gourmandes (voir Airbnb)",
      ],
    },
  },
  {
    slug: "villa-piscine-provence",
    title: "Villa avec piscine en Provence — Mas des Heures Dorées",
    photos: [
      "provence-piscine-facade.png",
      "provence-terrasse-couverte.png",
    ],
    photoAlts: [
      "Mas des Heures Dorées, villa provençale avec piscine et jardin",
      "Terrasse couverte, pierre et bois, grande table pour repas dehors",
    ],
    airbnbUrl:
      "https://www.airbnb.fr/rooms/1470981380414290754?check_in=2026-08-24&check_out=2026-09-01&guests=1&adults=9&s=67&unique_share_id=7c18c271-e327-44e8-8bbd-4ccd5e6236b9",
    priceTotalEur: 5422,
    pitch: {
      intro:
        "Villa provençale rénovée (175 m²) sur environ 11 000 m² en pleine nature (non clôturé), à 5 min du centre de Lorgues : matériaux nobles (chaux, béton ciré, travertin, fer, bois), piscine au sel et terrasse couverte.",
      items: [
        "Capacité : 12 personnes max (8 adultes + 4 enfants) · 5 chambres · 3 salles de bain · 2 WC — détail du plan (RDC / étage) sur Airbnb",
        "Grand séjour : salon, espace repas, cuisine neuve équipée · coin bibliothèque / TV (bouquet Free + Netflix)",
        "Terrasse couverte : table 12 pers. · plancha électrique · barbecue intégré · salon de jardin (canapé + 2 fauteuils)",
        "Piscine au sel 8 × 4 m, exposition sud, avec plage peu profonde · 6 transats",
        "Draps et serviettes inclus · lit parapluie, chaise haute et jeux enfants sur demande",
        "Lorgues à 5 min (marché, restos dont tables étoilées, rosés de Provence…) · Gorges du Verdon ~50 km — autres idées de sorties sur l’annonce",
      ],
    },
  },
  {
    slug: "la-secrete",
    title: "La Secrète — Mas provençal & piscine",
    photos: ["secrete-mas-piscine.png", "secrete-terrasse-barbecue.png"],
    photoAlts: [
      "La Secrète, mas en pierre, piscine et jardin boisé sans vis-à-vis",
      "Terrasse couverte, cuisine d’extérieur et barbecue face à la piscine",
    ],
    airbnbUrl:
      "https://www.airbnb.fr/rooms/35577448?check_in=2026-08-24&check_out=2026-09-01&guests=1&adults=10&s=67&unique_share_id=3e533020-2bba-4ee5-a88f-c16b8911e605",
    priceTotalEur: 6318,
    pitch: {
      intro:
        "Beau mas provençal sur environ 6 000 m² de verdure, sans vis-à-vis et proche de la forêt — cadre calme pour se retrouver en famille ou entre amis.",
      items: [
        "Cuisine intérieure et cuisine d’extérieur équipées · barbecue · table de ping-pong",
        "Grand salon / séjour ouvrant sur la piscine (12 × 5 m) · extérieurs aménagés pour vivre dehors",
        "Parking privé · espace pour s’amuser (terrain de foot possible sur la propriété selon l’annonce)",
        "À proximité : lac de Saint-Cassien (pêche, baignade, nautisme) · golf de Terre Blanche (18 trous)",
        "Plages les plus proches côté Fréjus / Saint-Raphaël et Cannes — détail des trajets sur Airbnb",
      ],
    },
  },
  {
    slug: "eden-balinais-le-muy",
    title: "Eden Balinais 9 pers Piscine Chauffée & Jacuzzi",
    photos: [
      "eden-balinais-piscine-jacuzzi.png",
      "eden-balinais-piste-petanque.png",
    ],
    photoAlts: [
      "Piscine, terrasse bois, baby-foot et jardin tropical avec palmiers",
      "Piste de pétanque privée, bordures en bois et jardin autour de la villa",
    ],
    airbnbUrl:
      "https://www.airbnb.fr/rooms/1396300084309912138?check_in=2026-08-24&check_out=2026-09-01&guests=10&adults=9&s=67&unique_share_id=9a96711d-25ba-4332-a6ed-680d092ea634",
    priceTotalEur: 4996,
    pitch: {
      intro:
        "À 20 min des plages et 45 min de Saint-Tropez, villa balinaise de luxe pour 9 personnes au Muy : jardin tropical 100 % privé, sans vis-à-vis, pour une parenthèse exotique entre Sainte-Maxime et Saint-Tropez.",
      items: [
        "Suite parentale, chambres, climatisation, Wi-Fi fibre, cuisine entièrement équipée",
        "Piscine chauffée (avril à octobre), jacuzzi 5 places, terrasse ensoleillée, salon extérieur, BBQ, pétanque, baby-foot",
        "Parking privé · borne de recharge électrique (option selon l’annonce)",
        "Accueil personnalisé sur place · check-in à partir de 17h · check-out jusqu’à 10h · hôte joignable pendant le séjour",
        "Lits faits, linge et serviettes fournis · usage touristique ; activité pro ou commerciale uniquement avec accord préalable (voir annonce)",
      ],
    },
  },
];

export function getVillaBySlug(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}
