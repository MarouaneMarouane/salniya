"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Heart, Share2, Star, Shield, Truck, RefreshCw, Plus, Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/data";

const OPTIONS_CONFIG = [
  {
    id: "cote",
    title: "1. Côté du rétroviseur",
    multi: false,
    items: [
      { id: "conducteur", label: "Conducteur", icon: "👤" },
      { id: "passager", label: "Passager", icon: "👥" },
    ],
  },
  {
    id: "reglage",
    title: "2. Type de réglage",
    multi: false,
    items: [
      { id: "manuel", label: "Manuel", icon: "🔧" },
      { id: "electrique", label: "Électrique", icon: "⚡" },
    ],
  },
  {
    id: "options",
    title: "3. Options du rétroviseur",
    multi: true,
    items: [
      { id: "chauffant", label: "Chauffant", icon: "🔥" },
      { id: "rabattable", label: "Rabattable", icon: "↩️" },
      { id: "memoire", label: "Mémoire", icon: "💾" },
      { id: "anti-eblouissement", label: "Anti-éblouissement", icon: "🌗" },
      { id: "angle-mort", label: "Angle mort", icon: "⚠️" },
      { id: "camera", label: "Caméra", icon: "📷" },
      { id: "sous-eclairage", label: "Sous-éclairage", icon: "💡" },
      { id: "clignotant", label: "Clignotant LED", icon: "✨" },
    ],
  },
];

const COLORS = [
  { id: "noir", label: "Noir brillant", color: "#000000" },
  { id: "blanc", label: "Blanc nacré", color: "#FFFFFF" },
  { id: "gris", label: "Gris clair", color: "#999999" },
  { id: "anthracite", label: "Gris anthracite", color: "#444444" },
  { id: "argent", label: "Gris métallisé", color: "#C0C0C0" },
  { id: "perso", label: "Sur mesure", color: "linear-gradient(135deg, #ff0080, #ff8c00, #ffd700, #00ff80, #00ffff, #8c00ff)" },
];

export default function ProductDetail({ product }: { product: Product }) {
  const [selected, setSelected] = useState<Record<string, string[]>>({
    cote: ["conducteur"],
    reglage: ["electrique"],
    options: [],
  });
  const [color, setColor] = useState("noir");
  const [qty, setQty] = useState(1);

  const toggleOption = (groupId: string, itemId: string, multi: boolean) => {
    setSelected((prev) => {
      const current = prev[groupId] || [];
      if (multi) {
        return {
          ...prev,
          [groupId]: current.includes(itemId)
            ? current.filter((i) => i !== itemId)
            : [...current, itemId],
        };
      }
      return { ...prev, [groupId]: [itemId] };
    });
  };

  // Dynamic price calculation
  const basePrice = product.price;
  const optionExtra = (selected.options?.length || 0) * 80;
  const reglageExtra = selected.reglage?.[0] === "electrique" ? 150 : 0;
  const totalPrice = (basePrice + optionExtra + reglageExtra) * qty;

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white pb-32 max-w-md mx-auto">
      {/* Sticky header */}
      <header className="fixed top-0 left-0 right-0 z-40 glass safe-top max-w-md mx-auto">
        <div className="flex items-center justify-between px-3 py-3">
          <Link href="/" className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#C9A84C]/30 flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-[#C9A84C]" />
          </Link>
          <div className="text-sm font-bold text-white truncate max-w-[180px]">
            {product.brand} {product.model} {product.year}
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#C9A84C]/30 flex items-center justify-center">
              <Heart className="w-4 h-4 text-[#C9A84C]" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#C9A84C]/30 flex items-center justify-center">
              <Share2 className="w-4 h-4 text-[#C9A84C]" />
            </button>
          </div>
        </div>
      </header>

      {/* Product image */}
      <div className="pt-14 relative">
        <div className="aspect-square bg-gradient-to-br from-zinc-100 to-zinc-200 relative">
          <img
            src={product.image}
            alt={`${product.brand} ${product.model}`}
            className="w-full h-full object-cover"
          />
          {/* Brand badge */}
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur flex items-center gap-2 border border-[#C9A84C]/30">
            <img
              src={product.brandLogo}
              alt={product.brand}
              className="w-4 h-4 object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="text-xs font-bold text-white">{product.brand}</span>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 p-3 overflow-x-auto scrollbar-hide">
          {[product.image, product.image, product.image].map((src, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 ${
                i === 0 ? "border-[#C9A84C]" : "border-transparent opacity-50"
              }`}
            >
              <img src={src} alt={`${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Info section */}
      <div className="px-5 pt-2 pb-4 space-y-3 border-b border-white/5">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-1">
            {product.category === "complet" ? "Rétroviseur complet" : product.category}
          </p>
          <h1 className="text-2xl font-black text-white leading-tight">
            {product.brand} {product.model} {product.year}
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating) ? "fill-[#C9A84C] text-[#C9A84C]" : "text-zinc-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-white">{product.rating}</span>
            <span className="text-xs text-zinc-500">({product.reviews} avis)</span>
          </div>
          <div className="flex items-center gap-1">
            {product.badges?.map((b) => (
              <span key={b} className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#C9A84C] text-black">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Configurator */}
      <div className="space-y-6 py-5">
        {OPTIONS_CONFIG.map((group) => (
          <section key={group.id} className="px-5">
            <h3 className="text-base font-bold text-white mb-3">{group.title}</h3>
            <div className="grid grid-cols-2 gap-2">
              {group.items.map((item) => {
                const isSelected = selected[group.id]?.includes(item.id);
                return (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => toggleOption(group.id, item.id, group.multi)}
                    className={`relative h-20 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 transition-all ${
                      isSelected
                        ? "bg-gradient-to-br from-[#E5C870]/20 to-[#8B7330]/20 border-[#C9A84C] shadow-[0_0_12px_rgba(201,168,76,0.3)]"
                        : "bg-[#141414] border-white/10"
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`text-[11px] font-semibold ${isSelected ? "text-[#C9A84C]" : "text-zinc-400"}`}>
                      {item.label}
                    </span>
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#C9A84C] flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </section>
        ))}

        {/* Couleurs */}
        <section className="px-5">
          <h3 className="text-base font-bold text-white mb-3">4. Couleur</h3>
          <div className="flex flex-wrap gap-2.5">
            {COLORS.map((c) => (
              <button
                key={c.id}
                onClick={() => setColor(c.id)}
                className={`group flex flex-col items-center gap-1.5 transition-transform active:scale-95`}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 transition-all ${
                    color === c.id ? "border-[#C9A84C] shadow-[0_0_12px_rgba(201,168,76,0.5)]" : "border-zinc-700"
                  }`}
                  style={{ background: c.color }}
                />
                <span className={`text-[10px] font-semibold ${color === c.id ? "text-[#C9A84C]" : "text-zinc-500"}`}>
                  {c.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Garanties */}
        <section className="px-5">
          <div className="grid grid-cols-3 gap-2 rounded-2xl bg-[#141414] border border-white/5 p-3">
            <div className="text-center">
              <Truck className="w-5 h-5 text-[#C9A84C] mx-auto mb-1" />
              <p className="text-[9px] text-zinc-500 uppercase tracking-wider">Livraison</p>
              <p className="text-[11px] font-bold text-white">24-48h</p>
            </div>
            <div className="text-center border-x border-white/5">
              <Shield className="w-5 h-5 text-[#C9A84C] mx-auto mb-1" />
              <p className="text-[9px] text-zinc-500 uppercase tracking-wider">Garantie</p>
              <p className="text-[11px] font-bold text-white">2 ans</p>
            </div>
            <div className="text-center">
              <RefreshCw className="w-5 h-5 text-[#C9A84C] mx-auto mb-1" />
              <p className="text-[9px] text-zinc-500 uppercase tracking-wider">Retour</p>
              <p className="text-[11px] font-bold text-white">14 jours</p>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 glass safe-bottom max-w-md mx-auto border-t border-[#C9A84C]/20">
        <div className="flex items-center justify-between px-4 py-3 gap-3">
          {/* Quantity */}
          <div className="flex items-center gap-1 bg-[#1A1A1A] rounded-full p-1 border border-[#C9A84C]/20">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 rounded-full flex items-center justify-center text-[#C9A84C]">
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center font-bold text-sm text-white">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center text-black">
              <Plus className="w-3.5 h-3.5" strokeWidth={3} />
            </button>
          </div>

          {/* Price + CTA */}
          <button className="flex-1 h-12 rounded-full bg-gradient-to-br from-[#E5C870] via-[#C9A84C] to-[#8B7330] flex items-center justify-between px-4 font-bold text-black shadow-[0_0_24px_rgba(201,168,76,0.4)]">
            <span className="flex items-center gap-1.5 text-sm">
              <ShoppingCart className="w-4 h-4" strokeWidth={2.5} />
              Ajouter
            </span>
            <span className="text-base font-black">{totalPrice} MAD</span>
          </button>
        </div>
      </div>
    </main>
  );
}
