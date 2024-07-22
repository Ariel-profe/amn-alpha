import { Conectivity } from "./conectivity";

const ServicesBento = () => {
  return (
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* Marketing */}
            <div className="relative min-h-[39rem] border border-slate-100/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/services/marketing.webp"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="design"
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

            {/* Desarrollo */}
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
                  className="w-full h-full object-contain"
                  width={520}
                  height={400}
                  alt="development-tools"
                />

              </div>
            </div>

            {/* Servicio IT */}
            <div className="p-4 bg-slate-700 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-white lg:text-3xl mb-4">SERVICIO TI</h4>
                <p className="text-lg mb-[2rem] text-slate-300">
                  Instalación, configuración y mantenimiento de sistemas informáticos. Asistencia técnica para solucionar problemas o dar soporte a los usuarios. Protección contra virus y malware. Seguridad para proteger la información y los sistemas informáticos de una empresa. Venta de insumos informáticos con amplia variedad de marcas y productos.
                </p>
              </div>

              <div className="relative h-[20rem] bg-slate-800 rounded-xl overflow-hidden md:h-[27rem]">
                <img
                  src="/services/it.jpg"
                  className="w-full h-full object-cover grayscale"
                  width={520}
                  height={400}
                  alt="it-service"
                />

              </div>
            </div>

            {/* Diseno grafico */}

            <div className="relative min-h-[39rem] border border-slate-100/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/services/design.jpg"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="design"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-slate-900/30 to-amn-darker lg:p-15">
                <h4 className="lg:text-2xl mb-4 text-white">DISEÑO GRÁFICO</h4>
                <p className="md:text-xl mb-[3rem] text-slate-400">
                  Producir una imagen visual única y reconocible que represente a una empresa o marca. Creación de diseños visuales atractivos y fáciles de usar para páginas, sitios web, aplicaciones. Materiales impresos como folletos, flyers, banners, packaging, hojas membretadas y carteles.
                </p>
              </div>
            </div>

          
          </div>
  );
};

export default ServicesBento;