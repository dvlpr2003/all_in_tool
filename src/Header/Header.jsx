import { useState,useEffect } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import IconMenu from "./MenuIcon";
export default function Header(){
    const [enter,setEnter]=useState(false)
    const [About,setAbout]=useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
// screen innerWidth listener useEffect function
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    
    return(
        <>
        <div className="flex w-full justify-center items-center gap-10 max-w-screen-xl relative">


        <div className=" justify-start">

            <h1>LOGO</h1>

        </div>

        <div className="flex flex-wrap font-semibold justify-center items-center cursor-pointer sm:hidden lg:flex min-[55px]:hidden">
            
            <div className={`text-slate-950 hover:text-indigo-600 ${enter?'text-zinc-500':""} px-5 py-3 text-base flex items-center justify-center  `} onMouseLeave={!isMobile?()=>{setEnter(false)}:null} onMouseEnter={!isMobile?()=>{setEnter(true)}:null} onClick={isMobile?()=>{setEnter((e)=>!e); setAbout((e)=>!e)}:()=>{setEnter((e)=>!e); setAbout((e)=>!e)}} >
                <div className="flex" >
                <span >Tools</span>
                <MdKeyboardArrowDown className="c-menu-arrow"/> 
                </div>
            </div>

            <div className={`text-slate-950 hover:text-indigo-600 ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Services</span></div>
            <div className={`text-slate-950 hover:text-indigo-600 ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Cases</span></div>
            <div className={`text-slate-950 hover:text-indigo-600 ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Blog</span></div>
            <div className={`text-slate-950 hover:text-indigo-600 ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Contact</span></div>

        </div>

        <div className=" font-semibold ml-auto justify-end">
            <div className="sm:flex lg:hidden justify-center items-center py-2">
            
            <IconMenu />
            </div>
            <div className="flex gap-5 sm:hidden min-[55px]:hidden lg:flex">
            <button className=" px-5 text-lg rounded-lg hover:bg-slate-100 border-0">Log in</button>
            <button className="px-6 py-2 text-lg text-black rounded-lg border border-slate-950 font-bold  hover:bg-indigo-600 hover:border-indigo-600 hover:text-white" >Sign up free</button>
            </div>
        </div>


        <ProductDt About={About} setAbout={setAbout} enter={enter} setEnter={setEnter} isMobile={isMobile}/>
        </div>
        
        </>
    )
}
function ProductDt({About,enter,setAbout,setEnter,isMobile}){
   
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
                                    <span>Add page</span>
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