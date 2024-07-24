
import { PiSquareLogoDuotone } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxBorderWidth } from "react-icons/rx";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { IoTabletPortraitOutline } from "react-icons/io5";
import { RxMargin } from "react-icons/rx";
import { TbBoxMargin } from "react-icons/tb";

import { useState } from "react";











export default function JpgToPdfEdit(){
    const [Orientation,setOrientation]=useState(false)
    const [Margin,setMargin]=useState(false)
    const [PageSize,setPageSize]=useState(false)
    const [Border,setBorder]=useState(false)
    return(
        <>
        <section className="h-screen pt-28 w-full  flex justify-center">
            <div className=" w-full max-w-screen-2xl h-full bg-inherit flex">
                {/* dashboard nav */}
                <div className="h-full">  
                    <DashboardNav setOrientation={setOrientation} Orientation={Orientation} Margin={Margin} setMargin={setMargin} PageSize={PageSize} setPageSize={setPageSize} Border={Border} setBorder={setBorder}/>
                </div>
                {/* dashboard edit container*/}
                <div className="border border-blue-600 w-full flex  justify-center">

                    
                </div>

            </div>
            

        </section>
        </>
    )
}

function DashboardNav({setOrientation,Orientation,setMargin,Margin,PageSize,setPageSize,setBorder,Border}){
    return(
    
        <div className="w-72 border  h-full rounded-md bg-white flex flex-col  gap-2 items-center ">
            <div className=" flex flex-col  gap-4 items-center mt-7 w-full px-3">
                {/* margin */}
            <div className={`border  rounded-lg  flex  items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer ${Margin?"border-1 border-indigo-600":""} group hover:border-1 hover:border-indigo-600  transition-all duration-150`} onClick={()=>{setMargin((e)=>!e); setBorder(false); setOrientation(false); setPageSize(false)}}>
                <div>
                    <PiSquareLogoDuotone className={`text-2xl  group-hover:text-indigo-600 ${Margin?"text-indigo-600":""}`}/>
                </div>
                <span className={`font-normal  group-hover:text-indigo-600 ${Margin?"text-indigo-600":""}`}>Margin</span>
                <div className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className={`group-hover:text-indigo-600 ${Margin?"text-indigo-600":""}`}/></div>

            </div>



            {/* page orientation */}
            <div className={`border  rounded-lg  flex  items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer relative ${Orientation?"border-1 border-indigo-600":""} group hover:border-1 hover:border-indigo-600 transition-all duration-150`} onClick={()=>{setMargin(false); setBorder(false); setOrientation((e)=>!e); setPageSize(false)}}>
                <div className="">
                <HiOutlineRectangleGroup className={`text-2xl group-hover:text-indigo-600 ${Orientation?"text-indigo-600":""}`}/>
                </div>
                <span className={`font-normal group-hover:text-indigo-600 ${Orientation?"text-indigo-600":""} `}>Page Orientation</span>
                <div  className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className={`group-hover:text-indigo-600 ${Orientation?"text-indigo-600":""}`}/></div>
              

            </div>


            {/* page size */}
            <div className="border  rounded-lg  flex items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer group hover:border-1 hover:border-indigo-600 transition-all duration-150">
                <div>
                <MdOutlineDocumentScanner className="text-2xl group-hover:text-indigo-600"/>

                </div>
                <span className="font-normal group-hover:text-indigo-600">Page size</span>
                <div  className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className="group-hover:text-indigo-600"/></div>

            </div>
            <div className="border  rounded-lg flex items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer group hover:border-1 hover:border-indigo-600 transition-all duration-150">
                <div>

                <RxBorderWidth className="text-2xl group-hover:text-indigo-600"/>
                </div>

                <span className="font-normal group-hover:text-indigo-600">Border</span>
                <div  className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className="group-hover:text-indigo-600"/></div>

            </div>
            </div>
            <div className="h-24 mt-auto w-full px-3 flex justify-center items-center cursor-pointer">
                <div className=" border  rounded-md  flex  items-center justify-center gap-2 w-full py-3 pl-1 bg-indigo-600 hover:bg-indigo-500">
                    <span className="font-bold text-white ">Convert to PDF</span>
                <IoArrowForwardCircleSharp className="text-2xl text-white"/>

                </div>

            </div>

                {/*margin optioins */}
                <div className={`absolute border  w-52 h-60 left-80 top-36 ${Margin?"flex":"hidden"} flex-col justify-center gap-5 px-3 rounded-md`}>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    <TbBoxMargin className="group-hover:text-lg group-hover:text-indigo-600"/>
                    <span className="mt-3 group-hover:text-indigo-600">Small margin</span>
                    </div>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    <RxMargin className="group-hover:text-lg group-hover:text-indigo-600" />
                    <span className="mt-3 group-hover:text-indigo-600">Big margin</span>
                    </div>
                </div>
            {/* orientaion options */}
            <div className={`absolute border  w-52 h-60 left-80 top-48 ${Orientation?"flex":"hidden"} flex-col justify-center gap-5 px-3 rounded-md`}>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    <IoTabletLandscapeOutline className="group-hover:text-lg group-hover:text-indigo-600"/>
                    <span className="mt-3 group-hover:text-indigo-600">Landscape</span>
                    </div>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    <IoTabletPortraitOutline className="group-hover:text-lg group-hover:text-indigo-600" />
                    <span className="mt-3 group-hover:text-indigo-600">Portrait</span>
                    </div>
                </div>

        </div>
    
    )
}

function DashboardEdit(){
    return(
        <>
                    <div className="flex m-7">
                    <div className="border border-black w-48 h-60 bg-blue-700 flex items-center justify-center rounded-lg py-4 px-2 ">
                        <div className=" bg-white w-full h-auto flex justify-center items-center ">
                            <img src="/img/sakthi.png" alt=""  className="w-36 h-auto " draggable={false}/>
                        </div>
                        </div>

                    </div>
        </>
    )
}



{/* <div className="flex gap-2 mt-1">
<div className="border border-slate-100 bg-slate-100 w-36 h-20 flex justify-center items-center rounded-md shadow-sm group hover:border-indigo-600 hover:border-2">
<RxMargin className="text-3xl text-slate-500 group-hover:text-indigo-600 group-hover:text-5xl" />

</div>
<div className="border border-slate-100 bg-slate-100 w-36 h-20 flex justify-center items-center rounded-md shadow-sm group hover:border-indigo-600 hover:border-2"> 
<TbBoxMargin className="text-3xl text-slate-500 group-hover:text-indigo-600 group-hover:text-5xl" />

</div>
</div> */}