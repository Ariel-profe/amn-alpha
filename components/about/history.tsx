import { Subtitle } from "../ui/subtitle";

export const History = () => {
  return (
    <div id="historia" className="lg:mb-10 flex flex-col items-center justify-center">
      <Subtitle subtitle="Un poco de nuestra historia" />
      <p className="text-2xl lg:text-4xl text-center font-thin">
        Somos una empresa joven, dinámica y proactiva. <br />
        Nos centramos en proporcionar servicios y productos tecnológicos para dar soluciones personalizadas e innovadoras a las necesidades de cada cliente. <br />
        Para mantenernos actualizados, estamos permanentemente incorporando nuevos conocimientos de diseño, sistemas informáticos y tecnología.
      </p>
    </div>
  )
};

