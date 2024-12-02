import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeExcelItem } from "./exceltopdfSlicer";


export default function DashboardEdit(){
    const ExcelItems = useSelector((state)=>state.excel.Excel_Items)

    const globDispatch = useDispatch()
    console.log(ExcelItems)
    

    return(
        <>
        <div className="flex  gap-x-9 gap-y-10 flex-wrap px-20 py-4  justify-center   overflow-y-scroll overflow-x-hidden">
        {ExcelItems.map((e)=>
            <div className="flex flex-col justify-center items-center" key={e.id}>
            
            <div className="border bg-white  w-44 h-52 p-9 shadow-lg group relative">
                <ExcelDelete globDispatch = {globDispatch}  id = {e.id}/>

                <div className="w-full h-full border border-gray-300 flex justify-center items-center shadow-md">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/utils/excel.png" alt=""  className="w-auto h-16" draggable={false}/>
                </div>
            </div>
                <div className="text-black  mt-2 bg-transparent overflow-hidden">{e.fileName.slice(0,25)}</div>

            </div>
        )


        }
        </div>

        </>
    )

}


function ExcelDelete({globDispatch,id}){
    function handleEvent(){
        
        globDispatch(removeExcelItem(id))
        
    }
    return(
        <div className="absolute z-30 w-36 h-8 left-4 right-0 top-0 border border-slate-100 bg-white cursor-pointer  justify-around items-center group-hover:shadow-2xl shadow-2xl hidden group-hover:flex"> 

        <MdOutlineDeleteForever className="text-slate-400 text-xl hover:text-red-600" onClick={handleEvent}/>
    
        </div>
    )
}