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
import { Tooltip } from "@mui/material";
import {Button} from "@mui/material";
import {Box} from "@mui/material";
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
                        <div  className=" flex-1 flex justify-center items-center">

                        <Tooltip title="Draw" arrow sx={{zIndex:"2000"}}>
                            <Box component={"div"} sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <HiPencil  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box>
                        </Tooltip>
                        </div>
                        
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center"> 
                        <Tooltip title="Add Text" arrow sx={{zIndex:"2000"}}>
                            <Box component={"div"} sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <PiTextTFill  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box >
                        </Tooltip>
                        </div>
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer relative" >
                        <div className="flex-1 flex justify-center items-center">
                        <Tooltip title="Add Shape" arrow sx={{zIndex:"2000"}}>
                            <Box component={"div"} sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>setIsShape((e)=>!e)}>
                                <RiShapesFill  className={`min-[55px]:text-sm lg:text-xl ${isShape?"text-blue-600": 'text-slate-700'}`} />
                            </Box >
                        </Tooltip>
                        </div>
                         <Shape isShape={isShape} setIsShape={setIsShape} setShapes={setShapes} shapes={shapes}  containerSize={containerSize} zoom={zoom} handleAddShape={handleAddShape}/>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center">
                        <Tooltip title="Add Image" arrow sx={{zIndex:"2000"}}>
                            <Box component={"div"} sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <FaRegImage className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>

                            </Box >
                        </Tooltip>

                        </div>
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center">
                            <MdPanTool  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                        </div>
                    </div>

                </div>
                <div className="flex-1 flex h-full justify-center items-center ">
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <div className="flex-1 flex justify-center items-center">
                        <Tooltip title="Redo" arrow sx={{zIndex:"2000"}}>
                            <Box component={"div"} sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <BsArrowClockwise  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box>
                        </Tooltip>
                        </div>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <div className="flex-1 flex justify-center items-center">
                        <Tooltip title="Undo" arrow sx={{zIndex:"2000"}}>
                            <Box component={"div"} sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <BsArrowCounterclockwise className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box >
                        </Tooltip>
                        </div>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <div className="flex-1 flex justify-center items-center">
                            <Tooltip title="Delete" arrow sx={{zIndex:"2000"}}>
                            <Box component={"div"} sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <MdDelete  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box >
                            </Tooltip>
                        </div>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer ">
                        <div className="flex-1 flex justify-center items-center">
                            <Tooltip title="Save" arrow sx={{zIndex:"2000"}}>
                                <Box component={"div"} sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <FaSave className="text-slate-700 min-[55px]:text-sm lg:text-xl" />
                                </Box>
                            </Tooltip>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div className="lg:w-1/2 min-[5px]:w-full h-full  relative flex justify-center items-center ">
            
            <div className=" shadow-xl w-full h-9 absolute bg-white flex items-center">
                <div className="flex-1 flex h-full justify-center items-center ">
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                            <div  className=" flex-1 flex justify-center items-center">

                            <Tooltip title="Border" arrow sx={{zIndex:"2000"}}>
                            <Box component={"div"} sx={{width:"1rem",height:"1rem",border:"2px dashed #94a3b8"}}></Box>
                            </Tooltip>
                            </div>
                            
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                            <div  className=" flex-1 flex justify-center items-center">

                            <Tooltip title="Background color" arrow sx={{zIndex:"2000"}}>
                            <Box component={"div"} sx={{width:"1rem",height:"1rem",backgroundColor:"#2563eb"}}></Box>
                            </Tooltip>
                            </div>
                            
                    </div>
                    <div className="flex-2 h-full flex justify-center items-center  cursor-pointer mx-2">
                            <div  className=" flex-1 flex justify-center items-center">

                            <Tooltip title="Opacity" arrow sx={{zIndex:"2000"}}>
                            <Box component={"div"} sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <RxTransparencyGrid className="w-4 h-4 min-[55px]:text-sm lg:text-xl"/>
                            </Box>
                            </Tooltip>
                            </div>
                            
                    </div>
                    <div className="flex-2 h-full flex justify-center items-center border-r cursor-pointer pr-1">
                            <div  className=" flex-1 flex justify-center items-center">
                                <select name="" id="" className="border-[1.5px] rounded-sm ">
                                    <option value="100">100%</option>
                                    <option value="75">75%</option>
                                    <option value="50">50%</option>
                                    <option value="25">25%</option>
                                    <option value="10">10%</option>
                                </select>
                            </div>
                            
                    </div>
     

                </div>

                <div className="flex-2 h-full flex justify-center items-center  cursor-pointer pl-1 ">
                    <div className="flex-2 h-full flex justify-center items-center  cursor-pointer">
                                <div  className=" flex-2 flex justify-center items-center">
                                <Tooltip title="Stroke" arrow sx={{zIndex:"2000"}}>
                                    <Box component={"div"} sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <   RxBorderWidth  className="text-slate-700 text-xl mr-1 min-[55px]:text-sm lg:text-xl"/>
                                    </Box >
                                </Tooltip>
                                

                                </div>
                                
                    </div>
                    <div className="flex-2 h-full flex justify-center items-center border-r cursor-pointer pr-1">
                            <div  className=" flex-1 flex justify-center items-center">
                                <div className="border-[1.5px] rounded-sm">

                                     <input type="number" className="text-center w-16"  />
                                </div>
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