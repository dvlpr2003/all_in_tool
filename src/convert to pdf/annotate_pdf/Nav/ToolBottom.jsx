import { useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { BsLayersFill } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbBoxMultiple } from "react-icons/tb";
import { Box } from "@mui/material";
import {Tooltip} from "@mui/material";
import { useState } from "react";
export const ToolBottom =({isLeftOpen,isRightOpen,setIsLeftOpen,setIsRightOpen,setZoom,value,setValue,isWidthInRange,setIsWidthInRange})=>{
    const checkWidthInRange = () => {
        const width = window.innerWidth;
        setIsWidthInRange(width >= 55 && width <= 950);
      };
      useEffect(() => {
        // Check initial width on mount
        checkWidthInRange();
  
        
        // Add resize listener to update width range status
        window.addEventListener('resize', checkWidthInRange);
        
        // Clean up listener on unmount
        return () => window.removeEventListener('resize', checkWidthInRange);
    }, []);
  

    const handleIncrement=()=>{
        setZoom((e)=>e+1)

    }
    const handleDecrement=()=>{
        setZoom((e)=>e-1)
    }
    const handleRideSlide = ()=>{
        setIsRightOpen((e)=>!e)
        if(isWidthInRange){
            setIsLeftOpen(false)

        }
    }
    const handleCloseLft=()=>{
        setIsLeftOpen((e)=>!e)
        if(isWidthInRange){
            setIsRightOpen(false)

        }
        
    }
    const handleInputChange = (e) => {
        
        const cursorPosition = e.target.selectionStart;
        let inputValue = e.target.value.replace(/%/g, "").replace(/[^0-9]/g, "");
        if (e.target.value.length < value.length && value.length > 0) {
          inputValue = inputValue.slice(0, -1);
        }
        if (parseInt(inputValue) > 200) {
          inputValue = "200";
        }
        
        if (inputValue) {
          setValue(inputValue + "%");
          setZoom(Number(inputValue))
        } else {
          setValue("");
        }
      };






    // All-Img- tooltip
    const [AllImgtooltipOpen, setAllImgTooltipOpen] = useState(false);
    const handleClickAllImg = () => {
      setAllImgTooltipOpen(false); 
    };
  
    const handleMouseEnterAllImg = () => {
      setAllImgTooltipOpen(true); 
    };
  
    const handleMouseLeaveAllImg = () => {
      setAllImgTooltipOpen(false);
    };

    // Zoom-Out tooltip
    const [zoomOttooltipOpen, setzoomOtTooltipOpen] = useState(false);
    const handleClickzoomOt = () => {
      setzoomOtTooltipOpen(false); 
    };
  
    const handleMouseEnterzoomOt = () => {
      setzoomOtTooltipOpen(true); 
    };
  
    const handleMouseLeavezoomOt = () => {
      setzoomOtTooltipOpen(false);
    };

    // Zoom-In tooltip
    const [zoomIntooltipOpen, setzoomInTooltipOpen] = useState(false);
    const handleClickzoomIn = () => {
      setzoomInTooltipOpen(false); 
    };
  
    const handleMouseEnterzoomIn = () => {
      setzoomInTooltipOpen(true); 
    };
  
    const handleMouseLeavezoomIn = () => {
      setzoomInTooltipOpen(false);
    };

    // Previous tooltip
    const [PretooltipOpen, setPreTooltipOpen] = useState(false);
    const handleClickPre = () => {
      setPreTooltipOpen(false); 
    };
  
    const handleMouseEnterPre = () => {
      setPreTooltipOpen(true); 
    };
  
    const handleMouseLeavePre = () => {
      setPreTooltipOpen(false);
    };

    // Previous tooltip
    const [NxttooltipOpen, setNxtTooltipOpen] = useState(false);
    const handleClickNxt = () => {
      setNxtTooltipOpen(false); 
    };
  
    const handleMouseEnterNxt = () => {
      setNxtTooltipOpen(true); 
    };
  
    const handleMouseLeaveNxt = () => {
      setNxtTooltipOpen(false);
    };
    
    // Previous tooltip
    const [LayertooltipOpen, setLayerTooltipOpen] = useState(false);
    const handleClickLayer = () => {
      setLayerTooltipOpen(false); 
    };
  
    const handleMouseEnterLayer = () => {
      setLayerTooltipOpen(true); 
    };
  
    const handleMouseLeaveLayer = () => {
      setLayerTooltipOpen(false);
    };


    return(
        <div className=" bg-transparent absolute lg:bottom-[20px] bottom-[0px]  z-50 h-[40px] w-full flex justify-center items-center  " style={{touchAction:"auto"}}>
        <div className="lg:w-1/2 min-[55px]:w-full h-full relative flex justify-center items-center">
            <div className=" bg-white shadow-xl w-full h-full absolute  flex items-center">
                {/* All-Img Button */}
                <div className="flex-1 flex h-full justify-center items-center ">
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r" onClick={handleCloseLft}>
                        <div className="flex-1 flex justify-center items-center" >
                        <Tooltip 
                        title="All images" 
                        arrow 
                        sx={{zIndex:"2000"}}
                        open={AllImgtooltipOpen}
                        onMouseEnter={handleMouseEnterAllImg}
                        onMouseLeave={handleMouseLeaveAllImg}
                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickAllImg} 
                            >
                            <TbBoxMultiple className={`  ${isLeftOpen?"text-blue-600":"text-slate-700"} min-[55px]:text-sm lg:text-xl`}/>
                            </Box>
                        </Tooltip>
                        </div>

                    </div>
                    {/* Zoom-out Button */}
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r" onClick={handleDecrement}>
                        <div className="flex-1 flex justify-center items-center" >
                        <Tooltip 
                        title="Zoom out" 
                        arrow 
                        sx={{zIndex:"2000"}}
                        open={zoomOttooltipOpen}
                        onMouseEnter={handleMouseEnterzoomOt}
                        onMouseLeave={handleMouseLeavezoomOt}
                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickzoomOt} 

                            >
                            <FiMinusCircle className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box>
                        </Tooltip>

                        </div>

                    </div>
                    {/* Zoom Percentage */}
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <input type="text" value={value} onChange={handleInputChange} className="input-percent border  w-12 h-8 rounded-sm bg-slate-50 text-center outline-none  " style={{content:"%"}}/>

                    </div>
                    {/* Zoom-in Button */}
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r" onClick={handleIncrement}>
                        <div className="flex-1 flex justify-center items-center" >
                        <Tooltip 
                        title="Zoom in" 
                        arrow 
                        sx={{zIndex:"2000"}}
                        open={zoomIntooltipOpen}
                        onMouseEnter={handleMouseEnterzoomIn}
                        onMouseLeave={handleMouseLeavezoomIn}
                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickzoomIn} 
                            >
                            <FiPlusCircle  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box>
                        </Tooltip>

                        </div>

                    </div>

                </div>

                <div className="flex-1 flex h-full justify-center items-center ">
                    {/* Previouse-Img Button */}
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center" >
                        <Tooltip 
                        title="Previous image" 
                        arrow 
                        sx={{zIndex:"2000"}}
                        open={PretooltipOpen}
                        onMouseEnter={handleMouseEnterPre}
                        onMouseLeave={handleMouseLeavePre}

                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickPre} 

                            >
                             <MdKeyboardArrowLeft className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box>
                        </Tooltip>
                            
                        </div>
                    </div>
                    {/* Total-img  */}
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center ">
                            <div className="flex justify-center items-center  w-14">
                                <input type="number"  className="input-percent max-w-8 w-auto outline-none text-center"/>
                        
                                <div className="text-center text-lg">|</div>
                                <div className="mr-1 ml-1 pt-1">2</div>
                            </div>
                            </div>
                    </div>

                    {/* Next-Img Button */}
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center" >
                        <Tooltip 
                        title="Next image" 
                        arrow 
                        sx={{zIndex:"2000"}}
                        open={NxttooltipOpen}
                        onMouseEnter={handleMouseEnterNxt}
                        onMouseLeave={handleMouseLeaveNxt}
                        
                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickNxt} 
                            
                            >
                            <MdKeyboardArrowRight  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/>
                            </Box>
                        </Tooltip>
                        </div>
                    </div>

                    {/* Layer Button */}
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer" onClick={handleRideSlide}>
                        <div className=" flex-1 flex justify-center items-center" >
                        <Tooltip 
                        title="Layers" 
                        arrow 
                        sx={{zIndex:"2000"}}
                        open={LayertooltipOpen}
                        onMouseEnter={handleMouseEnterLayer}
                        onMouseLeave={handleMouseLeaveLayer}

                        >
                            <Box 
                            component={"div"} 
                            sx={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}
                            onClick={handleClickLayer} 
                            
                            >
                            <BsLayersFill  className={`  ${isRightOpen?"text-blue-600":"text-slate-700"} min-[55px]:text-sm lg:text-xl`}/>
                            </Box>
                        </Tooltip>

                        </div>
                    </div>

                </div>
            </div>

        </div>
        
    </div>
    )
}