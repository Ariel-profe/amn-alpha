import { BrandingVideo } from "../branding-video";
import initTranslations from "@/app/i18n";

const Hero = async({locale }:{locale :string }) => {

    const { t } = await initTranslations(locale, ['homepage']);   

    return ( 
    <section className="md:mt-28 py-10 bg-gradient-to-r from gray-00 to-gray-200 space-y-10">
        <div className="max-w-[1440px] mx-auto text-center">
            <div className="flex justify-center mb-10 max-w-[1440px]">
                <img src="/amn-logo-2.png" alt="amn-logo" className="w-full" />
            </div>

            <p className="text-xl md:text-4xl md-10 text-slate-800 dark:text-slate-300 tracking-wider mb-16">{t("hero_subheader")}</p>

           <BrandingVideo src="/content/hero-1.mp4" />
        </div>
    </section> );
}
 
export default Hero;