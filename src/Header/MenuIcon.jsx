import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function IconMenu({setMenuIcon,MenuIcon}){
    return(
        <div className="flex justify-center items-center gap-5 menu" onClick={()=>setMenuIcon((e)=>!e)}>
        <span className="min-[55px]:text-lg min-[660px]:text-2xl">{MenuIcon?"Close":"Menu"}</span>
        {MenuIcon?<RxCross2  className="menu-icon min-[55px]:text-xl min-[660px]:text-2xl"/>:<HiOutlineMenuAlt1 className="menu-icon min-[55px]:text-xl min-[660px]:text-2xl" />}
        


        </div>
    )
}
export default IconMenu;