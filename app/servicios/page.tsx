import { HeroSection } from "@/components/ui/hero-section";
import { Conectivity } from "@/components/services/conectivity";
import { ConnectUs } from "@/components/services/connect-us";
import { BentoGridSecondDemo } from "@/components/services/bento";
import { Plans } from "@/components/services/plans/page";

const ServicesPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto relative">
      <HeroSection title="Somos expertos en tecnología. Nuestros servicios serán integrados en base a" subtitle="los objetivos y necesidades que tengas" />
      <BentoGridSecondDemo />
      <Conectivity />
      <Plans />
      <ConnectUs />
    </section>
  )
}

export default ServicesPage