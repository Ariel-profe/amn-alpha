import { IProject } from "@/interfaces/projects";

export const projects: IProject[] = [
    {
      id: 1,
      title: 'Sitio web de moda',
      category: 'desarrollo web',
      client: 'mónica ojeda',
      image: "/works/01-monica/portada.jpg",
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
      link: "https://monicaojeda.com.ar/",
      modal_img: "/works/02-onic/modalImg.png"
    },
    {
      id: 2,
      title: 'E-Commerce App',
      category: 'desarrollo web',
      client: 'onic distribuidora',
      image: "/works/02-onic/portada.png",
      desc: `Aplicación de comercio electrónico que ofrece los mejores productos tecnológicos con una gran variedad. Busca, elige, compra y disfruta.`,
      icon: "/works/02-onic/iso.svg", 
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient"
        },
        {
          name: "typescript",
          color: "green-text-gradient"
        },
        {
          name: "docker",
          color: "pink-text-gradient"
        }
      ],
      modal_img: "/works/02-onic/modalImg.png"
    },
    {
      id: 3,
      title: 'Sitio web educativo',
      category: 'desarrollo web',
      client: 'instituto san pablo',
      image: "/works/03-instituto-san-pablo/portada.jpg",
      desc: `Sitio web institucional educativo donde hay a disposición información sobre todas las actividades que se realizan para que los directivos, maestros, padres y alumnos tengan acceso a las novedades.`,
      icon: "/works/03-instituto-san-pablo/iso.svg",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "tailwind",
          color: "green-text-gradient"
        },
        {
          name: "figma",
          color: "pink-text-gradient"
        }
      ],
      link: "https://isanpablo.vercel.app/"
    },
    {
      id: 4,
      title: 'Landing page',
      category: 'desarrollo web',
      client: 'solange rodriguez',
      image: "/works/04-solange/portada.png",
      desc: `Landing Page personal para mostrar contenido sobre el trabajo, objetivos y pasión por la profesión. Los usuarios pueden realizar sus consultas y tener a disposición los datos de atención.`,
      icon: "/works/04-solange/iso.svg", 
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "tailwind",
          color: "green-text-gradient"
        },
        {
          name: "figma",
          color: "pink-text-gradient"
        }
      ],
      link: "https://solange-rodriguez-web.vercel.app/"
    },
    {
      id: 5,
      title: 'Creación y planificación',
      category: 'gestion de contenido',
      client: 'solange rodriguez',
      image: "/works/05-solange/portada.png",
      desc: `Creación y planificación de contenido en Instagram para poder compartir e interactuar con los usuarios temáticas importantes sobre la psicología.`,
      icon: "/works/05-solange/iso.svg", 
      modal_img: "/works/05-solange/modalImg.png"
    },
    {
      id: 6,
      title: 'Rediseño de logotipo',
      category: 'gestion de contenido',
      client: 'solange rodriguez',
      image: "/works/06-solange/portada.png",
      desc: `Rediseño de logotipo donde se llevó a cabo una investigación e identificación del propósito sobre cambios a realizar. Se procesa la idea para que sea coherente y se mantenga la simplicidad de lo que se quiere comunicar.`,
      icon: "/works/06-solange/iso.svg",
      modal_img: "/works/06-solange/modalImg.png"
    },
    {
      id: 7,
      title: 'Diseño de papelería corporativa',
      category: 'marketing',
      client: 'solange rodriguez',
      image: "/works/07-solange/portada.png",
      desc: `Diseño de papelería corporativa, hojas membretadas, para darle profesionalismo a un documento a presentar (en este caso a pacientes). Se incluyeron datos personales de contacto, logotipo y otra información para ir completando.`,
      icon: "/works/07-solange/iso.svg", 
      modal_img: "/works/07-solange/modalImg.png"
    },
    {
      id: 8,
      title: 'Creación de logotipo',
      category: 'gestion de contenido',
      client: 'mónica ojeda',
      image: "/works/08-monica/portada.png",
      desc: `Logotipo compuesto por diferentes tipografías para identificar la marca de su profesión. Presenta combinación de colores y se le da movimiento a través de la letra inicial, tomando como punto de partida la caída de las telas que fluyen.`,
      icon: "/works/08-monica/iso.svg",
      modal_img: "/works/08-monica/modalImg.png"
    },
    {
      id: 9,
      title: 'Diseño de tarjetas personales',
      category: 'marketing',
      client: 'mónica ojeda',
      image: "/works/09-monica/portada.png",
      desc: `Diseño de tarjetas personales donde se muestra la información necesaria para dar a conocer el trabajo que se realiza con la indumentaria y así poder generar conexión con los clientes.`,
      icon: "/works/01-monica/iso.svg", 
      modal_img: "/works/09-monica/modalImg.png"
    },
    {
      id: 10,
      title: 'Gestión de redes sociales',
      category: 'gestion de contenido',
      client: 'mónica ojeda',
      image: "/works/10-monica/portada.png",
      desc: `Gestión y creación de contenido en redes sociales, Facebook e Instagram, para mostrar a los usuarios la indumentaria realizada y los diferentes diseños que se ofrecen para fiestas, eventos, cumpleaños, casamientos, entre otros.`,
      icon: "/works/10-monica/iso.svg",
      modal_img: "/works/10-monica/modalImg.png"
    },
    {
      id: 11,
      title: 'Creación de marca',
      category: 'gestion de contenido',
      client: 'onic distribuidora',
      image: "/works/11-onic/portada.png",
      desc: `Creación de marca, contemplando un análisis sobre su identidad, definición del nombre, combinaciones tipográficas y paleta de colores.`,
      icon: "/works/11-onic/iso.svg", 
      modal_img: "/works/11-onic/modalImg.png"
    },
    {
      id: 12,
      title: 'Gestión de redes sociales',
      category: 'gestion de contenido',
      client: 'sara massutti',
      image: "/works/12-sara/portada.png",
      desc: `Gestión y creación de contenido de redes sociales, Facebook e Instagram, para compartir con los usuarios su trabajo como Dra. Especialista en medicina estética.`,
      icon: "/works/12-sara/iso.svg",
      modal_img: "/works/12-sara/modalImg.png"
    },
    {
      id: 13,
      title: 'Asesoramiento y planificación',
      category: 'gestion de contenido',
      client: 'emilia diez',
      image: "/works/13-emilia/portada.png",
      desc: `Asesoramiento y planificación de contenido en Instagram para poder tener un portfolio de su trabajo como fotógrafa. Incluye definición de la temática, detección de objetivos claves, guía con tips y recomendaciones.`,
      icon: "/works/13-emilia/iso.svg",
      modal_img: "/works/13-emilia/modalImg.png"
    },
    {
      id: 14,
      title: 'Diseño de perfiles y estructura',
      category: 'gestion de contenido',
      client: 'emilia diez',
      image: "/works/14-emilia/portada.png",
      desc: `Estructura general y diseño de feed de dos perfiles para Instagram (fotografía familiar y fotografía para marketing). Creación de publicaciones de bienvenida y perfil que acompañen la paleta de colores elegidas por la cliente.`,
      icon: "/works/14-emilia/iso.svg", 
      modal_img: "/works/14-emilia/modalImg.png"
    },
    {
      id: 15,
      title: 'Asesoramiento y planificación',
      category: 'gestion de contenido',
      client: 'martín gonzález',
      image: "/works/15-martin/portada.png",
      desc: `Asesoramiento y planificación de contenido en Instagram para un lapso determinado donde se planteó un objetivo específico. Se tuvieron en cuenta algunas estrategias para poder alcanzar mayor visibilidad en los videos.`,
      icon: "/works/15-martin/iso.svg",
      modal_img: "/works/15-martin/modalImg.png"
    },
    {
      id: 16,
      title: 'Reparaciones y servicio técnico',
      category: 'servicio it',
      client: 'titulizar',
      image: "/works/16-titulizar/portada.png",
      desc: `Reparaciones y servicios de asistencia técnica (remota y presencial) para solucionar problemas de software y hardware que se van presentando.`,
      icon: "/works/16-titulizar/iso.svg", 
      modal_img: "/works/16-titulizar/modalImg.png"
    },
    {
      id: 17,
      title: 'Relevamiento y asesoramiento',
      category: 'servicio it',
      client: 'titulizar',
      image: "/works/17-titulizar/portada.png",
      desc: `Relevamiento y asesoramiento en la toma de decisiones tecnológicas para diferentes sectores dentro de la empresa. Por etapas se va llevando a cabo la reestructuración del cableado y conexiones.`,
      icon: "/works/17-titulizar/iso.svg", 
      modal_img: "/works/17-titulizar/modalImg.png"
    },
    {
      id: 18,
      title: 'Relevamiento y asesoramiento',
      category: 'servicio it',
      client: 'empretur',
      image: "/works/18-empretur/portada.png",
      desc: `Relevamiento en las diferentes áreas y puestos de trabajo de la empresa para reorganizar y mejorar las tecnologías en cuanto a conectividad de redes. Se realiza un informe donde se detalla características de cada uno, su estado y recomendación sugerida para actualizaciones.`,
      icon: "/works/18-empretur/iso.svg", 
      modal_img: "/works/18-empretur/modalImg.png"
    },
    {
      id: 19,
      title: 'Marketing y Diseño gráfico',
      category: 'marketing',
      client: 'emilia diez',
      image: "/works/19-emilia/portada.png",
      desc: `Creación de marca donde se trabaja el diseño del logo, la esencia de la profesión que se quiere reflejar, las combinaciones tipográficas, paleta de colores que acompañarán y se analizan los conceptos que se quieren incluir para el contenido multimedia donde se utilizará.`,
      icon: "/works/19-emilia/iso.svg", 
      modal_img: "/works/19-emilia/modalImg.webp"
    },
    {
      id: 20,
      title: 'Marketing y Diseño gráfico',
      category: 'marketing',
      client: 'solange rodríguez',
      image: "/works/20-solange/portada.png",
      desc: `Diseño digital sobre Terapia Psicológica, donde los pacientes puedan obtener información relevante sobre el profesional que los atenderá, manera de trabajo, formas de pago y datos de contacto.`,
      icon: "/works/20-solange/iso.svg", 
      modal_img: "/works/20-solange/modalImg.webp"
    },
    {
      id: 21,
      title: 'Diseño gráfico',
      category: 'marketing',
      client: 'solange rodríguez',
      image: "/works/21-solange/portada.png",
      desc: `Diseño de tarjetas personales para poder difundir la información de contacto con las personas interesadas. Esto ayuda a que puedan conocer y consultar sobre los servicios disponibles y puedan acceder a los mismos.`,
      icon: "/works/21-solange/iso.svg", 
      modal_img: "/works/21-solange/modalImg.png"
    },
    {
      id: 22,
      title: 'Programación de DNS',
      category: 'servicio it',
      client: 'RG ingeniería y computación',
      image: "/works/22-rg/portada.png",
      desc: `Servicio de programación de DNS (sistema de nombres de dominio) y registros MX exigidos por los servidores de Google que son necesarios para la entrega de correos a la dirección establecida.`,
      icon: "/works/22-rg/iso.svg", 
      modal_img: "/works/22-rg/modalImg.png"
    },
  ];