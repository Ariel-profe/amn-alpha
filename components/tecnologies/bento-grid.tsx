import { LuCalendarDays, LuTextCursorInput  } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";
import { Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import Marquee from "../ui/marquee";
import { AnimatedBeamDemo } from "./animated-beam";
import { BentoCard, BentoGrid } from "../ui/bento-grid";


const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin es una criptomoneda inventada en 2008 por una persona o grupo de personas desconocidas que usaban el nombre de Satoshi Nakamoto.",
  },
  {
    name: "finanzas.xlsx",
    body: "Una hoja de cálculo u hoja de trabajo es un archivo formado por filas y columnas que ayudan a ordenar datos, organizarlos fácilmente y calcular datos numéricos.",
  },
  {
    name: "logos.svg",
    body: "Formatos de vectores graficos que le den la personalidad e identidad a tu negocio para que tus clientes te reconozcan inmediatamente.",
  },
  {
    name: "contraseñas.gpg",
    body: "Contraseñas que uses en tus redes, sistemas bancarios, etc. Encriptamos tu información para tu mayor seguridad.",
  },
  {
    name: "textos.txt",
    body: "Hojas de textos importantes que hayas guardados en tus dispositivos de confianza que contengan listas de palabras claves en donde almacenes información que necesitas.",
  },
];

const features = [
  {
    Icon: FaRegFileLines,
    name: "Guarda tus archivos",
    description: "Guardamos tus archivos con sistema de backup",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: LuTextCursorInput,
    name: "Búsqueda de texto",
    description: "Busque todos sus archivos en un solo lugar.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
        <CommandInput placeholder="Escribe un comando o busca..." />
        <CommandList>
          <CommandEmpty>No hay resultados.</CommandEmpty>
          <CommandGroup heading="Sugerencias">
            <CommandItem>capturas.png</CommandItem>
            <CommandItem>bitcoin.pdf</CommandItem>
            <CommandItem>finanzas.xlsx</CommandItem>
            <CommandItem>logo.svg</CommandItem>
            <CommandItem>contraseñas.gpg</CommandItem>
            <CommandItem>textos.txt</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integraciones",
    description: "Usamos más de 100 integraciones y contando.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamDemo />
    ),
  },
  {
    Icon: LuCalendarDays,
    name: "Calendario",
    description: "Usa el calendario para filtrar por fechas tus reservas.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="overflow-hidden">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
