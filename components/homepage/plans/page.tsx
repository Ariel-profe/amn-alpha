import { Button } from "@/components/ui/button";
import { Subtitle } from "@/components/ui/subtitle";

const features = [
    {
        name : "Básico",
        description : "Comienza con un simple y sencillo proyecto. Creamos tu sueño lo antes posible."
    },
    {
        name : "Estándar",
        description : "Mejora tu negocio, usaremos poderosas herramientas para desarrollarlo y pasar al siguiente nivel."
    },
    {
        name : "Premium",
        description : "Para empresas que necesitan más funcionalidades. Obtiene acceso a los mejores recursos y contacto constante con nuestro equipo."
    }
];

export const Plans = () => {
    return ( 
    <div className="flex flex-col justify-center items-center mt-10">
        <Subtitle subtitle="Planes de negocio" />
        <div className="text-2xl text-amn-darker dark:text-slate-300 text-center md:text-4xl font-bold md:py-10">
            Para que cumplas tus sueños con nuestros abordajes
        </div>

        <div className="flex flex-col lg:flex-row gap-3 mt-10">
            {features.map((feature, index) => (
                    <div  
                    key={index}
                    className="
                    grid
                    justify-center
                    items-center
                    gap-4
                    border
                    rounded-xl
                    p-4 
                    w-full
                    bg-slate-500
                    dark:bg-slate-800
                    ">
                        <div className="text-xl lg:text-2xl text-black dark:text-slate-300 pb-4">{feature.name}</div>
                        <div className="text-lg lg:text-xl dark:text-slate-400">{feature.description}</div>

                        <Button> Explorar </Button>
                    </div>
                ))}
        </div>
    </div> );
};