export default function ConvertToPdf(){
    return (
        <div>
        <div className="w-72  bg-white py-5  rounded-lg ">
            <span className="ml-6 font-bold text-gray-500">CONVERT TO PDF</span>
            <ul className="flex flex-col gap-5 justify-center items-center mt-5">
                <li className="w-56 py-2 hover:border-slate-100 hover:bg-slate-100 hover:rounded-sm hover:shadow-md group">
                    <a href="#" className="flex h-9 items-center" >
                        <div className="flex justify-center items-center gap-6">
                        <img src="img/convert pdf/jpeg to pdf.png" alt="" className="max-w-full h-10 group-hover:h-11"/>
                        <span className="group-hover:font-bold">JPG to PDF</span>
                        </div>
                    </a>
                </li>
                <li className=" w-56 py-2  hover:border-slate-100 hover:bg-slate-100 hover:rounded-sm hover:shadow-md group">
                    <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/convert pdf/jpeg to pdf.png" alt="" className="max-w-full h-10 group-hover:h-11"/>
                        <span className="group-hover:font-bold">PNG to PDF</span>
                    </div>
                    </a>
                </li>

                <li className=" w-56 py-2  hover:border-slate-100 hover:bg-slate-100 hover:rounded-sm hover:shadow-md group">
                <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/convert pdf/html to pdf.png" alt="" className="max-w-full h-10 group-hover:h-11"/>
                        <span className="group-hover:font-bold">HTML to PDF</span>
                    </div>
                    </a>
                </li>
                <li className="w-56 py-2  hover:border-slate-100 hover:bg-slate-100 hover:rounded-sm hover:shadow-md group">
                    <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/convert pdf/word to pdf.png" alt="" className="max-w-full h-10 group-hover:h-11"/>
                        <span className="group-hover:font-bold">WORD to PDF</span>
                    </div>
                    </a>
                </li>
                <li className="w-56 py-2  hover:border-slate-100 hover:bg-slate-100 hover:rounded-sm hover:shadow-md group">
                    <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/convert pdf/excel to pdf.png" alt="" className="max-w-full h-10 group-hover:h-11"/>
                        <span className="group-hover:font-bold">EXCEL to PDF</span>
                    </div>
                    </a>
                </li>
                <li className="w-56 py-2  hover:border-slate-100 hover:bg-slate-100 hover:rounded-sm hover:shadow-md group">
                    <a href="#" className="flex h-9 items-center">
                    <div className="flex justify-center items-center gap-6">
                       <img src="img/convert pdf/ppt to pdf.png" alt="" className="max-w-full h-10 group-hover:h-11"/>
                        <span className="group-hover:font-bold">PowerPoint to PDF</span>
                    </div>
                    </a>
                </li>
            </ul>

        </div>
        </div>

    )
}