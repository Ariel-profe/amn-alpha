import Logo from "./logo";
import ActionButtons from "@/components/ui/navbar/action-buttons";
import { NavigationMenuBar } from "@/components/ui/navbar/navigation-bar";

const Navbar = () => {
    return ( 
    <div className="flex justify-between items-center h-20 z-50 lg:px-6">
       <Logo />
       <NavigationMenuBar />
       <ActionButtons />
    </div> );
}
 
export default Navbar;