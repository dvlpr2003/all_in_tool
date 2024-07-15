import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function IconMenu({setMenuIcon,MenuIcon}){
    return(
        <div className="flex justify-center items-center gap-5 menu" onClick={()=>setMenuIcon((e)=>!e)}>
        <span className="text-2xl">Menu</span>
        {MenuIcon?<RxCross2  className="menu-icon"/>:<HiOutlineMenuAlt1 className="menu-icon" />}
        


        </div>
    )
}
export default IconMenu;