import Company from "@/components/about/company";
import Goals from "@/components/about/goals";
import { History } from "@/components/about/history";
import { GlobeDemo } from "@/components/about/globe";
import { HeroSection } from "@/components/ui/hero-section";

const AboutPage = () => {
  return (
    <div className="px-3 lg:px-10">
      <HeroSection title="Hemos creado AMN para vos. Queremos acompanarte en tu camino hacia la excelencia y" subtitle="poder impulsarte a vos y a tu empresa" />
      <History />
      <Company />
      <Goals />
      <GlobeDemo />
    </div>
  )
}

export default AboutPage