"use client";

import { motion } from "framer-motion";
import { BRANDS } from "@/lib/data";

export default function BrandsCarousel() {
  return (
    <section className="px-5 py-6">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl font-black text-white">
          Toutes les <span className="text-gold-gradient">marques</span>
        </h2>
        <button className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
          Voir tout →
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-5 px-5 pb-2">
        {BRANDS.map((brand, i) => (
          <motion.button
            key={brand.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.4 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 rounded-2xl card-premium flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-2xl font-black text-gold-gradient relative">
                {brand.logo}
              </span>
            </div>
            <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wide">
              {brand.name}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
