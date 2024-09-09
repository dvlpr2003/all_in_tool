import { useEffect, useReducer, useState } from "react";
import DashboardEdit from "./DashboardEdit";
import { AddImg } from "./Addimg/addimg";
import "./style/index.css"
import { Options } from "./navigation/Options/options";
import { DashboardNav } from "./navigation/Dashboard/DashboardNav";
import { DashboardNavMobRes } from "./navigation/Dashboard/DashboardNavMobRes";
import axios from "axios";
import { MobPopup } from "./navigation/mobileRes/MobPopup";
import Loader from "../../Loader/Loader";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setItems,setDonwloadID,MarginSet,MergeSet,OrientationSet,PgSet } from "./jpgtopdfSlicer";

export default function JpgToPdfEdit(){
    
    function reducer(state,action){

    
        if(action.type === "margin"){
            setMargin((e)=>!e); 
            setOrientation(false);
            setPageSize(false)
            
        }
        if(action.type==="orientation"){
            setMargin(false);
            setOrientation((e)=>!e); 
            setPageSize(false)
        }
        if (action.type==="page size"){
            setPopup(e=>!e)
            setMargin(false);
            setOrientation(false);
            setPageSize((e)=>!e)
        }

    

    }
    function Margin_reducer(state,action){

           return action.type;
       
      

    }
    

    const [Orientation,setOrientation]=useState(false)
    const [Margin,setMargin]=useState(false)
    const [PageSize,setPageSize]=useState(false)
    const [isPopup,setPopup]=useState(false)
    const [state,dispatch]=useReducer(reducer,null)


    const [stateMargin,Margin_dispatch]=useReducer(Margin_reducer,null)
    const [stateOrientation,Orientation_dispatch]=useReducer(Margin_reducer,"port")
    const [statePageSz,PageSz_dispatch]=useReducer(Margin_reducer,"")
    const [Merge,setMerge]=useState(false)
    const [isLoading,setLoading]=useState(false)
    
    
    
    const globDispatch = useDispatch()

    useEffect(()=>{
        globDispatch(MarginSet(stateMargin))
        globDispatch(MergeSet(Merge))
        globDispatch(OrientationSet(stateOrientation))
        globDispatch(PgSet(statePageSz))
        
        
        
    },[stateMargin,stateOrientation,statePageSz,Merge])
    const items = useSelector((state) => state.items.items);
    const marginDispatch = useSelector((state)=> state.items.margin)
    const orientationDispatch = useSelector((state)=> state.items.orientation)
    const Page_size_Dispatch = useSelector((state)=>state.items.page_size)
    // const mergeDispatch = useSelector((state)=>state.items.merge)
    



    const navigate = useNavigate()
    const formData = new FormData();

    


    function handleConvert(){

        formData.delete("items")
        formData.append("items",JSON.stringify(items))
        formData.delete("margin")
        formData.append("margin",stateMargin)
        formData.delete("page-size")
        formData.append("page-size",statePageSz)
        formData.delete("orientation")
        formData.append("orientation",stateOrientation)
        formData.delete("merge")
        formData.append("merge",Merge)
        

        // items.forEach((element,i)=>{
        //     formData.delete(`files[${i}]`)

        //     formData.append(`files[${i}]`,element)
        // })
        
        async function ConvertPdf(formData){

            try{
                setLoading(true)
                const response = await axios.post("http://127.0.0.1:8000/convert_to_pdf/tryone/",formData,{  
                    headers: {  
                     'Content-Type': 'multipart/form-data',  
                    },  
                   
            })
                
                globDispatch(setDonwloadID(response.data["id"]))

                setLoading(false)
                navigate("/jpg-to-pdf/download/")
            }catch(error){
                console.log(error)
                setLoading(false)
            }

        }
        ConvertPdf(formData)
    }
    
    return(
        <>
        <section className="h-screen  w-full  flex justify-center  ">
            <div className=" w-full max-w-screen-2xl h-auto bg-inherit flex min-[55px]:flex-col lg:flex-row relative z-0 mt-0">

                {/* dashboard nav */}
                <div className="lg:h-full min-[55px]:order-2   z-30 lg:order-1 min-[55px]:mt-auto min-[55px]:w-full lg:w-auto  ">  
                    <DashboardNav  
                    Orientation={Orientation} 
                    Margin={Margin}  
                    PageSize={PageSize} 
                    setMerge={setMerge}
               
                    dispatch={dispatch} 
                    handleConvert={handleConvert}
                    />
                    
                    <DashboardNavMobRes 
                    isPopup={isPopup} 
                    setPopup={setPopup} 
                    dispatch={dispatch} 
                    Margin={Margin} 
                    Orientation={Orientation} 
                    PageSize={PageSize} 
   
                    setMargin={setMargin} 
                    setPageSize={setPageSize} 
                    setOrientation={setOrientation} 
                    Margin_dispatch={Margin_dispatch} 
      
                    Orientation_dispatch={Orientation_dispatch} 
                    PageSz_dispatch={PageSz_dispatch}
                    />
                    
                </div>

                {/* dashboard edit container*/}
                <div className=" w-full h-full padd flex relative min-[55px]:order-1 lg:order-2 bg-slate-50 flex-wrap overflow-scroll">

                <Options 
  
                stateMargin={marginDispatch}
                stateOrientation={orientationDispatch}
                statePageSz ={Page_size_Dispatch}
                Orientation={Orientation} 
                PageSize={PageSize}
                Margin={Margin} 
                setMargin={setMargin} 
                setPageSize={setPageSize} 
                setOrientation={setOrientation} 
                Margin_dispatch={Margin_dispatch} 
         
                Orientation_dispatch={Orientation_dispatch} 
                PageSz_dispatch={PageSz_dispatch}
                />
                <MobPopup 
                         Margin={Margin} 
                         Orientation={Orientation} 
                         PageSize={PageSize} 
                         setMargin={setMargin} 
                         setPageSize={setPageSize} 
                         setOrientation={setOrientation} 
                         Margin_dispatch={Margin_dispatch} 
                         Orientation_dispatch={Orientation_dispatch} 
                         PageSz_dispatch={PageSz_dispatch}
                         stateMargin={marginDispatch}
                         stateOrientation={orientationDispatch}
                         statePageSz={Page_size_Dispatch}
                />

                <AddImg 
         
 
                setLoading = {setLoading}
                />

                <div className="w-full h-full flex justify-center overflow-scroll  flex-wrap">
                    <div className="flex h-full w-full justify-center items-center overflow-scroll flex-wrap">

                    <DashboardEdit 
                    stateMargin={stateMargin} 
 
                    stateOrientation={stateOrientation} 
                    statePageSz={statePageSz} 

                    />
                    
                    </div>
                </div>
                </div>
                {

                isLoading&&<div className="  absolute z-50  w-full h-full bg-white opacity-95 flex justify-center items-center">
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