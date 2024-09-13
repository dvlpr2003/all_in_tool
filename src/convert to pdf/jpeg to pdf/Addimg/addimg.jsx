import { MdOutlineAddCircle } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaDropbox } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";
import axios from "axios";
import { useState,useRef,useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "../jpgtopdfSlicer";
import { useNavigate } from "react-router-dom";
import DropboxChooser from 'react-dropbox-chooser';

export function AddImg({setArray,array,setLoading}){
    const [Opacity,setOpacity]=useState(false)
    const inputref = useRef(null)
    const [Imgfile,setImgfile]= useState(null)


    const formData = new FormData();
    const globDispatch = useDispatch();
    const navigate = useNavigate()
    // function handleInputEvent(Event){
      
    //   const Imagefile= Object.entries(Event.target.files)
      
    //   const finalItems = Object.entries(Imagefile)
      
    //   const empty = []

    //   let len = array.reduce((max, obj) => {
    //     return obj.id > max ? obj.id+1 : max+1;
    //   }, -Infinity);


    //   finalItems.forEach((element,i )=> {

    //     if(array.length === 0){
    //       let img_name = element[1][1].name.split(".")[0]
     
    //       let content = {id:i+1,name:img_name,image:element[1][1].name,rotate:0,image_file:element[1][1]}
    //       empty.push(content)
    //     }
    //     if (array.length >0){
    //       let img_name = element[1][1].name.split(".")[0]
          

    //       let content = {id:len,name:img_name,image:element[1][1].name,rotate:0,image_file:element[1][1]}
    //       empty.push(content)
    //       len+=1;
    //     }
        
    //   });
    //   setArray((e)=>[...e,...empty])
      // inputref.current.value = ""
  
    // }
    function handleInputEvent(Event){
            const Imagefile= Object.entries(Event.target.files)
      
            const finalItems = Object.entries(Imagefile)
            finalItems.forEach((element,i )=> {
              formData.append(`file[${i}]`,element[1][1])
              
            });
            inputref.current.value = ""
            async function uploadFile(formData){

              try{
                  setLoading(true)
                  const response = await axios.post("http://127.0.0.1:8000/fileUpload/upload/v1/",formData,{  
                      headers: {  
                       'Content-Type': 'multipart/form-data',  
                      },  
                     
              })
                  // console.log(response.data)

                  setLoading(false)
                  globDispatch(setItems(response.data))

                
              }catch(error){
                  console.log(error)
                  setLoading(false)
              }
  
          }
          uploadFile(formData)
      
    }


    function handleMouseMove(){
        setOpacity((e)=>!e)
        
    }
    const handleSuccess = (files) => {
      console.log('Selected file:', files[0]);
    };
  
    return(
        
            <div className=" w-auto h-auto absolute top-20 right-0 left-0 z-40 p-2 flex justify-center items-center" >
              <div className=" w-auto h-auto  flex gap-2">
                <label htmlFor = "flupload-com" className="border rounded-md bg-white  flex flex-col justify-center items-center gap-1 cursor-pointer min-[55px]:w-24 min-[600px]:w-44 shadow-md">

                <HiComputerDesktop className="min-[55px]:text-lg min-[600px]:text-2xl text-gray-600"/>
                <span className="min-[55px]:text-sm min-[600px]:text-md text-gray-500">Computer</span>
                <input type="file" className="hidden" id="flupload-com"  onChange={handleInputEvent} ref={inputref} multiple accept=".jpg,.jpeg,.png"/>
                  
                </label>

                <div className=" border rounded-md bg-white flex gap-1 flex-col justify-center items-center cursor-pointer min-[55px]:w-24 min-[600px]:w-44 shadow-md" >
                <DropboxChooser appKey ={"omvo50s697s13xb"}  success={handleSuccess}>
                <div className="flex flex-col w-auto justify-center items-center">
                  <img className={"w-auto h-6 sm:h-7"} src="https://d3jq6id3uwlfp0.cloudfront.net/logo-image/dropbox.png" alt="dropbox" draggable={false}/>

                  <span className="min-[55px]:text-sm min-[600px]:text-md text-gray-500 ">Dropbox</span>
                </div>
                </DropboxChooser>
                </div>
                
                <div className="border rounded-md bg-white flex gap-2 flex-col justify-center items-center pt-2 cursor-pointer min-[55px]:w-24 min-[600px]:w-44 shadow-md" >
                <img className={"w-auto h-5"} src="https://d3jq6id3uwlfp0.cloudfront.net/logo-image/Drive.png" alt="google-drive" draggable={false}/>
                <span className="min-[55px]:text-sm min-[600px]:text-md text-gray-500">Drive</span>



                </div>


              </div>
            </div>
    
    )
}
