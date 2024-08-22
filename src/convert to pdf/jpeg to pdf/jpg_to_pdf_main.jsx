import { useReducer, useState } from "react";
import DashboardEdit from "./DashboardEdit";
import { AddImg } from "./Addimg/addimg";
import "./style/index.css"
import { Options } from "./navigation/Options/options";
import { DashboardNav } from "./navigation/Dashboard/DashboardNav";
import { DashboardNavMobRes } from "./navigation/Dashboard/DashboardNavMobRes";
import axios from "axios";
import { MobPopup } from "./navigation/mobileRes/MobPopup";


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
    
    const [array, setArray] = useState([]);
  
    const formData = new FormData();



    function handleConvert(){
        const image_file = array.map((e)=>e.image_file)
        formData.delete("array")
        formData.append("array",JSON.stringify(array))
        formData.delete("margin")
        formData.append("margin",stateMargin)
        formData.delete("page-size")
        formData.append("page-size",statePageSz)
        formData.delete("orientation")
        formData.append("orientation",stateOrientation)

        image_file.forEach((element,i)=>{
            formData.delete(`image[${i}]`)

            formData.append(`image[${i}]`,element)
        })
        
        async function ConvertPdf(formData){

            try{
                const response = await axios.post("http://127.0.0.1:8000/convert_to_pdf/tryone/",formData,{  
                    headers: {  
                     'Content-Type': 'multipart/form-data',  
                    },  
                   
            })
                console.log(response)
            }catch(error){
                console.log(error)
            }

        }
        ConvertPdf(formData)
    }
    
    return(
        <>
        <section className="h-screen  w-full border flex justify-center ">
            <div className=" w-full max-w-screen-2xl h-auto bg-inherit flex min-[55px]:flex-col lg:flex-row relative z-0">

                {/* dashboard nav */}
                <div className="lg:h-full min-[55px]:order-2   z-50 lg:order-1 min-[55px]:mt-auto min-[55px]:w-full lg:w-auto border ">  
                    <DashboardNav  
                    Orientation={Orientation} 
                    Margin={Margin}  
                    PageSize={PageSize} 
               
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
                <div className=" w-full h-full pt-3 flex relative min-[55px]:order-1 lg:order-2 bg-slate-50 flex-wrap overflow-scroll">

                <Options 
                setArray={setArray}
                array={array}
                stateMargin={stateMargin}
                stateOrientation={stateOrientation}
                statePageSz ={statePageSz}
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
                         stateMargin={stateMargin}
                         stateOrientation={stateOrientation}
                         statePageSz={statePageSz}
                />

                <AddImg 
                setArray={setArray}
                array={array}
                />

                <div className="w-full h-full flex justify-center overflow-scroll  flex-wrap">
                    <div className="flex h-full w-full justify-center items-center overflow-scroll flex-wrap">

                    <DashboardEdit 
                    stateMargin={stateMargin} 
 
                    stateOrientation={stateOrientation} 
                    statePageSz={statePageSz} 
                    setArray={setArray} 
                    array={array}
                    />
                    
                    </div>
                </div>
                </div>


            </div>
            

        </section>
        </>
    )
}