import GraphicDesign from "@/components/services/graphic-design";
import { Conectivity } from "@/components/services/conectivity";
import Development from "@/components/services/development";
import Encryption from "@/components/services/encryption";

const ServicesPage = () => {
  return (
    <div className="px-3">
       <Encryption />
       <Development />
       <Conectivity />
       <GraphicDesign />
    </div>
  )
}

export default ServicesPage