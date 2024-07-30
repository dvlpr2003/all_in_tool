import { HiComputerDesktop } from "react-icons/hi2";
import { FaDropbox } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";
import { DragDropContext,Droppable ,Draggable} from '@hello-pangea/dnd';

import { MdOutlineAddCircle } from "react-icons/md";
import { useRef, useState } from "react";
import { make } from "./utils/process";
import "./style/index.css"
const initialItems = [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
    { id: '4', content: 'Item 4' },
  ];

export default function DashboardEdit(){
   
    const [items, setItems] = useState(initialItems);
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
    
        const updatedItems = Array.from(items);
        const [reorderedItem] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, reorderedItem);
    
        setItems(updatedItems);
      };
    
    return(
        <>
<DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map(({ id, content }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      userSelect: 'none',
                      padding: 16,
                      margin: '0 0 8px 0',
                      minHeight: '50px',
                      backgroundColor: '#456C86',
                      color: 'white',
                      ...provided.draggableProps.style,
                    }}
                  >
                    {content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
               
        </>
    )
}


export function AddImg(){
    const [Opacity,setOpacity]=useState(false)
    function handleMouseMove(){
        setOpacity((e)=>!e)
        
    }
    
    return(
        
            <div className=" w-auto h-auto absolute right-10 top-4 " >
                <div className="relative">
                    <MdOutlineAddCircle className="text-5xl text-indigo-600 cursor-pointer" onClick={()=>handleMouseMove()}/>
                    <div className={`h-auto w-auto sticky right-0 left-0   mt-1 flex flex-col items-center gap-2 transition-opacity duration-300 opacity-0 ${Opacity?"opacity-100":""} z-40`}  >
                        <div className=" bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                        <HiComputerDesktop className="text-xl text-white"/>

                        </div>
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