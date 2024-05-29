import { amn_services } from "@/utils/constants";
import { Title } from "../ui/title";

const ServicesBento = () => {
  return (
        <div className="relative mb-6">

          <div className="relative z-1 flex mb-5 border border-slate-100/10 rounded-3xl overflow-hidden">
            <div className="w-full h-full pointer-events-none">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="w-full h-auto rounded-[32px]"
                    src="/content/encryption.webm"
                    />
            </div>

            <div className="hidden absolute inset-0 mx-auto md:flex flex-col items-center justify-center group cursor-pointer w-fit h-full">
                <img
                    src="/images/LockTop.png"
                    alt="Lock top"
                    width={50}
                    height={50}
                    className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
                />
                <img
                    src="/images/LockMain.png"
                    alt="Lock Main"
                    width={70}
                    height={70}
                    className=" z-10"
                />
            </div>

            <div className="absolute z-1 bottom-5 px-10 flex flex-col lg:flex-row items-center justify-between w-full">
                <div className="max-w-[600px]">
                    <h4 className="text-amn-light lg:text-4xl mb-4">SEGURIDAD Y BASE DE DATOS</h4>
                    <p className="lg:text-3xl mb-[3rem] text-slate-300 hidden lg:block">
                        Potenciamos el uso de tus equipos tecnologicos para obtener el mayor rendimiento posible.
                    </p>
                </div>
                
                <ul className="text-lg text-slate-400 hidden lg:flex items-center gap-x-2">
                    {amn_services.map((item, index) => (
                    <li key={index} className="flex items-start py-4" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="#EE7779"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8047 7.52925C18.0651 7.7896 18.0651 8.21171 17.8047 8.47206L10.4714 15.8054C10.2111 16.0657 9.78894 16.0657 9.5286 15.8054L6.19526 12.4721C5.93491 12.2117 5.93491 11.7896 6.19526 11.5292C6.45561 11.2689 6.87772 11.2689 7.13807 11.5292L10 14.3912L16.8619 7.52925C17.1223 7.2689 17.5444 7.2689 17.8047 7.52925Z" fill="#0E0C15"/>
                        </svg>
                        <p className="ml-4">{item}</p>
                    </li>
                    ))}
                </ul>
            </div>
          </div>

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