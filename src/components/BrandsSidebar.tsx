"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BRANDS } from "@/lib/data";

export default function BrandsSidebar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <aside className="fixed top-14 right-0 bottom-20 z-30 w-[60px] flex flex-col">
      <div className="flex-1 overflow-y-auto scrollbar-hide py-3 px-2 flex flex-col gap-2.5">
        {BRANDS.map((brand, i) => {
          const isActive = active === brand.id;
          return (
            <motion.button
              key={brand.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              onClick={() => setActive(brand.id)}
              whileTap={{ scale: 0.9 }}
              className={`relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all flex-shrink-0 overflow-hidden ${
                isActive
                  ? "bg-gradient-to-br from-[#E5C870] to-[#8B7330] border-2 border-[#C9A84C] shadow-[0_0_16px_rgba(201,168,76,0.4)]"
                  : "bg-[#1A1A1A] border border-[#C9A84C]/40 hover:border-[#C9A84C]"
              }`}
              aria-label={brand.name}
            >
              {/* SVG logo (originally black) - we invert to gold via filter */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-7 h-7 object-contain transition-all"
                style={{
                  filter: isActive
                    ? "brightness(0)" // black on gold bg
                    : "invert(78%) sepia(33%) saturate(694%) hue-rotate(8deg) brightness(98%) contrast(92%)", // gold tint
                }}
                loading="lazy"
              />
            </motion.button>
          );
        })}
      </div>
    </aside>
  );
}
