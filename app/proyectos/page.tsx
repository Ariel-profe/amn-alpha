"use client";

import { useState } from "react";

import { IProject } from "@/interfaces/projects";
import { projects } from "@/utils/projects";
import { Categories } from "@/components/projects/categories";
import { Title } from "@/components/ui/title";
import { ProjectList } from "@/components/projects/project-list";

import { AnimatePresence, motion } from "framer-motion";
import { SlClose } from "react-icons/sl";
import { RiCloseCircleLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

let allCategories:string[] = ['todas', ...new Set(projects.map( i => i.category))];

const modalVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const ProjectsPage = () => {

  const [categories, setCategories] = useState(allCategories);
  const [isSelected, setIsSelected] = useState('todas');
  const [menuItems, setMenuItems] = useState<IProject[]>(projects);
  const [projectSelected, setProjectSelected] = useState({} as IProject);
  const [openModal, setOpenModal] = useState(false);


  const filterItems = (category: string) => {
    if(category === 'todas'){
      setMenuItems(projects);
      setIsSelected('todas');
      return;
    };

    const newCategory = projects.filter( c => c.category === category);
    setMenuItems(newCategory);
    setIsSelected(category);
  };  

  return (
    <div className="px-3 lg:px-10 mt-10 lg:mt-20 relative">
      <Title title={"Nuestros proyectos"} className="text-center w-full" />
      <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
        <Categories categories={categories} filterItems={filterItems} isSelected={isSelected} />
        <ProjectList projects={menuItems} setProjectSelected={setProjectSelected} setOpenModal={setOpenModal} />
      </div>

      {/* Project Modal */}
      
      <AnimatePresence>

      {openModal && (
        <motion.div 
          initial={{
            opacity: 0,
            y: 0, scale: 0.5
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 50
          }}}
          exit={{
            opacity: 0,
            transition: { duration: 0.5 }
          }}
          variants={modalVariants}
          className="fixed inset-0 bg-black/95 z-50 flex justify-center items-center p-6 lg:p-10"
        >
         <div className="relative bg-white flex flex-col items-center justify-center dark:bg-amn-darker w-full h-full rounded-xl p-6 lg:p-10">
             <button 
                className="absolute top-2 right-2 hover:opacity-75 transition-all text-3xl text-rose-600" 
                onClick={() => setOpenModal(false)}>
                  <RiCloseCircleLine />
             </button>

             <div className="w-full flex flex-col lg:flex-row gap-5">

              {/* Image container */}
              <div className="w-full lg:w-3/4">
                <img src={projectSelected.img} alt={`imagen-${projectSelected.title}`} className="w-full object-cover rounded-xl" />
              </div>

              {/* Data container */}
              <div className="w-full flex flex-col justify-between gap-y-5 lg:w-1/4">
                <h3 className="text-xl lg:text-3xl">{projectSelected.title}</h3>
                <p className="dark:text-slate-400 lg:text-xl">{projectSelected.desc}</p>

                <Button variant="outline">Ver mas</Button>

                <div className="flex flex-col justify-center gap-3">
                {projectSelected.tags?.map(tag => (
                  <p key={tag.name} className={`${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
                </div>
              </div>
             </div>

         </div>
     </motion.div>
      )}
      </AnimatePresence>

      {/* <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{
              opacity: 0,
              y: 0, scale: 0.5
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 50
            }}}
            exit={{
              opacity: 0,
              transition: { duration: 0.5 }
            }}
            variants={modalVariants}
            className='flex flex-col h-full absolute inset-0 z-40 bg-slate-50 dark:bg-slate-900 p-10'
          >
            <button className='flex self-end text-red-600 text-xl md:hover:opacity-70 transition' onClick={()=>{setOpenModal(false)}} ><SlClose size={30} /></button>
            <h1 className='text-center font-bold xl:text-3xl text-primary-dark capitalize'>{projectSelected.title}</h1>
            <h3 className='capitalize text-center font-semibold xl:text-2xl text-slate-500'>{projectSelected.category}</h3>
            <p className='text-slate-400 max-w-4xl text-center mx-auto my-3'>{projectSelected.desc}</p>
            <div className='mx-auto'>
              <img src={projectSelected.img} alt={''} width={1000} height={600} />
            </div>
            <div className='flex items-center justify-center gap-x-3 pt-3'>
            {
              projectSelected.tags?.map(tag => (
                <p key={tag.name} className={`${tag.color}`}>
                #{tag.name}
                </p>
              ))
            }
          </div>
        </motion.div>
        )}        
      </AnimatePresence> */}
    </div>
  )
}

export default ProjectsPage;