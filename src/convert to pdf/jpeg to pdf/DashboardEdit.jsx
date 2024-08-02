import { HiComputerDesktop } from "react-icons/hi2";
import { FaDropbox } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";
// import { DragDropContext,Droppable ,Draggable} from '@hello-pangea/dnd';

import { MdOutlineAddCircle } from "react-icons/md";
import {  useState,useEffect,useRef} from "react";
import { ArrangedList } from "./utils/process";
import "./style/index.css"




export default function DashboardEdit({stateMargin}) {
  const [array, setArray] = useState([
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
    { id: '4', content: 'Item 4' },
    { id: '5', content: 'Item 5' },{ id: '6', content: 'Item 6' },{ id: '7', content: 'Item 7' },
    { id: '8', content: 'Item 8' },{ id: '9', content: 'Item 9' },{ id: '10', content: 'Item 10' },
  
 
  ]);

  const listRef = useRef(null);
  const draggingItemRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const listItems = listRef.current.querySelectorAll('.draggable');

    const handleDragStart = (e, index) => {
      draggingItemRef.current = e.target;
      e.target.classList.add('dragging');
      setTimeout(() => {
        e.target.classList.add('invisible');
      }, 0);


    };

    const handleDragEnd = (e) => {
      e.target.classList.remove('dragging', 'invisible');
      draggingItemRef.current = null;
    };

    // drag and drop option for the web responsive with array process
    const handleDragOver = (e) => {
      e.preventDefault();
      const draggingItem = draggingItemRef.current;
      const dropTarget = e.target.closest('.draggable');

      if (draggingItem && dropTarget && draggingItem !== dropTarget) {
        const items = Array.from(listRef.current.children);
        const draggingIndex = items.indexOf(draggingItem);
        const dropIndex = items.indexOf(dropTarget);

        setArray(ArrangedList(array,draggingIndex,dropIndex));
      }
    };

    // drag and drop option for the mob responsive with array process    
    const handleTouchStart = (e, index) => {
      if (e.touches.length > 1) return;

      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target && target.classList.contains('draggable')) {
        draggingItemRef.current = target;
        target.classList.add('dragging-mob');

        placeholderRef.current = target.cloneNode(true);
        placeholderRef.current.style.position = 'absolute';
        placeholderRef.current.style.top = `${touch.clientY - target.clientHeight / 2}px`;
        placeholderRef.current.style.left = `${touch.clientX - target.clientWidth / 2}px`;
        placeholderRef.current.style.pointerEvents = 'none';
        placeholderRef.current.classList.add('dragging-clone');
        document.body.appendChild(placeholderRef.current);
      }

    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 1) return;

      e.preventDefault();

      const touch = e.touches[0];

      if (placeholderRef.current) {
        placeholderRef.current.style.top = `${touch.clientY - placeholderRef.current.clientHeight / 2}px`;
        placeholderRef.current.style.left = `${touch.clientX - placeholderRef.current.clientWidth / 2}px`;
      }

      const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
      if (draggingItemRef.current && dropTarget && dropTarget.classList.contains('draggable') && draggingItemRef.current !== dropTarget) {
        const items = Array.from(listRef.current.children);
        const draggingIndex = items.indexOf(draggingItemRef.current);
        const dropIndex = items.indexOf(dropTarget);



        setArray(ArrangedList(array,draggingIndex,dropIndex));
      }
    };

    const handleTouchEnd = (e) => {
      if (draggingItemRef.current) {
        draggingItemRef.current.classList.remove('dragging-mob', 'invisible');
        draggingItemRef.current = null;
      }
      if (placeholderRef.current) {
        document.body.removeChild(placeholderRef.current);
        placeholderRef.current = null;
      }
    };

    listItems.forEach((item, index) => {
      item.ondragstart = (e) => handleDragStart(e, index);
      item.ondragend = handleDragEnd;
      item.ontouchstart = (e) => handleTouchStart(e, index);
      item.ontouchmove = handleTouchMove;
      item.ontouchend = handleTouchEnd;
    });

    const sortableList = listRef.current;
    sortableList.addEventListener('dragover', handleDragOver);

    // Cleanup function
    return () => {
      listItems.forEach((item) => {
        item.ondragstart = null;
        item.ondragend = null;
        item.ontouchstart = null;
        item.ontouchmove = null;
        item.ontouchend = null;
      });
      sortableList.removeEventListener('dragover', handleDragOver);
    };
  }, [array]);

  return (
    <ul ref={listRef} className="flex  h-auto gap-7 flex-wrap px-20 py-4  justify-center  overflow-y-scroll bg-slate-50">
      {array.map((item) => (
        <li key={item.id} className="draggable w-40 h-auto " draggable="true">
          <div className={`w-auto h-auto ${stateMargin==="small-m"?"m-1":""} ${stateMargin ==="big-m"?"m-2":""} `} draggable="false">
            <img src="img/sakthi.png" alt="" draggable="false" className="w-auto h-auto "/>

          </div>
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
        
            <div className=" w-auto h-auto absolute right-5 top-4 " >
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






