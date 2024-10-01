import { PiSquareLogoDuotone } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { RxBorderWidth } from "react-icons/rx";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { HiOutlineUpload } from "react-icons/hi";


export function DashboardNav({handleConvert}){

    return(
    

            <aside className={`min-[55px]:hidden lg:flex flex-col w-72 h-screen  py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l`}>
            <div href="#" className="mx-auto border w-full flex justify-center items-center border-t-transparent border-x-transparent mt-16">
            <span className=" text-gray-500 text-2xl mb-3">WORD TO PDF</span>
            </div>



            <div className="flex flex-col justify-between flex-1 mt-6 ">
            <div className="h-auto  mt-auto mb-2  w-full  lg:flex flex-col min-[55px]:hidden justify-center items-center cursor-pointer ">
            <button className="cssbuttons-io-button bg-blue-600 border-blue-600 " onClick={handleConvert} >
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
