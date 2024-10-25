import { RxCross2 } from "react-icons/rx";


export const LeftSlide = ({isLeftOpen,setIsLeftOpen})=>{
    return(
        <div className={` flex justify-center items-center fixed top-0 left-0 z-40 h-full w-72 bg-white text-white transform ${
            isLeftOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}>



                <div className="w-full h-full border border-black relative">
                    <div className="border border-red-600 w-full h-full absolute top-20 flex flex-col ">
                        <div className="w-full h-10 border border-green-600 flex justify-end items-center pr-2">
                            <div className=" rounded-sm flex justify-center items-center  "><RxCross2 className="text-slate-400 text-xl cursor-pointer hover:text-black" onClick={()=>setIsLeftOpen((e)=>!e)}/></div>

                        </div>

                    </div>

                </div>

    </div> 
    )
}