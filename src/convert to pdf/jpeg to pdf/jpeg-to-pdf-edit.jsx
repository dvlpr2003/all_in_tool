
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
import { MdOutlineBorderStyle } from "react-icons/md";
import { TbBorderRadius } from "react-icons/tb";
import { useReducer, useState } from "react";
import DashboardEdit, { AddImg } from "./DashboardEdit";
import "./style/index.css"


export default function JpgToPdfEdit(){
    const [Orientation,setOrientation]=useState(false)
    const [Margin,setMargin]=useState(false)
    const [PageSize,setPageSize]=useState(false)
    const [Border,setBorder]=useState(false)
    const [isPopup,setPopup]=useState(false)
    const [state,dispatch]=useReducer(reducer,null)
    function reducer(state,action){
        if(action.type === "margin"){
            setMargin((e)=>!e); 
            setBorder(false);
            setOrientation(false);
            setPageSize(false)
        }
        if(action.type==="orientation"){
            setMargin(false);
            setBorder(false); 
            setOrientation((e)=>!e); 
            setPageSize(false)
        }
        if (action.type==="page size"){
            setPopup(e=>!e)
            setMargin(false);
            setBorder(false);
            setOrientation(false);
            setPageSize((e)=>!e)
        }
        if(action.type==="border"){
            setPopup(e=>!e)
            setMargin(false);
            setBorder((e)=>!e);
            setOrientation(false);
            setPageSize(false)
        }
    

    }

    return(
        <>
        <section className="h-screen pt-28 w-full  flex justify-center">
            <div className=" w-full max-w-screen-2xl h-auto bg-inherit flex min-[55px]:flex-col lg:flex-row relative z-0">

                {/* dashboard nav */}
                <div className="lg:h-full min-[55px]:order-2 lg:order-1 min-[55px]:mt-auto min-[55px]:w-full lg:w-auto border ">  
                    <DashboardNav  Orientation={Orientation} Margin={Margin}  PageSize={PageSize}  Border={Border}  dispatch={dispatch} />
                    <DashboardNavMobRes isPopup={isPopup} setPopup={setPopup} dispatch={dispatch} Margin={Margin} Orientation={Orientation} PageSize={PageSize} Border={Border}/>
                </div>

                {/* dashboard edit container*/}
                <div className=" w-full h-full flex relative min-[55px]:order-1 lg:order-2 flex-wrap ">
                <Options Border={Border} Orientation={Orientation} PageSize={PageSize} Margin={Margin}/>
                <AddImg/>
                <div className="w-full h-full flex justify-center  overflow-y-scroll flex-wrap">
                    <div className="flex h-max w-full justify-center items-center flex-wrap ">
                    <DashboardEdit/>
                    </div>
                </div>
                </div>


            </div>
            

        </section>
        </>
    )
}

function DashboardNav({Orientation,Margin,PageSize,Border,dispatch}){
    return(
    
        <div className="w-72  h-full rounded-md lg:flex min-[55px]:hidden flex-col  gap-2 items-center  ">
            <div className="  flex flex-col  gap-4 items-center mt-7 w-full px-3 ">
                {/* margin */}
            <div className={`  rounded-2xl  flex  items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer ${Margin?"border-1 bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`} onClick={()=>{dispatch({"type":"margin"})}}>
                <div>
                    <PiSquareLogoDuotone className={`text-2xl  group-hover:text-white ${Margin?"text-white":""} icon-color-ind`}/>
                </div>
                <span className={`font-normal  group-hover:text-white ${Margin?"text-white":""}`}>Margin</span>
                {/* <div className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className={`group-hover:text-indigo-600 ${Margin?"text-indigo-600":""}`}/></div> */}

            </div>



            {/* page orientation */}
            <div className={` rounded-2xl  flex  items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer relative ${Orientation?" bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`} onClick={()=>{dispatch({"type":"orientation"})}}>
                <div className="">
                <HiOutlineRectangleGroup className={`text-2xl group-hover:text-white ${Orientation?"text-white":""} icon-color-ind`}/>
                </div>
                <span className={`font-normal group-hover:text-white ${Orientation?"text-white":""} `}>Page Orientation</span>
                {/* <div  className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className={`group-hover:text-indigo-600 ${Orientation?"text-indigo-600":""}`}/></div> */}
              

            </div>


            {/* page size */}
            <div className={` rounded-2xl  flex items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer ${PageSize?"bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`} onClick={()=>{dispatch({"type":"page size"})}}>
                <div>
                <MdOutlineDocumentScanner className={`text-2xl group-hover:text-white ${PageSize?"text-white":""} icon-color-ind`}/>

                </div>
                <span className={`font-normal group-hover:text-white ${PageSize?"text-white":""}`}>Page size</span>
                {/* <div  className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className={`group-hover:text-indigo-600 ${PageSize?"text-indigo-600":""}`}/></div> */}

            </div>
            {/* border */}
            <div className={`  rounded-2xl flex items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer ${Border?" bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`} onClick={()=>{dispatch({"type":"border"})}}>
                <div>

                <RxBorderWidth className={`text-2xl group-hover:text-white ${Border?"text-white":""} icon-color-ind`}/>
                </div>

                <span className={`font-normal group-hover:text-white ${Border?"text-white":""}`}>Border</span>
                {/* <div  className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className={`group-hover:text-indigo-600 ${Border?"text-indigo-600":""}`}/></div> */}

            </div>
            </div>
            <div className="h-24 mt-auto w-full px-3 lg:flex min-[55px]:hidden justify-center items-center cursor-pointer ">
                <div className=" border  rounded-md  flex  items-center justify-center gap-2 w-full py-3 pl-1 bg-indigo-600 hover:bg-indigo-500">
                    <span className="font-bold text-white ">Convert to PDF</span>
                <IoArrowForwardCircleSharp className="text-2xl text-white"/>

                </div>

            </div>

               

        </div>
    
    )
}
function DashboardNavMobRes({isPopup,setPopup,dispatch,Margin,Orientation,PageSize,Border}){
    return(
        <>
        <div className=" w-full h-auto min-[55px]:flex lg:hidden justify-center items-center popup bg-white z-0" >
         <MobPopup isPopup={isPopup} Margin={Margin} Orientation={Orientation} PageSize={PageSize} Border={Border}/>

            <div className="flex w-full justify-around gap-2 m-4 ">
                {/* margin */}
                <div className="flex flex-col justify-center items-center gap-2" onClick={()=>{dispatch({"type":"margin"})}}>
                <PiSquareLogoDuotone className={`text-xl  group-hover:text-indigo-600 `}/>
                <span className="text-sm">Margin</span>
                
                </div>
                {/* Orientation */}
                <div className="flex flex-col justify-center items-center gap-2" onClick={()=>{dispatch({"type":"orientation"})}}>
                <HiOutlineRectangleGroup className={`text-xl group-hover:text-indigo-600 `}/>
                <span className="text-sm">Orientation</span>

                </div>
                <div className="flex flex-col justify-center items-center gap-2" onClick={()=>{dispatch({"type":"page size"})}}>
                <MdOutlineDocumentScanner className={`text-xl group-hover:text-indigo-600`}/>
                <span className="text-sm">Size</span>
                </div>
                {/* Border */}
                <div className="flex flex-col justify-center items-center gap-2" onClick={()=>{dispatch({"type":"border"})}}>
                <RxBorderWidth className={`text-xl group-hover:text-indigo-600`}/>

                <span className="text-sm">Border</span>
                </div>
                {/* convert */}
                <div className="flex flex-col justify-center items-center gap-2">
                <IoArrowForwardCircleSharp className="text-xl text-indigo-600"/>
                <span className="text-sm">Convert</span>
                </div>
            </div>

        </div>
        </>

    )

}

function MobPopup({isPopup,Margin,Orientation,PageSize,Border}){

    return(
        <>
            {/* margin for mobpopub */}
        <div className={`myPopup popuptext ${Margin?"show":""} w-full px-7 py-5 bg-slate-100 pt-11 absolute z-50 `}  >
            <div className={`flex-col gap-3 ${Margin?"flex":"hidden"}`}>
                
                <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" style={{zIndex:"0"}}>
                        <TbBoxMargin className="group-hover:text-lg group-hover:text-indigo-600"/>
                        <span className="mt-3 group-hover:text-indigo-600">Small margin</span>
                </div>
                <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer"style={{zIndex:"0"}}>
                        <RxMargin className="group-hover:text-lg group-hover:text-indigo-600" />
                        <span className="mt-3 group-hover:text-indigo-600">Big margin</span>
                </div>

            </div>  
        </div>
         {/* Orientation for mobpopup */}
        <div className={`myPopup popuptext ${Orientation?"show":""} w-full px-7 py-5 bg-slate-100 pt-11 absolute z-50 `}  >

            <div className={`flex-col gap-3 ${Orientation?"flex":"hidden"}`}>
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
        {/* page size for mobpopup*/}
        <div className={`myPopup popuptext ${PageSize?"show":""} w-full px-7 py-5 bg-slate-100 pt-11 absolute z-50 `}  >
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    {/* <IoTabletLandscapeOutline className="group-hover:text-lg group-hover:text-indigo-600"/> */}
                    <span className="mt-3 group-hover:text-indigo-600">Auto</span>
                    </div>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    {/* <IoTabletPortraitOutline className="group-hover:text-lg group-hover:text-indigo-600" /> */}
                    <span className="mt-3 group-hover:text-indigo-600">A4</span>
                    </div>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    {/* <IoTabletPortraitOutline className="group-hover:text-lg group-hover:text-indigo-600" /> */}
                    <span className="mt-3 group-hover:text-indigo-600">Letter(US)</span>
                    </div>
        </div>
        {/* border for mobpopup */}
        <div className={`myPopup popuptext ${Border?"show":""} w-full px-7 py-5 bg-slate-100 pt-11 absolute z-50 `}  >
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    <MdOutlineBorderStyle className="group-hover:text-lg group-hover:text-indigo-600"/>
                    <span className="mt-3 group-hover:text-indigo-600">Normal</span>
                    </div>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    <TbBorderRadius className="group-hover:text-lg group-hover:text-indigo-600" />
                    <span className="mt-3 group-hover:text-indigo-600">Rounded</span>
                    </div>
        </div>
        </>
    )
}
function Options({Orientation,Margin,Border,PageSize}){
    return(
        <>
         {/*margin optioins */}
         <div className={`absolute border bg-blue-400  w-52 h-auto left-5 top-5 ${Margin?"lg:flex":"hidden"} flex-col justify-center gap-5 px-3 py-3 rounded-md min-[55px]:hidden z-40`}>
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
            <div className={`absolute border  bg-white  w-52 h-auto left-4 top-16 ${Orientation?"lg:flex":"hidden"} flex-col justify-center gap-5 px-3 py-3 rounded-md min-[55px]:hidden z-40`}>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    <IoTabletLandscapeOutline className="group-hover:text-lg group-hover:text-indigo-600"/>
                    <span className="mt-3 group-hover:text-indigo-600">Landscape</span>
                    </div>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    <IoTabletPortraitOutline className="group-hover:text-lg group-hover:text-indigo-600" />
                    <span className="mt-3 group-hover:text-indigo-600">Portrait</span>
                    </div>
                </div>
                {/* page size options*/}
                <div className={`absolute border   bg-white w-52 h-auto left-4 top-24 ${PageSize?"lg:flex":"hidden"} flex-col justify-center gap-5 px-3 py-3 rounded-md min-[55px]:hidden z-40`}>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    {/* <IoTabletLandscapeOutline className="group-hover:text-lg group-hover:text-indigo-600"/> */}
                    <span className="mt-3 group-hover:text-indigo-600">Auto</span>
                    </div>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    {/* <IoTabletPortraitOutline className="group-hover:text-lg group-hover:text-indigo-600" /> */}
                    <span className="mt-3 group-hover:text-indigo-600">A4</span>
                    </div>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    {/* <IoTabletPortraitOutline className="group-hover:text-lg group-hover:text-indigo-600" /> */}
                    <span className="mt-3 group-hover:text-indigo-600">Letter(US)</span>
                    </div>
                </div>
                {/*Border options*/}
                <div className={`absolute border  bg-white  w-52 h-auto left-4 top-48 ${Border?"lg:flex":"hidden"} flex-col justify-center gap-5 px-3 py-3 rounded-md min-[55px]:hidden z-40`}>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    <MdOutlineBorderStyle className="group-hover:text-lg group-hover:text-indigo-600"/>
                    <span className="mt-3 group-hover:text-indigo-600">Normal</span>
                    </div>
                    <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer">
                    <TbBorderRadius className="group-hover:text-lg group-hover:text-indigo-600" />
                    <span className="mt-3 group-hover:text-indigo-600">Rounded</span>
                    </div>
                </div>
        </>
    )
}

