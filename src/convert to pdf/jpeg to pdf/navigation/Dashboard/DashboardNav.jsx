import { PiSquareLogoDuotone } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { RxBorderWidth } from "react-icons/rx";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { HiOutlineUpload } from "react-icons/hi";
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"




export function DashboardNav({Orientation,Margin,PageSize,handleConvert,dispatch,array,setMerge}){

    return(
    

            <aside className={`min-[55px]:hidden lg:flex flex-col w-72 h-screen  py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l`}>
            <div href="#" className="mx-auto border w-full flex justify-center items-center border-t-transparent border-x-transparent mt-16">
            <span className=" text-gray-500 text-2xl mb-3">JPEG TO PDF</span>
            </div>



            <div className="flex flex-col justify-between flex-1 mt-6 ">
            <nav className="px-4">
                <div
                className={`flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-lg ${Margin?"bg-gray-100 text-gray-700":""}  hover:bg-gray-100  hover:text-gray-700 cursor-pointer`}
                onClick={()=>{dispatch({"type":"margin"})}}
                >
                <PiSquareLogoDuotone className={`text-xl font-bold`}/>

                <span className="mx-4 font-medium">Margin</span>
                </div>

                <div
                className={`flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-lg ${Orientation?"bg-gray-100 text-gray-700":""}  hover:bg-gray-100   hover:text-gray-700 cursor-pointer`}
                onClick={()=>{dispatch({"type":"orientation"})}}
                >
                <HiOutlineRectangleGroup className={`text-2xl font-bold`}/>

                <span className="mx-4 font-medium">Page Orientation</span>
                </div>

                <div
                className={`flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-lg ${PageSize?"bg-gray-100 text-gray-700":""}  hover:bg-gray-100  hover:text-gray-700 cursor-pointer`}
                onClick={()=>{dispatch({"type":"page size"})}}
                >
                <MdOutlineDocumentScanner className={`text-2xl font-bold`}/>


                <span className="mx-4 font-medium">Page size</span>
                </div>

                <label
                className="flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-lg    cursor-pointer"
                htmlFor='check'
                >
                <input type="checkbox"  className="w-8 h-8 ml-1" id="check" onChange={()=>setMerge((e)=>!e)}/>

                <span className="mx-4 font-medium ">Merge all images in one PDF file</span>
                </label>



            </nav>

            <div className="h-auto  mt-auto mb-2  w-full  lg:flex flex-col min-[55px]:hidden justify-center items-center cursor-pointer ">
            <button className="cssbuttons-io-button bg-blue-600 border-blue-600 " onClick={handleConvert}>
            convert to PDF
            <div className="icon">
                <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                ></path>
                </svg>
            </div>
            </button>
            </div>
            </div>
            
        </aside>



    
    )
}
