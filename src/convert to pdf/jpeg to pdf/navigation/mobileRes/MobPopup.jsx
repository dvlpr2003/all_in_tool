
import { RxMargin } from "react-icons/rx";
import { TbBoxMargin } from "react-icons/tb";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { IoTabletPortraitOutline } from "react-icons/io5";
import { MdOutlineBorderStyle } from "react-icons/md";
import { TbBorderRadius } from "react-icons/tb";


export function MobPopup({Margin,Orientation,PageSize,Border,setMargin,setBorder,setOrientation,setPageSize,Margin_dispatch,Border_dispatch,Orientation_dispatch,PageSz_dispatch}){

    return(
        <>
            {/* margin for mobpopub */}
        <div className={`myPopup popuptext ${Margin?"show":""} w-full px-7 py-5 bg-slate-100 pt-11 absolute z-50 `}  >
            <div className={`flex-col gap-3 ${Margin?"flex":"hidden"}`}>
            <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" onClick={()=>{Margin_dispatch({"type":""});setMargin(false)}}>
                    <span className="mt-3 group-hover:text-indigo-600">None</span>
                    </div> 
                
                <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer" style={{zIndex:"0"}} onClick={()=>{Margin_dispatch({"type":"small-m"});setMargin(false)}}>
                        <TbBoxMargin className="group-hover:text-lg group-hover:text-indigo-600"/>
                        <span className="mt-3 group-hover:text-indigo-600">Small margin</span>
                </div>
                <div className="border w-full h-20 flex flex-col justify-center items-center rounded-xl group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer"style={{zIndex:"0"}} onClick={()=>{Margin_dispatch({"type":"big-m"});setMargin(false)}}>
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