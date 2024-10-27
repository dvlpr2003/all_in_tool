import { HiPencil } from "react-icons/hi2";
import { PiTextTFill } from "react-icons/pi";
import { RiShapesFill } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa6";
import { MdPanTool } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsArrowClockwise } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { Shape } from "../Tools/Shapes";
import { useState } from "react";

export const ToolTop = ()=>{
    const [isShape,setIsShape]=useState(false)
    return(
        <div className=" bg-transparent absolute min-[55px]:top-[65px] lg:top-[80px]  z-30 h-[40px] w-full flex justify-center items-center  " style={{touchAction:"auto"}}>
        <div className="lg:w-1/2 min-[55px]:w-full h-full  relative flex justify-center items-center ">
            <div className=" shadow-xl w-full h-9 absolute bg-white flex items-center">

                <div className="flex-1 flex h-full justify-center items-center ">
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className=" flex-1 flex justify-center items-center"><HiPencil  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center"> <PiTextTFill  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer relative" onClick={()=>setIsShape((e)=>!e)}>
                        <div className="flex-1 flex justify-center items-center"><RiShapesFill  className={`min-[55px]:text-sm lg:text-xl ${isShape?"text-blue-600": 'text-slate-700'}`} /></div>
                         <Shape isShape={isShape} setIsShape={setIsShape}/>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center"><FaRegImage className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center"><MdPanTool  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>
                    </div>

                </div>
                <div className="flex-1 flex h-full justify-center items-center ">
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <div className="flex-1 flex justify-center items-center"><BsArrowClockwise  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <div className="flex-1 flex justify-center items-center"><BsArrowCounterclockwise className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <div className="flex-1 flex justify-center items-center"><MdDelete  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer ">
                        <div className="flex-1 flex justify-center items-center"><FaSave className="text-slate-700 min-[55px]:text-sm lg:text-xl" /></div>

                    </div>

                </div>
            </div>

        </div>
        
    </div>
    )
}