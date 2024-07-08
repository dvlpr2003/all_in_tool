import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function AppLayout(){
    return(
        <>
        <header className="border-solid border border-sky-500  flex gap-5 w-full justify-center py-3 px-20">
           <Header/>
           
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}