import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ThemeToggle } from "../theme-toggle";

const ActionButtons = () => {
    return ( 
    <div>
        <div className="flex md:hidden">
            <Sheet>
                <SheetTrigger>
                    <RiMenu3Fill size={30} />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <ThemeToggle />
                        <SheetDescription>
                            <div className="flex flex-col space-y-4 items-start w-full text-lg text-amn-darker dark:text-slate-300 mt-10">
                                <SheetClose asChild> 
                                <Link href="/"> Inicio </Link>
                                </SheetClose>
                                <SheetClose asChild> 
                                <Link href="/nosotros"> Nosotros </Link>
                                </SheetClose>
                                <SheetClose asChild> 
                                <Link href="/servicios"> Servicios </Link>
                                </SheetClose>
                                <SheetClose asChild> 
                                <Link href="/proyectos"> Proyectos </Link>
                                </SheetClose>
                                <SheetClose asChild> 
                                <Link  href="/contacto"> Contacto </Link>
                                </SheetClose>
                               
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>

        <div className="hidden md:flex">
            <ThemeToggle />
        </div>
    </div> 
    );
}
 
export default ActionButtons;