import {  useState,useEffect,useRef} from "react";
import { ArrangedList } from "./utils/process";
import "./style/index.css"
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdOutlineRotateLeft } from "react-icons/md";
import { MdOutlineRotateRight } from "react-icons/md";

export default function DashboardEdit({stateMargin,array,setArray,stateOrientation,statePageSz}) {

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
    <ul ref={listRef} className="flex  gap-x-9 gap-y-10 flex-wrap px-20 py-4  justify-center   overflow-y-scroll " >
      {array.map((item,index) => (
        
        <li key={item.id} className={`draggable bg-inherit  flex flex-col justify-center items-center   relative group  `} draggable="true" >
          <ImageOptions id ={item.id} setArray={setArray} array={array} index={index}/>
          
          <div className={`prevent bg-white ${statePageSz ==="us-letter" && stateOrientation === "port" ?"usletter-port":""}  ${statePageSz ==="us-letter" && stateOrientation === "land" ?"usletter-land":""} ${stateOrientation === "port" ?"img-w-h-port":""}  ${stateOrientation === "land" ?"img-w-h-land":""}  ${stateMargin==="small-m"?"p-2":""} ${stateMargin ==="big-m"?"p-4":""} border flex justify-center items-center     overflow-hidden shadow-md`}>
            <img src={`img/${item.image}`} alt="" draggable="false" className={`max-w-full max-h-full align-middle `} style={{transform:`rotate(${item.rotate*90}deg)`,scale:`${item.rotate%2 != 0 ?".85":"1"}`}} />
            </div>
            <div className="text-black  mt-2 bg-transparent overflow-hidden">{item.name}</div>
        </li>
      ))}
    </ul>
  );
};



function ImageOptions({id,setArray,array,index}){
  const handleEvent= ()=>{
    const Filtered_array = array.filter((e)=>e.id !=id);
    setArray(Filtered_array)
  }
  const handleRotateFor = ()=>{
    if ( array[index].rotate ===4){
      array[index].rotate =0
      setArray((e)=>[...e])

    }else{
    array[index].rotate =array[index].rotate +1
    setArray((e)=>[...e])
    }
  }
  const handleRotateBack = ()=>{
    if ( array[index].rotate === -4){
      array[index].rotate = 0
      setArray((e)=>[...e])

    }else{
    array[index].rotate =array[index].rotate -1
    setArray((e)=>[...e])
    }
  }

  return(
    <div className="absolute z-30 w-36 h-8 top-0 border border-slate-100 bg-white cursor-pointer  justify-around items-center group-hover:shadow-2xl hidden group-hover:flex"> 
    <MdOutlineRotateLeft className="text-slate-400 text-xl hover:text-red-600" onClick={handleRotateBack} />
    <MdOutlineRotateRight className="text-slate-400 text-xl hover:text-red-600" onClick={handleRotateFor} />
    <MdOutlineDeleteForever className="text-slate-400 text-xl hover:text-red-600" onClick={handleEvent}/>

    </div>
  )
}