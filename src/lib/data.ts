export type Brand = {
  id: string;
  name: string;
  logo: string;
};

export type Product = {
  id: string;
  brand: string;
  brandLogo: string;
  model: string;
  year: number;
  category: "complet" | "glace" | "coque" | "clignotant";
  price: number;
  oldPrice: number;
  image: string;
  badges?: string[];
  options?: string[];
  rating: number;
  reviews: number;
};

export type Mechanic = {
  id: string;
  name: string;
  specialty: string;
  city: string;
  rating: number;
  image: string;
  phone: string;
};

// Real official brand logos (local SVG) — 15 brands
export const BRANDS: Brand[] = [
  { id: "renault", name: "Renault", logo: "/brands/renault.svg" },
  { id: "peugeot", name: "Peugeot", logo: "/brands/peugeot.svg" },
  { id: "citroen", name: "Citroën", logo: "/brands/citroen.svg" },
  { id: "hyundai", name: "Hyundai", logo: "/brands/hyundai.svg" },
  { id: "kia", name: "Kia", logo: "/brands/kia.svg" },
  { id: "toyota", name: "Toyota", logo: "/brands/toyota.svg" },
  { id: "nissan", name: "Nissan", logo: "/brands/nissan.svg" },
  { id: "fiat", name: "Fiat", logo: "/brands/fiat.svg" },
  { id: "mercedes", name: "Mercedes", logo: "/brands/mercedes.svg" },
  { id: "bmw", name: "BMW", logo: "/brands/bmw.svg" },
  { id: "audi", name: "Audi", logo: "/brands/audi.svg" },
  { id: "opel", name: "Opel", logo: "/brands/opel.svg" },
  { id: "skoda", name: "Škoda", logo: "/brands/skoda.svg" },
  { id: "seat", name: "SEAT", logo: "/brands/seat.svg" },
  { id: "honda", name: "Honda", logo: "/brands/honda.svg" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    brand: "Dacia",
    brandLogo: "/brands/renault.svg",
    model: "Duster (Dacia)",
    year: 2025,
    category: "complet",
    price: 1290,
    oldPrice: 1590,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&q=80",
    badges: ["Bestseller", "Stock"],
    options: ["Électrique", "Chauffant", "Rabattable"],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "p2",
    brand: "Renault",
    brandLogo: "/brands/renault.svg",
    model: "Arkana",
    year: 2025,
    category: "clignotant",
    price: 450,
    oldPrice: 590,
    image: "https://images.unsplash.com/photo-1574515058831-65b78f29b8c3?w=600&q=80",
    badges: ["Nouveau"],
    options: ["LED Dynamique"],
    rating: 4.9,
    reviews: 87,
  },
  {
    id: "p3",
    brand: "Hyundai",
    brandLogo: "/brands/hyundai.svg",
    model: "Tucson",
    year: 2024,
    category: "complet",
    price: 1490,
    oldPrice: 1890,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    badges: ["Premium"],
    options: ["Chauffant", "Caméra"],
    rating: 4.7,
    reviews: 56,
  },
  {
    id: "p4",
    brand: "Peugeot",
    brandLogo: "/brands/peugeot.svg",
    model: "3008",
    year: 2024,
    category: "coque",
    price: 290,
    oldPrice: 390,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80",
    badges: ["Stock"],
    options: ["Noir mat", "Chromé"],
    rating: 4.6,
    reviews: 32,
  },
  {
    id: "p5",
    brand: "Kia",
    brandLogo: "/brands/kia.svg",
    model: "Sportage",
    year: 2025,
    category: "complet",
    price: 1390,
    oldPrice: 1690,
    image: "https://images.unsplash.com/photo-1597007030739-6d2e7172ee6a?w=600&q=80",
    badges: ["Bestseller"],
    options: ["Électrique", "Angle mort"],
    rating: 4.8,
    reviews: 98,
  },
  {
    id: "p6",
    brand: "Citroën",
    brandLogo: "/brands/citroen.svg",
    model: "C3",
    year: 2024,
    category: "glace",
    price: 190,
    oldPrice: 290,
    image: "https://images.unsplash.com/photo-1606664599831-3b7c0e4b41ec?w=600&q=80",
    badges: ["Économique"],
    options: ["Standard", "Chauffant"],
    rating: 4.5,
    reviews: 41,
  },
];

export const MECHANICS: Mechanic[] = [
  {
    id: "m1",
    name: "Atelier Tolerie Atlas",
    specialty: "Tôlerie & Peinture",
    city: "Casablanca",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=600&q=80",
    phone: "+212600000001",
  },
  {
    id: "m2",
    name: "Carrosserie Maghreb",
    specialty: "Carrosserie",
    city: "Rabat",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=600&q=80",
    phone: "+212600000002",
  },
  {
    id: "m3",
    name: "Garage Premium Auto",
    specialty: "Mécanique générale",
    city: "Marrakech",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
    phone: "+212600000003",
  },
  {
    id: "m4",
    name: "Auto Élec Pro",
    specialty: "Électricien auto",
    city: "Tanger",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80",
    phone: "+212600000004",
  },
];

export const CATEGORIES = [
  { id: "complet", label: "Rétroviseur complet", icon: "🪞" },
  { id: "glace", label: "Glace seule", icon: "🔲" },
  { id: "coque", label: "Coque", icon: "🛡️" },
  { id: "clignotant", label: "Clignotant LED", icon: "💡" },
];
