import { RxMargin } from "react-icons/rx";
import { TbBoxMargin } from "react-icons/tb";
import { PiSquareLogoDuotone } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { RxBorderSolid } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxBorderWidth } from "react-icons/rx";
import { IoArrowForwardCircleSharp } from "react-icons/io5";










export default function JpgToPdfEdit(){
    return(
        <>
        <section className="h-screen pt-28 w-full  flex justify-center">
            <div className=" w-full max-w-screen-2xl h-full bg-inherit">
                <div className="h-full"> 
                    <DashboardNav/>
                    

                </div>

            </div>
            

        </section>
        </>
    )
}

function DashboardNav(){
    return(
        <div className="w-72 border  h-full rounded-md bg-white flex flex-col  gap-2 items-center ">
            <div className=" flex flex-col  gap-4 items-center mt-7 w-full px-3">
            <div className="border  rounded-lg  flex  items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer group hover:border-1 hover:border-indigo-600  transition-all duration-150">
                <div>
                    <PiSquareLogoDuotone className="text-2xl  group-hover:text-indigo-600"/>
                </div>
                <span className="font-normal  group-hover:text-indigo-600">Margin</span>
                <div className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className="group-hover:text-indigo-600"/></div>

            </div>
            <div className="border  rounded-lg  flex  items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer group hover:border-1 hover:border-indigo-600 transition-all duration-150">
                <div className="">
                <HiOutlineRectangleGroup className="text-2xl group-hover:text-indigo-600"/>
                </div>
                <span className="font-normal group-hover:text-indigo-600">Page Orientation</span>
                <div  className="flex justify-center items-center ml-auto text-lg font-bold text-slate-400"><MdOutlineKeyboardArrowRight  className="group-hover:text-indigo-600"/></div>


            </div>
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
                <div className=" border  rounded-md  flex  items-center justify-center gap-2 w-full py-3 pl-1 bg-indigo-600 ">
                    <span className="font-bold text-white ">Convert to PDF</span>
                <IoArrowForwardCircleSharp className="text-2xl text-white"/>

                </div>

            </div>
        </div>
    
    )
}

function DashboardEdit(){
    return(
        <>
        hello
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