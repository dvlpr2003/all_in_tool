import { useState,useEffect } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
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
        <div className="flex w-full justify-center items-center gap-10 max-w-screen-xl ">


        <div className=" justify-start">

            <h1>LOGO</h1>

        </div>

        <div className="flex flex-wrap font-semibold justify-center items-center cursor-pointer sm:hidden lg:flex min-[55px]:hidden">
            
            <div className={`text-slate-950 hover:text-black ${enter?'text-zinc-500':""} px-5 py-3 text-base flex items-center justify-center relative `} onMouseLeave={!isMobile?()=>{setEnter(false); setAbout(false)}:null} onMouseEnter={!isMobile?()=>{setEnter(true); setAbout(true)}:null} onClick={isMobile?()=>{setEnter((e)=>!e); setAbout((e)=>!e)}:()=>{setEnter((e)=>!e); setAbout((e)=>!e)}} >
                <div className="flex" >
                <span >Tools</span>
                <MdKeyboardArrowDown className="c-menu-arrow"/> 
                </div>
            <ProductDt About={About} setAbout={setAbout} enter={enter} setEnter={setEnter} isMobile={isMobile}/>
            </div>

            <div className={`text-slate-950 hover:text-black ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Services</span></div>
            <div className={`text-slate-950 hover:text-black ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Cases</span></div>
            <div className={`text-slate-950 hover:text-black ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Blog</span></div>
            <div className={`text-slate-950 hover:text-black ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Contact</span></div>

        </div>

        <div className=" font-semibold ml-auto justify-end">
            <div className="sm:flex lg:hidden justify-center items-center py-2">
            
            <IconMenu />
            </div>
            <div className="flex gap-5 sm:hidden min-[55px]:hidden lg:flex">
            <button className=" px-5 text-lg rounded-lg hover:bg-slate-100">Log in</button>
            <button className="px-6 py-2 text-lg text-black rounded-lg border border-slate-950 font-bold  hover:bg-red-500 hover:border-red-500 hover:text-white" >Sign up free</button>
            </div>
        </div>


        </div>
        
        </>
    )
}
function ProductDt({About,enter,setAbout,setEnter,isMobile}){
   
    return(
        <div className={` absolute border border-slate-950 about-menu ${About?"block":"hidden"}`}onMouseEnter={!isMobile?()=>{setEnter(true); setAbout(true)}:null} onMouseLeave={!isMobile?()=>{setEnter(false); setAbout(false)}:null}>
            
        </div>
    )
}