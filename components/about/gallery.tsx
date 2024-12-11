import { galleryAboutImages } from "@/utils/constants"

export const Gallery = () => {
    return (

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryAboutImages.map(img => (
                <div className="bg-white/10 flex items-center justify-center w-full mx-auto">
                    <img className="max-h-[350px] rounded-lg" src={img} alt="" />
                </div>
            ))}
        </div>
    )
}
