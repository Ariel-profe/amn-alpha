import { IProject } from "@/interfaces/projects";

export const projects:IProject[] = [
    {
      id: 1,
      title: 'Sitio web de moda',
      category: 'desarrollo web',
      client: 'ariel elias',
      img: "/company/consultoria.jpg",
      desc: `Web basada en Diseño de Alta Costura que permite a los usuarios buscar la mejor indumentaria para fiestas, cumpleaños y eventos, participación de desfiles y cursos que se realizan para aprender diferentes técnicas.`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "mongodb",
          color: "green-text-gradient"
        },
        {
          name: "styled components",
          color: "pink-text-gradient"
        }
        ],
      icon: "/works/01-monica/iso.svg", 
    },
    {
      id: 2,
      title: 'Creación y planificación de contenido',
      category: 'gestión de contenido',
      client: 'ariel elias',
      img: "/company/consultoria.jpg",
      desc: `Creación y planificación de contenido en Instagram para poder compartir e interactuar con los usuarios temáticas importantes sobre la psicología.`,
      icon: "/works/01-monica/iso.svg", 
    },
    {
      id: 3,
      title: 'Rediseño de logotipo',
      category: 'gestión de contenido',
      client: 'ariel elias',
      img: "/company/consultoria.jpg",
      desc: `Rediseño de logotipo donde se llevó a cabo una investigación e identificación del propósito sobre cambios a realizar. Se procesa la idea para que sea coherente y se mantenga la simplicidad de lo que se quiere comunicar.`,
      icon: "/works/01-monica/iso.svg", 
    },
    {
      id: 4,
      title: 'Diseño de papelería corporativa',
      category: 'gestión de contenido',
      client: 'ariel elias',
      img: "/company/consultoria.jpg",
      desc: `Diseño de papelería corporativa, hojas membretadas, para darle profesionalismo a un documento a presentar (en este caso a pacientes). Se incluyeron datos personales de contacto, logotipo y otra información para ir completando.`,
      icon: "/works/01-monica/iso.svg", 
    },
    {
      id: 5,
      title: 'Sitio web escolar',
      category: 'desarrollo web',
      client: 'ariel elias',
      img: "/company/consultoria.jpg",
      desc: `Sitio web institucional educativo donde hay a disposición información sobre todas las actividades que se realizan para que los directivos, maestros, padres y alumnos tengan acceso a las novedades.`,
      tags: [
        {
          name: "react",
          color: "#ff0"
        },
        {
          name: "mongodb",
          color: "#f00"
        },
        {
          name: "styled components",
          color: "#0ff"
        }
        ],
        icon: "/works/01-monica/iso.svg", 
    },
    {
      id: 6,
      title: 'Manejo de servidores',
      category: 'servicio it',
      client: 'ariel elias',
      img: "/company/consultoria.jpg",
      desc: `Servicio de programación de DNS (sistema de nombres de dominio) y registros MX exigidos por los servidores de Google que son necesarios para la entrega de correos a la dirección establecida.`,
      icon: "/works/01-monica/iso.svg", 
    },
  ];