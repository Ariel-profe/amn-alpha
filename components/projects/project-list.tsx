import { Dispatch, FC, SetStateAction } from 'react';
import { IProject } from '@/interfaces/projects';
import { ProjectCard } from './project-card';

interface Props {
  projects: IProject[];
  setProjectSelected: Dispatch<SetStateAction<IProject>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const ProjectList:FC<Props> = ({projects, setProjectSelected, setOpenModal}) => {
  return (
    <div className='relative grid md:grid-cols-2 xl:grid-cols-3 gap-3 w-full lg:min-h-[80vh] lg:w-4/5'>
        {projects.map( (project) => (
          <ProjectCard key={project.id} project={project} setProjectSelected={setProjectSelected} setOpenModal={setOpenModal} />
        ))}
    </div>
  )
}
