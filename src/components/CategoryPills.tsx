"use client";

import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/data";
import { useState } from "react";

export default function CategoryPills() {
  const [active, setActive] = useState("complet");

  return (
    <section className="px-5 py-2">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-5 px-5">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive("all")}
          className={`flex-shrink-0 px-4 h-11 rounded-full flex items-center gap-1.5 text-sm font-semibold transition-all ${
            active === "all"
              ? "bg-gradient-to-br from-[#E5C870] to-[#8B7330] text-black"
              : "glass text-zinc-300"
          }`}
        >
          ✨ Tout
        </motion.button>
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActive(cat.id)}
            className={`flex-shrink-0 px-4 h-11 rounded-full flex items-center gap-1.5 text-sm font-semibold transition-all whitespace-nowrap ${
              active === cat.id
                ? "bg-gradient-to-br from-[#E5C870] to-[#8B7330] text-black"
                : "glass text-zinc-300"
            }`}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </motion.button>
        ))}
      </div>
    </section>
  );
}
