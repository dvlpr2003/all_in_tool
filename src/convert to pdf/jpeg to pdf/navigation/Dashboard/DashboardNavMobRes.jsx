import { PiSquareLogoDuotone } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { RxBorderWidth } from "react-icons/rx";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { MobPopup } from "../mobileRes/MobPopup";

export function DashboardNavMobRes({isPopup,dispatch,Margin,Orientation,PageSize,setMargin,setOrientation,setPageSize,Margin_dispatch,Orientation_dispatch,PageSz_dispatch,handleConvert}){
    return(
        <>
        <div className=" w-full h-auto min-[55px]:flex lg:hidden justify-center items-center bg-white z-0" >

         
            <div className="flex w-full justify-around gap-2 m-4 ">
                {/* margin */}
                <div className=" text-gray-500 flex flex-col justify-center items-center gap-2 cursor-pointer" onClick={()=>{dispatch({"type":"margin"})}}>
                <PiSquareLogoDuotone className={`text-xl  `}/>
                <span className="text-sm">Margin</span>
                
                </div>
                {/* Orientation */}
                <div className="text-gray-500 flex flex-col justify-center items-center gap-2 cursor-pointer" onClick={()=>{dispatch({"type":"orientation"})}}>
                <HiOutlineRectangleGroup className={`text-xl `}/>
                <span className="text-sm">Orientation</span>

                </div>
                <div className="text-gray-500 flex flex-col justify-center items-center gap-2 cursor-pointer" onClick={()=>{dispatch({"type":"page size"})}}>
                <MdOutlineDocumentScanner className={`text-xl`}/>
                <span className="text-sm">Size</span>
                </div>

                {/* convert */}
                <div className=" text-gray-500 flex flex-col justify-center items-center gap-2 cursor-pointer">
                <IoArrowForwardCircleSharp className="text-xl text-blue-600" onClick={handleConvert} />
                <span className="text-sm">Convert</span>
                </div>
            </div>

        </div>
        </>

    )

}