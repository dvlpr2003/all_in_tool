import { PiSquareLogoDuotone } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { RxBorderWidth } from "react-icons/rx";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { HiOutlineUpload } from "react-icons/hi";


export function DashboardNav({Orientation,Margin,PageSize,handleConvert,dispatch,array}){

    return(
    

            <aside className={`min-[55px]:hidden lg:flex flex-col w-72 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l`}>
            <a href="#" className="mx-auto">
            <img className={"w-auto h-6 sm:h-7"} src="https://d3jq6id3uwlfp0.cloudfront.net/logo-image/educ.png" alt="Logo" />
            </a>



            <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
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
                for='check'
                >
                <input type="checkbox"  className="w-5 h-5 ml-1" id="check"/>

                <span className="mx-4 font-medium">Settings</span>
                </label>
            </nav>

            <div className="h-auto  mt-auto mb-2  w-full  lg:flex flex-col min-[55px]:hidden justify-center items-center cursor-pointer ">
            <button className="cssbuttons-io-button bg-blue-600 border-blue-600 ">
            convert to PDF
            <div class="icon">
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
            // {/* <div className="  flex flex-col  gap-4 items-center mt-7 w-full px-3 ">
            // <div 
            // className={`  rounded-2xl  flex  items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer ${Margin?"border-1 bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`} 
            // onClick={()=>{dispatch({"type":"margin"})}}
            
            // >
            //     <div>
            //         <PiSquareLogoDuotone className={`text-2xl  group-hover:text-white ${Margin?"text-white":""} icon-color-ind`}/>
            //     </div>
            //     <span className={`font-normal  group-hover:text-white ${Margin?"text-white":""}`}>Margin</span>

            // </div>



            // <div 
            // className={` rounded-2xl  flex  items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer relative ${Orientation?" bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`} 
            // onClick={()=>{dispatch({"type":"orientation"})}}
            // >
            //     <div className="">
            //     <HiOutlineRectangleGroup className={`text-2xl group-hover:text-white ${Orientation?"text-white":""} icon-color-ind`}/>
            //     </div>
            //     <span className={`font-normal group-hover:text-white ${Orientation?"text-white":""} `}>Page Orientation</span>
              

            // </div>


            
            // <div 
            // className={` rounded-2xl  flex items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer ${PageSize?"bg-blue-500":""} group hover:border-1 hover:bg-blue-500 transition-all duration-150`} 
            // onClick={()=>{dispatch({"type":"page size"})}}
            // >
            //     <div>
            //     <MdOutlineDocumentScanner className={`text-2xl group-hover:text-white ${PageSize?"text-white":""} icon-color-ind`}/>

            //     </div>
            //     <span className={`font-normal group-hover:text-white ${PageSize?"text-white":""}`}>Page size</span>

            // </div>

            // <div 
            // className={` rounded-2xl  flex items-center gap-4 w-full py-3 pl-2 pr-2 cursor-pointer `} >
            //     <div className="flex justify-center items-center">
            //         <input type="checkbox" className="w-4 h-4 "/>

            //     </div>
            //     <span className={`font-normal`}>Merge all images in one file </span>

            // </div>


            // </div> */}

            // <div className="h-auto  mt-auto mb-2  w-full px-3 lg:flex flex-col min-[55px]:hidden justify-center items-center cursor-pointer ">
            // <button className="cssbuttons-io-button bg-blue-600 border-blue-600">
            // convert to PDF
            // <div class="icon">
            //     <svg
            //     height="24"
            //     width="24"
            //     viewBox="0 0 24 24"
            //     xmlns="http://www.w3.org/2000/svg"
            //     >
            //     <path d="M0 0h24v24H0z" fill="none"></path>
            //     <path
            //         d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            //         fill="currentColor"
            //     ></path>
            //     </svg>
            // </div>
            // </button>
            // </div>
