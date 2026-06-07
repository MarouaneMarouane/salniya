"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1a1410] to-[#0A0A0A]" />

      {/* Radial gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C] opacity-[0.08] blur-[120px]" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating mirror visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[18%] left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="text-[180px] leading-none drop-shadow-[0_20px_40px_rgba(201,168,76,0.3)]">
            🪞
          </div>
          {/* Gold ring */}
          <div className="absolute inset-0 -m-8 rounded-full border border-[#C9A84C]/20 animate-pulse" />
          <div
            className="absolute inset-0 -m-16 rounded-full border border-[#C9A84C]/10"
            style={{ animation: "spin 30s linear infinite" }}
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-5"
        >
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span className="text-xs font-semibold tracking-wider text-[#C9A84C] uppercase">
              Premium Quality
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-1">
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight">
              <span className="text-white">Votre</span>
              <br />
              <span className="text-gold-gradient">rétroviseur,</span>
              <br />
              <span className="text-white">notre </span>
              <span className="italic font-serif text-[#C9A84C]">expertise.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base max-w-[280px] leading-relaxed">
            Le plus grand catalogue de rétroviseurs premium au Maroc.
            <span className="text-[#C9A84C]"> 14 ans d'expertise.</span>
          </p>

          {/* CTA */}
          <div className="flex items-center gap-3 pt-2">
            <motion.button
              whileTap={{ scale: 0.96 }}
              className="flex-1 h-14 rounded-2xl bg-gradient-to-br from-[#E5C870] via-[#C9A84C] to-[#8B7330] flex items-center justify-center gap-2 font-bold text-black glow-gold"
            >
              Trouver ma pièce
              <ChevronRight className="w-5 h-5" strokeWidth={3} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              className="h-14 px-5 rounded-2xl glass border border-[#C9A84C]/30 font-semibold text-[#C9A84C]"
            >
              WhatsApp
            </motion.button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-4 px-1">
            <Stat value="50k+" label="Clients" />
            <div className="w-px h-8 bg-zinc-800" />
            <Stat value="14+" label="Années" />
            <div className="w-px h-8 bg-zinc-800" />
            <Stat value="98%" label="Satisfaits" />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-xl font-black text-gold-gradient">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-zinc-500">
        {label}
      </div>
    </div>
  );
}
