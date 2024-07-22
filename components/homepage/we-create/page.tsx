import { Subtitle } from "@/components/ui/subtitle";
import { BrandingVideo } from "../branding-video";
import initTranslations from "@/app/i18n";

export const WeCreate = async({locale }:{locale :string }) => {
    
    const { t } = await initTranslations(locale, ['homepage']); 

    return ( 
        <div className="flex flex-col items-center justify-center md:py-10 max-w-[1600px] mx-auto">
            <Subtitle subtitle={t("we_create_header")} />
            <BrandingVideo src="/content/content-managment.mp4" />
        </div> );
};