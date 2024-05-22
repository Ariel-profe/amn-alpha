
import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  import { AlignJustify } from "lucide-react";

  import Link from "next/link";


const ActionButtons = () => {
    return ( 
    <div>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <AlignJustify />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                                <Link href="/"> Comencemos </Link>
                                <Link href="/nosotros"> Nosotros </Link>
                                <Link href="/servicios"> Servicios </Link>
                                <Link href="/proyectos"> Proyectos </Link>
                                <Link href="/contacto"> Contacto </Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>


            <div className="hidden md:flex md:space-x-4">
                <Button
                className="text-md"
                variant="ghost"
                >
                    Modo
                </Button>
            </div>
 

    </div> 
    );
}
 
export default ActionButtons;