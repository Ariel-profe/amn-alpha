import { Conectivity } from "@/components/services/conectivity";
import ServicesBento from "@/components/services/servicesBento";
import { HeroSection } from "@/components/ui/hero-section";

const ServicesPage = () => {
  return (
    <div className="relative px-3 lg:px-10">
       <HeroSection title="Somos expertos en tecnologia. Nuestros servicios serán integrados en base a" subtitle="los objetivos y necesidades que tengas" />
      <ServicesBento />
      <Conectivity />
    </div>
  )
}

export default ServicesPage