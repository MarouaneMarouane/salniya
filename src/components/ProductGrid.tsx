"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import Link from "next/link";

export default function ProductGrid() {
  return (
    <section className="px-5 py-6">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl font-black text-white">
          Top <span className="text-gold-gradient">ventes</span>
        </h2>
        <button className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
          Voir tout →
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
            <Link href={`/produit/${product.id}`} className="absolute inset-0 z-20" />
            {/* Badges top */}
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

            {/* Brand logo top right */}
            <div className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/80 backdrop-blur border border-[#C9A84C]/40 flex items-center justify-center overflow-hidden">
              <img
                src={product.brandLogo}
                alt={product.brand}
                className="w-5 h-5 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
                loading="lazy"
              />
            </div>

            {/* Image */}
            <div className="aspect-square bg-gradient-to-br from-zinc-100 to-zinc-200 relative overflow-hidden">
              <img
                src={product.image}
                alt={`${product.brand} ${product.model}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="p-3 space-y-2">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#C9A84C] font-bold">
                  {product.brand}
                </p>
                <h3 className="font-bold text-sm text-white truncate">
                  {product.model} {product.year}
                </h3>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#C9A84C] text-[#C9A84C]" />
                <span className="text-[10px] font-bold text-white">
                  {product.rating}
                </span>
                <span className="text-[10px] text-zinc-500">
                  ({product.reviews})
                </span>
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
                    {product.oldPrice} MAD
                  </div>
                </div>
                <button className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E5C870] to-[#8B7330] flex items-center justify-center active:scale-90 transition-transform">
                  <ShoppingCart className="w-4 h-4 text-black" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
