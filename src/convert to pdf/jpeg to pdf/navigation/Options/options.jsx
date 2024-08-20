

import { IoTabletLandscapeOutline } from "react-icons/io5";
import { IoTabletPortraitOutline } from "react-icons/io5";
import { RxMargin } from "react-icons/rx";
import { TbBoxMargin } from "react-icons/tb";
import { MdOutlineBorderStyle } from "react-icons/md";
import { TbBorderRadius } from "react-icons/tb";



export function Options({array,Orientation,Margin,Border,PageSize,setMargin,setOrientation,setPageSize,Margin_dispatch,Border_dispatch,Orientation_dispatch,PageSz_dispatch,stateMargin,formData}){

    
    return(
        <>
         {/*margin optioins */}
         <div className={`absolute border bg-blue-400  w-52 h-auto left-5 top-5 ${Margin?"lg:flex":"hidden"} flex-col justify-center gap-5 px-3 py-3 rounded-md min-[55px]:hidden z-40`}>
                    <div 
                    className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" 
                    onClick={()=>{Margin_dispatch({"type":""});setMargin(false)}}
                    >
                    <span className="mt-3 group-hover:text-indigo-600">None</span>
                    </div>  
                    <div 
                    className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" 
                    onClick={()=>{Margin_dispatch({"type":"small-m"});setMargin(false)}}
                    >
                    <TbBoxMargin className="group-hover:text-lg group-hover:text-indigo-600"/>
                    <span className="mt-3 group-hover:text-indigo-600">Small margin</span>
                    </div>
                    <div 
                    className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" 
                    onClick={()=>{Margin_dispatch({"type":"big-m"});setMargin(false)}}
                    >
                    <RxMargin className="group-hover:text-lg group-hover:text-indigo-600" />
                    <span className="mt-3 group-hover:text-indigo-600">Big margin</span>
                    </div>
                </div>
            {/* orientaion options */}
            <div className={`absolute border  bg-white  w-52 h-auto left-4 top-16 ${Orientation?"lg:flex":"hidden"} flex-col justify-center gap-5 px-3 py-3 rounded-md min-[55px]:hidden z-40`}>
                    <div 
                    className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" 
                    onClick={()=>{Orientation_dispatch({"type":"land"});setOrientation(false)}}
                    >
                    <IoTabletLandscapeOutline className="group-hover:text-lg group-hover:text-indigo-600"/>
                    <span className="mt-3 group-hover:text-indigo-600">Landscape</span>
                    </div>
                    <div 
                    className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" 
                    onClick={()=>{Orientation_dispatch({"type":"port"});setOrientation(false)}}
                    >
                    <IoTabletPortraitOutline className="group-hover:text-lg group-hover:text-indigo-600" />
                    <span className="mt-3 group-hover:text-indigo-600">Portrait</span>
                    </div>
                </div>
                {/* page size options*/}
                <div className={`absolute border   bg-white w-52 h-auto left-4 top-24 ${PageSize?"lg:flex":"hidden"} flex-col justify-center gap-5 px-3 py-3 rounded-md min-[55px]:hidden z-40`}>
                    <div 
                    className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" 
                    onClick={()=>{PageSz_dispatch({"type":"auto"});setPageSize(false)}}
                    >
                    {/* <IoTabletLandscapeOutline className="group-hover:text-lg group-hover:text-indigo-600"/> */}
                    <span className="mt-3 group-hover:text-indigo-600">Auto</span>
                    </div>
                    <div 
                    className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" 
                    onClick={()=>{PageSz_dispatch({"type":"a4"});setPageSize(false)}}
                    >
                    {/* <IoTabletPortraitOutline className="group-hover:text-lg group-hover:text-indigo-600" /> */}
                    <span className="mt-3 group-hover:text-indigo-600">A4</span>
                    </div>
                    <div 
                    className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" 
                    onClick={()=>{PageSz_dispatch({"type":"us-letter"});setPageSize(false)}}
                    >
                    {/* <IoTabletPortraitOutline className="group-hover:text-lg group-hover:text-indigo-600" /> */}
                    <span className="mt-3 group-hover:text-indigo-600">Letter(US)</span>
                    </div>
                </div>
                {/*Border options*/}
                {/* <div className={`absolute border  bg-white  w-52 h-auto left-4 top-48 ${Border?"lg:flex":"hidden"} flex-col justify-center gap-5 px-3 py-3 rounded-md min-[55px]:hidden z-40`}>
                    <div 
                    className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" 
                    onClick={()=>{Border_dispatch({"type":"normal"});setBorder(false)}}
                    >
                    <MdOutlineBorderStyle className="group-hover:text-lg group-hover:text-indigo-600"/>
                    <span className="mt-3 group-hover:text-indigo-600">Normal</span>
                    </div>
                    <div 
                    className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" 
                    onClick={()=>{Border_dispatch({"type":"rounded"});setBorder(false)}}
                    >
                    <TbBorderRadius className="group-hover:text-lg group-hover:text-indigo-600" />
                    <span className="mt-3 group-hover:text-indigo-600">Rounded</span>
                    </div>
                </div> */}
        </>
    )
}

