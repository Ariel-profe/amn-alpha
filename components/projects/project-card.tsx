import { Dispatch, SetStateAction } from "react";
import { TiArrowRightThick } from "react-icons/ti";

import { IProject } from '@/interfaces/projects';
import { Button } from '../ui/button';

export const ProjectCard = ({project, setProjectSelected, setOpenModal}:{project:IProject, setProjectSelected: Dispatch<SetStateAction<IProject>>, setOpenModal: Dispatch<SetStateAction<boolean>>;}) => {

  const {category, client, img, title} = project;

  const handleSelect = () => {
    setProjectSelected(project);
    setOpenModal(true);
  };

  return (
    <div className="block relative group transition hover:scale-105 hover:-rotate-1 max-w-sm cursor-pointer" onClick={handleSelect}>
      <div className="block">
          <div className="aspect-w-2 aspect-h-1 rounded-2xl overflow-hidden bg-gray-100">
              <img src={img} loading="lazy" className="object-center object- w-full" />
          </div>

          <div className="p-2 space-y-1">
              <div className="flex items-start justify-between gap-4">
                  <h3 className="flex-1 text-base font-medium text-amn-darker dark:text-slate-300">
                      {title}
                  </h3>

                  <span className="mt-1 shrink-0 text-xs inline-flex items-center gap-1 capitalize">
                      {client}
                      <svg className="w-3 h-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path fill-rule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clip-rule="evenodd"></path>
                      </svg> 
                  </span>
              </div>

              <p className="text-sm text-gray-500 capitalize">
                  {category}
              </p>
          </div>
      </div>
    </div>
  )
}
