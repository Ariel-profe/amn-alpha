import { Subtitle } from "@/components/ui/subtitle";
import { BrandingVideo } from "../branding-video";

export const WeCreate = async() => {
    return ( 
        <div className="flex flex-col items-center justify-center md:py-10 max-w-[1600px] mx-auto">
            <Subtitle subtitle="Hazlo simple, nosotros creamos tu contenido" />
            <BrandingVideo src="/content/content-managment.mp4" />
        </div> );
};