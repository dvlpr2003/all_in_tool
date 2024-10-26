import { RxCross2 } from "react-icons/rx";

export const RightSlide =({isRightOpen,setIsRightOpen})=>{
    
    return(
        <div className={`fixed top-0 right-0 h-full w-72 z-40 border  bg-white text-white transform ${
            isRightOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}>
                    <div className=" w-full h-full absolute top-20 flex flex-col ">
                        <div className="w-full h-10  flex justify-start items-center pl-5">
                            <div className=" rounded-sm flex justify-center items-center  "><RxCross2 className="text-slate-400 text-xl cursor-pointer hover:text-black" onClick={()=>setIsRightOpen(false)}/></div>

                        </div>

                    </div>

            </div>
    )
}