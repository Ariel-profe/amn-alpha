import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ThemeToggle } from "../theme-toggle";
import LanguageChanger from "@/components/language-changer";

const ActionButtons = () => {
    return ( 
    <div>
        <div className="flex lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <RiMenu3Fill size={30} />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <div className="flex items-center gap-x-1 mb-10">
                            <ThemeToggle />
                            <LanguageChanger />
                        </div>
                        <SheetDescription className="flex flex-col space-y-4 items-start w-full text-lg text-amn-darker dark:text-slate-300 mt-10">
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
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>

        <div className="hidden lg:flex lg:items-center gap-x-2">
            <ThemeToggle />
            <LanguageChanger />
        </div>
    </div> 
    );
}
 
export default ActionButtons;