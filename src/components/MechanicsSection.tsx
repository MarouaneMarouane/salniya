"use client";

import { motion } from "framer-motion";
import { Star, Phone, MapPin } from "lucide-react";
import { MECHANICS } from "@/lib/data";

export default function MechanicsSection() {
  return (
    <section className="px-5 py-6">
      <div className="mb-4">
        <div className="flex items-baseline justify-between mb-1">
          <h2 className="text-xl font-black text-white">
            Mécaniciens <span className="text-gold-gradient">partenaires</span>
          </h2>
          <button className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
            Tout voir
          </button>
        </div>
        <p className="text-xs text-zinc-500">
          Installez votre pièce avec un pro de confiance
        </p>
      </div>

      <div className="space-y-3">
        {MECHANICS.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-premium rounded-2xl p-4 flex items-center gap-3"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a1410] to-[#0a0a0a] border border-[#C9A84C]/20 flex items-center justify-center text-2xl flex-shrink-0">
              {m.image}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-white truncate">
                {m.name}
              </h4>
              <p className="text-[11px] text-zinc-400 truncate">
                {m.specialty}
              </p>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 fill-[#C9A84C] text-[#C9A84C]" />
                  <span className="text-[10px] font-bold text-white">
                    {m.rating}
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-zinc-500">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[10px]">{m.city}</span>
                </div>
              </div>
            </div>

            <button className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center active:scale-90 transition-transform">
              <Phone className="w-4 h-4 text-white fill-white" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
