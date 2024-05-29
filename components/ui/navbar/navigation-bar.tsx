
'use client';

import { forwardRef } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
  } from "@/components/ui/navigation-menu"

import Logo from "./logo"
import { about, services } from "@/utils/navigation-links"

export function NavigationMenuBar() {

  const pathname = usePathname();

    return (
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex md:space-x-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`${pathname === "/" ? 'text-amn-darker dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>Inicio</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Logo  />
                      <div className="mb-2 mt-4 text-lg font-medium">
                       AMN <br /> Consultora Informática
                      </div>
                      <p className="text-xs leading-tight text-muted-foreground">
                      Impulsamos tu éxito digital
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/#marcas" title="Marcas">
                  Quienes confían en nosotros.
                </ListItem>
                <ListItem href="/#servicios" title="Servicios">
                  Lo que ofrecemos.
                </ListItem>
                <ListItem title="Identidad">
                  Nuestras bases.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`${pathname === "/nosotros" ? 'text-amn-darker dark:text-white' : 'text-slate-500 dark:text-slate-400'}`} >Nosotros</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {about.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={`/nosotros#${component.href}`}
                
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`${pathname === "/servicios" ? 'text-amn-darker dark:text-white' : 'text-slate-500 dark:text-slate-400'}`} >Servicios</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {services.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={`/servicios#${component.href}`}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink className={`${pathname === "/proyectos" ? 'text-amn-darker dark:text-white' : 'text-slate-500 dark:text-slate-400'} font-medium`} href="/proyectos">
                Proyectos
              </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
              <NavigationMenuLink className={`${pathname === "/contacto" ? 'text-amn-darker dark:text-white' : 'text-slate-500 dark:text-slate-400'} font-medium`} href="/contacto">
                Contacto
              </NavigationMenuLink>
          </NavigationMenuItem>
        
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
   
  const ListItem = forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"