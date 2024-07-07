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
        <div className=" border-solid ml-auto justify-end">
            <button className="px-12 py-3 text-white rounded-md bg-gradient-to-r from-blue-600  to-cyan-400 hover:from-pink-500 hover:to-yellow-500"  >login</button>
        </div>
        </div>
        
        </>
    )
}