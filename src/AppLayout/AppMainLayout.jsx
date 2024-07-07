import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function AppLayout(){
    return(
        <>
        <header className="border-solid border border-sky-500 py-4 flex gap-5 px-2 w-full justify-center ">
           <Header/>
           
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}