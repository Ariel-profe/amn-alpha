'use client';

import Image from "next/image";
import { Subtitle } from "../ui/subtitle";

const Company = () => {
    return (   
        <div id="empresa" className="mx-auto relative w-full flex flex-col items-center justify-center mt-10 lg:mt-10">
            <Subtitle subtitle="Este es nuestro lugar en el mundo" />
            <p className="lg:text-xl font-normal text-slate-500 max-w-lg text-center mx-auto px-4">
                Creamos, diseñamos y desarrollamos en un ambiente único y agradable
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
                <div className="grid gap-4">
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                    </div>
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                    </div>
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                    </div>
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                    </div>
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                    </div>
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                    </div>
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                    </div>
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                    </div>
                    <div>
                        <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div> );
}
 
export default Company;