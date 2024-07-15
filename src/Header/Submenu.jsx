import { RxCross2 } from "react-icons/rx";
import ConvertFromPdf from "./submenu items/converfrompdf";
import ConvertToPdf from "./submenu items/converttopdf";
import Organize from "./submenu items/Organize";
import Edit from "./submenu items/Edit";


export function ProductDt({Tool,enter,setTool,setEnter,isMobile}){
   
    return(
        <div className={` absolute border about-menu ${Tool?"flex":"hidden"} ${isMobile?"hidden":""} gap-5 text-black  shadow-md  transition `}>
            <div className=" w-full mt-9 flex justify-center pb-7">
                <div className="flex justify-evenly  flex-wrap  w-full">
                    <ConvertFromPdf/>
                    <ConvertToPdf/>
                    <Organize/>
                    <Edit/>
                </div>

            </div>
 
            <RxCross2 className="absolute right-3 top-2 font-bold text-2xl cursor-pointer hover:text-indigo-600" onClick={()=>setTool(false)}/>
        </div>
    )
}