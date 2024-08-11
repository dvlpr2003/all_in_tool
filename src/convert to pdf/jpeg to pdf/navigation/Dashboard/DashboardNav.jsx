import { PiSquareLogoDuotone } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { RxBorderWidth } from "react-icons/rx";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { HiOutlineUpload } from "react-icons/hi";


export function DashboardNav({Orientation,Margin,PageSize,Border,handleConvert,dispatch,array}){

    return(
    

        <div className="w-72  h-full rounded-md lg:flex min-[55px]:hidden flex-col  gap-2 items-center  ">
            <div className="  flex flex-col  gap-4 items-center mt-7 w-full px-3 ">
                {/* margin */}
            <div 
            className={`  rounded-2xl  flex  items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer ${Margin?"border-1 bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`} 
            onClick={()=>{dispatch({"type":"margin"})}}
            
            >
                <div>
                    <PiSquareLogoDuotone className={`text-2xl  group-hover:text-white ${Margin?"text-white":""} icon-color-ind`}/>
                </div>
                <span className={`font-normal  group-hover:text-white ${Margin?"text-white":""}`}>Margin</span>
                {/* <div className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className={`group-hover:text-indigo-600 ${Margin?"text-indigo-600":""}`}/></div> */}

            </div>



            {/* page orientation */}
            <div 
            className={` rounded-2xl  flex  items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer relative ${Orientation?" bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`} 
            onClick={()=>{dispatch({"type":"orientation"})}}
            >
                <div className="">
                <HiOutlineRectangleGroup className={`text-2xl group-hover:text-white ${Orientation?"text-white":""} icon-color-ind`}/>
                </div>
                <span className={`font-normal group-hover:text-white ${Orientation?"text-white":""} `}>Page Orientation</span>
                {/* <div  className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className={`group-hover:text-indigo-600 ${Orientation?"text-indigo-600":""}`}/></div> */}
              

            </div>


            {/* page size */}
            <div 
            className={` rounded-2xl  flex items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer ${PageSize?"bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`} 
            onClick={()=>{dispatch({"type":"page size"})}}
            >
                <div>
                <MdOutlineDocumentScanner className={`text-2xl group-hover:text-white ${PageSize?"text-white":""} icon-color-ind`}/>

                </div>
                <span className={`font-normal group-hover:text-white ${PageSize?"text-white":""}`}>Page size</span>
                {/* <div  className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className={`group-hover:text-indigo-600 ${PageSize?"text-indigo-600":""}`}/></div> */}

            </div>
            {/* border */}
            <div 
            className={`  rounded-2xl flex items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer ${Border?" bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`}
            onClick={()=>{dispatch({"type":"border"})}}
            >
                <div>

                <RxBorderWidth className={`text-2xl group-hover:text-white ${Border?"text-white":""} icon-color-ind`}/>
                </div>

                <span className={`font-normal group-hover:text-white ${Border?"text-white":""}`}>Border</span>
                {/* <div  className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className={`group-hover:text-indigo-600 ${Border?"text-indigo-600":""}`}/></div> */}

            </div>
            </div>

            <div className="h-auto  mt-auto mb-2  w-full px-3 lg:flex flex-col min-[55px]:hidden justify-center items-center cursor-pointer ">
                {/* <div className=" border  rounded-md mb-10 flex  items-center justify-center gap-2 w-full py-3 pl-1 hover:shadow-md" style={{backgroundColor:"#6C448E"}}>
                <HiOutlineUpload className="text-2xl text-white"/>

                <span className="font-bold text-white ">Upload image</span>
                </div> */}
                <div className=" border  rounded-md  flex  items-center justify-center gap-2 w-full py-3 pl-1 bg-indigo-600  hover:shadow-md" onClick={handleConvert}>
                    <span className="font-bold text-white ">Convert to PDF</span>
                <IoArrowForwardCircleSharp className="text-2xl text-white"/>

                </div>

            </div>

               

        </div>
    
    )
}