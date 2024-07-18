import { HeroSection } from "@/components/ui/hero-section";
import ServicesBento from "@/components/services/servicesBento";
import { Conectivity } from "@/components/services/conectivity";

const ServicesPage = () => {
  return (
    <div>
      <HeroSection title="Somos expertos en tecnología. Nuestros servicios serán integrados en base a" subtitle="los objetivos y necesidades que tengas" />
      <ServicesBento />
      <Conectivity />
    </div>
  )
}

export default ServicesPage