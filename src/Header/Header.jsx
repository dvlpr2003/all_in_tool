export default function Header(){
    return(
        <>
        <div className="flex w-full justify-center items-center">
        <div className="mr-auto justify-start">
            <h1>LOGO</h1>
        </div>
        <div className="flex flex-wrap gap-5 border-solid border border-green-500 justify-center items-center">
            <span>About</span>
            <span>Services</span>
            <span>Cases</span>
            <span>Blog</span>
            <span>Contact</span>


        </div>
        <div className=" border-solid ml-auto justify-end flex gap-5">
            <button className="">Login</button>
            <button className="px-6 py-2 text-black rounded-lg border border-slate-950 font-bold" >Sign up free</button>
        </div>
        </div>
        
        </>
    )
}