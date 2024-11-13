import Company from "@/components/about/company";
import Goals from "@/components/about/goals";
import { GlobeDemo } from "@/components/about/globe";
import { HeroSection } from "@/components/ui/hero-section";

const AboutPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto relative">
      <HeroSection 
        title="Somos una empresa joven, dinámica y proactiva." 
        subtitle="AMN te acompaña en tu crecimiento" 
      />
      <Company />
      <Goals />
      <GlobeDemo />
    </section>
  )
}

export default AboutPage