import { RxCross2 } from "react-icons/rx";


export function ProductDt({About,enter,setAbout,setEnter,isMobile}){
   
    return(
        <div className={` absolute border border-slate-950 about-menu ${About?"flex":"hidden"} gap-5 text-black `}>
            <div className=" w-full mt-9">
                <div className="flex gap-7 ">
                    <div className="border border-red-500 w-60">
                        <span>Convert to PDF</span>
                        <ul className="flex flex-col gap-4 justify-center items-center mt-5">
                            <li className="w-48">
                                <a href="#" className="flex h-9 items-center" >
                                    <div className="flex justify-center items-center">
                                    <img src="img/pdf to jpeg.png" alt="" className="max-w-full h-14"/>
                                    <span>PDF to JPG</span>
                                    </div>
                                </a>
                            </li>
                            <li className=" w-48">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center">

                                   <img src="img/pdf to jpeg.png" alt="" className="max-w-full h-14"/>

                                    <span>PDF to PNG</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center">
                                   <img src="img/pdf to word.png" alt="" className="max-w-full h-14"/>
                                    <span>PDF to Word</span>
                                </div>
                                </a>
                            </li>
                            <li className=" w-48">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center">
                                   <img src="img/pdf to excel.png" alt="" className="max-w-full h-14"/>
                                    <span>PDF to Excel</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center">
                                   <img src="img/pdf to ppt.png" alt="" className="max-w-full h-14"/>
                                    <span>PDF to ppt</span>
                                </div>
                                </a>
                            </li>
                            <li className=" w-48">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center">
                                   <img src="img/pdf to html.png" alt="" className="max-w-full h-14"/>
                                    <span>PDF to HTML</span>
                                </div>
                                </a>

                            </li>
                        </ul>

                    </div>
                    <div>
                        <div className="border border-red-500 w-60">
                        <span>Organize</span>
                        <ul className="flex flex-col gap-4 justify-center items-center mt-5">
                            <li className="w-48">
                                <a href="#" className="flex h-9 items-center" >
                                    <div className="flex justify-center items-center">
                                    <img src="img/organize/add.png" alt="" className="max-w-full h-14"/>
                                    <span>Merge PDF</span>
                                    </div>
                                </a>
                            </li>
                            <li className=" w-48">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center">

                                   <img src="img/organize/pdf rotate.png" alt="" className="max-w-full h-14"/>

                                    <span>Rotate PDF</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48">
                                <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center">
                                   <img src="img/organize/trash.png" alt="" className="max-w-full h-14"/>
                                    <span>Delete page</span>
                                </div>
                                </a>
                            </li>
                            <li className=" w-48">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center">
                                   <img src="img/organize/split.png" alt="" className="max-w-full h-14"/>
                                    <span>Split PDF</span>
                                </div>
                                </a>
                            </li>
                            <li className="w-48">
                            <a href="#" className="flex h-9 items-center">
                                <div className="flex justify-center items-center">
                                   <img src="img/organize/rearrange.png" alt="" className="max-w-full h-14"/>
                                    <span>Rearrage PDF</span>
                                </div>
                                </a>
                            </li>
                        </ul>

                    </div>

                    </div>
                    <div>
                        <span>Edit</span>
                    </div>
                    <div>
                        <span>Convert from PDF</span>
                    </div>
                    <div>
                        <span>View</span>
                    </div>
                    

                </div>

            </div>
 
            <RxCross2 className="absolute right-3 top-2 font-bold text-2xl cursor-pointer hover:text-indigo-600" onClick={()=>setAbout(false)}/>
        </div>
    )
}