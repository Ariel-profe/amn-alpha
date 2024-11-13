export interface IProject {
    id: number;
    title: string;
    category: "desarrollo web" | "gestion de contenido" | "servicio it" | "marketing";
    client: string;
    image: string;
    desc: string;
    tags?: {name: string, color: string}[];
    icon: string;
    link?: string;
    modal_img?: string;
};