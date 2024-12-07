import { FaCrown } from "react-icons/fa";
export function DashboardNav({handleConvert}){

    return(
            <aside className={`min-[55px]:hidden lg:flex flex-col w-[23rem] h-screen  py-8 overflow-y-auto overflow-x-hidden bg-white border-r rtl:border-r-0 rtl:border-l`}>
            <div href="#" className="mx-auto border w-full flex justify-center items-center border-t-transparent border-x-transparent mt-16">
            <span className=" text-gray-500 text-2xl mb-3">PDF TO JPG</span>
            </div>
            <div className="flex flex-col justify-between flex-1 mt-6 ">
                <div className="flex flex-col justify-center items-center gap-4">
                    
                    <div className="border w-[20rem] h-20 flex rounded-lg  cursor-pointer">
                        <div className="w-16 flex justify-center items-center">
                            <div className="border border-blue-500 rounded-full w-7 h-7 flex justify-center items-center">
                                <div className="bg-blue-600 w-5 h-5 rounded-full">

                                </div>

                            </div>

                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-1 pl-1 ">
                            <h3 className="font-bold text-[14px]  text-gray-700">Convert entire pages</h3>
                            <p className="text-[11.5px] text-gray-500">Convert each page of the PDF into an image.</p>


                        </div>

                    </div>
                    <div className="border w-[20rem] h-20 flex rounded-lg  cursor-pointer">
                        <div className="w-16 flex justify-center items-center">
                            <div className="border  rounded-full w-7 h-7 flex justify-center items-center">
                                <div className=" w-5 h-5 rounded-full">

                                </div>

                            </div>

                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-1 pl-1 pr-1">
                            <span className="flex items-center gap-2">
                                <h3 className="font-bold text-[14px] text-gray-700">Extract images only</h3>
                                <div className="w-10 h-6 bg-orange-400 rounded-xl flex justify-center items-center">
                                <FaCrown />

                                </div>
                            </span>
                            <p className="text-[11.5px] text-gray-500">Extract all images from the PDF and save them as separate files.</p>


                        </div>

                    </div>

                </div>
            <div className="h-auto  mt-auto mb-2  w-full  lg:flex flex-col min-[55px]:hidden justify-center items-center cursor-pointer ">
            <button className="cssbuttons-io-button bg-blue-600 border-blue-600 " onClick={handleConvert} >
            convert to JPG
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
