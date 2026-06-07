"use client";

import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
      {/* Video background placeholder — replace src with your real video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* Add your video here later */}
        {/* <source src="/hero.mp4" type="video/mp4" /> */}
      </video>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

      {/* Gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A84C] opacity-[0.06] blur-[100px]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 pt-20">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass self-start"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
            Premium quality
          </span>
        </motion.div>

        {/* Bottom content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-5"
        >
          <h1 className="text-[44px] font-black leading-[1.05] tracking-tight uppercase">
            <span className="text-white">Votre</span>
            <br />
            <span className="text-gold-gradient">rétroviseur,</span>
            <br />
            <span className="text-white">notre</span>{" "}
            <span className="text-gold-gradient italic">expertise.</span>
          </h1>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass rounded-2xl p-1 flex items-center gap-2"
          >
            <div className="flex-1 flex items-center gap-2 pl-3 py-2">
              <Search className="w-4 h-4 text-[#C9A84C]" />
              <input
                type="text"
                placeholder="Marque, modèle, année..."
                className="flex-1 bg-transparent text-sm placeholder:text-zinc-500 outline-none text-white"
              />
            </div>
            <button className="h-11 px-5 rounded-xl bg-gradient-to-br from-[#E5C870] to-[#8B7330] font-bold text-black text-sm">
              Trouver
            </button>
          </motion.div>

          {/* Stats */}
          <div className="flex items-center justify-between glass rounded-2xl px-5 py-3">
            <Stat value="50k+" label="Clients" />
            <div className="w-px h-8 bg-[#C9A84C]/30" />
            <Stat value="14+" label="Années" />
            <div className="w-px h-8 bg-[#C9A84C]/30" />
            <Stat value="98%" label="Satisfaits" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-lg font-black text-gold-gradient leading-none">
        {value}
      </div>
      <div className="text-[9px] uppercase tracking-widest text-zinc-400 mt-0.5">
        {label}
      </div>
    </div>
  );
}
