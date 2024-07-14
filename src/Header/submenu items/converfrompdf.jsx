export default function ConvertFromPdf(){
    return(
        <div className="border border-white w-72  bg-white py-5  rounded-lg  hover:shadow-sm">
        <span className="ml-6 font-bold text-gray-500">CONVERT FROM PDF</span>
        <ul className="flex flex-col gap-5 justify-center items-center mt-5">
            <li className="w-56 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                <a href="#" className="flex h-9 items-center" >
                    <div className="flex justify-center items-center gap-6">
                    <img src="img/pdf to jpeg.png" alt="" className="max-w-full h-10"/>
                    <span>PDF to JPEG</span>
                    </div>
                </a>
            </li>
            <li className=" w-56 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                <a href="#" className="flex h-9 items-center">
                <div className="flex justify-center items-center gap-6">
                   <img src="img/pdf to jpeg.png" alt="" className="max-w-full h-10"/>
                    <span>PDF to PNG</span>
                </div>
                </a>
            </li>
            <li className="w-56 py-2 hover:border-purple-100 hover:bg-purple-100 hover:rounded-sm hover:shadow-md">
            <a href="#" className="flex h-9 items-center">
                <div className="flex justify-center items-center gap-6">
                   <img src="img/pdf to html.png" alt="" className="max-w-full h-10"/>
                    <span>PDF to HTML</span>
                </div>
                </a>
            </li>
            <li className="w-56 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
                <a href="#" className="flex h-9 items-center">
                <div className="flex justify-center items-center gap-6">
                   <img src="img/pdf to word.png" alt="" className="max-w-full h-10"/>
                    <span>PDF to Word</span>
                </div>
                </a>
            </li>
            <li className=" w-56 py-2 hover:border-indigo-100 hover:bg-indigo-100 hover:rounded-sm hover:shadow-md">
            <a href="#" className="flex h-9 items-center">
                <div className="flex justify-center items-center gap-6">
                   <img src="img/pdf to excel.png" alt="" className="max-w-full h-10"/>
                    <span>PDF to Excel</span>
                </div>
                </a>
            </li>
            <li className="w-56 py-2 hover:border-purple-100 hover:bg-purple-100 hover:rounded-sm hover:shadow-md">
            <a href="#" className="flex h-9 items-center">
                <div className="flex justify-center items-center gap-6">
                   <img src="img/pdf to ppt.png" alt="" className="max-w-full h-10"/>
                    <span>PDF to PowerPoint</span>
                </div>
                </a>
            </li>

        </ul>

    </div>
    )

}
