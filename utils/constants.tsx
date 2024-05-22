import { PiMonitor, PiStorefront, PiLock, PiMegaphone, PiAppStoreLogo, PiHeadsetFill } from 'react-icons/pi';
import { RxTarget } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { IoMdPaperPlane } from "react-icons/io";

export const homepageServices = [
    {
        icon : <div className="bg-white p-4 rounded-full"><PiMonitor size={22} className="text-amn-semidark" /></div>,
        title: "Atención personalizada e integral",
        description: "Para asegurarnos de cumplir tus expectativas y que el camino hacia tus sueños sea el mejor."
      },
      {
        icon : <div className="bg-white p-4 rounded-full"><PiStorefront size={22} className="text-amn-semidark" /></div>,
        title: "Equipo altamente capacitado",
        description: "Profesionales formados con bases sólidas de conocimiento, fundamental para un mejor servicio."
      },
      {
        icon : <div className="bg-white p-4 rounded-full"><PiLock size={22} className="text-amn-semidark" /></div>,
        title: "Relevamientos, evaluaciones y diagnóstico",
        description: "Comprender tus necesidades es nuestra tarea. Las evaluamos y elegimos el caminos correcto."
      },
      {
        icon : <div className="bg-white p-4 rounded-full"><PiMegaphone size={22} className="text-amn-semidark" /></div>,
        title: "Planificación de alternativas",
        description: "Manejamos y creamos contenido que te ayudará a crecer y a darte presencia en el mercado."
      },
      {
        icon : <div className="bg-white p-4 rounded-full"><PiAppStoreLogo size={22} className="text-amn-semidark" /></div>,
        title: "Alianzas estratégicas con otras empresas",
        description: "Establecer un acuerdo formal con otras empresas para compartir recursos, esfuerzo y estrategias."
      },
      {
        icon : <div className="bg-white p-4 rounded-full"><PiHeadsetFill size={22} className="text-amn-semidark" /></div>,
        title: "Clientes de diferentes rubros",
        description: "Tenemos el soporte para ofrecer ayuda frente a cualquier problema o preguntas que puedas tener."
      }
];

export const aboutGoals = [
    {
        icon : <div className="bg-white p-4 rounded-full"><CiStar size={22} className="text-amn-semidark" /></div>,
        title: "MISION",
        description: "Mejorar continuamente nuestros productos y servicios para satisfacer las neceidades de nuestros clientes, permitiendonos prosperar como empresa y proveer la mejor atencion a nuestros clientes."
      },
      {
        icon : <div className="bg-white p-4 rounded-full"><IoMdPaperPlane size={22} className="text-amn-semidark" /></div>,
        title: "VISION",
        description: "Ser reconocidos como la empresa mas importante a nivel tecnologico de Argentina y del mundo. Destacando nuestro potencial humano, profesional y estructural."
      },
      {
        icon : <div className="bg-white p-4 rounded-full"><RxTarget size={22} className="text-amn-semidark" /></div>,
        title: "VALORES",
        description: "Responsabilidad, Honestidad, Desarrollo profesional y personal. Calidad. Resolución de problemas."
      }
];

export const features = [
  {
    name: "Customizable",
    description: "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
    color: "blue"
  },
      {
        name: "Fast ",
        description:
          "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-fast.png",
        alt: "Customizable",
      },
      {
        name: "Integrations",
        description:
          "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-journey.png",
        alt: "Customizable",
      },
      {
        name: "Full Stack",
        description:
          "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-layer.png",
        alt: "Customizable",
      },
      {
        name: "Loyalty",
        description:
          "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
        image: "/images/icon-location.png",
        alt: "Customizable",
      },
      {
        name: "Support",
        image: "/images/icon-support-1.png",
        description: "Get 24/7 support from our team to help you with any issues you have.",
        alt: "Customizable",
      },
    ]