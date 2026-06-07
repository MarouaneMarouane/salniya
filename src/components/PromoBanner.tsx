"use client";

import { motion } from "framer-motion";
import { Truck, Shield, Clock } from "lucide-react";

const FEATURES = [
  { icon: Truck, label: "Livraison", value: "24-48h" },
  { icon: Shield, label: "Garantie", value: "2 ans" },
  { icon: Clock, label: "Support", value: "7j/7" },
];

export default function PromoBanner() {
  return (
    <section className="px-5 py-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-[#1a1410] via-[#0f0a05] to-[#0A0A0A] border border-[#C9A84C]/20"
      >
        {/* Shimmer */}
        <div className="absolute inset-0 shimmer pointer-events-none" />

        <div className="relative">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-2">
            🔥 Offre limitée
          </span>
          <h3 className="text-2xl font-black text-white leading-tight mb-1">
            -20% sur les <br />
            <span className="text-gold-gradient">covers premium</span>
          </h3>
          <p className="text-xs text-zinc-400 mb-4">
            Jusqu'au 30 juin 2026 — Code:{" "}
            <span className="text-[#C9A84C] font-bold">SALNIYA20</span>
          </p>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="text-center">
                  <Icon className="w-4 h-4 text-[#C9A84C] mx-auto mb-1" />
                  <div className="text-[9px] text-zinc-500 uppercase tracking-wider">
                    {f.label}
                  </div>
                  <div className="text-xs font-bold text-white">{f.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
