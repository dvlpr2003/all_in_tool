import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";

export default function AppLayout(){
    const loaction = useLocation()
    return(
        <>
       
        <header className=" flex gap-5 w-full justify-center px-5 fixed border top-0 bg-white z-50 shadow-md">
           <Header/>
           
        </header>
    
        <main className="flex justify-center min-h-full overflow-scroll z-30 " >
            <Outlet
            />
        </main>

        </>
    )
}