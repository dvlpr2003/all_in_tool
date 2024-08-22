import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";

export default function AppLayout(){
    const loaction = useLocation()
    return(
        <>
        {loaction.pathname != "/"?
        <header className=" flex gap-5 w-full justify-center  absolute top-0 border bg-white z-40">
           <Header/>
           
        </header>:""

        }
        <main className="flex justify-center h-full overflow-scroll z-30" >
            <Outlet/>
        </main>
        </>
    )
}