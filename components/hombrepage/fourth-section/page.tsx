import { Subtitle } from "@/components/ui/subtitle";

const FourthSection = () => {
    return ( 
        <div className="items-center flex justify-center md:py-10">
            <div>
                <Subtitle subtitle="Hacelo simple, nosotros creamos tu contenido." />

                <div className="justify-center items-center flex md:pt-10 p-10">
                    <video className="rounded-xl md:w-2/3" autoPlay muted loop>
                        <source src="/content/content-managment.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div> );
}
 
export default FourthSection;