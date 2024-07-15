import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ConvertFromPdfItems } from "../submenu items/converfrompdf";
import { ConverttoPdfItems } from "../submenu items/converttopdf";
import { EditItems } from "../submenu items/Edit";
import { OrganizeItems } from "../submenu items/Organize";



export default function SideMenu(){
    const [fromPdf,setFromPdf]=useState(false)
    const [toPdf,setToPdf]=useState(false)
    const [Edit,setEdit]=useState(false)
    const [Organize,setOrganize]=useState(false)
    return(
        <div className="border border-red-700 w-full absolute top-16  min-[55px]:flex lg:hidden">
            <div className="flex flex-col justify-center w-full">
                <ul className="flex flex-col justify-evenly ">
                    <li className="flex flex-col border-b border-black " >
                        <div className="flex items-end pb-2 h-14" onClick={()=>setFromPdf(e=>!e)}>
                        <div className="pl-4 flex justify-center items-center">
                            <span className="font-bold">CONVERT FROM PDF</span>
                        </div>
                        <div className="ml-auto justify-end pr-3">
                        <IoIosArrowDropdownCircle  className="text-xl cursor-pointer" />
                        </div>
                        </div>
                        <div className={`w-full h-auto ${fromPdf?"block":"hidden"} pb-3`}>
                            <ConvertFromPdfItems/>
                        </div>
                    </li>
                    <li className="border-b border-black flex flex-col" >
                    <div className="flex items-end pb-2 h-14" onClick={()=>setToPdf((e)=>!e)}>
                        <div className="pl-4 flex justify-center items-center">
                            <span className="font-bold">CONVERT TO PDF</span>
                        </div>
                        <div className="ml-auto justify-end pr-3">
                        <IoIosArrowDropdownCircle className="text-xl cursor-pointer" />
                        </div>
                        </div>
                        <div className={`w-full h-auto ${toPdf?"block":"hidden"} pb-3`}>
                            <ConverttoPdfItems/>
                        </div>

                    </li>
                    <li className="border-b border-black " >
                        <div className="flex items-end pb-2 h-14" onClick={()=>setOrganize(e=>!e)}>
                            <div className="pl-4 flex justify-center items-center">
                                <span className="font-bold">ORGANIZE</span>
                            </div>
                            <div className="ml-auto justify-end pr-3">
                            <IoIosArrowDropdownCircle className="text-xl cursor-pointer" />
                            </div>
                        </div>
                        <div className={`w-full h-auto ${Organize?"block":"hidden"} pb-3`}>
                            <OrganizeItems/>
                        </div>
                    </li>
                    <li className="border-b border-black " >
                        <div className="flex items-end pb-2 h-14" onClick={()=>setEdit(e=>!e)}>
                                <div className="pl-4 flex justify-center items-center">
                                    <span className="font-bold">EDIT</span>                            
                                </div>
                                <div className="ml-auto justify-end pr-3">
                                <IoIosArrowDropdownCircle className="text-xl cursor-pointer" />
                                </div>
                        </div>
                        <div className={`w-full h-auto ${Edit?"block":"hidden"} pb-3`}>
                            <EditItems/>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}