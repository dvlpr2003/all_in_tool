import { HiComputerDesktop } from "react-icons/hi2";
import axios from "axios";
import { useState,useRef } from "react";
import { useDispatch} from "react-redux";
import {setWordItems} from "../wordtopdfSlicer"
import { useNavigate } from "react-router-dom";
import DropboxChooser from 'react-dropbox-chooser';
import GooglePicker from "react-google-picker";


export function AddImg({setLoading}){

    const inputref = useRef(null)
   


    const formData = new FormData();
    const globDispatch = useDispatch();
    const navigate = useNavigate()

    function handleInputEvent(Event){

            const WORDfile= Object.entries(Event.target.files)
           
            const finalItems = Object.entries(WORDfile)
           
            finalItems.forEach((element,i )=> {
           
              formData.append(`file[${i}]`,element[1][1])
              
            });
            inputref.current.value = ""
            async function uploadFile(formData){

              try{
                  setLoading(true)
                  const response = await axios.post("http://127.0.0.1:8000/fileUpload/upload/word/v1/",formData,{  
                      headers: {  
                       'Content-Type': 'multipart/form-data',  
                      },  
                     
              })

                  setLoading(false)
                  globDispatch(setWordItems(response.data))

                
              }catch(error){
                  console.log(error)
                  setLoading(false)
              }
  
          }
          uploadFile(formData)
      
    }
    const handleSuccess = (files) => {
      
      files.forEach((element,i )=> {
        const link = element.link
        const contentLink = link.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
        formData.append(`file[${i}]`,JSON.stringify({
          name:element.name,
          file:contentLink,
        }))
      })
      inputref.current.value = ""
      async function uploadFile(formData){
            try{
              setLoading(true)
              const response = await axios.post("http://127.0.0.1:8000/fileUpload/upload/word/vi/dropbox/",formData,{  
                  headers: {  
                  'Content-Type': 'multipart/form-data',  
                  },  
                
          })

              setLoading(false)
              globDispatch(setWordItems(response.data))

            
          }catch(error){
              console.log(error)
              setLoading(false)
          }

      }
      uploadFile(formData)
      
    }


    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelection = (data) => {
      console.log(data)
    };
  
    const handleAuthFailure = (error) => {
      console.error('Authorization failed:', error);
    };
  
    const handlePickerClose = () => {
      console.log('Google Picker closed');
   
    };
  
    return(
        
            <div className=" w-auto h-auto absolute top-20 right-0 left-0 z-40 p-2 flex justify-center items-center" >
              <div className=" w-auto h-auto  flex gap-2">
                <label htmlFor = "flupload-com" className="border rounded-md bg-white  flex flex-col justify-center items-center gap-1 cursor-pointer min-[55px]:w-24 min-[600px]:w-44 shadow-md">

                <HiComputerDesktop className="min-[55px]:text-lg min-[600px]:text-2xl text-gray-600"/>
                <span className="min-[55px]:text-sm min-[600px]:text-md text-gray-500">Computer</span>
                <input type="file" className="hidden" id="flupload-com"  onChange={handleInputEvent} ref={inputref} multiple accept=".doc,.docx"/>
                  
                </label>

                <div className=" border rounded-md bg-white flex gap-1 flex-col justify-center items-center cursor-pointer min-[55px]:w-24 min-[600px]:w-44 shadow-md" >
                <DropboxChooser 
                appKey ={"omvo50s697s13xb"}
                multiselect={true}
                extensions={[".doc",".docx"]}
                success={handleSuccess} 
                >
                <div className="flex flex-col w-auto justify-center items-center">
                  <img className={"w-auto h-6 sm:h-7"} src="https://d3jq6id3uwlfp0.cloudfront.net/logo-image/dropbox.png" alt="dropbox" draggable={false}/>

                  <span className="min-[55px]:text-sm min-[600px]:text-md text-gray-500 ">Dropbox</span>
                </div>
                </DropboxChooser>
                </div>

                <div className="border rounded-md bg-white flex gap-2 flex-col justify-center items-center pt-2 cursor-pointer min-[55px]:w-24 min-[600px]:w-44 shadow-md" >
                <GooglePicker
                                clientId="147520737867-bbo44ffprqqh7d76gocir1dt9l79svjc.apps.googleusercontent.com"
                                developerKey="AIzaSyDEJYMiedbP6K7K1pAxcmUeWN0BfMSBxlI"
                                scope={['https://www.googleapis.com/auth/drive.file']}
                                onChange={handleFileSelection}
                                onAuthFailed={handleAuthFailure}
                                onPickerClose={handlePickerClose}
                                multiselect={true}
                                navHidden={true}
                                authImmediate={false}
                                viewId={'DOCS'}
                
                >
                <div className="flex flex-col w-auto justify-center items-center">
                <img className={"w-auto h-5"} src="https://d3jq6id3uwlfp0.cloudfront.net/logo-image/Drive.png" alt="google-drive" draggable={false}/>
                <span className="min-[55px]:text-sm min-[600px]:text-md text-gray-500">Drive</span>
                </div>
                </GooglePicker>


                </div>


              </div>
            </div>
    
    )
}
