import { useState,useEffect } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Header(){
    const [enter,setEnter]=useState(false)
    const [About,setAbout]=useState(false)
    console.log(enter)
    // console.log(About)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
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

        <div className="flex flex-wrap font-semibold justify-center items-center cursor-pointer">
            
            <div className={`text-slate-950 hover:text-black ${enter?'text-zinc-500':""} px-5 py-3 text-base flex items-center justify-center `} onMouseLeave={!isMobile?()=>{setEnter(false); setAbout(false)}:null} onMouseEnter={!isMobile?()=>{setEnter(true); setAbout(true)}:null} ><div className="flex" onClick={isMobile?()=>{setEnter((e)=>!e); setAbout((e)=>!e)}:null}><span >About</span> <MdKeyboardArrowDown className="c-menu-arrow"/> </div></div>
            <div className={`text-slate-950 hover:text-black ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onPointerLeave={()=>setEnter(false)} onPointerEnter={()=>setEnter(true)}><span>Services</span></div>
            <div className={`text-slate-950 hover:text-black ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onPointerLeave={()=>setEnter(false)} onPointerEnter={()=>setEnter(true)}><span>Cases</span></div>
            <div className={`text-slate-950 hover:text-black ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onPointerLeave={()=>setEnter(false)} onPointerEnter={()=>setEnter(true)}><span>Blog</span></div>
            <div className={`text-slate-950 hover:text-black ${enter?'text-zinc-500':""} px-5 py-3 text-base`} onPointerLeave={()=>setEnter(false)} onPointerEnter={()=>setEnter(true)}><span>Contact</span></div>

        </div>

        <div className=" border-solid font-semibold ml-auto justify-end flex gap-5">

            <button className=" px-5 text-lg rounded-lg hover:bg-slate-100">Log in</button>
            <button className="px-6 py-2 text-lg text-black rounded-lg border border-slate-950 font-bold  hover:bg-red-500 hover:border-red-500 hover:text-white" >Sign up free</button>

        </div>


        </div>
        <ProductDt About={About} setAbout={setAbout} enter={enter} setEnter={setEnter}/>
        
        </>
    )
}
function ProductDt({About,enter,setAbout,setEnter}){
   
    return(
        <div className={` absolute border border-slate-950 about-menu ${About?"block":"hidden"}`} onPointerLeave={()=>{setEnter(false); setAbout(false)}} onPointerEnter={()=>{setEnter(true);setAbout(true)}}>
            
        </div>
    )
}