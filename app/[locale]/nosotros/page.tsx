import Company from "@/components/about/company";
import Goals from "@/components/about/goals";
import { History } from "@/components/about/history";
import { GlobeDemo } from "@/components/about/globe";
import { Collaborations } from "@/components/about/collaborations";
import { HeroSection } from "@/components/ui/hero-section";

const AboutPage = () => {
  return (
    <div className="px-3 lg:px-10">
      <HeroSection title="SOBRE NOSOTROS" subtitle="Hemos creado AMN para vos. Queremos acompanarte en tu camino hacia la excelencia y poder impulsarte a vos y a tu empresa para que puedas crecer sin limites. Sabemos el potencial que tenes dentro. " />
      <History />
      <Collaborations />
      <Company />
      <Goals />
      <GlobeDemo />
    </div>
  )
}

export default AboutPage