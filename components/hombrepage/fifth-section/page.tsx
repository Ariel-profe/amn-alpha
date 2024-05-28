import { Button } from "@/components/ui/button";
import Link from "next/link";

const FifthSection = () => {
    return (
            <div className=" mx-auto p-10 rounded-xl mt-10">
                <div className="text-4xl font-bold mb-5">
                    Comienza a construir tu negocio <span className="text-amn-light">hoy</span>. 
                </div>
                <div className="mb-5">
                ¿Tienes curiosidad por saber cómo podemos ayudar a tu negocio? Póngase en contacto con nuestro equipo para obtener más información sobre nuestra plataforma y cómo podemos ayudarlo a hacer crecer su negocio.   
                </div>
                <Button>
                    <Link href={"/contacto"} >
                        Contacto
                    </Link>
                </Button>
            </div>
        );
}
 
export default FifthSection;