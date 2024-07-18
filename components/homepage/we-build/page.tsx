import initTranslations from "@/app/i18n";
import { TypewriterEffectSmoothDemo } from "@/components/ui/typewriter";

export const WeBuild = async({locale }:{locale :string }) => {
    const { t } = await initTranslations(locale, ['homepage', 'common']); 
    return (
        <div className="container flex flex-col items-center justify-center mx-auto mt-10 lg:mt-20">
            <TypewriterEffectSmoothDemo />
        </div>
        );
};