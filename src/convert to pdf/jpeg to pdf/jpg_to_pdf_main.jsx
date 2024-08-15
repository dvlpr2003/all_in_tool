import { useReducer, useState } from "react";
import DashboardEdit from "./DashboardEdit";
import { AddImg } from "./Addimg/addimg";
import "./style/index.css"
import { Options } from "./navigation/Options/options";
import { DashboardNav } from "./navigation/Dashboard/DashboardNav";
import { DashboardNavMobRes } from "./navigation/Dashboard/DashboardNavMobRes";
import axios from "axios";


export default function JpgToPdfEdit(){
    function reducer(state,action){

    
        if(action.type === "margin"){
            setMargin((e)=>!e); 
            setBorder(false);
            setOrientation(false);
            setPageSize(false)
            
        }
        if(action.type==="orientation"){
            setMargin(false);
            setBorder(false); 
            setOrientation((e)=>!e); 
            setPageSize(false)
        }
        if (action.type==="page size"){
            setPopup(e=>!e)
            setMargin(false);
            setBorder(false);
            setOrientation(false);
            setPageSize((e)=>!e)
        }
        if(action.type==="border"){
            setPopup(e=>!e)
            setMargin(false);
            setBorder((e)=>!e);
            setOrientation(false);
            setPageSize(false)
        }
    

    }
    function Margin_reducer(state,action){

           return action.type;
       
      

    }
    

    const [Orientation,setOrientation]=useState(false)
    const [Margin,setMargin]=useState(false)
    const [PageSize,setPageSize]=useState(false)
    const [Border,setBorder]=useState(false)
    const [isPopup,setPopup]=useState(false)
    const [state,dispatch]=useReducer(reducer,null)


    const [stateMargin,Margin_dispatch]=useReducer(Margin_reducer,null)
    const [stateBorder,Border_dispatch]=useReducer(Margin_reducer,null)
    const [stateOrientation,Orientation_dispatch]=useReducer(Margin_reducer,"port")
    const [statePageSz,PageSz_dispatch]=useReducer(Margin_reducer,"")
    
    const [array, setArray] = useState([]);
  
    const formData = new FormData();



    function handleConvert(){
        const image_file = array.map((e)=>e.image_file)
        formData.delete("array")
        formData.append("array",JSON.stringify(array))
        console.log(image_file)
        image_file.forEach((element,i)=>{
            formData.delete(`image[${i}]`)

            formData.append(`image[${i}]`,element)
        })
        
        // formData.delete("username")
        // formData.delete("margin")
        // formData.delete("orientation")
        // formData.delete("page_size")


        // formData.append("username", JSON.stringify(array));
        // formData.append("margin",stateMargin)
        // formData.append("orientation",stateOrientation)
        // formData.append("page_size",statePageSz)
        async function ConvertPdf(formData){
            // const axiosInstance = axios.create({  
            //     headers: {  
            //      'Content-Type': 'ultipart/form-data'  
            //     }  
            //   }); 
            try{
                const response = await axios.post("http://127.0.0.1:8000/convert_to_pdf/tryone/",formData,{  
                    headers: {  
                     'Content-Type': 'ultipart/form-data',  
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
        <section className="h-screen pt-20 w-full border flex justify-center ">
            <div className=" w-full max-w-screen-2xl h-auto bg-inherit flex min-[55px]:flex-col lg:flex-row relative z-0">

                {/* dashboard nav */}
                <div className="lg:h-full min-[55px]:order-2   z-50 lg:order-1 min-[55px]:mt-auto min-[55px]:w-full lg:w-auto border ">  
                    <DashboardNav  
                    Orientation={Orientation} 
                    Margin={Margin}  
                    PageSize={PageSize} 
                    Border={Border}  
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
                    Border={Border} 
                    setMargin={setMargin} 
                    setBorder={setBorder} 
                    setPageSize={setPageSize} 
                    setOrientation={setOrientation} 
                    Margin_dispatch={Margin_dispatch} 
                    Border_dispatch={Border_dispatch} 
                    Orientation_dispatch={Orientation_dispatch} 
                    PageSz_dispatch={PageSz_dispatch}
                    />
                    
                </div>

                {/* dashboard edit container*/}
                <div className=" w-full h-full pt-3 flex relative min-[55px]:order-1 lg:order-2 bg-slate-50 flex-wrap overflow-scroll">

                <Options 
                formData={formData}
                setArray={setArray}
                array={array}
                stateMargin={stateMargin}
                Border={Border} 
                Orientation={Orientation} 
                PageSize={PageSize}
                Margin={Margin} 
                setMargin={setMargin} 
                setBorder={setBorder} 
                setPageSize={setPageSize} 
                setOrientation={setOrientation} 
                Margin_dispatch={Margin_dispatch} 
                Border_dispatch={Border_dispatch} 
                Orientation_dispatch={Orientation_dispatch} 
                PageSz_dispatch={PageSz_dispatch}
                />


                <AddImg 
                setArray={setArray}
                array={array}
                />

                <div className="w-full h-full flex justify-center overflow-scroll  flex-wrap">
                    <div className="flex h-full w-full justify-center items-center overflow-scroll flex-wrap">

                    <DashboardEdit 
                    stateMargin={stateMargin} 
                    stateBorder={stateBorder} 
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