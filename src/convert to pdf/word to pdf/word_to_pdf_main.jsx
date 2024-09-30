
import axios from "axios"
import Loader from "../../Loader/Loader"
import { AddImg } from "./Addimg/addimg"
import DashboardEdit from "./DashboardEdit"
import { DashboardNav } from "./Nav/DashboardNav"
import "./style/index.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {setDonwloadID} from "./wordtopdfSlicer"
import { useNavigate } from "react-router-dom"
import { DashboardNavMobRes } from "./Nav/DashboardNavMobRes"



export default function Wordtopdf(){
    const [isLoading,setLoading]=useState(false)
    const formdata = new FormData()
    const wordItems = useSelector((state)=>state.word.WordItems)
    const globDispatch = useDispatch()
    const navigate = useNavigate()

    async function handleConvert(){
            formdata.append("items",JSON.stringify(wordItems))
            if (wordItems.length != 0 ){
                    
                try{
                    setLoading(true)
                    const response = await axios.post("http://127.0.0.1:8000/convert_to_pdf/convert-word-to-pdf/",formdata,{
                        headers: {  
                            'Content-Type': 'multipart/form-data',  
                        }, 
                    });
                    console.log(response.data)
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
        <section className="  h-screen  w-full  flex justify-center  ">
            <div className=" w-full max-w-screen-2xl h-auto bg-inherit flex min-[55px]:flex-col lg:flex-row relative z-0 mt-0">
                <div className="lg:h-full min-[55px]:order-2   z-30 lg:order-1 min-[55px]:mt-auto min-[55px]:w-full lg:w-auto  "> 
                <DashboardNav handleConvert={handleConvert}/>
                <DashboardNavMobRes handleConvert = {handleConvert}/>
                
                </div> 
                <div className=" w-full h-full padd flex relative min-[55px]:order-1 lg:order-2 bg-slate-50 flex-wrap overflow-scroll">
                    <AddImg setLoading={setLoading}/>


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
                        {/* <div className=" border border-red-600 w-96 h-28 rounded-xl flex justify-center items-center">
                            <span className="text-red-600 text-base">Something went wrong</span>

                        </div> */}



                    </div>
                </div>
                }


                
            </div>
            

        </section>
        </>
    )
}