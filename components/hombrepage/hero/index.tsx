
const Hero = () => {
    return ( 
    <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 space-y-10">
        <div className="max-w-[1400px] mx-auto text-center">
            <div className="flex justify-center mb-10 w-full ">
                <img src="/amn-logo-2.png" alt="amn-logo" />
            </div>

            <p className="text-xl md:text-4xl md-10 text-slate-800 dark:text-slate-300 tracking-wider mb-16">
                Impulsamos tu éxito digital
            </p>

            <div className="lg:pt-10">
                <video className="rounded-xl" autoPlay muted loop>
                    <source src="/content/hero-1.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    </section> );
}
 
export default Hero;