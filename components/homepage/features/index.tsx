import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Subtitle } from "@/components/ui/subtitle";
import { AnimatedListDemo } from "./notification";

const Features = async() => {

    return ( 
      <div className="flex flex-col items-center justify-center gap-y-5 pb-10">
        {/* <Subtitle subtitle="Proporcionamos tecnologías para dar soluciones eficientes y seguras" /> */}
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col items-center gap-4 mb-8 dark:text-slate-300 w-full">
            <h3 className="text-xl lg:text-5xl text-center max-w-[600px]">
              Nuestras herramientas son las más actuales del mercado
            </h3>
            <Button size={"lg"}>
              <Link href={"/tecnologias"}>Tecnologías</Link>
            </Button>
          </div>
          <AnimatedListDemo />
        </div>
      </div>
  );
}
 
export default Features;