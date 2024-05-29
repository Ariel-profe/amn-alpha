import { Subtitle } from "@/components/ui/subtitle";
import { BrandingVideo } from "@/components/hombrepage/branding-video";

const FourthSection = () => {
    return ( 
        <div className="flex flex-col items-center justify-center md:py-10">
            <Subtitle subtitle="Hacelo simple, nosotros creamos tu contenido." />
            <BrandingVideo src="/content/content-managment.mp4" />
        </div> );
}
 
export default FourthSection;