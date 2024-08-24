import React, { useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";

export const DownloadPage = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    return (
      <section className="w-full min-h-screen bg-white flex flex-col justify-center items-center">

        <div className=' w-2/5 h-auto flex flex-col '>
            <div>
                
            </div>
            <div className='flex justify-center items-center gap-2'>

                <div className='border border-blue-600 bg-blue-600 w-56 h-12 flex justify-center items-center text-white rounded-md'>
                    <span  className='text-md'> Download</span>
                </div>
                <div className='border border-blue-600 bg-blue-600 w-14 h-12 flex justify-center items-center text-white rounded-md'>
                    <span><HiDotsHorizontal  className='text-2xl'/></span>
                </div>

            </div>

        </div>

      </section>
    
    )
}