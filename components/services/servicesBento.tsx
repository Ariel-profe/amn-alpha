import { amn_services } from "@/utils/constants";
import { Title } from "../ui/title";

const ServicesBento = () => {
  return (
        <div className="relative my-6">
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-slate-100/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/services/design.jpg"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-slate-900/30 to-amn-darker lg:p-15">
                <h4 className="lg:text-2xl mb-4 text-white">MARKETING</h4>
                <p className="md:text-xl mb-[3rem] text-slate-400">
                Creación y promoción de contenido en línea para atraer tráfico a un sitio web.
                Asesoramiento para mejorar la visibilidad de una empresa por internet y recomendaciones para saber cómo aprovechar al máximo las oportunidades del marketing digital.
                Administrar cuentas de redes sociales estableciendo estrategias de marketing para promocionar una empresa a través de plataformas sociales.
                Crear y enviar campañas de correo electrónico a una lista de suscriptores para promocionar productos o servicios.
                </p>
              </div>

              
            </div>

            <div className="p-4 bg-slate-700 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-white lg:text-3xl mb-4">DESARROLLO</h4>
                <p className="text-lg mb-[2rem] text-slate-300">
                Desarrollo y mantenimiento de aplicaciones, sitios y páginas web personalizadas utilizando las mejores tecnologías y otras afines.
                Equipos multifuncionales, incluidos diseñadores, analistas comerciales, project manager, gerentes de productos.
                Nos basamos en las mejores prácticas de metodologías ágiles y el proceso de desarrollo unificado.
                Creación de aplicaciones a medida para diferentes plataformas, como móvil, escritorio o web.
                </p>

              
              </div>

              <div className="relative h-[20rem] bg-slate-800 rounded-xl overflow-hidden md:h-[27rem]">
                <img
                  src="/services/developmentTools.svg"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

              </div>
            </div>
          </div>
        </div>
  );
};

export default ServicesBento;