export type Brand = {
  id: string;
  name: string;
  logo: string; // URL of real brand logo
  domain: string;
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

// Real brand logos via Clearbit + Carlogos
export const BRANDS: Brand[] = [
  { id: "dacia", name: "Dacia", domain: "dacia.com", logo: "https://logo.clearbit.com/dacia.com" },
  { id: "renault", name: "Renault", domain: "renault.com", logo: "https://logo.clearbit.com/renault.com" },
  { id: "peugeot", name: "Peugeot", domain: "peugeot.com", logo: "https://logo.clearbit.com/peugeot.com" },
  { id: "citroen", name: "Citroën", domain: "citroen.com", logo: "https://logo.clearbit.com/citroen.com" },
  { id: "hyundai", name: "Hyundai", domain: "hyundai.com", logo: "https://logo.clearbit.com/hyundai.com" },
  { id: "kia", name: "Kia", domain: "kia.com", logo: "https://logo.clearbit.com/kia.com" },
  { id: "toyota", name: "Toyota", domain: "toyota.com", logo: "https://logo.clearbit.com/toyota.com" },
  { id: "nissan", name: "Nissan", domain: "nissan.com", logo: "https://logo.clearbit.com/nissan.com" },
  { id: "fiat", name: "Fiat", domain: "fiat.com", logo: "https://logo.clearbit.com/fiat.com" },
  { id: "mercedes", name: "Mercedes-Benz", domain: "mercedes-benz.com", logo: "https://logo.clearbit.com/mercedes-benz.com" },
  { id: "bmw", name: "BMW", domain: "bmw.com", logo: "https://logo.clearbit.com/bmw.com" },
  { id: "vw", name: "Volkswagen", domain: "volkswagen.com", logo: "https://logo.clearbit.com/volkswagen.com" },
  { id: "opel", name: "Opel", domain: "opel.com", logo: "https://logo.clearbit.com/opel.com" },
  { id: "seat", name: "SEAT", domain: "seat.com", logo: "https://logo.clearbit.com/seat.com" },
  { id: "skoda", name: "Škoda", domain: "skoda.com", logo: "https://logo.clearbit.com/skoda.com" },
  { id: "suzuki", name: "Suzuki", domain: "suzuki.com", logo: "https://logo.clearbit.com/suzuki.com" },
  { id: "honda", name: "Honda", domain: "honda.com", logo: "https://logo.clearbit.com/honda.com" },
  { id: "ford", name: "Ford", domain: "ford.com", logo: "https://logo.clearbit.com/ford.com" },
];

// Real product images of car mirrors from Unsplash
export const PRODUCTS: Product[] = [
  {
    id: "p1",
    brand: "Dacia",
    brandLogo: "https://logo.clearbit.com/dacia.com",
    model: "Duster",
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
    brandLogo: "https://logo.clearbit.com/renault.com",
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
    brandLogo: "https://logo.clearbit.com/hyundai.com",
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
    brandLogo: "https://logo.clearbit.com/peugeot.com",
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
    brandLogo: "https://logo.clearbit.com/kia.com",
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
    brand: "Toyota",
    brandLogo: "https://logo.clearbit.com/toyota.com",
    model: "Corolla",
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
