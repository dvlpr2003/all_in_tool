import { RxCross2 } from "react-icons/rx";


export function ProductDt({About,enter,setAbout,setEnter,isMobile}){
   
    return(
        <div className={` absolute border about-menu ${About?"flex":"hidden"} gap-5 text-black  shadow-md`}>
            <div className=" w-full mt-9 flex justify-center pb-7">
                <div className="flex gap-7 ">
                <div className="border border-white w-60  bg-white py-5 pb-6 rounded-lg  hover:shadow-sm">
                        <span className="ml-6">Convert from pdf</span>
                        <ul className="flex flex-col gap-5 justify-center items-center mt-5">
                            <li className="w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center" >
                                    <div className="flex justify-center items-center gap-6">
                                    <img src="img/pdf to jpeg.png" alt="" className="max-w-full h-10"/>
                                    <span>PDF to JPEG</span>
                                    </div>
                                </a>
                            </li>
                            <li className=" w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/pdf to jpeg.png" alt="" className="max-w-full h-10"/>
                                    <span>PDF to PNG</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48 py-2 hover:border-purple-100 hover:bg-purple-100 hover:rounded-sm hover:shadow-md">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/pdf to html.png" alt="" className="max-w-full h-10"/>
                                    <span>PDF to HTML</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/pdf to word.png" alt="" className="max-w-full h-10"/>
                                    <span>PDF to Word</span>
                                </div>
                                </a>
                            </li>
                            <li className=" w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/pdf to excel.png" alt="" className="max-w-full h-10"/>
                                    <span>PDF to Excel</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48 py-2 hover:border-purple-100 hover:bg-purple-100 hover:rounded-sm hover:shadow-md">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/pdf to ppt.png" alt="" className="max-w-full h-10"/>
                                    <span>PDF to PPT</span>
                                </div>
                                </a>
                            </li>

                        </ul>

                    </div>
                    <div>
                    <div className="border border-white w-60  bg-white py-5 pb-6 rounded-lg hover:shadow-sm">
                        <span className="ml-6">Convert to PDF</span>
                        <ul className="flex flex-col gap-5 justify-center items-center mt-5">
                            <li className="w-48 py-2 hover:border-blue-100 hover:bg-blue-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center" >
                                    <div className="flex justify-center items-center gap-6">
                                    <img src="img/convert pdf/jpeg to pdf.png" alt="" className="max-w-full h-10"/>
                                    <span>JPG to PDF</span>
                                    </div>
                                </a>
                            </li>
                            <li className=" w-48 py-2 hover:border-violet-100 hover:bg-violet-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/convert pdf/jpeg to pdf.png" alt="" className="max-w-full h-10"/>
                                    <span>PNG to PDF</span>
                                </div>
                                </a>
                            </li>

                            <li className=" w-48 py-2 hover:border-violet-100 hover:bg-violet-100 hover:rounded-sm hover:shadow-md">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/convert pdf/html to pdf.png" alt="" className="max-w-full h-10"/>
                                    <span>HTML to PDF</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48 py-2 hover:border-zinc-100 hover:bg-zinc-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/convert pdf/word to pdf.png" alt="" className="max-w-full h-10"/>
                                    <span>WORD to PDF</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48 py-2 hover:border-zinc-100 hover:bg-zinc-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/convert pdf/excel to pdf.png" alt="" className="max-w-full h-10"/>
                                    <span>EXCEL to PDF</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48 py-2 hover:border-zinc-100 hover:bg-zinc-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/convert pdf/ppt to pdf.png" alt="" className="max-w-full h-10"/>
                                    <span>PPT to PDF</span>
                                </div>
                                </a>
                            </li>
                        </ul>

                    </div>
                    </div>          
    
                    <div>
                        <div className="border border-white w-60  bg-white py-5 pb-6 rounded-lg  hover:shadow-sm">
                        <span className="ml-6">Organize</span>
                        <ul className="flex flex-col gap-5 justify-center items-center mt-5">
                            <li className="w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center" >
                                    <div className="flex justify-center items-center gap-6">
                                    <img src="img/organize/add.png" alt="" className="max-w-full h-10"/>
                                    <span>Merge PDF</span>
                                    </div>
                                </a>
                            </li>
                            <li className=" w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">

                                   <img src="img/organize/pdf rotate.png" alt="" className="max-w-full h-10"/>

                                    <span>Rotate PDF</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/organize/trash.png" alt="" className="max-w-full h-10"/>
                                    <span>Delete page</span>
                                </div>
                                </a>
                            </li>
                            <li className=" w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/organize/split.png" alt="" className="max-w-full h-10"/>
                                    <span>Split PDF</span>
                                </div>
                                </a>
                            </li>
                        </ul>

                    </div>

                    </div>
                    <div>
                    <div className="border border-white w-60  bg-white py-5 pb-6 rounded-lg hover:shadow-sm">
                        <span className="ml-6">Edit</span>
                        <ul className="flex flex-col gap-5 justify-center items-center mt-5">
                            <li className="w-48 py-2 hover:border-blue-100 hover:bg-blue-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center" >
                                    <div className="flex justify-center items-center gap-6">
                                    <img src="img/edit/crop.png" alt="" className="max-w-full h-10"/>
                                    <span>Crop PDF</span>
                                    </div>
                                </a>
                            </li>
                            <li className=" w-48 py-2 hover:border-violet-100 hover:bg-violet-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/edit/edit pdf.png" alt="" className="max-w-full h-10"/>
                                    <span>Edit PDF</span>
                                </div>
                                </a>
                            </li>

                            <li className=" w-48 py-2 hover:border-violet-100 hover:bg-violet-100 hover:rounded-sm hover:shadow-md">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/edit/read pdf.png" alt="" className="max-w-full h-10"/>
                                    <span>Read PDF</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48 py-2 hover:border-zinc-100 hover:bg-zinc-100 hover:rounded-sm hover:shadow-md">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center gap-6">
                                   <img src="img/edit/page number.png" alt="" className="max-w-full h-10"/>
                                    <span>Page Number</span>
                                </div>
                                </a>
                            </li>
                        </ul>

                    </div>
                    </div>            
                </div>

            </div>
 
            <RxCross2 className="absolute right-3 top-2 font-bold text-2xl cursor-pointer hover:text-indigo-600" onClick={()=>setAbout(false)}/>
        </div>
    )
}