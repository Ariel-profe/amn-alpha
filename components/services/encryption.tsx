"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { slideInFromTop } from "@/utils/motion";

const Encryption = () => {
  return (
    <div id="servicio_it" className="flex flex-row relative items-center justify-center min-h-screen w-full h-full my-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-4xl md:text-6xl font-normal text-center text-gray-200 mt-10"
        >
          Seguridad
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amn-semidark to-amn-semilight">
            {" "}
            &{" "}
          </span>
          Rendimiento
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/images/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/images/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] rounded-full opacity-[0.9]">
          <h1 className="text-lg text-slate-400">Encriptar</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[40px] px-[5px]">
        <div className="cursive lg:text-xl font-medium text-slate-500 text-center">
            Instalación y configuración de sistemas informáticos, así como su mantenimiento y actualización. <br />
            Servicios de asistencia técnica remota o presencial para solucionar problemas técnicos o dar soporte a los usuarios. <br />
            Servicios de protección contra virus y malware. Además, soluciones de seguridad para proteger la información y los sistemas informáticos de una empresa. <br />
            Consultoría en tecnologías de la información, asesoramiento en la toma de decisiones tecnológicas y gestión de proyectos TI.

        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto rounded-[32px]"
          src="/content/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
