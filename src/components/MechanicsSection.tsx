"use client";

import { motion } from "framer-motion";
import { Phone, Star, MapPin } from "lucide-react";
import { MECHANICS } from "@/lib/data";
import { useState } from "react";

const CATEGORIES = ["Tolier", "Carrossier", "Électricien", "Mécanicien"];

export default function MechanicsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-5 py-8">
      <h2 className="text-2xl font-black text-white mb-1">
        Contacts <span className="text-gold-gradient">mécaniciens</span>
      </h2>
      <p className="text-xs text-zinc-500 mb-4">
        Installez votre pièce avec un pro de confiance
      </p>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-5 px-5 pb-3 mb-4">
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 px-4 h-9 rounded-full text-xs font-bold uppercase tracking-wider transition-all relative ${
              i === active
                ? "text-[#C9A84C]"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {cat}
            {i === active && (
              <motion.div
                layoutId="mech-tab"
                className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#C9A84C] rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 gap-3">
        {MECHANICS.map((m, i) => (
          <motion.article
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl overflow-hidden border border-[#C9A84C]/20 bg-[#0F0F0F]"
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
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
                <p className="text-[10px] text-zinc-500 truncate">
                  {m.specialty}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-zinc-500 mt-0.5">
                  <MapPin className="w-2.5 h-2.5" />
                  {m.city}
                </div>
              </div>
              <a
                href={`tel:${m.phone}`}
                className="w-full h-9 rounded-full border border-[#C9A84C] text-[#C9A84C] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
              >
                <Phone className="w-3 h-3" />
                Appeler
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
