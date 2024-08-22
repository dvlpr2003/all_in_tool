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

      let len = array.reduce((max, obj) => {
        return obj.id > max ? obj.id+1 : max+1;
      }, -Infinity);


      finalItems.forEach((element,i )=> {

        if(array.length === 0){
          let img_name = element[1][1].name.split(".")[0]
     
          let content = {id:i+1,name:img_name,image:element[1][1].name,rotate:0,image_file:element[1][1]}
          empty.push(content)
        }
        if (array.length >0){
          let img_name = element[1][1].name.split(".")[0]
          

          let content = {id:len,name:img_name,image:element[1][1].name,rotate:0,image_file:element[1][1]}
          empty.push(content)
          len+=1;
        }
        
      });
      setArray((e)=>[...e,...empty])
      inputref.current.value = ""
    }
    function handleMouseMove(){
        setOpacity((e)=>!e)
        
    }
    return(
        
            <div className=" w-auto h-auto absolute top-1 right-0 left-0 z-50 p-2 flex justify-center items-center" >
              <div className=" w-auto h-auto  flex gap-2">
                <label for = "flupload-com" className="border rounded-md bg-white  flex flex-col justify-center items-center gap-1 cursor-pointer min-[55px]:w-24 min-[600px]:w-44 ">

                <HiComputerDesktop className="min-[55px]:text-lg min-[600px]:text-2xl text-gray-600"/>
                <span className="min-[55px]:text-sm min-[600px]:text-md">Computer</span>
                <input type="file" className="hidden" id="flupload-com"  onChange={handleInputEvent} ref={inputref} multiple/>
                  
                </label>
                <div className=" border rounded-md bg-white flex gap-1 flex-col justify-center items-center cursor-pointer min-[55px]:w-24 min-[600px]:w-44" >
                <img className={"w-auto h-6 sm:h-7"} src="https://d3jq6id3uwlfp0.cloudfront.net/logo-image/dropbox.png" alt="dropbox" />
                <span className="min-[55px]:text-sm min-[600px]:text-md ">Dropbox</span>



                </div>
                <div className="border rounded-md bg-white flex gap-2 flex-col justify-center items-center pt-2 cursor-pointer min-[55px]:w-24 min-[600px]:w-44" >
                <img className={"w-auto h-5"} src="https://d3jq6id3uwlfp0.cloudfront.net/logo-image/Drive.png" alt="dropbox" />
                <span className="min-[55px]:text-sm min-[600px]:text-md ">Drive</span>



                </div>


              </div>





                {/* <div className="relative">
                    <MdOutlineAddCircle className="text-5xl text-indigo-600 cursor-pointer" onClick={()=>handleMouseMove()}/>
                    <div 
                    className={`h-auto w-auto sticky right-0 left-0   mt-1 flex flex-col items-center gap-2 transition-opacity duration-300 opacity-0 ${Opacity?"opacity-100":""} z-40`}  
                    >
                      <label htmlFor="computer-upload">
                        <div className=" bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                        <HiComputerDesktop className="text-xl text-white"/>
                        <input type="file"  id="computer-upload" className="hidden" accept="image/*" onChange={handleInputEvent} ref={inputref} multiple/>

                        </div>
                        </label>
                        <div className=" bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                        <FaDropbox className="text-xl text-white"/>

                        </div>
                        <div className=" bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                        <FaGoogleDrive className="text-xl text-white"/>

                        </div>

                    </div>

                </div> */}
            </div>
    
    )
}
