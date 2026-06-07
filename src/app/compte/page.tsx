"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

type Tab = "login" | "register";

export default function AccountPage() {
  const [tab, setTab] = useState<Tab>("login");
  const [showPwd, setShowPwd] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white max-w-md mx-auto overflow-hidden">
      {/* Background gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A84C] opacity-[0.08] blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 safe-top">
        <div className="px-3 py-3 flex items-center">
          <Link href="/" className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#C9A84C]/30 flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-[#C9A84C]" />
          </Link>
        </div>
      </header>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center pt-8 pb-10">
        <img
          src="/logo-salniya-shield.svg"
          alt="SALNIYA"
          className="w-24 h-24 mb-4 drop-shadow-[0_4px_20px_rgba(201,168,76,0.4)]"
        />
        <h1 className="text-2xl font-black text-gold-gradient tracking-[0.15em] mb-1">SALNIYA</h1>
        <p className="text-xs text-zinc-500 uppercase tracking-widest">Premium · Maroc</p>
      </div>

      {/* Tabs */}
      <div className="relative z-10 px-5 mb-6">
        <div className="bg-[#141414] rounded-full p-1 border border-white/5 flex relative">
          <motion.div
            layout
            className="absolute top-1 bottom-1 w-1/2 bg-gradient-to-br from-[#E5C870] to-[#8B7330] rounded-full"
            style={{ left: tab === "login" ? "0.25rem" : "calc(50% - 0.25rem)" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          />
          <button
            onClick={() => setTab("login")}
            className={`relative flex-1 h-11 text-sm font-bold transition-colors ${
              tab === "login" ? "text-black" : "text-zinc-400"
            }`}
          >
            Connexion
          </button>
          <button
            onClick={() => setTab("register")}
            className={`relative flex-1 h-11 text-sm font-bold transition-colors ${
              tab === "register" ? "text-black" : "text-zinc-400"
            }`}
          >
            Inscription
          </button>
        </div>
      </div>

      {/* Forms */}
      <div className="relative z-10 px-5">
        <AnimatePresence mode="wait">
          {tab === "login" ? (
            <motion.form
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field icon={Mail} type="email" placeholder="E-mail ou téléphone" />
              <Field
                icon={Lock}
                type={showPwd ? "text" : "password"}
                placeholder="Mot de passe"
                trailing={
                  <button type="button" onClick={() => setShowPwd(!showPwd)}>
                    {showPwd ? <EyeOff className="w-4 h-4 text-zinc-500" /> : <Eye className="w-4 h-4 text-zinc-500" />}
                  </button>
                }
              />

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-zinc-400">
                  <input type="checkbox" className="accent-[#C9A84C]" />
                  Se souvenir
                </label>
                <button type="button" className="text-[#C9A84C] font-bold">
                  Mot de passe oublié ?
                </button>
              </div>

              <button className="w-full h-14 rounded-2xl bg-gradient-to-br from-[#E5C870] via-[#C9A84C] to-[#8B7330] font-black text-black shadow-[0_8px_24px_rgba(201,168,76,0.3)]">
                Se connecter
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="register"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field icon={User} type="text" placeholder="Nom complet" />
              <Field icon={Mail} type="email" placeholder="E-mail" />
              <Field icon={Phone} type="tel" placeholder="Téléphone (+212)" />
              <Field
                icon={Lock}
                type={showPwd ? "text" : "password"}
                placeholder="Mot de passe (8 caractères min.)"
                trailing={
                  <button type="button" onClick={() => setShowPwd(!showPwd)}>
                    {showPwd ? <EyeOff className="w-4 h-4 text-zinc-500" /> : <Eye className="w-4 h-4 text-zinc-500" />}
                  </button>
                }
              />

              <label className="flex items-start gap-2 text-[11px] text-zinc-400">
                <input type="checkbox" className="accent-[#C9A84C] mt-0.5" />
                J&apos;accepte les <span className="text-[#C9A84C] underline">CGV</span> et la{" "}
                <span className="text-[#C9A84C] underline">politique de confidentialité</span>
              </label>

              <button className="w-full h-14 rounded-2xl bg-gradient-to-br from-[#E5C870] via-[#C9A84C] to-[#8B7330] font-black text-black shadow-[0_8px_24px_rgba(201,168,76,0.3)]">
                Créer mon compte
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-[10px] uppercase tracking-widest text-zinc-500">ou continuer avec</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Social buttons */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: "wa", label: "WhatsApp", color: "#25D366", icon: "💬" },
            { id: "g", label: "Google", color: "#fff", icon: "G" },
            { id: "fb", label: "Facebook", color: "#1877F2", icon: "f" },
          ].map((s) => (
            <button
              key={s.id}
              className="h-12 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center gap-1.5 text-xs font-bold text-white active:scale-95 transition-transform"
            >
              <span className="text-base">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        <p className="text-center text-[10px] text-zinc-600 mt-8 pb-8">
          © 2026 SALNIYA. Tous droits réservés.
        </p>
      </div>
    </main>
  );
}

function Field({
  icon: Icon,
  type,
  placeholder,
  trailing,
}: {
  icon: React.ComponentType<{ className?: string }>;
  type: string;
  placeholder: string;
  trailing?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 h-14 px-4 rounded-2xl bg-[#141414] border border-white/10 focus-within:border-[#C9A84C]/50 transition-colors">
      <Icon className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
      />
      {trailing}
    </div>
  );
}
