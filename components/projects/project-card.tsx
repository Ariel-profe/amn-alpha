import { Dispatch, SetStateAction } from "react";

import { IProject } from '@/interfaces/projects';

export const ProjectCard = ({project, setProjectSelected, setOpenModal}:{project:IProject, setProjectSelected: Dispatch<SetStateAction<IProject>>, setOpenModal: Dispatch<SetStateAction<boolean>>;}) => {

  const {category, client, image, title, icon, desc} = project;

  const handleSelect = () => {
    setProjectSelected(project);
    setOpenModal(true);
  };

  return (
    <div className="flex items-center justify-center cursor-pointer transition w-full" onClick={handleSelect}>
      <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 rounded-xl border max-w-xl">
        <div className="flex justify-between px-2 py-3">
          <div className="flex items-center">
            <img className="h-11 w-11 rounded-full" src="/iso1.svg"/>
            <div className="ml-1.5 text-sm leading-tight">
              <span className="text-slate-900 dark:text-white font-bold block ">{title}</span>
              <span className="text-gray-500 dark:text-gray-400 font-normal block capitalize">@{category}</span>
            </div>
          </div>
          <div className="group relative">
            <img src={icon} alt={client} className='h-6 w-6' />
            <span className="absolute opacity-0 group-hover:opacity-100 transition text-xs capitalize group-hover:-translate-x-10 duration-500">{client}</span>
          </div>
        </div>
        <p className="text-slate-900 dark:text-white block text-sm lg:text-md leading-snug mt-3 px-2">{desc.substring(0, 80)}...</p>
        <img className="mt-2 rounded-b-2xl border border-gray-100 dark:border-gray-700 w-full" src={image}/>
      </div>
    </div>
  )
};
