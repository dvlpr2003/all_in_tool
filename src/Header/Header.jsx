import { useState,useEffect } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
import IconMenu from "./MenuIcon";
import { ProductDt } from "./Submenu";
import SideMenu from "./side menu/SideMenu";
export default function Header(){
    const [enter,setEnter]=useState(false)
    const [Tool,setTool]=useState(false)
    const [MenuIcon,setMenuIcon]=useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const [isOpen,setIsOpen] = useState(false)
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
      <nav className="container  py-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <img className="w-auto h-6 sm:h-7" src="https://d3jq6id3uwlfp0.cloudfront.net/logo-image/educ.png" alt="" />
          </a>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8  dark:hover:text-blue-400 hover:text-blue-500" href="#">
              Home
            </a>
            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8  dark:hover:text-blue-400 hover:text-blue-500" href="#">
              Components
            </a>
            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8  dark:hover:text-blue-400 hover:text-blue-500" href="#">
              Pricing
            </a>
            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8  dark:hover:text-blue-400 hover:text-blue-500" href="#">
              Contact
            </a>
          </div>

          <a className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto" href="#">
            Get started
          </a>
        </div>
      </nav>

        
        </>
    )
}



function Buttons(){
  return(
    <div className="flex gap-5  min-[55px]:hidden lg:flex">
    <button className=" px-5  rounded-lg hover:bg-slate-100 border-0">Log in</button>
    <button className="px-6 py-2 text-lg text-white rounded-lg border border-indigo-600 bg-indigo-600 font-bold  hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all" >Sign up free</button>
    </div>
    
  )
}