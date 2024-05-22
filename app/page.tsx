import Carousel from "@/components/carousel";
import Hero from "../components/hombrepage/hero";
import Features from "../components/hombrepage/features";
import FourthSection from "../components/hombrepage/fourth-section/page";
import Plans from "../components/hombrepage/plans/page";
import FifthSection from "../components/hombrepage/fifth-section/page";
import Services from "@/components/hombrepage/services";

export default function Home() {
  return <div className="px-3">
    <Hero />
    <Carousel />
    <Features />
    <Services />
    <FourthSection />
    <Plans />
    <FifthSection />
  </div>;
}
