import { HiPencil } from "react-icons/hi2";
import { PiTextTFill } from "react-icons/pi";
import { RiShapesFill } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa6";
import { MdPanTool } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsArrowClockwise } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { RxTransparencyGrid } from "react-icons/rx";
import { RxBorderWidth } from "react-icons/rx";

import { MdOutlineArrowDropDown } from "react-icons/md";

import { Shape } from "../Tools/Shapes";
import { useState } from "react";

export const ToolTop = ({shapes, setShapes,containerSize,zoom,handleAddShape})=>{
    const [isShape,setIsShape]=useState(false)
    return(
        <div className=" bg-transparent absolute min-[55px]:top-[65px] lg:top-[80px]  z-50 h-[80px] w-full flex flex-col justify-center items-center  " style={{touchAction:"auto"}}>
        <div className="lg:w-1/2 min-[55px]:w-full h-full  relative flex justify-center items-center ">

            <div className=" shadow-md w-full h-9 absolute bg-white flex items-center">

                <div className="flex-1 flex h-full justify-center items-center ">
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" className=" flex-1 flex justify-center items-center"><HiPencil  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>
                        
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center"> <PiTextTFill  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer relative" >
                        <div className="flex-1 flex justify-center items-center"><RiShapesFill  className={`min-[55px]:text-sm lg:text-xl ${isShape?"text-blue-600": 'text-slate-700'}`} onClick={()=>setIsShape((e)=>!e)}/></div>
                         <Shape isShape={isShape} setIsShape={setIsShape} setShapes={setShapes} shapes={shapes}  containerSize={containerSize} zoom={zoom} handleAddShape={handleAddShape}/>

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

        <div className="lg:w-1/2 min-[5px]:w-full h-full  relative flex justify-center items-center ">
            
            <div className=" shadow-xl w-full h-9 absolute bg-white flex items-center">
                <div className="flex-1 flex h-full justify-center items-center ">
                    <div className="flex-1 h-full flex justify-center items-center border-r gap-6 cursor-pointer">
                        <div className="border-2 border-dashed border-slate-400 w-4 h-4">

                        </div>
                        <div className="w-4 h-4 bg-blue-600">

                        </div>
                    </div>

                    <div className="flex-1 h-full flex justify-center items-center border-r gap-3 cursor-pointer relative px-2" >
                        <div>
                        <RxTransparencyGrid className="w-4 h-4"/>
                        </div>
                        <select name="" id="" className="border-[1.5px] rounded-sm ">
                            <option value="100">100%</option>
                            <option value="75">75%</option>
                            <option value="50">50%</option>
                            <option value="25">25%</option>
                            <option value="10">10%</option>


                        </select>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center gap-3 border-r cursor-pointer px-2">

                        <div className="flex justify-center items-center">
                        <RxBorderWidth  className="text-slate-700 text-xl"/>

                        </div>
                        <div className="border-[1.5px] rounded-sm flex justify-center items-center">
                            <input type="number" className="text-center w-16"  />
                        </div>

                    </div>
     

                </div>
                <div className="flex-1 flex h-full justify-center items-center ">


                </div>
            </div>

        </div>
        
    </div>
    )
}