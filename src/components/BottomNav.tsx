"use client";

import { Home, Search, ShoppingBag, Heart, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Accueil", icon: Home },
  { id: "search", label: "Recherche", icon: Search },
  { id: "cart", label: "Panier", icon: ShoppingBag, badge: 0 },
  { id: "fav", label: "Favoris", icon: Heart },
  { id: "account", label: "Compte", icon: User },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed bottom-0 left-0 right-[60px] z-50 glass safe-bottom no-select max-w-[calc(28rem-60px)] mx-auto">
      <div className="flex items-center justify-around px-2 py-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative flex flex-col items-center justify-center gap-1 py-2 px-2 min-w-[48px]"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#C9A84C] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? "text-[#C9A84C]" : "text-zinc-500"
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {typeof item.badge === "number" && item.badge > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9A84C] text-black text-[9px] font-bold flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isActive ? "text-[#C9A84C]" : "text-zinc-500"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
