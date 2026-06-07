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
          <img
            src="/logo-salniya.svg"
            alt="SALNIYA"
            className="h-8 w-auto mx-auto mb-3 drop-shadow-[0_2px_8px_rgba(201,168,76,0.3)]"
          />
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
