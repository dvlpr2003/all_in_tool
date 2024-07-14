export default function Edit(){
    return(
        <div>
        <div className="border border-white lg:w-72 min-[55px]:w-full  bg-white py-5  rounded-lg">
            <span className="ml-6 font-bold text-gray-500">EDIT</span>
            <EditItems/>
        </div>
        </div>
    )
}

export function EditItems(){
    return(
        <ul className="mt-5 flex flex-col  min-[55px]:gap-1 lg:gap-5 lg:justify-center lg:items-center min-[55px]:justify-start min-[55px]:items-start min-[55px]:ml-4">
        <li className="lg:w-56 min-[55px]:w-full py-2  hover:border-slate-100 hover:bg-slate-100 hover:rounded-sm hover:shadow-md group">
            <a href="#" className="flex h-9 items-center" >
                <div className="flex justify-center items-center gap-6">
                <img src="img/edit/crop.png" alt="" className="max-w-full h-10 group-hover:h-11"/>
                <span className="group-hover:font-bold">Crop PDF</span>
                </div>
            </a>
        </li>
        <li className="lg:w-56 min-[55px]:w-full py-2  hover:border-slate-100 hover:bg-slate-100 hover:rounded-sm hover:shadow-md group">
            <a href="#" className="flex h-9 items-center">
            <div className="flex justify-center items-center gap-6">
               <img src="img/edit/edit pdf.png" alt="" className="max-w-full h-10 group-hover:h-11"/>
                <span className="group-hover:font-bold">Edit PDF</span>
            </div>
            </a>
        </li>

        <li className="lg:w-56 min-[55px]:w-full py-2  hover:border-slate-100 hover:bg-slate-100 hover:rounded-sm hover:shadow-md group">
        <a href="#" className="flex h-9 items-center">
            <div className="flex justify-center items-center gap-6">
               <img src="img/edit/read pdf.png" alt="" className="max-w-full h-10 group-hover:h-11"/>
                <span className="group-hover:font-bold">Read PDF</span>
            </div>
            </a>
        </li>
        <li className="lg:w-56 min-[55px]:w-fullpy-2  hover:border-slate-100 hover:bg-slate-100 hover:rounded-sm hover:shadow-md group">
            <a href="#" className="flex h-9 items-center">
            <div className="flex justify-center items-center gap-6">
               <img src="img/edit/page number.png" alt="" className="max-w-full h-10 group-hover:h-11"/>
                <span className="group-hover:font-bold">Page Number</span>
            </div>
            </a>
        </li>
    </ul>

    )
}