import TopHeader from "@/components/TopHeader";
import Hero from "@/components/Hero";
import BrandsCarousel from "@/components/BrandsCarousel";
import CategoryPills from "@/components/CategoryPills";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import MechanicsSection from "@/components/MechanicsSection";
import BottomNav from "@/components/BottomNav";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white pb-24 max-w-md mx-auto">
      <TopHeader />

      <div className="pt-14">
        <Hero />
        <BrandsCarousel />
        <CategoryPills />
        <ProductGrid />
        <PromoBanner />
        <MechanicsSection />

        <footer className="px-5 py-8 text-center border-t border-white/5 mt-4">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#E5C870] via-[#C9A84C] to-[#8B7330] flex items-center justify-center font-black text-black text-sm">
              S
            </div>
            <span className="text-gold-gradient font-black tracking-widest text-base">
              SALNIYA
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

      <WhatsAppFloat />
      <BottomNav />
    </main>
  );
}
