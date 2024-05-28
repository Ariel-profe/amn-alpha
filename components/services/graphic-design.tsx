'use client'

import { motion } from "framer-motion";
import { ThreeDCardExample } from "@/components/about/3d-card-snippet";
import { EvervaultCardSnippet } from "@/components/about/evervault-card-snippet";

const GraphicDesign = () => {
    return ( 
    <div className="lg:mt-32 flex flex-col xl:flex-row items-center mx-auto relative w-full " id="diseno_grafico">
      <div className="flex flex-col w-full lg:w-1/3">
        <h2 className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-amn-light bg-opacity-50">
          Diseño Gráfico <br /> UX/UI
        </h2>

        <p className="mt-4 text-lg font-normal text-slate-500 max-w-lg text-center mx-auto">
        Producir una imagen visual única y reconocible que represente a una empresa o marca. Creación de diseños visuales atractivos y fáciles de usar para páginas, sitios web, aplicaciones. Materiales impresos como folletos, flyers, banners, packaging, hojas membretadas y carteles.
        </p>
      </div>

      <div className="items-center lg:flex justify-center lg:w-2/3 md:space-x-4">
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
           <ThreeDCardExample />
            </motion.div>

            <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
           <EvervaultCardSnippet />
            </motion.div>
      </div> 
    </div>  );
}
 
export default GraphicDesign;