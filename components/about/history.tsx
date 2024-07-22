import { Subtitle } from "../ui/subtitle";
import TextReveal from "@/components/ui/text-reveal";

export const History = () => {
  return (
    <div id="historia" className="lg:mb-10 flex flex-col items-center justify-center relative">
      <Subtitle subtitle="Un poco de nuestra historia" />
      <TextReveal text="Somos una empresa joven, dinámica y proactiva. Nos centramos en proporcionar servicios y productos tecnológicos para dar soluciones personalizadas e innovadoras a las necesidades de cada cliente. Para mantenernos actualizados, estamos permanentemente incorporando nuevos conocimientos de diseño, sistemas informáticos y tecnología.." />
    </div>
  )
}


