import { Subtitle } from "@/components/ui/subtitle";
import { BrandingVideo } from "../branding-video";

export const WeCreate = async() => {
    return ( 
        <div className="flex flex-col items-center justify-center py-10 max-w-[1600px] mx-auto">
            <BrandingVideo src="/content/content-managment.mp4" />
        </div> );
};