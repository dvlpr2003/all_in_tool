export default function Organize(){
    return(






    
        <div>
        <div className="border border-white w-72  bg-white py-5 rounded-lg  hover:shadow-sm">
        <span className="ml-6 font-bold text-gray-500">ORGANIZE</span>
        <ul className="flex flex-col gap-5 justify-center items-center mt-5">
            <li className="w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                <a href="#" className="flex h-9 items-center" >
                    <div className="flex justify-center items-center gap-6">
                    <img src="img/organize/add.png" alt="" className="max-w-full h-10"/>
                    <span>Merge PDF</span>
                    </div>
                </a>
            </li>
            <li className=" w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                <a href="#" className="flex h-9 items-center">
                <div className="flex justify-center items-center gap-6">

                   <img src="img/organize/pdf rotate.png" alt="" className="max-w-full h-10"/>

                    <span>Rotate PDF</span>
                </div>
                </a>
            </li>
            <li className="w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                <a href="#" className="flex h-9 items-center">
                <div className="flex justify-center items-center gap-6">
                   <img src="img/organize/trash.png" alt="" className="max-w-full h-10"/>
                    <span>Delete page</span>
                </div>
                </a>
            </li>
            <li className=" w-48 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
            <a href="#" className="flex h-9 items-center">
                <div className="flex justify-center items-center gap-6">
                   <img src="img/organize/split.png" alt="" className="max-w-full h-10"/>
                    <span>Split PDF</span>
                </div>
                </a>
            </li>
        </ul>

    </div>

    </div>
    )
}