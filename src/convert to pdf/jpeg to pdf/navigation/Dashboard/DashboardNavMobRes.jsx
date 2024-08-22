import { PiSquareLogoDuotone } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { RxBorderWidth } from "react-icons/rx";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { MobPopup } from "../mobileRes/MobPopup";

export function DashboardNavMobRes({isPopup,dispatch,Margin,Orientation,PageSize,setMargin,setOrientation,setPageSize,Margin_dispatch,Orientation_dispatch,PageSz_dispatch}){
    return(
        <>
        <div className=" w-full h-auto min-[55px]:flex lg:hidden justify-center items-center popup bg-white z-0" >
{/*         
         <MobPopup 
         isPopup={isPopup} 
         Margin={Margin} 
         Orientation={Orientation} 
         PageSize={PageSize} 
         setMargin={setMargin} 
         setPageSize={setPageSize} 
         setOrientation={setOrientation} 
         Margin_dispatch={Margin_dispatch} 
         Orientation_dispatch={Orientation_dispatch} 
         PageSz_dispatch={PageSz_dispatch}
         /> */}
         
            <div className="flex w-full justify-around gap-2 m-4 ">
                {/* margin */}
                <div className="flex flex-col justify-center items-center gap-2" onClick={()=>{dispatch({"type":"margin"})}}>
                <PiSquareLogoDuotone className={`text-xl  group-hover:text-indigo-600 `}/>
                <span className="text-sm">Margin</span>
                
                </div>
                {/* Orientation */}
                <div className="flex flex-col justify-center items-center gap-2" onClick={()=>{dispatch({"type":"orientation"})}}>
                <HiOutlineRectangleGroup className={`text-xl group-hover:text-indigo-600 `}/>
                <span className="text-sm">Orientation</span>

                </div>
                <div className="flex flex-col justify-center items-center gap-2" onClick={()=>{dispatch({"type":"page size"})}}>
                <MdOutlineDocumentScanner className={`text-xl group-hover:text-indigo-600`}/>
                <span className="text-sm">Size</span>
                </div>

                {/* convert */}
                <div className="flex flex-col justify-center items-center gap-2">
                <IoArrowForwardCircleSharp className="text-xl text-indigo-600"/>
                <span className="text-sm">Convert</span>
                </div>
            </div>

        </div>
        </>

    )

}