"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Search, SlidersHorizontal, X, Star, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { PRODUCTS, BRANDS, CATEGORIES } from "@/lib/data";

export default function CataloguePage() {
  const [q, setQ] = useState("");
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState<"popular" | "price-asc" | "price-desc" | "rating">("popular");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (q) {
      const qLower = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.brand.toLowerCase().includes(qLower) ||
          p.model.toLowerCase().includes(qLower) ||
          String(p.year).includes(qLower)
      );
    }
    if (activeBrand) list = list.filter((p) => p.brand.toLowerCase() === activeBrand);
    if (activeCat) list = list.filter((p) => p.category === activeCat);
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [q, activeBrand, activeCat, priceRange, sortBy]);

  const activeFiltersCount =
    (activeBrand ? 1 : 0) + (activeCat ? 1 : 0) + (priceRange[1] < 2000 || priceRange[0] > 0 ? 1 : 0);

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white pb-24 max-w-md mx-auto">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 glass safe-top max-w-md mx-auto">
        <div className="px-3 py-3 flex items-center gap-2">
          <Link href="/" className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
            <ChevronLeft className="w-5 h-5 text-[#C9A84C]" />
          </Link>
          <div className="flex-1 flex items-center gap-2 bg-[#1A1A1A] rounded-full border border-[#C9A84C]/30 px-4 h-10">
            <Search className="w-4 h-4 text-[#C9A84C]" />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher..."
              className="flex-1 bg-transparent text-sm placeholder:text-zinc-500 outline-none text-white"
            />
            {q && <X className="w-4 h-4 text-zinc-500" onClick={() => setQ("")} />}
          </div>
          <button
            onClick={() => setShowFilters(true)}
            className="relative w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#C9A84C]" />
            {activeFiltersCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9A84C] text-black text-[9px] font-bold flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {/* Sort tabs */}
        <div className="flex gap-2 px-3 pb-2 overflow-x-auto scrollbar-hide">
          {[
            { id: "popular", label: "Populaire" },
            { id: "rating", label: "Mieux notés" },
            { id: "price-asc", label: "Prix ↑" },
            { id: "price-desc", label: "Prix ↓" },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setSortBy(s.id as never)}
              className={`flex-shrink-0 h-8 px-3 rounded-full text-xs font-bold transition-all ${
                sortBy === s.id
                  ? "bg-[#C9A84C] text-black"
                  : "bg-[#1A1A1A] text-zinc-400 border border-white/5"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </header>

      {/* Brand chips */}
      <div className="pt-[108px] px-3 pb-3 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveBrand(null)}
            className={`flex-shrink-0 h-9 px-3 rounded-full text-xs font-bold ${
              !activeBrand ? "bg-[#C9A84C] text-black" : "bg-[#1A1A1A] text-zinc-400 border border-white/5"
            }`}
          >
            Toutes
          </button>
          {BRANDS.slice(0, 10).map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBrand(activeBrand === b.id ? null : b.id)}
              className={`flex-shrink-0 h-9 px-3 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeBrand === b.id
                  ? "bg-[#C9A84C] text-black"
                  : "bg-[#1A1A1A] text-zinc-400 border border-white/5"
              }`}
            >
              <img
                src={b.logo}
                alt={b.name}
                className="w-3.5 h-3.5 object-contain"
                style={{ filter: activeBrand === b.id ? "brightness(0)" : "brightness(0) invert(1)" }}
              />
              {b.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="px-5 text-xs text-zinc-500 mb-3">
        <span className="text-[#C9A84C] font-bold">{filtered.length}</span> résultat{filtered.length > 1 ? "s" : ""}
      </p>

      {/* Products list */}
      <div className="px-5 space-y-3">
        {filtered.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <Link href={`/produit/${product.id}`} className="flex gap-3 card-premium rounded-2xl overflow-hidden p-3 active:scale-[0.98] transition-transform">
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100">
                <img src={product.image} alt={product.model} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <img
                      src={product.brandLogo}
                      alt={product.brand}
                      className="w-4 h-4 object-contain"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    <p className="text-[10px] uppercase tracking-wider text-[#C9A84C] font-bold">
                      {product.brand}
                    </p>
                  </div>
                  <h3 className="font-bold text-sm text-white truncate">
                    {product.model} {product.year}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 fill-[#C9A84C] text-[#C9A84C]" />
                    <span className="text-[10px] font-bold text-white">{product.rating}</span>
                    <span className="text-[10px] text-zinc-500">({product.reviews})</span>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-base font-black text-white leading-none">
                      {product.price}
                      <span className="text-[10px] text-[#C9A84C] ml-0.5">MAD</span>
                    </div>
                    <div className="text-[9px] text-zinc-500 line-through">{product.oldPrice} MAD</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E5C870] to-[#8B7330] flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-black" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-zinc-400 text-sm">Aucun produit trouvé</p>
            <button
              onClick={() => {
                setQ("");
                setActiveBrand(null);
                setActiveCat(null);
                setPriceRange([0, 2000]);
              }}
              className="mt-4 text-xs font-bold text-[#C9A84C] underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      {/* Filters bottom sheet */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 bg-black/60 z-50"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#141414] rounded-t-3xl border-t border-[#C9A84C]/30 max-w-md mx-auto"
            >
              <div className="p-5 max-h-[80vh] overflow-y-auto safe-bottom">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-black text-white">Filtres</h2>
                  <button onClick={() => setShowFilters(false)} className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                    <X className="w-4 h-4 text-[#C9A84C]" />
                  </button>
                </div>

                <section className="mb-6">
                  <h3 className="text-sm font-bold text-[#C9A84C] uppercase mb-3">Type de pièce</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setActiveCat(activeCat === c.id ? null : c.id)}
                        className={`h-12 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold ${
                          activeCat === c.id ? "bg-[#C9A84C] text-black border-[#C9A84C]" : "bg-[#1A1A1A] text-zinc-300 border-white/10"
                        }`}
                      >
                        <span>{c.icon}</span>
                        {c.label}
                      </button>
                    ))}
                  </div>
                </section>

                <section className="mb-6">
                  <h3 className="text-sm font-bold text-[#C9A84C] uppercase mb-3">
                    Prix : {priceRange[0]} - {priceRange[1]} MAD
                  </h3>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                    className="w-full accent-[#C9A84C]"
                  />
                </section>

                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full h-14 rounded-full bg-gradient-to-br from-[#E5C870] to-[#8B7330] font-bold text-black"
                >
                  Voir {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
