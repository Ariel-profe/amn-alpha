import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";

const Features = () => {
    return ( 
      <div className="container md:flex-row flex-col items-center flex justify-between pb-10">
        <div className="justify-between md:w-2/3">
          <Title title={"Proporcionamos servicios para dar soluciones personalizadas."} className="max-w-[600px]" />

          <div className="text-2xl mb-8 dark:text-slate-300">
            Nos actualizamos constantemente para vos y tu empresa.
          </div>
          <Button size={"lg"}>
            <Link href={"/servicios"}>Servicios</Link>
          </Button>
        </div>

        <div className="mt-10 md:mt-0">
          <img src="/amn-iso.png" alt="amn-logo" className="md:w-[500px] animate-spin-slow" />
        </div>      
      </div>

  );
}
 
export default Features;