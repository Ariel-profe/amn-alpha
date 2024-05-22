import {
    RxDiscordLogo,
    RxGithubLogo
  } from "react-icons/rx";
  
  import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
  
  export const Footer = () => {
  
    const year = new Date().getFullYear();
  
    return (
      <div className="w-full h-full text-slate-800 shadow-lg py-10 ">
          <div className="w-full flex flex-col items-center justify-center m-auto">
              <div className="w-full h-full flex flex-row items-start justify-around flex-wrap">
                  
                  <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                      <div className="font-bold text-[16px]">Redes sociales</div>
                      <p className="flex flex-row items-center my-[15px] cursor-pointer">
                          <FaYoutube />
                          <span className="text-[15px] ml-[6px]">Instagram</span>    
                      </p>
                      <p className="flex flex-row items-center my-[15px] cursor-pointer">
                          <RxGithubLogo />
                          <span className="text-[15px] ml-[6px]">Twitter</span>    
                      </p>
                      <p className="flex flex-row items-center my-[15px] cursor-pointer">
                          <RxDiscordLogo />
                          <span className="text-[15px] ml-[6px]">Linkedin</span>    
                      </p>
                  </div>

                  <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Ayuda</div>
                    <Link href={"/contacto"} className="flex flex-row items-center my-[15px]">
                        ¿Quiénes somos?    
                    </Link>
                    <p className="flex flex-row items-center my-[15px]">
                        <Link href={"/contacto#formulario"} className="text-[15px] ml-[6px]">¿Cómo me contacto?</Link>    
                    </p>
                    <p className="flex flex-row items-center my-[15px]">
                        <Link href={"/contacto#faq"} className="text-[15px] ml-[6px]">FAQ</Link>    
                    </p>
                  </div>
  
                  <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                      <div className="font-bold text-[16px]">Comunidad</div>
                      <p className="flex flex-row items-center my-[15px]">
                          Creamos posibilidades para conectar al mundo. <br />
                          &copy; AMN Consultora Informatica {year}. <br /> Todos los derechos reservados
                      </p>
                  </div>
              </div>
          </div>
      </div>
    )
  }