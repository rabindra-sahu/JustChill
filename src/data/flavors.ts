export interface GoliSodaFlavor {
  id: string;
  name: string;
  description: string;
  tagline: string;
  nutrition: { calories: number; sugar: string; fiber: string };
  color: string;
}

export const GOLI_SODA_FLAVORS: GoliSodaFlavor[] = [
  {
    id: "lemon",
    name: "Lemon",
    description: "Zesty, tangy lemon fizz made with real lemon extract.",
    tagline: "Classic Zing",
    nutrition: { calories: 80, sugar: "18g", fiber: "0g" },
    color: "#fbbf24",
  },
  {
    id: "orange",
    name: "Orange",
    description: "Bursting orange goodness with a refreshing citrus finish.",
    tagline: "Sun-Kissed",
    nutrition: { calories: 82, sugar: "19g", fiber: "0g" },
    color: "#f97316",
  },
  {
    id: "jeera",
    name: "Jeera",
    description: "Authentic cumin-infused sparkle with a savory twist.",
    tagline: "Desi Classic",
    nutrition: { calories: 70, sugar: "15g", fiber: "0g" },
    color: "#b45309",
  },
  {
    id: "kala-khatta",
    name: "Kala Khatta",
    description: "Dark, tangy, and sweet — the iconic Indian street drink.",
    tagline: "Street Legend",
    nutrition: { calories: 78, sugar: "17g", fiber: "0g" },
    color: "#581c87",
  },
  {
    id: "masala",
    name: "Masala",
    description: "Aromatic spices swirling in every fizzy sip.",
    tagline: "Spice Kick",
    nutrition: { calories: 85, sugar: "20g", fiber: "0g" },
    color: "#dc2626",
  },
];

export interface ChiaSeedFlavor {
  id: string;
  name: string;
  description: string;
  tagline: string;
  nutrition: { calories: number; sugar: string; fiber: string };
  color: string;
}

export const CHIA_SEED_FLAVORS: ChiaSeedFlavor[] = [
  {
    id: "mango",
    name: "Mango",
    description: "Creamy Alphonso mango with real chia seeds for a tropical escape.",
    tagline: "Tropical Bliss",
    nutrition: { calories: 95, sugar: "14g", fiber: "4g" },
    color: "#facc15",
  },
  {
    id: "mixed-berry",
    name: "Mixed Berry",
    description: "Berry medley blended with omega-rich chia goodness.",
    tagline: "Berr-licious",
    nutrition: { calories: 90, sugar: "12g", fiber: "5g" },
    color: "#a855f7",
  },
  {
    id: "lemon-mint",
    name: "Lemon Mint",
    description: "Cooling mint meets zesty lemon in a chia-infused refreshment.",
    tagline: "Cool Rush",
    nutrition: { calories: 88, sugar: "13g", fiber: "4g" },
    color: "#34d399",
  },
  {
    id: "watermelon",
    name: "Watermelon",
    description: "Juicy watermelon hydration boosted with chia seeds.",
    tagline: "Summer Splash",
    nutrition: { calories: 85, sugar: "11g", fiber: "4g" },
    color: "#f472b6",
  },
  {
    id: "orange",
    name: "Orange",
    description: "Sun-ripened orange with a nutritious chia surprise.",
    tagline: "Vitamin Burst",
    nutrition: { calories: 92, sugar: "15g", fiber: "4g" },
    color: "#fb923c",
  },
];

export interface Flavor {
  id: string;
  name: string;
  description: string;
  tagline: string;
  nutrition: { calories: number; sugar: string; fiber: string };
  color: string;
}

export const FLAVORS: Flavor[] = [...GOLI_SODA_FLAVORS, ...CHIA_SEED_FLAVORS];
