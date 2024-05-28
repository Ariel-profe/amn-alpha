
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Company = () => {
    return ( 
        <div id="desarrollo_y_programacion" className="flex flex-col md:flex-row md:justify-evenly my-20 relative">
            <div className="flex-col xl:flex-row gap-6 flex">
                <div className="xl:w-1/3 w-full">
                    <Image
                    src="/services/developmentTools.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                    className="bg-amn-dark rounded-xl"
                    />
                </div>

                <div className="flex-col border p-4 rounded-xl xl:w-2/3">
                <h2 className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-amn-light bg-opacity-50">
                Desarrollo web <br />
                </h2>

                <div className="flex-col items-center justify-center space-y-6">

                    <div className="flex-col mt-6">
                        <div className="flex items-center gap-5" >
                            <IoIosCheckmarkCircleOutline size={40}/>
                            <h4 className="text-lg lg:text-xl">
                            Desarrollo y mantenimiento de aplicaciones, sitios y páginas web personalizadas utilizando las mejores tecnologías y otras afines.
                            </h4>
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="flex items-center gap-5" >
                            <IoIosCheckmarkCircleOutline size={40}/>
                            <h4 className="text-lg lg:text-xl">
                            Equipos multifuncionales, incluidos diseñadores, analistas comerciales, project manager, gerentes de productos.

                            </h4>
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="flex items-center gap-5" >
                            <IoIosCheckmarkCircleOutline size={40}/>
                            <h4 className="text-lg lg:text-xl">
                            Nos basamos en las mejores prácticas de metodologías ágiles y el proceso de desarrollo unificado.
                            </h4>
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="flex items-center gap-5" >
                            <IoIosCheckmarkCircleOutline size={40}/>
                            <h4 className="text-lg lg:text-xl">
                            Creación de aplicaciones a medida para diferentes plataformas, como móvil, escritorio o web.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default Company;