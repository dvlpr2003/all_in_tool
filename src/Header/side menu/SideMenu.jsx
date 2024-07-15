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
        <div className="border border-red-700 w-full  min-h-screen  top-16  min-[55px]:flex lg:hidden flex-col items-start absolute">
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
            <LoginNSignup/>
        </div>
    )
}


function LoginNSignup(){
    return(
        <div className="w-full h-64 flex flex-col justify-center px-7">

        
        <div className="w-full border border-slate-500 rounded-md ">
            <div className="flex w-full justify-center items-center ">
                <form action="none" className="w-full  flex justify-center items-center">
                    <input type="text" placeholder="Enter your email" className="w-full h-14 pl-4"/>
                </form>
                <div className="border border-black bg-black text-white  rounded-sm  flex justify-center items-center">
                <button className="h-14 w-40 ">sign up free</button>
                </div>

            </div>

        </div>
        <div className="w-full flex justify-center items-center mt-5">
            <div className="flex gap-1">
                <span>Already a customer?</span>
                <span className="text-blue-500">Log in</span>
            </div>
        </div>

        </div>
    )
}