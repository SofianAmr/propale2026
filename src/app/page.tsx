import { DatesBudgetSection } from "@/components/DatesBudgetSection";
import { EconomieSection } from "@/components/EconomieSection";
import { FinaleSection } from "@/components/FinaleSection";
import { HeroSection } from "@/components/HeroSection";
import { PourToutLeMondeSection } from "@/components/PourToutLeMondeSection";
import { VillaSection } from "@/components/VillaSection";
import { WhyVerdonSection } from "@/components/WhyVerdonSection";
import { gorgesGallery } from "@/config/gallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VillaSection />
      <WhyVerdonSection imageFiles={gorgesGallery} />
      <PourToutLeMondeSection />
      <EconomieSection />
      <DatesBudgetSection />
      <FinaleSection />
      <footer className="border-t border-stone-200 bg-stone-100 px-4 py-8 text-center font-sans text-sm text-stone-600 sm:px-10 sm:py-10 pb-[max(2rem,env(safe-area-inset-bottom))]">
        Propale 2026 — Gorges du Verdon
      </footer>
    </>
  );
}
