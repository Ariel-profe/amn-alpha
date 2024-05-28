export interface IProject {
    id: number;
    title: string;
    category: string;
    client: string;
    img: string;
    desc: string;
    tags?: {name: string, color: string}[];
    icon: string;
};