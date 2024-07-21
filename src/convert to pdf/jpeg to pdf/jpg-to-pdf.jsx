import { MdOutlineUploadFile } from "react-icons/md";


export default function Jpgtopdf(){
    return(
        <>
        <section className="  min-h-svh pt-28 w-full  flex justify-center">
            <div className=" w-full max-w-screen-2xl flex flex-col items-center ">

                <div className=" border-4 border-slate-200 rounded-3xl w-auto flex justify-center items-center p-0 mt-12 overflow-hidden group">
                    <div className=" rounded-3xl w-full flex justify-center items-center">
                        <div className=" py-10 upload-container flex flex-col justify-center items-center gap-4">
                            <div className="w-full flex justify-center items-center">
                                <div className="w-36 h-36 flex justify-center items-center border border-indigo-50 rounded-full bg-indigo-50 ">
                                    <MdOutlineUploadFile className="text-8xl text-indigo-600 group-hover:text-indigo-500"/>

                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-1 justify-center items-center">
                                <div className="flex justify-center items-center gap-2 text-lg font-bold"><span className="text-indigo-600 group-hover:text-indigo-500">Click to upload</span><span className="text-black group-hover:text-slate-600">your file or drag and drop.</span></div>
                                <span className="text-gray-500 font-semibold ">Supported format:JPG,PNG</span>
                                
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            

        </section>
        </>

    )
}