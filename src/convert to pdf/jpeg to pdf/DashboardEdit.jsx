import { HiComputerDesktop } from "react-icons/hi2";
import { FaDropbox } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";

import { MdOutlineAddCircle } from "react-icons/md";
import { useState } from "react";


export default function DashboardEdit(){
    return(
        <>
        <div className="flex justify-center items-center flex-wrap  mt-12 mx-10 mb-8 gap-3">

            
        </div>
               
        </>
    )
}


export function AddImg(){
    const [Opacity,setOpacity]=useState(false)
    function handleMouseMove(){
        setOpacity((e)=>!e)
        
    }
    
    return(
        
            <div className=" w-auto h-auto absolute right-10 top-4 " >
                <div className="relative">
                    <MdOutlineAddCircle className="text-5xl text-indigo-600 cursor-pointer" onClick={()=>handleMouseMove()}/>
                    <div className={`h-auto w-auto sticky right-0 left-0   mt-1 flex flex-col items-center gap-2 transition-opacity duration-300 opacity-0 ${Opacity?"opacity-100":""} z-40`}  >
                        <div className=" bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                        <HiComputerDesktop className="text-xl text-white"/>

                        </div>
                        <div className=" bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                        <FaDropbox className="text-xl text-white"/>

                        </div>
                        <div className=" bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                        <FaGoogleDrive className="text-xl text-white"/>

                        </div>

                    </div>

                </div>
            </div>
    
    )
}