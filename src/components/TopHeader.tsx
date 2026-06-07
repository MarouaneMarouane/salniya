"use client";

import { Menu, Bell, Languages } from "lucide-react";
import { motion } from "framer-motion";

export default function TopHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass safe-top">
      <div className="flex items-center justify-between px-4 py-3">
        <button className="p-1.5 rounded-full hover:bg-white/5">
          <Menu className="w-5 h-5 text-[#C9A84C]" strokeWidth={2.5} />
        </button>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#E5C870] via-[#C9A84C] to-[#8B7330] flex items-center justify-center font-black text-black text-lg">
            S
          </div>
          <span className="text-gold-gradient font-black tracking-widest text-lg">
            SALNIYA
          </span>
        </motion.div>

        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded-full hover:bg-white/5">
            <Languages className="w-5 h-5 text-zinc-400" />
          </button>
          <button className="p-1.5 rounded-full hover:bg-white/5 relative">
            <Bell className="w-5 h-5 text-zinc-400" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#C9A84C]" />
          </button>
        </div>
      </div>
    </header>
  );
}
