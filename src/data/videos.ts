export type VideoType = "live" | "edit";

export type Video = {
  id: string;
  artist: string;
  lieu: string;
  date: string;
  type: VideoType;
};

export const VIDEOS: Video[] = [
  { id: "l1", artist: "Tyler, The Creator", lieu: "Rock en Seine", date: "2026-08-26", type: "live" },
  { id: "l2", artist: "Kendrick Lamar & SZA", lieu: "Paris La Défense Arena", date: "2025-07-15", type: "live" },
  { id: "l3", artist: "The Weeknd × Playboi Carti", lieu: "Stade de France", date: "2026-07-10", type: "live" },
  { id: "l4", artist: "Bad Bunny", lieu: "Paris La Défense Arena", date: "2026-07-04", type: "live" },
  { id: "l5", artist: "Yardland 2026", lieu: "Hippodrome Paris-Vincennes", date: "2026-07-03", type: "live" },
  { id: "l6", artist: "Randy", lieu: "Fête de la Musique", date: "2026-06-21", type: "live" },
  { id: "l7", artist: "Jeune Morty", lieu: "We Love Green", date: "2026-06-06", type: "live" },
  { id: "l8", artist: "Jolagreen23", lieu: "Release Party", date: "", type: "live" },
  { id: "l9", artist: "Gunna", lieu: "Adidas Arena", date: "2026-03-20", type: "live" },
  { id: "l10", artist: "Ken Carson", lieu: "Zénith de Paris", date: "", type: "live" },
  { id: "l11", artist: "Huntrill", lieu: "La Machine du Moulin Rouge", date: "", type: "live" },
  { id: "l12", artist: "Makala", lieu: "La Cigale", date: "", type: "live" },
  { id: "l13", artist: "Yung Lean", lieu: "Zénith de Paris", date: "", type: "live" },
  { id: "l14", artist: "Booba", lieu: "Paris La Défense Arena", date: "", type: "live" },
  { id: "l15", artist: "Madeinparis", lieu: "Élysée Montmartre", date: "", type: "live" },
  { id: "l16", artist: "Drake", lieu: "Accor Arena", date: "", type: "live" },
  { id: "l17", artist: "We Love Green 2025", lieu: "Bois de Vincennes", date: "2025-06-06", type: "live" },
  { id: "l18", artist: "Don Toliver", lieu: "Adidas Arena", date: "", type: "live" },
  { id: "l19", artist: "Tyler, The Creator", lieu: "Bercy (film)", date: "", type: "live" },
  { id: "l20", artist: "J9euve", lieu: "Bataclan", date: "", type: "live" },
  { id: "l21", artist: "Dimeh", lieu: "La Maroquinerie", date: "", type: "live" },
  { id: "l22", artist: "Adel Castillon", lieu: "Olympia", date: "", type: "live" },
  { id: "l23", artist: "SCH", lieu: "Nantes", date: "", type: "live" },
  { id: "l24", artist: "Jolagreen23", lieu: "La Cigale", date: "", type: "live" },
  { id: "l25", artist: "Dinos", lieu: "Dans Le Club", date: "", type: "live" },
  { id: "l26", artist: "Danyl", lieu: "Ivry-sur-Seine", date: "", type: "live" },
  { id: "l27", artist: "Ken Carson", lieu: "Élysée Montmartre", date: "", type: "live" },
  { id: "l28", artist: "Jorja Smith", lieu: "Salle Pleyel", date: "", type: "live" },
  { id: "l29", artist: "Isha & Limsa", lieu: "Olympia", date: "", type: "live" },
  { id: "l30", artist: "Cabaret Vert 2024", lieu: "Charleville-Mézières", date: "2024-08-14", type: "live" },
  { id: "l31", artist: "Teezo Touchdown", lieu: "Cabaret Vert", date: "", type: "live" },
  { id: "l32", artist: "Travis Scott", lieu: "Madrid", date: "", type: "live" },
  { id: "l33", artist: "Travis Scott", lieu: "Nice", date: "", type: "live" },
  { id: "l34", artist: "Trippie Redd", lieu: "Zénith de Paris", date: "", type: "live" },
  { id: "l35", artist: "Événement Palestine", lieu: "La Cigale", date: "", type: "live" },
  { id: "l36", artist: "TH × Konbini", lieu: "Fête de la Musique", date: "", type: "live" },
  { id: "l37", artist: "Luidji", lieu: "We Love Green", date: "", type: "live" },
  { id: "l38", artist: "Dau", lieu: "La Gaîté Lyrique", date: "", type: "live" },
  { id: "l39", artist: "Abou Tall", lieu: "Élysée Montmartre", date: "", type: "live" },
  { id: "l40", artist: "La Fève", lieu: "Adidas Arena", date: "", type: "live" },
  { id: "l41", artist: "Luidji", lieu: "Opéra de Nice", date: "", type: "live" },
  { id: "l42", artist: "Kanye West", lieu: "Bercy", date: "", type: "live" },
  { id: "l43", artist: "Jewel Usain", lieu: "La Maroquinerie", date: "", type: "live" },
  { id: "l44", artist: "Varnish La Piscine", lieu: "La Cigale", date: "", type: "live" },
  { id: "l45", artist: "Mairo", lieu: "La Maroquinerie", date: "", type: "live" },
  { id: "l46", artist: "SCH", lieu: "Théâtre", date: "", type: "live" },
  { id: "l47", artist: "Jade", lieu: "Grunt", date: "", type: "live" },
  { id: "l48", artist: "TH", lieu: "Grunt", date: "", type: "live" },
  { id: "l49", artist: "Tif", lieu: "Grunt", date: "", type: "live" },
  { id: "l50", artist: "Baby Neelou", lieu: "Grunt", date: "", type: "live" },
  { id: "l51", artist: "Kaaris", lieu: "Bercy", date: "", type: "live" },
];

export const FORMULES = [
  {
    id: "01",
    name: "Live Session",
    label: "Formule 01 · Live Session",
    badge: false,
    points: [
      "Captation mobile au plus près du plateau",
      "Livraison brute le soir même ou sous 24 h",
      "Format vertical prêt pour les réseaux",
      "Étalonnage léger pour garder l'énergie live",
    ],
  },
  {
    id: "02",
    name: "Édit Live",
    label: "Formule 02 · Édit Live",
    badge: true,
    points: [
      "Montage rythmé à partir de la captation",
      "Étalonnage cohérent salle / scène",
      "Un aller-retour de retours inclus",
      "Livrables multi-formats (9:16 + 16:9)",
    ],
  },
  {
    id: "03",
    name: "Prestation pro",
    label: "Formule 03 · Prestation pro",
    badge: false,
    points: [
      "Brief + devis sous 48 h",
      "Tournage sur place avec matériel dédié",
      "Montage et étalonnage sur-mesure",
      "Livraison adaptée à votre usage (web, écran, réseaux)",
    ],
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    label: "Avant le tournage",
    title: "Échange",
    text: "On cadre l'objectif, le lieu, la durée et les formats de livraison. Un appel de vingt minutes suffit le plus souvent.",
  },
  {
    n: "02",
    label: "Sous 48 h",
    title: "Devis",
    text: "Un chiffrage clair, sans surprise : nombre de jours, livrables, délais. Rien ne démarre avant votre validation.",
  },
  {
    n: "03",
    label: "Le jour J",
    title: "Tournage",
    text: "Je viens avec mon matériel, léger, et je m'adapte au déroulé. Aucune contrainte imposée à votre équipe ni au public.",
  },
  {
    n: "04",
    label: "Après",
    title: "Livraison",
    text: "Montage, étalonnage, un aller-retour de retours inclus, puis les fichiers finaux dans tous les formats prévus.",
  },
] as const;
