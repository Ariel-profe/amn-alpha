import { HeroSection } from "@/components/ui/hero-section";
import { Conectivity } from "@/components/services/conectivity";
import { ConnectUs } from "@/components/services/connect-us";
import { Plans } from "@/components/services/plans/page";
import { Services } from "@/components/services/services";

const ServicesPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto relative">
      <HeroSection title="Somos expertos en tecnología. Nuestros servicios serán integrados en base a" subtitle="los objetivos y necesidades que tengas" />
      <Services />
      <Conectivity />
      <Plans />
      <ConnectUs />
    </section>
  )
}

export default ServicesPage