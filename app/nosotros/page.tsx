import Company from "@/components/about/company";
import Goals from "@/components/about/goals";
import { History } from "@/components/about/history";
import { GlobeDemo } from "@/components/about/globe";
import { HeroSection } from "@/components/ui/hero-section";

const AboutPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto relative">
      <HeroSection 
        title="Hemos creado AMN para vos. Queremos acompanarte en tu camino hacia la excelencia y" 
        subtitle="poder impulsarte a vos y a tu empresa" 
      />
      <History />
      <Company />
      <Goals />
      <GlobeDemo />
    </section>
  )
}

export default AboutPage