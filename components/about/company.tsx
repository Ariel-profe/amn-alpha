'use client';

import Image from "next/image";
import { Subtitle } from "../ui/subtitle";

const Company = () => {
    return (   
        <div id="empresa" className="mx-auto relative w-full flex flex-col items-center justify-center mt-10 lg:mt-10">
            <Subtitle subtitle="Este es nuestro lugar en el mundo" />
            <p className="lg:text-xl font-normal text-slate-500 max-w-lg text-center mx-auto">
                Creamos, diseñamos y desarrollamos en un ambiente único y agradable
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
                <div className="grid gap-4">
                    <div className="group">
                        <img
                            className="h-[180px] lg:h-[600px] max-w-full rounded-lg object-cover group-hover:scale-95 transition" 
                            src="/images/about/company/case.jpg" 
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-[180px] lg:h-[200px] max-w-full rounded-lg object-cover" 
                            src="/images/about/company/cups.jpeg" 
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-[180px] lg:h-[400px] max-w-full rounded-lg object-cover bg-white" 
                            src="/images/about/company/headphones.webp" 
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-[180px] lg:h-auto max-w-full rounded-lg object-cover" 
                            src="/images/about/company/keyboard.webp" 
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-[180px] lg:h-[400px] max-w-full rounded-lg object-cover" 
                            src="/images/about/company/screen.webp" 
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-[180px] lg:h-[450px] max-w-full rounded-lg object-cover" 
                            src="/images/about/company/mouse.jpg" 
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-[180px] lg:h-[400px] max-w-full rounded-lg object-cover" 
                            src="/images/about/company/micro.jpg" 
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-[180px] lg:h-auto max-w-full rounded-lg bg-white object-cover" 
                            src="/images/about/company/pad.png" 
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-[180px] lg:h-auto max-w-full rounded-lg object-cover" 
                            src="/images/about/company/case.jpg" 
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-[180px] lg:h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                    </div>
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-[180px] lg:h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                    </div>
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-[180px] lg:h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div> );
}
 
export default Company;