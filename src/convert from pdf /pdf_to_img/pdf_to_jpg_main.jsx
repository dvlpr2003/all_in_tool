import axios from "axios"
import Loader from "../../Loader/Loader"
import {AddPDFFile} from './Addimg/Add_pdf_file'
import DashboardEdit from "./DashboardEdit"
import { DashboardNav } from "./Nav/DashboardNav"
import "./style/index.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {setDonwloadID} from "./pdftojpgSlicer"
import { useNavigate } from "react-router-dom"
import { DashboardNavMobRes } from "./Nav/DashboardNavMobRes"



export default function PDFtoJPG(){
    const [isLoading,setLoading]=useState(false)
    const formdata = new FormData()
    const JPGItems = useSelector((state)=>state.pdf_to_jpg.pdf_Items)
    const globDispatch = useDispatch()
    const navigate = useNavigate()

    async function handleConvert(){
            formdata.append("items",JSON.stringify(JPGItems))
            if (JPGItems.length != 0 ){
                    
                try{
                    setLoading(true)
                    const response = await axios.post("http://127.0.0.1:8000/convert_from_pdf/pdf-to-pptx/",formdata,{
                        headers: {  
                            'Content-Type': 'multipart/form-data',  
                        }, 
                    });
                   console.log(response.data["id"])
                    globDispatch(setDonwloadID(response.data["id"]))
                    setLoading(false)
                    navigate("/pdf-to-pptx/download")
                }catch(error){
                    setLoading(false)
                    console.log(error)
                }
    }


    }

    return(
        <>
        <section className="  h-screen  w-full  flex justify-center  ">
            <div className=" w-full max-w-screen-2xl h-auto bg-inherit flex min-[55px]:flex-col lg:flex-row relative z-0 mt-0">
                <div className="lg:h-full min-[55px]:order-2   z-30 lg:order-1 min-[55px]:mt-auto min-[55px]:w-full lg:w-auto  "> 
                <DashboardNav handleConvert={handleConvert}/>
                <DashboardNavMobRes handleConvert = {handleConvert}/>
                
                </div> 
                <div className=" w-full h-full padd flex relative min-[55px]:order-1 lg:order-2 bg-slate-50 flex-wrap overflow-scroll">
                    <AddPDFFile setLoading={setLoading}/>


                    <div className="w-full h-full flex justify-center overflow-scroll  flex-wrap">
                        <div className="flex h-full w-full justify-center items-center overflow-scroll flex-wrap">
                            <DashboardEdit/>
                        </div>

                    </div>



                </div>




                
               { isLoading&&<div className="  absolute z-50  w-full h-full bg-white opacity-95 flex justify-center items-center">
                    <div className="opacity-100 flex flex-col justify-center items-center ">

                        <div className="flex flex-col justify-center items-center gap-3">
                        <Loader/>
                        <span>Uploading</span>

                        </div>

                    </div>
                </div>
                }


                
            </div>
            

        </section>
        </>
    )
}