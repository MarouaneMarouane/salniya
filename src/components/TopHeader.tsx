"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function TopHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass safe-top">
      <div className="flex items-center justify-between px-4 py-3">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <Image
            src="/logo-salniya.svg"
            alt="SALNIYA"
            width={160}
            height={32}
            priority
            className="h-8 w-auto drop-shadow-[0_2px_8px_rgba(201,168,76,0.3)]"
          />
        </motion.div>

        <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E5C870] to-[#8B7330] flex items-center justify-center active:scale-95 transition-transform">
          <Menu className="w-5 h-5 text-black" strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
}
