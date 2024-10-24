
import { RxMargin } from "react-icons/rx";
import { TbBoxMargin } from "react-icons/tb";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { IoTabletPortraitOutline } from "react-icons/io5";



export function MobPopup({Margin,Orientation,PageSize,setMargin,setOrientation,setPageSize,Margin_dispatch,Orientation_dispatch,PageSz_dispatch,stateMargin,stateOrientation,statePageSz}){

    return(
        <>
        <div className="absolute z-50  left-0 right-0 w-auto bottom-5 h-auto  lg:hidden ">
        <div className={`w-auto flex-col justify-center items-center gap-3 ${Margin?"flex":"hidden"}`}>
                <div 
                className={`border w-80 h-20 flex flex-col justify-center items-center rounded-xl bg-white group hover:border-2 hover:border-blue-600 shadow-md cursor-pointer ${stateMargin === ""? " border-2 border-blue-600":""}`} 
                onClick={()=>{Margin_dispatch({"type":""});setMargin(false)}}
                >
                    <span className={`mt-3 group-hover:text-blue-600 ${stateMargin === ""? "text-blue-600":""}`}>None</span>
                    </div> 
                
                <div 
                className={`border w-80 h-20 flex flex-col justify-center items-center rounded-xl bg-white group hover:border-2 hover:border-blue-600 shadow-md cursor-pointer ${stateMargin === "small-m"? " border-2 border-blue-600":""}`} 
                style={{zIndex:"0"}} 
                onClick={()=>{Margin_dispatch({"type":"small-m"});setMargin(false)}}
                >
                        <TbBoxMargin className={`group-hover:text-lg group-hover:text-blue-600 ${stateMargin === "small-m"? "text-lg text-blue-600":""}`}/>
                        <span className={`mt-3 group-hover:text-blue-600 ${stateMargin === "small-m"? "text-blue-600":""}`}>Small margin</span>
                </div>
                <div 
                className={`border w-80 h-20 flex flex-col justify-center items-center rounded-xl bg-white group hover:border-2 hover:border-blue-600 shadow-md cursor-pointer ${stateMargin === "big-m"? " border-2 border-blue-600":""}`}
                style={{zIndex:"0"}} 
                onClick={()=>{Margin_dispatch({"type":"big-m"});setMargin(false)}}
                >
                        <RxMargin className={`group-hover:text-lg group-hover:text-blue-600 ${stateMargin === "big-m"? " text-lg text-blue-600":""}`} />
                        <span className={`mt-3 group-hover:text-blue-600  ${stateMargin === "big-m"? " text-blue-600":""}`}>Big margin</span>
                </div>
            </div>


            <div className={`w-auto  flex-col  justify-center items-center gap-3 ${Orientation?"flex":"hidden"}`}>
                        <div 
                        className={`border w-80 h-20 flex flex-col justify-center items-center rounded-xl bg-white group hover:border-2 hover:border-blue-600 shadow-md cursor-pointer ${stateOrientation === "land"? " border-2 border-blue-600":""}`} 
                        onClick={()=>{Orientation_dispatch({"type":"land"});setOrientation(false)}}
                        >
                        <IoTabletLandscapeOutline className={`group-hover:text-lg group-hover:text-blue-600 ${stateOrientation === "land"? " text-lg text-blue-600":""}`}/>
                        <span className={`mt-3 group-hover:text-blue-600 ${stateOrientation === "land"? "  text-blue-600":""}`}>Landscape</span>
                        </div>
                        <div 
                        className={`border w-80 h-20 flex flex-col justify-center items-center rounded-xl bg-white group hover:border-2 hover:border-blue-600 shadow-md cursor-pointer ${stateOrientation === "port"? " border-2 border-blue-600":""}`}
                        onClick={()=>{Orientation_dispatch({"type":"port"});setOrientation(false)}}
                        >
                        <IoTabletPortraitOutline className={`group-hover:text-lg group-hover:text-blue-600 ${stateOrientation === "port"? " text-lg text-blue-600":""}`} />
                        <span className={`mt-3 group-hover:text-indigo-600 ${stateOrientation === "port"? "  text-blue-600":""}`}>Portrait</span>
                        </div>

                </div>
            <div className={`w-auto  flex-col  justify-center items-center gap-3 ${PageSize?"flex":"hidden"}`}>

                <div 
                    className={`border w-80 h-20 flex flex-col justify-center items-center rounded-xl bg-white group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer ${statePageSz === "auto"? " border-2 border-blue-600":""}`}
                    onClick={()=>{PageSz_dispatch({"type":"auto"});setPageSize(false)}}
                    >
                    <span className={`mt-3 group-hover:text-indigo-600 ${statePageSz === "auto"? "  text-blue-600":""}`}>Auto</span>
                    </div>
                    <div 
                    className={`border w-80 h-20 flex flex-col justify-center items-center rounded-xl bg-white group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer ${statePageSz === "a4"? " border-2 border-blue-600":""}`}
                    onClick={()=>{PageSz_dispatch({"type":"a4"});setPageSize(false)}}
                    >
                    <span className={`mt-3 group-hover:text-indigo-600 ${statePageSz === "a4"? "  text-blue-600":""}`}>A4</span>
                    </div>
                    <div 
                    className={`border w-80 h-20 flex flex-col justify-center items-center rounded-xl bg-white group hover:border-2 hover:border-indigo-600 shadow-md cursor-pointer ${statePageSz === "us-letter"? " border-2 border-blue-600":""}`}
                    onClick={()=>{PageSz_dispatch({"type":"us-letter"});setPageSize(false)}}
                    >
                    <span className={`mt-3 group-hover:text-indigo-600 ${statePageSz === "us-letter"? "  text-blue-600":""}`}>Letter(US)</span>
                    </div>

            </div>


        </div>
        </>
    )
}