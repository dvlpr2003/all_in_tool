import { PiSquareLogoDuotone } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { RxBorderWidth } from "react-icons/rx";
import { IoArrowForwardCircleSharp } from "react-icons/io5";


export function DashboardNavMobRes({handleConvert}){
    return(
        <>
        <div className=" w-full h-auto min-[55px]:flex lg:hidden justify-center items-center bg-white z-0" >
        
         {/* <MobPopup 
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