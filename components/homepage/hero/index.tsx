import { BrandingVideo } from "../branding-video";
import { DynamicLogo } from "./dynamic-logo";

const Hero = async() => {
    return ( 
    <section className="md:my-28 bg-gradient-to-r from gray-00 to-gray-200 space-y-10 max-w-[1640px] mx-auto text-center">
        <DynamicLogo />

        <p className="text-xl md:text-4xl md-10 text-slate-800 dark:text-slate-300 tracking-wider mb-16">Impulsamos tu éxito digital</p>

        <BrandingVideo src="/content/hero-1.mp4" />
    </section> );
}
 
export default Hero;