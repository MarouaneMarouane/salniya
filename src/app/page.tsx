import TopHeader from "@/components/TopHeader";
import HeroVideo from "@/components/HeroVideo";
import BrandsSidebar from "@/components/BrandsSidebar";
import CategoryPills from "@/components/CategoryPills";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import MechanicsSection from "@/components/MechanicsSection";
import BottomNav from "@/components/BottomNav";
import FloatingButtons from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white pb-24 max-w-md mx-auto">
      <TopHeader />
      <BrandsSidebar />

      {/* Main content with right padding for sidebar */}
      <div className="pt-14 pr-[60px]">
        <HeroVideo />
        <CategoryPills />
        <ProductGrid />
        <PromoBanner />
        <MechanicsSection />

        <footer className="px-5 py-8 text-center border-t border-white/5 mt-4">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-9">
              <svg viewBox="0 0 40 44" className="w-full h-full">
                <defs>
                  <linearGradient id="footer-shield" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5D77B" />
                    <stop offset="50%" stopColor="#C9A84C" />
                    <stop offset="100%" stopColor="#7A5F1F" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20 2 L 36 8 L 36 22 Q 36 35 20 42 Q 4 35 4 22 L 4 8 Z"
                  fill="url(#footer-shield)"
                />
                <text
                  x="20"
                  y="29"
                  textAnchor="middle"
                  fontSize="22"
                  fontWeight="900"
                  fill="#1A1305"
                >
                  S
                </text>
              </svg>
            </div>
            <span className="text-gold-gradient font-black tracking-[0.15em] text-xl">
              SAL<span className="italic">N</span>IYA
            </span>
          </div>
          <p className="text-xs text-zinc-500 mb-1">
            Rétroviseurs premium · Maroc
          </p>
          <p className="text-[10px] text-zinc-600">
            © 2026 SALNIYA. Tous droits réservés.
          </p>
        </footer>
      </div>

      <FloatingButtons />
      <BottomNav />
    </main>
  );
}
