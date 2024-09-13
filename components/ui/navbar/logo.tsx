
import Image from "next/image";

const Logo = () => {
    return ( 
        <div>
            <Image 
                src="/logo.svg" 
                width={90} 
                height={90} 
                alt="logo"
            />
        </div> 
    );
}
 
export default Logo;