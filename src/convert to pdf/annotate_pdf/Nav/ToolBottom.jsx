import { useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { BsLayersFill } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbBoxMultiple } from "react-icons/tb";

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
    return(
        <div className=" bg-transparent absolute lg:bottom-[20px] bottom-[0px]  z-30 h-[40px] w-full flex justify-center items-center  " style={{touchAction:"auto"}}>
        <div className="lg:w-1/2 min-[55px]:w-full h-full relative flex justify-center items-center">
            <div className=" bg-white shadow-xl w-full h-full absolute  flex items-center">
                <div className="flex-1 flex h-full justify-center items-center ">
                <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r" onClick={handleCloseLft}>
                        <div className="flex-1 flex justify-center items-center" ><TbBoxMultiple className={`  ${isLeftOpen?"text-blue-600":"text-slate-700"} min-[55px]:text-sm lg:text-xl`}/></div>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r" onClick={handleDecrement}>
                        <div className="flex-1 flex justify-center items-center" ><FiMinusCircle className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                        <input type="text" value={value} onChange={handleInputChange} className="input-percent border  w-12 h-8 rounded-sm bg-slate-50 text-center outline-none  " style={{content:"%"}}/>

                    </div>
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r" onClick={handleIncrement}>
                        <div className="flex-1 flex justify-center items-center" ><FiPlusCircle  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>

                    </div>

                </div>

                <div className="flex-1 flex h-full justify-center items-center ">
                    
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center" > <MdKeyboardArrowLeft className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center ">
                            <div className="flex justify-center items-center  w-14">
                                <input type="number"  className="input-percent max-w-8 w-auto outline-none text-center"/>
                        
                                <div className="text-center text-lg">|</div>
                                <div className="mr-1 ml-1 pt-1">2</div>
                            </div>
                            </div>
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                        <div className="flex-1 flex justify-center items-center" ><MdKeyboardArrowRight  className="text-slate-700 min-[55px]:text-sm lg:text-xl"/></div>
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center cursor-pointer" onClick={handleRideSlide}>
                        <div className=" flex-1 flex justify-center items-center" ><BsLayersFill  className={`  ${isRightOpen?"text-blue-600":"text-slate-700"} min-[55px]:text-sm lg:text-xl`}/></div>
                    </div>

                </div>
            </div>

        </div>
        
    </div>
    )
}