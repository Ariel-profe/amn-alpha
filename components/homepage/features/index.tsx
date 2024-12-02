import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AnimatedListDemo } from "./notification";

const Features = () => {

    return ( 
    <div className="flex flex-col lg:flex-row justify-center items-center w-full my-10">
      <div className="flex flex-col items-center gap-4 mb-8 dark:text-slate-300 w-full">
        <h3 className="text-xl lg:text-5xl text-center max-w-[600px]">
          Tenemos las herramientas más actuales del mercado para que tu negocio crezca sin límites
        </h3>
        <Button size={"lg"}>
          <Link href={"/tecnologias"}>Tecnologías</Link>
        </Button>
      </div>
      <AnimatedListDemo />
    </div>
  );
}
 
export default Features;