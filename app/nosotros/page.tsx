import {Goals} from "@/components/about/goals";
import { GlobeDemo } from "@/components/about/globe";
import { HeroSection } from "@/components/ui/hero-section";
import { Gallery } from "@/components/about/gallery";

const AboutPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto relative">
      <HeroSection 
        title="Somos una empresa joven, dinámica y proactiva." 
        subtitle="AMN te acompaña en tu crecimiento" 
      />
      <Gallery />
      <Goals />
      <GlobeDemo />
    </section>
  )
}

export default AboutPage