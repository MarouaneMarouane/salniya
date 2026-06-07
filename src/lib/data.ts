export type Brand = {
  id: string;
  name: string;
  logo: string; // emoji or initials for now (will be real SVG later)
};

export type Product = {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: "complet" | "glace" | "coque" | "clignotant";
  price: number;
  image: string;
  badges?: string[];
  options?: string[];
};

export type Mechanic = {
  id: string;
  name: string;
  specialty: string;
  city: string;
  rating: number;
  image: string;
};

export const BRANDS: Brand[] = [
  { id: "dacia", name: "Dacia", logo: "D" },
  { id: "renault", name: "Renault", logo: "R" },
  { id: "peugeot", name: "Peugeot", logo: "P" },
  { id: "citroen", name: "Citroën", logo: "C" },
  { id: "hyundai", name: "Hyundai", logo: "H" },
  { id: "kia", name: "Kia", logo: "K" },
  { id: "toyota", name: "Toyota", logo: "T" },
  { id: "nissan", name: "Nissan", logo: "N" },
  { id: "fiat", name: "Fiat", logo: "F" },
  { id: "mercedes", name: "Mercedes", logo: "M" },
  { id: "bmw", name: "BMW", logo: "B" },
  { id: "vw", name: "VW", logo: "V" },
  { id: "opel", name: "Opel", logo: "O" },
  { id: "seat", name: "Seat", logo: "S" },
  { id: "skoda", name: "Škoda", logo: "Š" },
  { id: "suzuki", name: "Suzuki", logo: "Sz" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    brand: "Dacia",
    model: "Duster",
    year: 2025,
    category: "complet",
    price: 1290,
    image: "🪞",
    badges: ["Bestseller", "Stock"],
    options: ["Électrique", "Chauffant", "Rabattable"],
  },
  {
    id: "p2",
    brand: "Renault",
    model: "Arkana",
    year: 2025,
    category: "clignotant",
    price: 450,
    image: "💡",
    badges: ["Nouveau"],
    options: ["LED Dynamique"],
  },
  {
    id: "p3",
    brand: "Hyundai",
    model: "Tucson",
    year: 2024,
    category: "complet",
    price: 1490,
    image: "🪞",
    badges: ["Premium"],
    options: ["Chauffant", "Caméra"],
  },
  {
    id: "p4",
    brand: "Peugeot",
    model: "3008",
    year: 2024,
    category: "coque",
    price: 290,
    image: "🛡️",
    badges: ["Stock"],
    options: ["Noir mat", "Chromé"],
  },
  {
    id: "p5",
    brand: "Kia",
    model: "Sportage",
    year: 2025,
    category: "complet",
    price: 1390,
    image: "🪞",
    badges: ["Bestseller"],
    options: ["Électrique", "Angle mort"],
  },
  {
    id: "p6",
    brand: "Toyota",
    model: "Corolla",
    year: 2024,
    category: "glace",
    price: 190,
    image: "🔲",
    badges: ["Économique"],
    options: ["Standard", "Chauffant"],
  },
];

export const MECHANICS: Mechanic[] = [
  {
    id: "m1",
    name: "Atelier Tolerie Atlas",
    specialty: "Tôlerie & Peinture",
    city: "Casablanca",
    rating: 4.8,
    image: "🔧",
  },
  {
    id: "m2",
    name: "Carrosserie Maghreb",
    specialty: "Carrosserie",
    city: "Rabat",
    rating: 4.9,
    image: "🚗",
  },
  {
    id: "m3",
    name: "Garage Premium Auto",
    specialty: "Mécanique générale",
    city: "Marrakech",
    rating: 4.7,
    image: "⚙️",
  },
];

export const CATEGORIES = [
  { id: "complet", label: "Rétroviseur complet", icon: "🪞" },
  { id: "glace", label: "Glace seule", icon: "🔲" },
  { id: "coque", label: "Coque", icon: "🛡️" },
  { id: "clignotant", label: "Clignotant LED", icon: "💡" },
];
