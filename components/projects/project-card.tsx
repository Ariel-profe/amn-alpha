import { Dispatch, SetStateAction } from "react";

import { IProject } from '@/interfaces/projects';

export const ProjectCard = ({project, setProjectSelected, setOpenModal}:{project:IProject, setProjectSelected: Dispatch<SetStateAction<IProject>>, setOpenModal: Dispatch<SetStateAction<boolean>>;}) => {

  const {category, client, img, title, icon} = project;

  const handleSelect = () => {
    setProjectSelected(project);
    setOpenModal(true);
  };

  return (
    <div className="block relative group transition hover:scale-105 hover:-rotate-1 max-w-sm cursor-pointer border rounded-2xl h-fit" onClick={handleSelect}>
      <div className="block">
        <div className="aspect-w-2 aspect-h-1 rounded-t-2xl overflow-hidden bg-gray-100 max-h-[250px]">
          <img src={img} loading="lazy" className="object-center object-cover w-full h-full" />
        </div>

        <div className="p-2 space-y-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="flex-1 text-base font-medium text-amn-darker dark:text-slate-300">
              {title}
            </h3>

            <span className="mt-1 shrink-0 text-xs items-center gap-1 capitalize flex flex-col">
              <img src={icon} alt="" className="w-4 h-4" />
              {client}
            </span>
          </div>

          <p className="text-sm text-gray-500 capitalize">
            {category}
          </p>
        </div>
      </div>
    </div>
  )
};
