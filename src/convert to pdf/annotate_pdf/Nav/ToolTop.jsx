import { HiPencil } from "react-icons/hi2";
import { PiTextTFill } from "react-icons/pi";
import { RiShapesFill } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsArrowClockwise } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { RxTransparencyGrid } from "react-icons/rx";
import { RxBorderWidth } from "react-icons/rx";
import { Tooltip } from "@mui/material";
import {Box} from "@mui/material";
import Slider from '@mui/material/Slider';
import { MdRotate90DegreesCw } from "react-icons/md";


import { Shape } from "../Tools/Shapes";
import { useState } from "react";

export const ToolTop = ({shapes,
   setShapes,
   containerSize,
   zoom,
   handleAddShape,
   isWidthInRange,
   selectedShapeId,
   handleUndo,
   handleRedo
  })=>{
    const [isShape,setIsShape]=useState(false)
    const [RotateValue,setRotateValue]=useState(0)

    // Pencil tooltip
    const [PenciltooltipOpen, setPencilTooltipOpen] = useState(false);
    const handleClickPencil = () => {
      setPencilTooltipOpen(false); 
    };
  
    const handleMouseEnterPencil = () => {
      setPencilTooltipOpen(true); 
    };
  
    const handleMouseLeavePencil = () => {
      setPencilTooltipOpen(false);
    };

    // text-tooltip
    const [TexttooltipOpen, setTextTooltipOpen] = useState(false);
    const handleClickText = () => {
      setTextTooltipOpen(false); 
    };
  
    const handleMouseEnterText = () => {
      setTextTooltipOpen(true); 
    };
  
    const handleMouseLeaveText = () => {
      setTextTooltipOpen(false);
    };

    // shape-tooltip
    const [ShapetooltipOpen, setShapeTooltipOpen] = useState(false);
    const handleClickShape = () => {
      setShapeTooltipOpen(false); 
    };
  
    const handleMouseEnterShape = () => {
      setShapeTooltipOpen(true); 
    };
  
    const handleMouseLeaveShape = () => {
      setShapeTooltipOpen(false);
    };


    // image-tooltip
    const [ImagetooltipOpen, setImageTooltipOpen] = useState(false);
    const handleClickImage = () => {
      setImageTooltipOpen(false); 
    };
  
    const handleMouseEnterImage = () => {
      setImageTooltipOpen(true); 
    };
  
    const handleMouseLeaveImage = () => {
      setImageTooltipOpen(false);
    };

    // redo-tooltip
    const [RedotooltipOpen, setRedoTooltipOpen] = useState(false);
    const handleClickRedo = () => {
      setRedoTooltipOpen(false); 
    };
  
    const handleMouseEnterRedo = () => {
      setRedoTooltipOpen(true); 
    };
  
    const handleMouseLeaveRedo = () => {
      setRedoTooltipOpen(false);
    };

    // undo-tooltip
    const [UndotooltipOpen, setUndoTooltipOpen] = useState(false);
    const handleClickUndo = () => {
      setUndoTooltipOpen(false); 
    };
  
    const handleMouseEnterUndo = () => {
      setUndoTooltipOpen(true); 
    };
  
    const handleMouseLeaveUndo = () => {
      setUndoTooltipOpen(false);
    };

    // Delete-tooltip
    const [DeletetooltipOpen, setDeleteTooltipOpen] = useState(false);
    const handleClickDelete = () => {
      setDeleteTooltipOpen(false); 
    };
  
    const handleMouseEnterDelete = () => {
      setDeleteTooltipOpen(true); 
    };
  
    const handleMouseLeaveDelete = () => {
      setDeleteTooltipOpen(false);
    };

    // Save-tooltip
    const [SavetooltipOpen, setSaveTooltipOpen] = useState(false);
    const handleClickSave = () => {
      setSaveTooltipOpen(false); 
    };
  
    const handleMouseEnterSave = () => {
      setSaveTooltipOpen(true); 
    };
  
    const handleMouseLeaveSave = () => {
      setSaveTooltipOpen(false);
    };


    // Border-tooltip
    const [BordertooltipOpen, setBorderTooltipOpen] = useState(false);
    const handleClickBorder = () => {
      setBorderTooltipOpen(false); 
    };
  
    const handleMouseEnterBorder = () => {
      setBorderTooltipOpen(true); 
    };
  
    const handleMouseLeaveBorder = () => {
      setBorderTooltipOpen(false);
    };

    // Background-tooltip
    const [BackgroundtooltipOpen, setBackgroundTooltipOpen] = useState(false);
    const handleClickBackground = () => {
      setBackgroundTooltipOpen(false); 
    };
  
    const handleMouseEnterBackground = () => {
      setBackgroundTooltipOpen(true); 
    };
  
    const handleMouseLeaveBackground = () => {
      setBackgroundTooltipOpen(false);
    };


    // Opacity-tooltip
    const [OpacitytooltipOpen, setOpacityTooltipOpen] = useState(false);
    const handleClickOpacity = () => {
      setOpacityTooltipOpen(false); 
    };
  
    const handleMouseEnterOpacity = () => {
      setOpacityTooltipOpen(true); 
    };
  
    const handleMouseLeaveOpacity = () => {
      setOpacityTooltipOpen(false);
    };


    // Opacity-tooltip
    const [StroketooltipOpen, setStrokeTooltipOpen] = useState(false);
    const handleClickStroke = () => {
      setStrokeTooltipOpen(false); 
    };
  
    const handleMouseEnterStroke = () => {
      setStrokeTooltipOpen(true); 
    };
  
    const handleMouseLeaveStroke = () => {
      setStrokeTooltipOpen(false);
    };




    const handleRotate=(e)=>{
      setShapes((prevShapes) =>
      prevShapes.map((shape) =>
        shape.id === selectedShapeId ? { ...shape, rotate: e.target.value } : shape
      )
      );

      setRotateValue(Number(e.target.value > 180?180:e.target.value))
      
    }
  
    
    return(
        <div className=" bg-transparent absolute min-[55px]:top-[65px] lg:top-[80px]  z-50 h-[80px] w-full flex flex-col justify-center items-center  " style={{touchAction:"auto"}}>
        <div className="lg:w-1/2 min-[55px]:w-full h-full  relative flex justify-center items-center ">
            <div className=" shadow-md w-full h-9 absolute bg-white flex items-center">

                <div className="flex-1 flex h-full justify-center items-center ">
                    {/* Draw Button */}
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div  className=" flex-1 flex justify-center items-center">

                        <Tooltip 
                            title="Draw" 
                            arrow 
                            sx={{zIndex:"2000"}}
                            open={PenciltooltipOpen}
                            onMouseEnter={handleMouseEnterPencil}
                            onMouseLeave={handleMouseLeavePencil}
                          >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickPencil}
                            >
                            <HiPencil  className="text-slate-700 min-[55px]:text-sm lg:text-xl" />
                            </Box>
                        </Tooltip>
                        </div>
                        
                    </div>
                    {/* Add Text Button */}
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center"> 
                        <Tooltip 
                            title="Add Text" 
                            arrow 
                            sx={{zIndex:"2000"}}
                            open={TexttooltipOpen}
                            onMouseEnter={handleMouseEnterText}
                            onMouseLeave={handleMouseLeaveText}

                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickText}
                            >
                            <PiTextTFill  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box >
                        </Tooltip>
                        </div>
                    </div>
                    {/* Add Shape Button*/}
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer relative" >
                        <div className="flex-1 flex justify-center items-center">
                        <Tooltip 
                        title="Add Shape" 
                        arrow 
                        sx={{zIndex:"2000"}}
                        open={ShapetooltipOpen}
                        onMouseEnter={handleMouseEnterShape}
                        onMouseLeave={handleMouseLeaveShape}

                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}} 
                            onClick={()=>{setIsShape((e)=>!e); handleClickShape()}}>
                                <RiShapesFill  className={`min-[55px]:text-sm lg:text-xl ${isShape?"text-blue-600": 'text-slate-700'}`} />
                            </Box >
                        </Tooltip>
                        </div>
                         <Shape isShape={isShape} setIsShape={setIsShape} setShapes={setShapes} shapes={shapes}  containerSize={containerSize} zoom={zoom} handleAddShape={handleAddShape}/>

                    </div>
                    {/* Add Imge Button */}
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center">
                        <Tooltip 
                        title="Add Image" 
                        arrow 
                        sx={{zIndex:"2000"}}
                        open={ImagetooltipOpen}
                        onMouseEnter={handleMouseEnterImage}
                        onMouseLeave={handleMouseLeaveImage}
                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickImage}
                            >
                            <FaRegImage className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>

                            </Box >
                        </Tooltip>

                        </div>
                    </div>
                </div>
                <div className="flex-1 flex h-full justify-center items-center ">
                    {/* Redo Button */}
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <div className="flex-1 flex justify-center items-center">
                        <Tooltip 
                        title="Redo" 
                        arrow 
                        sx={{zIndex:"2000"}}
                        open={RedotooltipOpen}
                        onMouseEnter={handleMouseEnterRedo}
                        onMouseLeave={handleMouseLeaveRedo}

                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickRedo}
                            >
                            <BsArrowClockwise onClick={handleRedo} className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box>
                        </Tooltip>
                        </div>

                    </div>
                    {/* Undo Button */}
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <div className="flex-1 flex justify-center items-center">
                        <Tooltip 
                        title="Undo" 
                        arrow 
                        sx={{zIndex:"2000"}}
                        open={UndotooltipOpen}
                        onMouseEnter={handleMouseEnterUndo}
                        onMouseLeave={handleMouseLeaveUndo}
                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickUndo}
                            >
                            <BsArrowCounterclockwise onClick={handleUndo} className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box >
                        </Tooltip>
                        </div>

                    </div>
                    {/* Delete Button */}
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <div className="flex-1 flex justify-center items-center">
                            <Tooltip 
                            title="Delete" 
                            arrow 
                            sx={{zIndex:"2000"}}
                            open={DeletetooltipOpen}
                            onMouseEnter={handleMouseEnterDelete}
                            onMouseLeave={handleMouseLeaveDelete}
                            >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickDelete}
                            >
                            <MdDelete  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box >
                            </Tooltip>
                        </div>

                    </div>
                    {/* Save Button */}
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer ">
                        <div className="flex-1 flex justify-center items-center">
                            <Tooltip 
                            title="Save" 
                            arrow 
                            sx={{zIndex:"2000"}}
                            open={SavetooltipOpen}
                            onMouseEnter={handleMouseEnterSave}
                            onMouseLeave={handleMouseLeaveSave}
                            >
                                <Box 
                            

                                component={"div"} 
                                sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                                onClick={handleClickSave}
                                >
                                    <FaSave className="text-slate-700 min-[55px]:text-sm lg:text-xl" />
                                </Box>
                            </Tooltip>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        {/* shape sub-tools */}
        <div className="lg:w-1/2 min-[5px]:w-full h-full  relative flex justify-center items-center ">
            
            <div className=" shadow-xl w-full h-9 absolute bg-white flex items-center">
                <div className="flex-1 flex h-full justify-center items-center ">
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                            <div  className=" flex-1 flex justify-center items-center">

                            <Tooltip 
                            title="Border color" 
                            arrow 
                            sx={{zIndex:"2000"}}
                            open={BordertooltipOpen}
                            onMouseEnter={handleMouseEnterBorder}
                            onMouseLeave={handleMouseLeaveBorder}
                            >
                            <Box 
                            component={"div"} 
                            sx={{width:`${isWidthInRange?"0.7rem":"1rem"}`,height:`${isWidthInRange?"0.7rem":"1rem"}`,border:"2px dashed #94a3b8"}}
                            onClick={handleClickBorder} 
                            >

                            </Box>
                            </Tooltip>
                            </div>
                            
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                            <div  className=" flex-1 flex justify-center items-center">

                            <Tooltip 
                            title="Background color" 
                            arrow 
                            sx={{zIndex:"2000"}}
                            open={BackgroundtooltipOpen}
                            onMouseEnter={handleMouseEnterBackground}
                            onMouseLeave={handleMouseLeaveBackground}

                            >
                            <Box 
                            component={"div"}
                            sx={{width:`${isWidthInRange?"0.7rem":"1rem"}`,height:`${isWidthInRange?"0.7rem":"1rem"}`,backgroundColor:"#2563eb"}}
                            onClick={handleClickBackground} 
                            ></Box>
                            </Tooltip>
                            </div>
                            
                    </div>
                    <div className="flex-2 h-full flex justify-center items-center  cursor-pointer border-r">
                            <div  className=" flex-1 flex justify-center items-center">
                                <div className="w-full h-full flex gap-2 mx-2">
                                <Tooltip 
                                title="Opacity" 
                                arrow sx={{zIndex:"2000"}}
                                open={OpacitytooltipOpen}
                                onMouseEnter={handleMouseEnterOpacity}
                                onMouseLeave={handleMouseLeaveOpacity}


                                >
                                    <Box
                                    component={"div"} 
                                    sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                                    onClick={handleClickOpacity}
                                    >
                                        <RxTransparencyGrid className="min-[55px]:text-sm lg:text-xl"/>
                                    </Box>
                                </Tooltip>
                                <select name="" id="" className="border-[1.5px] rounded-sm min-[55px]:w-11 min-[55px]:h-7 lg:w-14 min-[55px]:text-[8px] lg:text-[12px]">
                                    <option value="100" >100%</option>
                                    <option value="75">75%</option>
                                    <option value="50">50%</option>
                                    <option value="25">25%</option>
                                    <option value="10">10%</option>
                                </select>
                                </div>
                            </div>
                            
                    </div>

     

                </div>

                <div className="flex-2 h-full flex justify-center items-center  cursor-pointer pl-1 border-r">
                    <div className="flex-2 h-full flex justify-center items-center  cursor-pointer">
                                <div  className=" flex-2 flex justify-center items-center">
                                    <div className="w-full h-full flex gap-2 mx-2">
                                        <Tooltip 
                                        title="Stroke" 
                                        arrow 
                                        sx={{zIndex:"2000"}}
                                        open={StroketooltipOpen}
                                        onMouseEnter={handleMouseEnterStroke}
                                        onMouseLeave={handleMouseLeaveStroke}
                                        >
                                            <Box component={"div"}
                                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                                            onClick={handleClickStroke}
                                            >
                                                <RxBorderWidth  
                                                className="text-slate-700 text-xl mr-1 min-[55px]:text-sm lg:text-xl"
                                                />
                                            </Box >
                                        </Tooltip>
                                        <div className="border-[1.5px] rounded-sm ">
                                            <input
                                             type="number" 
                                             className="text-center min-[55px]:w-11 min-[55px]:h-7 lg:w-14 min-[55px]:text-[8px] lg:text-[12px] appearance-none"  
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                    </div>

                </div>
                <div className="flex-1 flex h-full justify-start items-center ml-4">
                  
                  <div className="w-44 flex justify-center items-center gap-3">
                    <div className="flex justify-center items-center">
                      <Tooltip 
                      title="Rotate shape"
                      sx={{zIndex:"2000"}}
                      arrow
                      >
                        <Box
                        component={"div"}

                        >

                        <MdRotate90DegreesCw className="text-slate-700 text-xl mr-1 min-[55px]:text-sm lg:text-xl"/>
                        </Box>
                      </Tooltip>
                    </div>
                  <Slider
                  value={RotateValue}
                  onChange={handleRotate}
                  
                  aria-labelledby="input-slider"
                  min={-180}
                  max={180}
                  
                  sx={{
                    "& .MuiSlider-thumb": {
                      width: 12, // Adjust thumb size (optional)
                      height: 12, // Adjust thumb size (optional)
                      boxShadow: "none", // Remove glow effect
                      transition: "none", // Disable animations
                      "&:hover": {
                        boxShadow: "none", // No effect on hover
                      },
                    },
                    "& .MuiSlider-thumb:focus, & .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-active": {
                      boxShadow: "none", // Remove all hover, focus, and active effects
                    },
                    "& .MuiSlider-track": {
                      transition: "none", // Remove track animations
                    },
                    "& .MuiSlider-rail": {
                      transition: "none", // Remove rail animations
                    },
                  }}
                  
                />
                  <input type="number"  value={RotateValue}  className="w-14 border rounded-sm text-center" onChange={handleRotate}/>
                  </div>



                </div>
            </div>

        </div>


        
    </div>
    )
}