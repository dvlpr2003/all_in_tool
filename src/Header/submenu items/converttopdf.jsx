export default function ConvertToPdf(){
    return (
        <div>
        <div className="w-72  bg-white py-5  rounded-lg hover:shadow-sm">
            <span className="ml-6 font-bold text-gray-500">CONVERT TO PDF</span>
            <ul className="flex flex-col gap-5 justify-center items-center mt-5">
                <li className="w-56 py-2 hover:border-blue-100 hover:bg-blue-100 hover:rounded-sm hover:shadow-md">
                    <a href="#" className="flex h-9 items-center" >
                        <div className="flex justify-center items-center gap-6">
                        <img src="img/convert pdf/jpeg to pdf.png" alt="" className="max-w-full h-10"/>
                        <span>JPG to PDF</span>
                        </div>
                    </a>
                </li>
                <li className=" w-56 py-2 hover:border-violet-100 hover:bg-violet-100 hover:rounded-sm hover:shadow-md">
                    <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/convert pdf/jpeg to pdf.png" alt="" className="max-w-full h-10"/>
                        <span>PNG to PDF</span>
                    </div>
                    </a>
                </li>

                <li className=" w-56 py-2 hover:border-violet-100 hover:bg-violet-100 hover:rounded-sm hover:shadow-md">
                <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/convert pdf/html to pdf.png" alt="" className="max-w-full h-10"/>
                        <span>HTML to PDF</span>
                    </div>
                    </a>
                </li>
                <li className="w-56 py-2 hover:border-zinc-100 hover:bg-zinc-100 hover:rounded-sm hover:shadow-md">
                    <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/convert pdf/word to pdf.png" alt="" className="max-w-full h-10"/>
                        <span>WORD to PDF</span>
                    </div>
                    </a>
                </li>
                <li className="w-56 py-2 hover:border-zinc-100 hover:bg-zinc-100 hover:rounded-sm hover:shadow-md">
                    <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/convert pdf/excel to pdf.png" alt="" className="max-w-full h-10"/>
                        <span>EXCEL to PDF</span>
                    </div>
                    </a>
                </li>
                <li className="w-56 py-2 hover:border-zinc-100 hover:bg-zinc-100 hover:rounded-sm hover:shadow-md">
                    <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/convert pdf/ppt to pdf.png" alt="" className="max-w-full h-10"/>
                        <span>PowerPoint to PDF</span>
                    </div>
                    </a>
                </li>
            </ul>

        </div>
        </div>

    )
}