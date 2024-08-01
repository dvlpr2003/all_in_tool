import { HiComputerDesktop } from "react-icons/hi2";
import { FaDropbox } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";
// import { DragDropContext,Droppable ,Draggable} from '@hello-pangea/dnd';

import { MdOutlineAddCircle } from "react-icons/md";
import {  useState,useEffect,useRef} from "react";
import { make } from "./utils/process";
import "./style/index.css"




export default function DashboardEdit() {
  const [array, setArray] = useState([
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
    { id: '4', content: 'Item 4' },
    { id: '5', content: 'Item 5' },
    { id: '6', content: 'Item 6' },
    { id: '7', content: 'Item 7' },
    { id: '8', content: 'Item 8' },
    { id: '9', content: 'Item 9' },
    { id: '10', content: 'Item 10' },
    { id: '11', content: 'Item 11' },
    { id: '12', content: 'Item 12' },
    { id: '13', content: 'Item 13' },
    { id: '14', content: 'Item 14' },
  ]);

  const listRef = useRef(null);
  const draggingItemRef = useRef(null)

  useEffect(() => {
    function listItemDragged(e) {
      draggingItemRef.current = e.target;
      e.target.classList.add('dragging');

    }

    function listItemDropped(e) {
      e.target.classList.remove('dragging');
      draggingItemRef.current = null;
    }
    function handleDragOver(e) {
        e.preventDefault();
        const draggingItem = draggingItemRef.current;
        const dropTarget = e.target.closest('.draggable');
        if (draggingItem && dropTarget && draggingItem !== dropTarget) {
          const items = Array.from(listRef.current.children);
          const draggingIndex = items.indexOf(draggingItem);
          const dropIndex = items.indexOf(dropTarget);
          setArray(make(array,draggingIndex,dropIndex));
        }
    }

    const listItems = listRef.current.querySelectorAll('.draggable');
    listItems.forEach((item) => {
      item.ondrag = listItemDragged;
      item.ondragend = listItemDropped;
    });

    const sortableList = listRef.current;
    sortableList.addEventListener('dragover', handleDragOver);

    // Cleanup function
    return () => {
      listItems.forEach((item) => {
        item.ondrag = null;
        item.ondragend = null;
      });
      sortableList.removeEventListener('dragover', handleDragOver);
    };
  }, [array]);
  console.log(array)

  return (
    <ul ref={listRef} className="flex  gap-7 flex-wrap">
      {array.map((item) => (
        <li key={item.id} className="draggable  tail" draggable="true">
          {item.content}
        </li>
      ))}
    </ul>
  );
};







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






