import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
 
export default function NotFound() {
  return (
    <div className='container mx-auto flex flex-col gap-3 h-[80vh]'>
      <h2 className={`text-3xl lg:text-6xl text-primary-purple pt-24`}>Oops, no <br /> encontramos la <br /> página que estás <br /> buscando</h2>
      <p className={`text-xl lg:text-3xl text-primary-dark-grey`}>Parece que estás intentando acceder a una <br /> página que ha sido eliminada o que ya no <br /> existe.</p>
      <Link href="/" className='flex items-center group text-primary-purple md:hover:bg-primary-purple md:hover:text-white w-fit px-3 py-2 rounded-full transition-all'>
        <span className='text-xl md:group-hover:text-white transition'>Regresar al inicio</span>
        <IoIosArrowForward />
      </Link>
    </div>
  )
}