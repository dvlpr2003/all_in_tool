import { IoIosHeart } from "react-icons/io";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import {Box} from "@mui/material";

export const Shape = ({isShape,setIsShape,setShapes,shapes,zoom,containerSize,handleAddShape})=>{


    return(
        <div className={`w-auto h-full border absolute z-50  top-11 rounded-md bg-white shadow-md ${isShape?"flex":"hidden"} items-center justify-center px-5`}>
            <div className="flex gap-3  justify-center items-center">
                <Tooltip title="Square" arrow>
                <Box className="square" onClick={()=>{handleAddShape("square"); setIsShape(false)}}>
                    <svg
                    width={20}
                    height={20}
                    viewBox="0 0 100 100"
                    className="text-xl"
                    >
                        <path
                        d="M 0 0 H 100 V 100 H 0 Z"
                        fill="#334155"
                        stroke="#334155"
                        
                        />

                    </svg>
                </Box>
                </Tooltip>

                <Tooltip title="Circle" arrow>
                    <Box className="circle" onClick={()=>{handleAddShape("circle"); setIsShape(false)}}>
                        <svg
                        width={20}
                        height={20}
                        viewBox="0 0 100 100"
                        >
                            <path
                            d="M50 0 A50 50 0 1 0 50 100 A50 50 0 1 0 50 0"
                            fill="#334155"
                            stroke="#334155"
                            
                            />

                        </svg>
                    </Box>
                </Tooltip>

                <Tooltip title="Star" arrow>
                <Box className="star" onClick={()=>{handleAddShape("star"); setIsShape(false)}}>
                    <svg
                    width={20}
                    height={20}
                    viewBox="0 0 100 100"
                    >
                        <path
                        d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z"
                        fill="#334155"
                        stroke="#334155"
                        
                        />

                    </svg>
                </Box>
                </Tooltip>

                <Tooltip title="Triangle" arrow>
                <Box className="triangle" onClick={()=>{handleAddShape("triangle"); setIsShape(false)}}>
                    <svg
                    width={20}
                    height={20}
                    viewBox="0 0 100 100"
                    >
                        <path
                        d="M50 0 L100 100 L0 100 Z"
                        fill="#334155"
                        stroke="#334155"
                        
                        />

                    </svg>
                </Box>
                </Tooltip>
                <Tooltip title="Pentagon" arrow>
                <Box className="hexagon" onClick={()=>{handleAddShape("pentagon"); setIsShape(false)}} >
                    <svg
                    width={20}
                    height={20}
                    viewBox="0 0 100 100"
                    >
                        <path
                        d="M25 0 L75 0 L100 50 L75 100 L25 100 L0 50 Z"
                        fill="#334155"
                        stroke="#334155"
                        
                        />

                    </svg>
                </Box>
                </Tooltip>

                <Tooltip title="Heart" arrow>

                <Box className="heart flex justify-center items-center" onClick={()=>{handleAddShape("heart"); setIsShape(false)}}>
                <IoIosHeart className="text-2xl text-slate-700" />

                </Box>
                </Tooltip>
              

            </div>
            

        </div>
    )
}