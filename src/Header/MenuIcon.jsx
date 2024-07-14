import { HiOutlineMenuAlt1 } from "react-icons/hi";
function IconMenu({setMenuIcon}){
    return(
        <div className="flex justify-center items-center gap-5 menu">
        <span className="text-2xl">Menu</span>
        <HiOutlineMenuAlt1 className="menu-icon" onClick={()=>setMenuIcon((e)=>!e)}/>
        </div>
    )
}
export default IconMenu;