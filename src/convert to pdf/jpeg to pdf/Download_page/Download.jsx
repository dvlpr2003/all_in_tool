import React, { useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import { VscOpenPreview } from "react-icons/vsc";
import { AiOutlineMergeCells } from "react-icons/ai";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { LuSplitSquareHorizontal } from "react-icons/lu";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { MdOutlineRotate90DegreesCcw } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import { LuFileEdit } from "react-icons/lu";




export const DownloadPage = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    return (
      <section className="w-full min-h-screen bg-white flex flex-col justify-center items-center px-10">

        <div className='  h-auto flex flex-col gap-8'>

            <div className='flex justify-center items-center gap-2 relative'>
                <div className='flex gap-3'>

                    <div className='border border-blue-600 bg-blue-600 w-56 h-12 flex justify-center items-center text-white rounded-md cursor-pointer'>
                        <span  className='text-md'> Download</span>
                    </div>
                    <div className='border border-blue-600 bg-blue-600 w-14 h-12 flex justify-center items-center text-white rounded-md cursor-pointer' onClick={()=>setIsOpen((e)=>!e)}>
                        <span><HiDotsHorizontal  className='text-2xl'/></span>
                    </div>
                </div>
                {isOpen && (
                <div
                className={`absolute top-11 z-20 w-72 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl 
                    transition ease-out duration-100 transform ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                <a
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  "
                >
                    <div className='flex items-center gap-1 ml-0'>
                        <img className={"w-auto h-6 sm:h-7"} src="https://d3jq6id3uwlfp0.cloudfront.net/logo-image/dropbox.png" alt="dropbox" />
                        <span className='ml-2'>upload to dropbox</span>
                    </div>
                </a>
                <a
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform "
                >
                    <div className='flex items-center gap-3 ml-1'>
                        <img className={"w-auto h-5"} src="https://d3jq6id3uwlfp0.cloudfront.net/logo-image/Drive.png" alt="dropbox" />
                
                        <span className='ml-1'>upload to Drive</span>
                    </div>
                </a>
                
                </div>
            )}
                    

            </div>
            <div className={`flex  justify-center items-center gap-9 ${isOpen?"mt-24":""} flex-wrap`}>
                <div className=' flex flex-col justify-center items-center  text-gray-500  hover:text-gray-700 hover:bg-gray-100 w-32 h-20 rounded-md cursor-pointer shadow-md'>
                <AiOutlineMergeCells className='text-xl font-bold'/>
                <span className='mt-1 text-sm'>Merge PDF</span>
                </div>
                <div className=' flex flex-col justify-center items-center  text-gray-500  hover:text-gray-700 hover:bg-gray-100 w-32 h-20 rounded-md cursor-pointer shadow-md'>
              
                <FaCompressArrowsAlt className='text-xl font-bold' />

                <span className='mt-1 text-sm'>Compress PDF</span>
                </div>
                <div className=' flex flex-col justify-center items-center  text-gray-500  hover:text-gray-700 hover:bg-gray-100 w-32 h-20 rounded-md cursor-pointer shadow-md'>
                <LuSplitSquareHorizontal  className='text-xl font-bold'/>

                <span className='mt-1 text-sm'>Split PDF</span>
                </div>
                <div className=' flex flex-col justify-center items-center  text-gray-500  hover:text-gray-700 hover:bg-gray-100 w-32 h-20 rounded-md cursor-pointer shadow-md'>
                <MdOutlineBrandingWatermark  className='text-xl font-bold'/>

                <span className='mt-1 text-sm'> Add Watermark</span>
                </div>
                <div className=' flex flex-col justify-center items-center  text-gray-500  hover:text-gray-700 hover:bg-gray-100 w-32 h-20 rounded-md cursor-pointer shadow-md'>
         
                <MdOutlineRotate90DegreesCcw className='text-xl font-bold'/>

                <span className='mt-1 text-sm'>Rotate PDF</span>
                </div>
                <div className=' flex flex-col justify-center items-center  text-gray-500  hover:text-gray-700 hover:bg-gray-100 w-32 h-20 rounded-md cursor-pointer shadow-md'>
                <AiOutlineFileProtect className='text-xl font-bold'/>

                <span className='mt-1 text-sm'>Protect PDF</span>
                </div>
                <div className=' flex flex-col justify-center items-center  text-gray-500  hover:text-gray-700 hover:bg-gray-100 w-32 h-20 rounded-md cursor-pointer shadow-md'>
                <LuFileEdit className='text-xl font-bold'/>

                <span className='mt-1 text-sm'>Edit PDF</span>
                </div>
                <div className=' flex flex-col justify-center items-center  text-gray-500  hover:text-gray-700 hover:bg-gray-100 w-32 h-20 rounded-md cursor-pointer shadow-md'>
                <VscOpenPreview  className='text-xl font-bold'/>
                <span className='mt-1 text-sm'>Preview</span>
                </div>
            </div>

        </div>

      </section>
    
    )
}