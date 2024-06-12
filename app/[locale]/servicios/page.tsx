import GraphicDesign from "@/components/services/graphic-design";
import { Conectivity } from "@/components/services/conectivity";
import ServicesBento from "@/components/services/servicesBento";
import { HeroSection } from "@/components/ui/hero-section";

const ServicesPage = () => {
  return (
    <div className="relative px-3 lg:px-10">
       <HeroSection title="NUESTROS SERVICIOS " subtitle="Somos expertos en tecnologia. Nuestros servicios serán integrados en base a los objetivos y necesidades que tengas, cuyo fin es tu beneficio final gracias a las tecnologías de la información" />
      <ServicesBento />
      <Conectivity />
      <GraphicDesign />
    </div>
  )
}

export default ServicesPage