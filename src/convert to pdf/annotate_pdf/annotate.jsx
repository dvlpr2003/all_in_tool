import axios from "axios"
import Loader from "../../Loader/Loader"
import DashboardEdit from "./DashboardEdit"
import { DashboardNav } from "./Nav/DashboardNav"
import "./style/index.css"
import { useState,useEffect,useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import {setDonwloadID} from "./wordtopdfSlicer"
import { useNavigate } from "react-router-dom"
import { DashboardNavMobRes } from "./Nav/DashboardNavMobRes"
import { NavRight } from "./Nav/NavRight"
import { HiPencil } from "react-icons/hi2";
import { PiTextTFill } from "react-icons/pi";
import { RiShapesFill } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa6";
import { MdPanTool } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsArrowClockwise } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { BsLayersFill } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";










export default function AnnotatePdf(){
    const [isLoading,setLoading]=useState(false)
    const [isLeftOpen,setLeftOpen]=useState(false)
    const [isRightOpen,setRightOpen]=useState(false)
    const [value,setValue]=useState('')

    const formdata = new FormData()
    const wordItems = useSelector((state)=>state.word.WordItems)
    const globDispatch = useDispatch()
    const navigate = useNavigate()

    async function handleConvert(){
            formdata.append("items",JSON.stringify(wordItems))
            if (wordItems.length !== 0 ){
                    
                try{
                    setLoading(true)
                    const response = await axios.post("http://127.0.0.1:8000/convert_to_pdf/convert-word-to-pdf/",formdata,{
                        headers: {  
                            'Content-Type': 'multipart/form-data',  
                        }, 
                    });
                   
                    globDispatch(setDonwloadID(response.data["id"]))
                    setLoading(false)
                    navigate("/word-to-pdf/download")
                }catch(error){
                    setLoading(false)
                    console.log(error)
                }
    }


    }
    const [zoom, setZoom] = useState(1); // Initial zoom level of 1
    const [offsetX, setOffsetX] = useState(0); // Mouse X offset
    const [offsetY, setOffsetY] = useState(0); // Mouse Y offset
    const containerRef = useRef(null);
  
    const baseWidthLev1Lev2 = 334.26; // Initial width for lev-1 and lev-2
    const incrementLev1Lev2 = 12.38; // Increment value for each zoom level for lev-1 and lev-2
  
    const baseWidthLev4 = 312.3; // Initial width for lev-4 and img
    const incrementWidthLev4 = 11.9; // Increment value for lev-4 width
  
    const baseHeightLev4 = 454.68; // Initial height for lev-4 and img
    const incrementHeightLev4 = 16.84; // Increment value for lev-4 height
  
    // Handle zoom only when Ctrl + Mouse Wheel is used
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    const handleWheel = (e) => {
      if (e.ctrlKey) { // Check if Ctrl is pressed
        e.preventDefault(); // Prevent default zoom behavior of the browser
  
        if (e.deltaY < 0) {
          // Scrolling up (zoom in)
          setZoom((prevZoom) => Math.min(prevZoom + 1, 2000)); // Increase zoom level by 1
        } else {
          // Scrolling down (zoom out)
          setZoom((prevZoom) => Math.max(prevZoom - 1, 1)); // Decrease zoom level by 1
        }
      }
    };
  
    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        const wheelListener = (e) => {
          if (e.ctrlKey) {
            e.preventDefault();
            handleWheel(e);
          }
        };
        container.addEventListener('wheel', wheelListener, { passive: false });
        return () => {
          container.removeEventListener('wheel', wheelListener);
        };
      }
    }, [handleWheel]);
  
  
  
    // Calculate new width based on zoom level
    const calculateZoomedWidth = (baseWidth, increment) => {
      return Math.max(baseWidth, baseWidth + (increment * (zoom - 1)));
    };
  
    const newWidthLev1 = calculateZoomedWidth(baseWidthLev1Lev2, incrementLev1Lev2); // New width for lev-1
    const newWidthLev2 = calculateZoomedWidth(baseWidthLev1Lev2, incrementLev1Lev2); // New width for lev-2
    const newWidthLev4 = calculateZoomedWidth(baseWidthLev4, incrementWidthLev4); // New width for lev-4
    const newHeightLev4 = calculateZoomedWidth(baseHeightLev4, incrementHeightLev4); // New height for lev-4
    const handleInputChange = (e) => {
        // Get the current cursor position
        const cursorPosition = e.target.selectionStart;
        
        // Get the input value without the % symbol
        let inputValue = e.target.value.replace(/%/g, "").replace(/[^0-9]/g, "");
        
        // Handle backspace - if the length is decreasing, remove the last digit
        if (e.target.value.length < value.length && value.length > 0) {
          inputValue = inputValue.slice(0, -1);
        }
        
        // Don't allow values over 100
        if (parseInt(inputValue) > 100) {
          inputValue = "100";
        }
        
        // Add the % symbol if we have a number
        if (inputValue) {
          setValue(inputValue + "%");
        } else {
          setValue("");
        }
      };
    return(
        <> 
            <div className='main w-screen  bg-slate-100 overflow-auto  border border-black relative '
                onWheel={handleWheel}
                onContextMenu={handleContextMenu}                                           
                ref={containerRef}
            >
                <div className=" bg-inherit absolute top-[80px]  z-50 h-[60px] w-full flex justify-center items-center  ">
                    <div className="w-full h-full relative flex justify-center items-center">
                        <div className=" shadow-xl w-1/2 h-full absolute bg-white flex items-center">

                            <div className="flex-1 flex h-full justify-center items-center ">
                                <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                                    <div className=" flex-1 flex justify-center items-center"><HiPencil  className="text-slate-700 text-xl"/></div>
                                </div>
                                <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                                    <div className="flex-1 flex justify-center items-center"> <PiTextTFill  className="text-slate-700 text-xl"/></div>
                                </div>
                                <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                                    <div className="flex-1 flex justify-center items-center"><RiShapesFill  className="text-slate-700 text-xl"/></div>
                                </div>
                                <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                                    <div className="flex-1 flex justify-center items-center"><FaRegImage className="text-slate-700"/></div>
                                </div>
                                <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                                    <div className="flex-1 flex justify-center items-center"><MdPanTool  className="text-slate-700 text-xl"/></div>
                                </div>

                            </div>
                            <div className="flex-1 flex h-full justify-center items-center ">
                                <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                                    <div className="flex-1 flex justify-center items-center"><BsArrowClockwise  className="text-slate-700 text-xl"/></div>

                                </div>
                                <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                                    <div className="flex-1 flex justify-center items-center"><BsArrowCounterclockwise className="text-slate-700 text-xl"/></div>

                                </div>
                                <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                                    <div className="flex-1 flex justify-center items-center"><MdDelete  className="text-slate-700 text-xl"/></div>

                                </div>
                                <div className="flex-1 h-full flex justify-center items-center cursor-pointer ">
                                    <div className="flex-1 flex justify-center items-center"><FaSave className="text-slate-700 text-xl" /></div>

                                </div>

                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className=" bg-transparent absolute bottom-[20px]  z-50 h-[60px] w-full flex justify-center items-center  ">
                    <div className="w-full h-full relative flex justify-center items-center">
                        <div className=" bg-white shadow-xl w-1/2 h-full absolute  flex items-center">
                            <div className="flex-1 flex h-full justify-center items-center ">
                                <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                                    <div className="flex-1 flex justify-center items-center"><FiMinusCircle className="text-slate-700 text-xl"/></div>

                                </div>
                                <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                                    <input type="text" value={value} onChange={handleInputChange} className="input-percent border  w-12 h-8 rounded-sm bg-slate-50 text-center outline-none " style={{content:"%"}}/>

                                </div>
                                <div className="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
                                    <div className="flex-1 flex justify-center items-center"><FiPlusCircle  className="text-slate-700 text-xl"/></div>

                                </div>


                            </div>

                            <div className="flex-1 flex h-full justify-center items-center ">
                                <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                                    <div className="flex-1 flex justify-center items-center"> <MdKeyboardArrowLeft className="text-slate-700 text-xl"/></div>
                                </div>
                                <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                                    <div className="flex-1 flex justify-center items-center"><RiShapesFill  className="text-slate-700 text-xl"/></div>
                                </div>
                                <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                                    <div className="flex-1 flex justify-center items-center"><MdKeyboardArrowRight  className="text-slate-700 text-xl"/></div>
                                </div>
                                <div className="flex-1 h-full flex justify-center items-center border-r cursor-pointer">
                                    <div className=" flex-1 flex justify-center items-center"><BsLayersFill  className="text-slate-700 text-xl"/></div>
                                </div>

                            </div>
                        </div>

                    </div>
                    
                </div>
                        
                        <div className='small-div h-screen bg-slate-100 flex items-stretch box-border overflow-hidden pt-[112px]' 
                        >
                            <div className='flex-1  overflow-auto h-auto  p-0  box-border overflow-y-auto overflow-x-auto relative text-center'
                            >
                            <div className='bg-slate-100 m-0 p-0 border-0 align-baseline'>
                            <div
                                className="lev-1 flex justify-center  mt-0 mb-0 mr-auto ml-auto p-0 relative transition-none flex-wrap text-center "
                                style={{
                                width: newWidthLev1 + 'px', 
                                }}
                            >
                                <div
                                className="lev-2 flex justify-center  flex-wrap m-[40px] relative max-w-none shadow-none text-center"
                                style={{
                                    width: newWidthLev2 + 'px', 
                                }}
                                >
                                {[1].map((index) => (
                                <div
                                    className="lev-3 block box-border text-center"
                                    style={{
                                    padding: `${1.2 * zoom}px`, // Scale padding based on zoom
                                    }}
                                >
                                    
                                    <div
                                        className="lev-4 overflow-hidden  shadow-lg relative select-none"
                                        style={{
                                        width: `${newWidthLev4}px`, // Adjust width based on zoom for lev-4
                                        height: `${newHeightLev4}px`, // Adjust height based on zoom for lev-4
                                        zIndex:0
                                        }}
                                        key={index}
                                    >
                                        <img
                                        src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg"
                                        alt=""
                                        style={{
                                            width: `${newWidthLev4}px`, // Adjust width based on zoom for img
                                            height: `${newHeightLev4}px`, // Adjust height based on zoom for img
                                        }}
                                        className='pointer-events-none align-middle overflow-clip border-0 image-orientation-from-image'
                                        />
                                    </div>
                                </div>
                                    ))}
                                </div>
                            </div>



                            </div>


                            </div>






                            

                        </div>

            </div>
        </>
    )
}