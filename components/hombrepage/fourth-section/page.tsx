import { Subtitle } from "@/components/ui/subtitle";
import { BrandingVideo } from "@/components/hombrepage/branding-video";

const FourthSection = () => {
    return ( 
        <div className="flex flex-col items-center justify-center md:py-10 max-w-[1400px] mx-auto">
            <Subtitle subtitle="Hacelo simple, nosotros creamos tu contenido" />
            <BrandingVideo src="/content/content-managment.mp4" />
        </div> );
}
 
export default FourthSection;