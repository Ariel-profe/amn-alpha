'use client';

import { forwardRef } from "react";
import Link from "next/link";
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
import { Forward, TransitionLink } from "./transition-link";

export function NavigationMenuBar() {

  const pathname = usePathname();

    return (
      <NavigationMenu>
        <NavigationMenuList className="hidden lg:flex md:space-x-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`relative ${pathname === "/" ? 'text-amn-darker dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Inicio
              {pathname === "/" && <Forward />}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <TransitionLink
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
                    </TransitionLink>
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
            <NavigationMenuTrigger className={`relative ${pathname === "/nosotros" ? 'text-amn-darker dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Nosotros
              {pathname === "/nosotros" && <Forward />}
            </NavigationMenuTrigger>
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
            <NavigationMenuTrigger className={`relative ${pathname === "/servicios" ? 'text-amn-darker dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Servicios
              {pathname === "/servicios" && <Forward />}
            </NavigationMenuTrigger>
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
          <TransitionLink 
            className={
              `${pathname === "/proyectos" ? 'text-amn-darker dark:text-white' : 'text-slate-500 dark:text-slate-400'} 
              font-medium relative p-2.5 rounded-md hover:text-slate-700 dark:hover:text-slate-300`
            } href="/proyectos">
              Proyectos
            </TransitionLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <TransitionLink className={`${pathname === "/contacto" ? 'text-amn-darker dark:text-white' : 'text-slate-500 dark:text-slate-400'} font-medium relative p-2.5 rounded-md hover:text-slate-700 dark:hover:text-slate-300`} href="/contacto">
              Contacto
            </TransitionLink>
          </NavigationMenuItem>
        
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
   
  const ListItem = forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, href = "", ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <TransitionLink
            href={href}
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
          </TransitionLink>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"