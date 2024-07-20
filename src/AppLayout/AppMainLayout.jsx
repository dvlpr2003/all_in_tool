import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function AppLayout(){
    return(
        <>
        <header className="border-solid flex gap-5 w-full justify-center py-7 min-[55px]:px-3 min-[660px]:px-6 sticky top-0">
           <Header/>
           
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}