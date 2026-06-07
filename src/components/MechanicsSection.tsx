"use client";

import { motion } from "framer-motion";
import { Phone, Star, MapPin } from "lucide-react";

type Mechanic = {
  id: string;
  name: string;
  category: string;
  city: string;
  rating: number;
  image: string;
};

const CATEGORIES = ["Tolier", "Carrossier", "Électricien", "Mécanicien"];

const MECHANICS_BY_CAT: Record<string, Mechanic[]> = {
  Tolier: [
    {
      id: "t1",
      name: "Atelier Tolerie Atlas",
      category: "Tolier",
      city: "Casablanca",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=400&q=80",
    },
    {
      id: "t2",
      name: "Carrosserie Maghreb",
      category: "Tolier",
      city: "Rabat",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=400&q=80",
    },
  ],
};

export default function MechanicsSection() {
  const items = MECHANICS_BY_CAT.Tolier;

  return (
    <section className="px-5 py-8">
      <h2 className="text-2xl font-black text-white mb-3">
        Contacts <span className="text-gold-gradient">mécaniciens</span>
      </h2>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-5 px-5 pb-3 mb-4">
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat}
            className={`flex-shrink-0 px-4 h-9 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              i === 0
                ? "text-[#C9A84C]"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards horizontal scroll */}
      <div className="grid grid-cols-2 gap-3">
        {items.map((m, i) => (
          <motion.article
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden border border-[#C9A84C]/20 bg-[#0F0F0F]"
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#C9A84C] text-[#C9A84C]" />
                <span className="text-[10px] font-bold text-white">
                  {m.rating}
                </span>
              </div>
            </div>
            <div className="p-3 space-y-2">
              <div>
                <h4 className="text-sm font-bold text-white truncate">
                  {m.name}
                </h4>
                <div className="flex items-center gap-1 text-[10px] text-zinc-500 mt-0.5">
                  <MapPin className="w-2.5 h-2.5" />
                  {m.city}
                </div>
              </div>
              <button className="w-full h-9 rounded-full border border-[#C9A84C] text-[#C9A84C] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
                <Phone className="w-3 h-3" />
                Appeler
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
