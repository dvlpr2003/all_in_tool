import { HiOutlineMenuAlt1 } from "react-icons/hi";
function IconMenu(){
    return(
        <div className="flex justify-center items-center gap-5 menu">
        <span className="text-2xl">Menu</span>
        <HiOutlineMenuAlt1 className="menu-icon"/>
        </div>
    )
}
export default IconMenu;