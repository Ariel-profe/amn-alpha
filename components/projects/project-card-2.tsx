"use client";

import { Dispatch, SetStateAction } from "react";

import { IProject } from "@/interfaces/projects";
import { cn } from "@/lib/utils";

export function CardDemo(
  {project, setProjectSelected, setOpenModal}:
  { project:IProject, 
    setProjectSelected: Dispatch<SetStateAction<IProject>>, 
    setOpenModal: Dispatch<SetStateAction<boolean>>
  }) {

  const {category, client, image, title, icon, desc} = project;

  const handleSelect = () => {
    setProjectSelected(project);
    setOpenModal(true);
  };

  return (
    <div className="w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl mx-auto flex flex-col justify-between",
        )}
        style={{backgroundImage:`url(${image})`}}
        onClick={handleSelect}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10 p-2 bg-black/20 backdrop-blur-lg group-hover/card:bg-transparent">
          <img
            alt="Avatar"
            src={icon}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10 capitalize">
              {client}
            </p>
            {/* <p className="text-sm text-gray-400">2 min read</p> */}
          </div>
        </div>
        <div className="text content bg-slate-100/10 backdrop-blur-lg p-2 group-hover/card:bg-transparent group-hover/card:backdrop-blur-0">
          <h1 className="font-bold text-xl md:text-2xl text-white relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-2 capitalize">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}
