"use client";

import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

export default function ProductGrid() {
  return (
    <section className="px-5 py-6">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl font-black text-white">
          Top <span className="text-gold-gradient">ventes</span>
        </h2>
        <button className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
          Trier ⇅
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {PRODUCTS.map((product, i) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileTap={{ scale: 0.97 }}
            className="card-premium rounded-2xl overflow-hidden relative"
          >
            {/* Badges */}
            {product.badges && product.badges.length > 0 && (
              <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C9A84C] text-black"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* Image */}
            <div className="aspect-square bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#C9A84C] opacity-[0.03] blur-2xl" />
              <span className="text-6xl drop-shadow-lg">{product.image}</span>
            </div>

            {/* Info */}
            <div className="p-3 space-y-2">
              <div className="flex items-start justify-between gap-1">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-[#C9A84C] font-bold">
                    {product.brand}
                  </p>
                  <h3 className="font-bold text-sm text-white truncate">
                    {product.model} {product.year}
                  </h3>
                </div>
                <div className="flex items-center gap-0.5 flex-shrink-0">
                  <Star className="w-3 h-3 fill-[#C9A84C] text-[#C9A84C]" />
                  <span className="text-[10px] font-semibold text-zinc-300">
                    4.8
                  </span>
                </div>
              </div>

              {/* Options */}
              {product.options && (
                <div className="flex flex-wrap gap-1">
                  {product.options.slice(0, 2).map((opt) => (
                    <span
                      key={opt}
                      className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              )}

              {/* Price + add */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <div className="text-base font-black text-white leading-none">
                    {product.price}
                    <span className="text-[10px] text-[#C9A84C] ml-0.5">MAD</span>
                  </div>
                  <div className="text-[9px] text-zinc-500 line-through">
                    {Math.round(product.price * 1.25)} MAD
                  </div>
                </div>
                <button className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E5C870] to-[#8B7330] flex items-center justify-center active:scale-90 transition-transform">
                  <Plus className="w-4 h-4 text-black" strokeWidth={3} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
