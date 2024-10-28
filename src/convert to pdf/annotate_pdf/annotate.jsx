import axios from "axios"
import Loader from "../../Loader/Loader"
import "./style/index.css"
import { useState,useEffect,useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import {setDonwloadID} from "./wordtopdfSlicer"
import { useNavigate } from "react-router-dom"


import { RightSlide } from "./Nav/RightSlide"
import { LeftSlide } from "./Nav/LeftSlide"
import { ToolTop } from "./Nav/ToolTop"
import { ToolBottom } from "./Nav/ToolBottom"
import { Shape } from "./Tools/Shapes"








export default function AnnotatePdf(){
    const [isLoading,setLoading]=useState(false)
    const [isLeftOpen, setIsLeftOpen] = useState(true);
    const [isRightOpen, setIsRightOpen] = useState(false);
    const [isWidthInRange, setIsWidthInRange] = useState(false);
    const [zoom, setZoom] = useState(1); 
    const [value,setValue]=useState(`1%`)
    const containerRef = useRef(null);
    const [shapes, setShapes] = useState([]);
    const [selectedShape, setSelectedShape] = useState(null);

    const formdata = new FormData()
    const wordItems = useSelector((state)=>state.word.WordItems)
    const globDispatch = useDispatch()
    const navigate = useNavigate()
    const [initialDistance, setInitialDistance] = useState(null); // Track initial touch distance for mobile
    
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

  
    const baseWidthLev1Lev2 = 334.26;
    const incrementLev1Lev2 = 12.38; 
  
    const baseWidthLev4 = 312.3; 
    const incrementWidthLev4 = 11.9; 
  
    const baseHeightLev4 = 454.68;
    const incrementHeightLev4 = 16.84; 
  
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    const handleWheel = (e) => {
        if (e.ctrlKey) {
          e.preventDefault();
          setZoom((prevZoom) => (e.deltaY < 0 ? Math.min(prevZoom + 1, 2000) : Math.max(prevZoom - 1, 1)));
        }
      };
     // Calculate distance between two touch points
    const calculateTouchDistance = (touches) => {
        const [touch1, touch2] = touches;
        return Math.sqrt((touch2.pageX - touch1.pageX) ** 2 + (touch2.pageY - touch1.pageY) ** 2);
    };
    // Handle pinch zoom on mobile
    const handleTouchStart = (e) => {
        if (e.touches.length === 2) {
        setInitialDistance(calculateTouchDistance(e.touches));
        }
    };
    const handleTouchMove = (e) => {
        if (e.touches.length === 2) {
          const newDistance = calculateTouchDistance(e.touches);
          const scaleFactor = newDistance / initialDistance;
          setZoom((prevZoom) => Math.max(1, prevZoom * scaleFactor));
          setInitialDistance(newDistance); // Update initial distance for next calculation
        }
      };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('touchstart', handleTouchStart, { passive: false });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
        };
        }
    }, [initialDistance]);
    const calculateZoomedDimension = (base, increment) => base + (increment * (zoom - 1));
    const newWidthLev1 = calculateZoomedDimension(61.9, 12.38);
    const newWidthLev4 = calculateZoomedDimension(59.5, 11.9);
    const newHeightLev4 = calculateZoomedDimension(84.2, 16.84);
    
        
  

    useEffect(()=>{
        if (zoom >0){

            setValue(`${zoom}%`)
        }
        
    },[zoom])

    const calculateZoomedWidth = (baseWidth, increment) => {
      return Math.max(baseWidth, baseWidth + (increment * (zoom - 1)));
    };
    const newWidthLev2 = calculateZoomedWidth(baseWidthLev1Lev2, incrementLev1Lev2); 






// shapes
    const handleShapeClick = (id, e) => {
        e.stopPropagation();
        setSelectedShape(id);
    };

    const handleCanvasShapeDragStart = (e, id) => {
        const shape = shapes.find(s => s.id === id);
        if (!shape) return;

        const startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        const startPosX = shape.x;
        const startPosY = shape.y;

        const handleMove = (moveEvent) => {
        const currentX = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientX : moveEvent.clientX;
        const currentY = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientY : moveEvent.clientY;
        
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        setShapes(shapes.map(s => {
            if (s.id !== id) return s;
            return {
            ...s,
            x: startPosX + deltaX,
            y: startPosY + deltaY
            };
        }));
        };

        const handleEnd = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
        };

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleEnd);
    };
    const handleResize = (e, id, corner) => {
        e.stopPropagation();
        const shape = shapes.find(s => s.id === id);
        if (!shape) return;

        const startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        const startWidth = shape.width;
        const startHeight = shape.height;

        const handleMove = (moveEvent) => {
        const currentX = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientX : moveEvent.clientX;
        const currentY = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientY : moveEvent.clientY;
        
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        setShapes(shapes.map(s => {
            if (s.id !== id) return s;

            let newWidth = startWidth;
            let newHeight = startHeight;

            switch (corner) {
            case 'se':
                newWidth = Math.max(50, startWidth + deltaX);
                newHeight = Math.max(50, startHeight + deltaY);
                break;
            case 'sw':
                newWidth = Math.max(50, startWidth - deltaX);
                newHeight = Math.max(50, startHeight + deltaY);
                break;
            case 'ne':
                newWidth = Math.max(50, startWidth + deltaX);
                newHeight = Math.max(50, startHeight - deltaY);
                break;
            case 'nw':
                newWidth = Math.max(50, startWidth - deltaX);
                newHeight = Math.max(50, startHeight - deltaY);
                break;
            }

            return {
            ...s,
            width: newWidth,
            height: newHeight
            };
        }));
        };

        const handleEnd = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
        };

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleEnd);
    };
    const renderShape = (shape) => {
        const isSelected = selectedShape === shape.id;
        const style = {
          position: 'absolute',
          left: `${shape.x}px`,
          top: `${shape.y}px`,
          width: `${shape.width}px`,
          height: `${shape.height}px`,
          border: isSelected ? '2px solid blue' : 'none',
          cursor: 'move',
          zIndex: shape.zIndex,
          touchAction: 'none', // Prevents default touch behaviors
        };
    
        const resizeHandle = (corner) => (
          <div
            className="absolute w-3 h-3 bg-blue-500 rounded-full cursor-se-resize"
            style={{
              top: corner.includes('n') ? '-4px' : 'auto',
              bottom: corner.includes('s') ? '-4px' : 'auto',
              left: corner.includes('w') ? '-4px' : 'auto',
              right: corner.includes('e') ? '-4px' : 'auto',
              touchAction: 'none',
            }}
            onMouseDown={(e) => handleResize(e, shape.id, corner)}
            onTouchStart={(e) => handleResize(e, shape.id, corner)}
          />
        );
    
        let shapeContent;
        switch (shape.type) {
          case 'square':
            shapeContent = <div className="w-full h-full bg-red-200" />;
            break;
          case 'circle':
            shapeContent = <div className="w-full h-full bg-blue-200 rounded-full" />;
            break;
          case 'triangle':
            shapeContent = (
              <div
                className="w-full h-full"
                style={{
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  backgroundColor: 'rgb(154, 230, 180)'
                }}
              />
            );
            break;
          default:
            shapeContent = null;
        }
    
        return (
          <div
            key={shape.id}
            style={style}
            onClick={(e) => handleShapeClick(shape.id, e)}
            onMouseDown={(e) => handleCanvasShapeDragStart(e, shape.id)}
            onTouchStart={(e) => handleCanvasShapeDragStart(e, shape.id)}
          >
            {shapeContent}
            {isSelected && (
              <>
                {resizeHandle('nw')}
                {resizeHandle('ne')}
                {resizeHandle('sw')}
                {resizeHandle('se')}
              </>
            )}
          </div>
        );
      };
  
 
        
        return(
            <> 
            <div className='main w-screen  bg-slate-100 overflow-auto  relative '
                
                onContextMenu={handleContextMenu}                                           
                ref={containerRef}
                style={{touchAction:"none"}}
            >
                <ToolTop shapes={shapes} setShapes={setShapes}/>
                <ToolBottom 
                isLeftOpen={isLeftOpen} 
                isRightOpen={isRightOpen} 
                setIsLeftOpen={setIsLeftOpen} 
                setIsRightOpen={setIsRightOpen} 
                setZoom={setZoom} value={value} 
                setValue={setValue} 
                isWidthInRange ={isWidthInRange} 
                setIsWidthInRange ={setIsWidthInRange}
                />

                <LeftSlide 
                isLeftOpen={isLeftOpen} 
                setIsLeftOpen={setIsLeftOpen}
                />

                <RightSlide 
                isRightOpen={isRightOpen} 
                setIsRightOpen={setIsRightOpen}
                />


                        
                <div className='small-div h-screen bg-slate-100 flex items-stretch box-border overflow-hidden pt-[112px]'>
                            <div className='flex-1  overflow-auto h-auto  p-0  box-border overflow-y-auto overflow-x-auto relative text-center'
                            >
                            <div className='bg-slate-100 m-0 p-0 border-0 align-baseline'>
                            <div
                                className="lev-1 flex justify-center  mt-0 mb-0 mr-auto ml-auto p-0 relative transition-none flex-wrap text-center "
                                style={{
                                width: newWidthLev1 + 'px', 
                                }}
                            >
                                <div
                                className="lev-2 flex justify-center  flex-wrap m-[40px] relative max-w-none shadow-none text-center"
                                style={{
                                    width: newWidthLev2 + 'px', 
                                }}
                                >
                                {[1].map((index) => (
                                <div
                                    className="lev-3 block box-border text-center"
                                    style={{
                                    padding: `${1.2 * zoom}px`, // Scale padding based on zoom
                                    }}
                                    key={index}
                                >
                                    
                                    <div
                                        className="lev-4 overflow-hidden  shadow-lg relative select-none"
                                        style={{
                                        width: `${newWidthLev4}px`, // Adjust width based on zoom for lev-4
                                        height: `${newHeightLev4}px`, // Adjust height based on zoom for lev-4
                                        zIndex:0
                                        }}
                                        
                                    >
                                        <img
                                        src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg"
                                        alt=""
                                        style={{
                                            width: `${newWidthLev4}px`, // Adjust width based on zoom for img
                                            height: `${newHeightLev4}px`, // Adjust height based on zoom for img
                                        }}
                                        className='pointer-events-none align-middle overflow-clip border-0 image-orientation-from-image'
                                        />
                                        
                                        {shapes.map(renderShape)}
                                        
                                    </div>
                                </div>
                                    ))}
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
            </div>
        </>
    )
}