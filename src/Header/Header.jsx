import { useState,useEffect } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
import IconMenu from "./MenuIcon";
import { ProductDt } from "./Submenu";
import SideMenu from "./side menu/SideMenu";
export default function Header(){
    const [enter,setEnter]=useState(false)
    const [About,setAbout]=useState(false)
    const [MenuIcon,setMenuIcon]=useState(false)
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
        <div className="flex w-full justify-center items-center gap-4 max-w-screen-xl relative ">


        <div className=" justify-start h-auto">
          {/* logo */}
            <img src="img/logo-image/company.png" alt="logo" className="max-w-full h-9"/>

        </div>

        <div className="flex flex-wrap  justify-center items-center ml-3 cursor-pointer sm:hidden lg:flex min-[55px]:hidden ">
            
            <div className={`text-slate-950 hover:text-indigo-600 ${enter?'text-zinc-500':""} px-5 py-3  flex items-center justify-center  `} onMouseLeave={!isMobile?()=>{setEnter(false)}:null} onMouseEnter={!isMobile?()=>{setEnter(true)}:null} onClick={isMobile?()=>{setEnter((e)=>!e); setAbout((e)=>!e)}:()=>{setEnter((e)=>!e); setAbout((e)=>!e)}} >
                <div className="flex" >
                <span >Tools</span>
                <MdKeyboardArrowDown className="c-menu-arrow"/> 
                </div>
            </div>

            <div className={`text-slate-950 hover:text-indigo-600 ${enter?'text-zinc-500':""} px-5 py-3 `} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Services</span></div>
            <div className={`text-slate-950 hover:text-indigo-600 ${enter?'text-zinc-500':""} px-5 py-3 `} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Cases</span></div>
            <div className={`text-slate-950 hover:text-indigo-600 ${enter?'text-zinc-500':""} px-5 py-3 `} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Blog</span></div>
            <div className={`text-slate-950 hover:text-indigo-600 ${enter?'text-zinc-500':""} px-5 py-3 `} onMouseLeave={()=>setEnter(false)} onMouseEnter={()=>setEnter(true)}><span>Contact</span></div>

        </div>

        <div className=" font-semibold ml-auto justify-end  ">
            <div className="sm:flex lg:hidden justify-center items-center py-2">
            
            <IconMenu setMenuIcon={setMenuIcon}/>
           
            </div>
            <div className="flex gap-5 sm:hidden min-[55px]:hidden lg:flex">
            <button className=" px-5  rounded-lg hover:bg-slate-100 border-0">Log in</button>
            <button className="px-6 py-2 text-lg text-white rounded-lg border border-indigo-600 bg-indigo-600 font-bold  hover:bg-indigo-500 hover:border-indigo-500 hover:text-white" >Sign up free</button>
            </div>
        </div>


        <ProductDt About={About} setAbout={setAbout} enter={enter} setEnter={setEnter} isMobile={isMobile}/>
        {MenuIcon&&<SideMenu/>}

        </div>
        
        </>
    )
}
