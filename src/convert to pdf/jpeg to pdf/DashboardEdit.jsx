

import { MdOutlineAddCircle } from "react-icons/md";


export default function DashboardEdit(){
    return(
        <>
        <div className="flex justify-center items-cente">

            <div className="border border-green-600 w-72 h-64  flex justify-center items-center">
            <div>
            <MdOutlineAddCircle className="text-4xl text-indigo-600"/>
            </div>
            </div>

        </div>
               
        </>
    )
}


export function AddImg(){
    return(
        
            <div className=" w-auto h-auto absolute right-8 top-4 ">
            <MdOutlineAddCircle className="text-6xl text-indigo-600 "/>
            </div>
    
    )
}