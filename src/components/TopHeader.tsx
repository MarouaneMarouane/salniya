"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function TopHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass safe-top">
      <div className="flex items-center justify-between px-4 py-3">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5"
        >
          {/* Shield logo with S */}
          <div className="relative w-10 h-11">
            <svg viewBox="0 0 40 44" className="w-full h-full drop-shadow-[0_2px_8px_rgba(201,168,76,0.4)]">
              <defs>
                <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5D77B" />
                  <stop offset="50%" stopColor="#C9A84C" />
                  <stop offset="100%" stopColor="#7A5F1F" />
                </linearGradient>
                <linearGradient id="shield-shine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FFF8DC" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Shield shape */}
              <path
                d="M 20 2 L 36 8 L 36 22 Q 36 35 20 42 Q 4 35 4 22 L 4 8 Z"
                fill="url(#shield-grad)"
                stroke="#3A2D0F"
                strokeWidth="1"
              />
              {/* Shine */}
              <path
                d="M 20 2 L 36 8 L 36 22 Q 36 35 20 42 Q 4 35 4 22 L 4 8 Z"
                fill="url(#shield-shine)"
              />
              {/* S letter */}
              <text
                x="20"
                y="29"
                textAnchor="middle"
                fontSize="22"
                fontWeight="900"
                fill="#1A1305"
                fontFamily="serif"
              >
                S
              </text>
            </svg>
          </div>

          {/* SALNIYA wordmark */}
          <div className="text-gold-gradient font-black tracking-[0.15em] text-2xl">
            SAL<span className="italic">N</span>IYA
          </div>
        </motion.div>

        <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E5C870] to-[#8B7330] flex items-center justify-center active:scale-95 transition-transform">
          <Menu className="w-5 h-5 text-black" strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
}
