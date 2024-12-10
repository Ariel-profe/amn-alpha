import { cn } from "@/lib/utils";

import { BentoGrid } from "../ui/bento-grid";
import { FaCode } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuPalette } from "react-icons/lu";

const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon
  }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-2  dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-3",
          className
        )}
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200 ">
          {icon}
          <div className="lg:text-3xl font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-normal text-neutral-600 text-xs lg:text-xl dark:text-slate-400">
            {description}
          </div>
        </div>
      </div>
    );
  };

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({className}: {className:string}) => (
  <div className={cn("flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent dark:border-white/[0.2] bg-no-repeat bg-center bg-cover", className)}></div>
);
const items = [
  {
    title: "DESARROLLO Y PROGRAMACION",
    description: "Creación y mantenimiento de aplicaciones, sitios y páginas web personalizadas.",
    header: <Skeleton className="bg-[url('/services/development.jpg')]" />,
    className: "md:col-span-2",
    icon: <FaCode className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "MARKETING",
    description: "Creación y promoción de contenido en línea para atraer tráfico a un sitio web o redes sociales.",
    header: <Skeleton className="bg-[url('/services/marketing.webp')]" />,
    className: "md:col-span-1",
    icon: <MdOutlineShoppingCartCheckout className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "SERVICIO IT",
    description: "Relevamiento de equipos y asesoramiento sobre mejoría de hardware. Instalación, configuración y mantenimiento de sistemas informáticos. Asistencia técnica para solucionar problemas o dar soporte a los usuarios.",
    header: <Skeleton className="bg-[url('/services/it.jpg')]"  />,
    className: "md:col-span-1",
    icon: <IoSettingsOutline className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "DISEÑO GRÁFICO",
    description:
      "Producir una imagen visual única y reconocible que represente a una empresa o marca. Diseño de carteles para promocionar productos o servicios en plataformas de redes sociales.",
    header: <Skeleton className="bg-[url('/services/design.webp')]"  />,
    className: "md:col-span-2",
    icon: <LuPalette className="h-6 w-6 text-neutral-500" />,
  },
];
