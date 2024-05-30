import GraphicDesign from "@/components/services/graphic-design";
import { Conectivity } from "@/components/services/conectivity";
import ServicesBento from "@/components/services/servicesBento";
import { Subtitle } from "@/components/ui/subtitle";

const ServicesPage = () => {
  return (
    <div className="relative px-3 lg:px-10">
      <Subtitle subtitle="Tus necesidades, nuestro servicios" className="lg:my-20" />
      <ServicesBento />
      <Conectivity />
      <GraphicDesign />
    </div>
  )
}

export default ServicesPage