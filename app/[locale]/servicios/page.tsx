import { HeroSection } from "@/components/ui/hero-section";
import ServicesBento from "@/components/services/servicesBento";
import { Conectivity } from "@/components/services/conectivity";
import { ConnectUs } from "@/components/services/connect-us";

const ServicesPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto relative">
      <HeroSection title="Somos expertos en tecnología. Nuestros servicios serán integrados en base a" subtitle="los objetivos y necesidades que tengas" />
      <ServicesBento />
      <Conectivity />
      <ConnectUs />
    </section>
  )
}

export default ServicesPage