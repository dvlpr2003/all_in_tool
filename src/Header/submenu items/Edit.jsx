export default function Edit(){
    return(
        <div>
        <div className="border border-white w-72  bg-white py-5 rounded-lg hover:shadow-sm">
            <span className="ml-6 font-bold text-gray-500">EDIT</span>
            <ul className="flex flex-col gap-5 justify-center items-center mt-5">
                <li className="w-56 py-2 hover:border-blue-100 hover:bg-blue-100 hover:rounded-sm hover:shadow-md">
                    <a href="#" className="flex h-9 items-center" >
                        <div className="flex justify-center items-center gap-6">
                        <img src="img/edit/crop.png" alt="" className="max-w-full h-10"/>
                        <span>Crop PDF</span>
                        </div>
                    </a>
                </li>
                <li className=" w-56 py-2 hover:border-violet-100 hover:bg-violet-100 hover:rounded-sm hover:shadow-md">
                    <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/edit/edit pdf.png" alt="" className="max-w-full h-10"/>
                        <span>Edit PDF</span>
                    </div>
                    </a>
                </li>

                <li className=" w-56 py-2 hover:border-violet-100 hover:bg-violet-100 hover:rounded-sm hover:shadow-md">
                <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/edit/read pdf.png" alt="" className="max-w-full h-10"/>
                        <span>Read PDF</span>
                    </div>
                    </a>
                </li>
                <li className="w-56 py-2 hover:border-zinc-100 hover:bg-zinc-100 hover:rounded-sm hover:shadow-md">
                    <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/edit/page number.png" alt="" className="max-w-full h-10"/>
                        <span>Page Number</span>
                    </div>
                    </a>
                </li>
            </ul>

        </div>
        </div>
    )
}