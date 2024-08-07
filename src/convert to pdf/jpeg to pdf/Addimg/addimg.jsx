import { MdOutlineAddCircle } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaDropbox } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";
import { useState,useRef,useEffect } from "react";
export function AddImg({setArray,array}){
    const [Opacity,setOpacity]=useState(false)
    const inputref = useRef(null)
    const [Imgfile,setImgfile]= useState(null)
    function handleInputEvent(Event){
      
      const Imagefile= Object.entries(Event.target.files)
      const finalItems = Object.entries(Imagefile)
      const empty = []
      let len = array.length+1

      finalItems.forEach((element,i )=> {
        if(array.length === 0){
          console.log("0 list")
          let content = {id:i+1,image:element[1][1].name}
          empty.push(content)
        }
        if (array.length >0){
          console.log("greater 0")
          let content = {id:len,image:element[1][1].name}
          empty.push(content)
          len+=1;
        }
        
      });
      setArray((e)=>[...e,...empty])
      inputref.current.value = ""
    }

    // useEffect(()=>{

    //   if (Imgfile){
        
    //     setArray((e)=>[...e,...Imgfile])
    //     inputref.current.value = ""

    //   }
    // },[Imgfile])




    function handleMouseMove(){
        setOpacity((e)=>!e)
        
    }
    console.log(array)
    return(
        
            <div className=" w-auto h-auto absolute right-5 top-4 " >
                <div className="relative">
                    <MdOutlineAddCircle className="text-5xl text-indigo-600 cursor-pointer" onClick={()=>handleMouseMove()}/>
                    <div className={`h-auto w-auto sticky right-0 left-0   mt-1 flex flex-col items-center gap-2 transition-opacity duration-300 opacity-0 ${Opacity?"opacity-100":""} z-40`}  >
                      <label htmlFor="computer-upload">
                        <div className=" bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                        <HiComputerDesktop className="text-xl text-white"/>
                        <input type="file"  id="computer-upload" className="hidden" onChange={handleInputEvent} ref={inputref} multiple/>

                        </div>
                        </label>
                        <div className=" bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                        <FaDropbox className="text-xl text-white"/>

                        </div>
                        <div className=" bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                        <FaGoogleDrive className="text-xl text-white"/>

                        </div>

                    </div>

                </div>
            </div>
    
    )
}
