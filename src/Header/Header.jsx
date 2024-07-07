export default function Header(){
    return(
        <>
        <div className="flex w-full border-solid border border-blue-600 justify-center ">
        <div className="mr-auto justify-start">
            <h1>LOGO</h1>
        </div>
        <div className="flex flex-wrap gap-5 border-solid border border-green-500 ">
            <span>About</span>
            <span>Services</span>
            <span>Cases</span>
            <span>Blog</span>
            <span>Contact</span>


        </div>
        <div className=" border-solid border border-red-600 ml-auto justify-end">
            <button>login</button>
        </div>
        </div>
        
        </>
    )
}