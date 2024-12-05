import { IoArrowForwardCircleSharp } from "react-icons/io5";


export function DashboardNavMobRes({handleConvert}){
    return(
        <>
        <div className=" w-full h-auto min-[55px]:flex lg:hidden justify-center items-center bg-blue-600 z-0" >
         
            <div className="flex w-full justify-around gap-2 m-4 ">
                <div className=" text-gray-500 flex  justify-center items-center gap-2 cursor-pointer">
                <IoArrowForwardCircleSharp className="text-xl text-white" onClick={handleConvert} />
                <span className="text-sm text-white">Convert to word</span>
                </div>
            </div>

        </div>
        </>

    )

}