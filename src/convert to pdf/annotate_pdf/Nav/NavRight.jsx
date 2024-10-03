import { useState } from "react";
import { IoMdArrowDropleft } from "react-icons/io";

export function NavRight({handleConvert}){
    const [isRightOpen,setRightOpen]=useState(false)

    return(
    <>

        <aside className={`min-[55px]:hidden lg:flex flex-col w-60 h-screen   overflow-y-auto bg-white border-l rtl:border-r rtl:border-l  `}>
            <div className=" w-full h-full mt-10 flex flex-col  items-center gap-4 pt-10 overflow-y-scroll pb-3">
                <div className=" border w-auto h-auto shadow-xl">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg" alt=""  className="w-auto h-56"/>
                </div>
                <div className=" border w-auto h-auto shadow-xl">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg" alt=""  className="w-auto h-56"/>
                </div>
                <div className=" border w-auto h-auto shadow-xl">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg" alt=""  className="w-auto h-56"/>
                </div>
                <div className=" border w-auto h-auto shadow-xl">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg" alt=""  className="w-auto h-56"/>
                </div>
                <div className=" border w-auto h-auto shadow-xl">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg" alt=""  className="w-auto h-56"/>
                </div>






            </div>




            
        </aside>
        <aside className={`min-[55px]:flex lg:hidden flex-col w-auto h-screen   overflow-y-auto bg-slate-50 justify-center `}>
            <div className="flex w-full justify-center items-center h-full overflow-y-hidden">
            <div className="">
            <IoMdArrowDropleft  className="text-slate-900 text-3xl" onClick={()=>setRightOpen((i)=>!i)}/>
            </div>

            { isRightOpen &&<div className=" w-52 h-full mt-10 flex flex-col  items-center gap-4 pt-10 overflow-y-scroll pb-3 bg-white border-l rtl:border-r rtl:border-l">
                <div className=" border w-auto h-auto shadow-xl">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg" alt=""  className="w-auto h-56"/>
                    </div>
                    <div className=" border w-auto h-auto shadow-xl">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg" alt=""  className="w-auto h-56"/>
                    </div>
                    <div className=" border w-auto h-auto shadow-xl">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg" alt=""  className="w-auto h-56"/>
                    </div>
                    <div className=" border w-auto h-auto shadow-xl">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg" alt=""  className="w-auto h-56"/>
                    </div>
                    <div className=" border w-auto h-auto shadow-xl">
                    <img src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg" alt=""  className="w-auto h-56"/>
                </div>






            </div>}

            </div>



            
        </aside>
    </>
    
    )
}
