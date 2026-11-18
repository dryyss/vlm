// Sections of the page, treated as "scenes". `light` is the ambient stage light for that scene.
export const SCENES = [
  { id: "accueil", label: "Accueil", n: "00", light: "rgba(224, 43, 32, 0.22)" },
  { id: "clip", label: "Concerts", n: "01", light: "rgba(255, 150, 60, 0.20)" },
  { id: "prestations", label: "Prestations", n: "02", light: "rgba(80, 120, 255, 0.18)" },
  { id: "formules", label: "Formules", n: "03", light: "rgba(184, 149, 120, 0.22)" },
  { id: "about", label: "À propos", n: "04", light: "rgba(170, 70, 200, 0.18)" },
  { id: "contact", label: "Contact", n: "05", light: "rgba(224, 43, 32, 0.26)" },
] as const;
