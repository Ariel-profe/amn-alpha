"use client";

import {IconType} from 'react-icons'
import { FaReact, FaFigma  } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./animated-list";

interface Item {
  name: string;
  description: string;
  icon: IconType;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "React Js",
    description: "Desarrollo Web",
    time: "Frontend",

    icon: FaReact,
    color: "#44e0eb",
  },
  {
    name: "Figma",
    description: "Diseño grafico",
    time: "UX/UI",
    icon: FaFigma,
    color: "#FFB800",
  },
  {
    name: "Next JS",
    description: "Desarrollo web",
    time: "Fullstack",
    icon: TbBrandNextjs,
    color: "#FF3D71",
  },
  {
    name: "PostgreSQL",
    description: "Backend",
    time: "Base de datos",
    icon: SiPostgresql,
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon: Icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-2xl p-2",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-6 w-6 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg text-black">{<Icon />}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[400px] lg:h-[500px] w-full flex-col overflow-hidden my-10 lg:mt-0",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
