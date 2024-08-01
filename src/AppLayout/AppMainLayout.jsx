import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function AppLayout(){
    return(
        <>
        <header className="border-solid flex gap-5 w-full justify-center py-7 min-[55px]:px-3 min-[660px]:px-6 absolute top-0 border bg-white z-40">
           <Header/>
           
        </header>
        <main className="flex justify-center h-full border border-blue-700 overflow-scroll z-30" >
            <Outlet/>
        </main>
        </>
    )
}