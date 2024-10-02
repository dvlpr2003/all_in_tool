import axios from "axios"
import Loader from "../../Loader/Loader"
import DashboardEdit from "./DashboardEdit"
import { DashboardNav } from "./Nav/DashboardNav"
import "./style/index.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {setDonwloadID} from "./wordtopdfSlicer"
import { useNavigate } from "react-router-dom"
import { DashboardNavMobRes } from "./Nav/DashboardNavMobRes"
import { NavRight } from "./Nav/NavRight"



export default function AnnotatePdf(){
    const [isLoading,setLoading]=useState(false)
    const formdata = new FormData()
    const wordItems = useSelector((state)=>state.word.WordItems)
    const globDispatch = useDispatch()
    const navigate = useNavigate()

    async function handleConvert(){
            formdata.append("items",JSON.stringify(wordItems))
            if (wordItems.length !== 0 ){
                    
                try{
                    setLoading(true)
                    const response = await axios.post("http://127.0.0.1:8000/convert_to_pdf/convert-word-to-pdf/",formdata,{
                        headers: {  
                            'Content-Type': 'multipart/form-data',  
                        }, 
                    });
                   
                    globDispatch(setDonwloadID(response.data["id"]))
                    setLoading(false)
                    navigate("/word-to-pdf/download")
                }catch(error){
                    setLoading(false)
                    console.log(error)
                }
    }


    }

    return(
        <>
        <section className="  h-screen  w-full  flex justify-center ">
            <div className=" w-full flex ">
                <div className="w-auto  h-full ">
                    <DashboardNav/>

                </div>
                <div className="w-full border bg-slate-50">
                    
                </div>

                <div className="w-auto  h-full justify-end ml-auto">
                    <NavRight/>

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