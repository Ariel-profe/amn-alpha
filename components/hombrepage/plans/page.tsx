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

const Plans = () => {
    return ( 
    <div className="flex flex-col justify-center items-center">
        <Subtitle subtitle="Planes de negocio." />
        <div className="text-2xl text-slate-800 text-center md:text-4xl font-bold md:py-10">
            Para que cumplas tus sueños con nuestros abordajes.
        </div>

        <div className="md:flex">
            {features.map((feature, index) => (
                <div key={index} className="p-4">
                    <div  
                    className="
                    grid
                    justify-center
                    items-center
                    gap-4
                    border
                    rounded-xl
                    p-4 
                    w-96
                    h-96
                    ">
                        <div className="text-2xl text-black pb-4">{feature.name}</div>
                        <div className="text-xl">{feature.description}</div>

                        <Button> Explorar </Button>
                    </div>
                </div>
                ))}
        </div>
    </div> );
};
 
export default Plans;