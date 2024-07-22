import { RxMargin } from "react-icons/rx";
import { TbBoxMargin } from "react-icons/tb";
import { PiSquareLogoDuotone } from "react-icons/pi";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { RxBorderSolid } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";








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
        <div className="w-72 border border-black h-full rounded-md bg-white flex flex-col  gap-2 items-center ">
            <div className=" flex flex-col  gap-2 items-center mt-7 w-full px-3">
            <div className="border  rounded-md  flex  items-center gap-2 w-full py-2 pl-1">
                <div>
                    <PiSquareLogoDuotone className="text-2xl"/>
                </div>
                <span>Margin</span>
                <div className="flex justify-center items-center ml-auto"><MdOutlineKeyboardArrowRight /></div>

            </div>
            <div className="border  rounded-md  flex  items-center gap-2 w-full py-2 pl-1">
                <div className="">
                <HiMiniRectangleGroup className="text-2xl"/>
                </div>
                <span>Page Orientation</span>
                <div  className="flex justify-center items-center ml-auto"><MdOutlineKeyboardArrowRight /></div>


            </div>
            <div className="border  rounded-md  flex items-center gap-2 w-full py-2 pl-1">
                <div>
                <RiPagesLine className="text-2xl"/>

                </div>
                <span>Page size</span>
                <div  className="flex justify-center items-center ml-auto"><MdOutlineKeyboardArrowRight /></div>

            </div>
            <div className="border  rounded-md flex items-center gap-2 w-full py-2 pl-1">
                <div>

                <RxBorderSolid className="text-2xl"/>
                </div>

                <span>Border</span>
                <div  className="flex justify-center items-center ml-auto"><MdOutlineKeyboardArrowRight /></div>

            </div>
            </div>
            <div className="h-10 mt-auto ">

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