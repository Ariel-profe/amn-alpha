
import Hero from "../components/hombrepage/hero";
import Features from "../components/hombrepage/features";
import FourthSection from "../components/hombrepage/fourth-section/page";
import Plans from "../components/hombrepage/plans/page";
import FifthSection from "../components/hombrepage/fifth-section/page";
import Services from "@/components/hombrepage/services";
import Carousel from "@/components/hombrepage/carousel";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return <TracingBeam className="px-3 lg:px-10">
    <Hero />
    <Carousel />
    <Features />
    <Services />
    <FourthSection />
    <Plans />
    <FifthSection />
  </TracingBeam>;
}
