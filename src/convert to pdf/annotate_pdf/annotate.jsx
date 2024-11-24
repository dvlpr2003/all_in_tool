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


    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });



    const [zoomLevel, setZoomLevel] = useState(100);
    const [shapes, setShapes] = useState([]);
    const [selectedShapeId, setSelectedShapeId] = useState(null);
    const [draggingShape, setDraggingShape] = useState(null);
    const [resizingShape, setResizingShape] = useState(null);
    const [isDragging, setIsDragging] = useState(false);


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
    
    const workareaRef = useRef(null);
    const pageCanvasRef = useRef(null);
    const resizingDataRef = useRef(null);
    const initialEditorWidth = 61.9;
    const initialPageWidth = 59.5;
    const initialPageHeight = 84.2;
    // Calculate padding dynamically based on zoom level
    const calculatedPadding = Math.max(1.2, 1.2 * (zoomLevel / 100));
    useEffect(() => {
        const handleWheelZoom = (event) => {
          if (event.ctrlKey) {
            event.preventDefault();
            if (event.deltaY < 0) {
              setZoomLevel((prevZoom) => Math.min(prevZoom + 5, 2000));
            } else {
              setZoomLevel((prevZoom) => Math.max(prevZoom - 5, 100));
            }
          }
        };
        const workareaElement = workareaRef.current;
        workareaElement.addEventListener('wheel', handleWheelZoom, { passive: false });
        return () => workareaElement.removeEventListener('wheel', handleWheelZoom);
      }, []);
      const calculatedEditorWidth = Math.max(initialEditorWidth, initialEditorWidth * (zoomLevel / 100));
      const calculatedPageWidth = Math.max(initialPageWidth, initialPageWidth * (zoomLevel / 100));
      const calculatedPageHeight = Math.max(initialPageHeight, initialPageHeight * (zoomLevel / 100));
      const calculatePosition = (position) => position * (zoomLevel / 100);
      const calculateSize = (size) => size * (zoomLevel / 100);

      const handleAddShape = (shapeType) => {
        console.log(shapeType)
        const pageCanvasElement = pageCanvasRef.current;
        const centerX = (pageCanvasElement.clientWidth / 2) / (zoomLevel / 100);
        const centerY = (pageCanvasElement.clientHeight / 2) / (zoomLevel / 100);
      
        const defaultShape = {
          type: shapeType,
          id: Date.now(),
          position: { top: centerY, left: centerX },
          width: 10,  // Default width
          height: 10, // Default height
          color: 'white',
          rotate:0,
          points: [], // To store the points for shapes like triangle, pentagon, etc.
        };
      
        // Adjust default width/height for certain shapes
        if (shapeType === 'triangle') {
          defaultShape.points = [
            { x: 0, y: -10 },  // Top
            { x: -5, y: 5 },   // Bottom left
            { x: 5, y: 5 },    // Bottom right
          ];
        } else if (shapeType === 'pentagon') {
          defaultShape.points = [
            { x: 0, y: -10 },
            { x: 7, y: -3 },
            { x: 4, y: 8 },
            { x: -4, y: 8 },
            { x: -7, y: -3 },
          ];
        } else if (shapeType === 'star') {
          defaultShape.points = [
            { x: 0, y: -10 },
            { x: 3, y: -3 },
            { x: 10, y: -3 },
            { x: 5, y: 2 },
            { x: 6, y: 10 },
            { x: 0, y: 5 },
            { x: -6, y: 10 },
            { x: -5, y: 2 },
            { x: -10, y: -3 },
            { x: -3, y: -3 },
          ];
        } else if (shapeType === 'heart') {
          // Heart shape coordinates
          defaultShape.points = [
            { x: 0, y: -10 },
            { x: 5, y: -10 },
            { x: 10, y: -5 },
            { x: 10, y: 5 },
            { x: 5, y: 10 },
            { x: 0, y: 5 },
            { x: -5, y: 10 },
            { x: -10, y: 5 },
            { x: -10, y: -5 },
            { x: -5, y: -10 },
          ];
        } else if (shapeType === 'line') {
          defaultShape.width = 20;
          defaultShape.height = 2;
        }
      
        setShapes([...shapes, defaultShape]);
      };
      const handleShapeClick = (shapeId) => {
        setSelectedShapeId(shapeId);
      };
      const handleColorChange = (event) => {
        const newColor = event.target.value;
        setShapes(
          shapes.map((shape) =>
            shape.id === selectedShapeId ? { ...shape, color: newColor } : shape
          )
        );
      };
      const handleMouseDown = (event, shapeId) => {
        if (resizingDataRef.current) return; // Prevent dragging while resizing
      
        const shape = shapes.find((shape) => shape.id === shapeId);
        const offsetX = event.clientX - calculatePosition(shape.position.left);
        const offsetY = event.clientY - calculatePosition(shape.position.top);
      
        setDraggingShape({ shapeId, offsetX, offsetY });
        setSelectedShapeId(shapeId); // Ensure the shape is selected
      };
      const handleTouchStart = (event, shapeId) => {
        if (resizingDataRef.current) return; // Prevent dragging while resizing
      
        const shape = shapes.find((shape) => shape.id === shapeId);
        const touch = event.touches[0]; // Get the first touch point
        const offsetX = touch.clientX - calculatePosition(shape.position.left);
        const offsetY = touch.clientY - calculatePosition(shape.position.top);
      
        setDraggingShape({ shapeId, offsetX, offsetY });
        setIsDragging(true); // Start dragging
        setSelectedShapeId(shapeId); // Ensure the shape is selected
      };
      const handleResizeMouseDown = (event, shapeId, resizeDirection) => {
        event.stopPropagation();
        const shape = shapes.find((shape) => shape.id === shapeId);
      
        resizingDataRef.current = {
          shapeId,
          initialWidth: shape.width,
          initialHeight: shape.height,
          initialMouseX: event.clientX,
          initialMouseY: event.clientY,
          initialPosition: { ...shape.position },
          resizeDirection,
        };
      };
      const handleResizeStart = (event, shapeId, resizeDirection) => {
        const clientX = event.type === 'mousedown' ? event.clientX : event.touches[0].clientX;
        const clientY = event.type === 'mousedown' ? event.clientY : event.touches[0].clientY;
      
        const shape = shapes.find((shape) => shape.id === shapeId);
      
        resizingDataRef.current = {
          shapeId,
          initialWidth: shape.width,
          initialHeight: shape.height,
          initialMouseX: clientX,
          initialMouseY: clientY,
          initialPosition: { ...shape.position },
          resizeDirection,
        };
      };
      const handleMouseMove = (event) => {
        // Check for resizing
        if (resizingDataRef.current) {
          const {
            shapeId,
            initialMouseX,
            initialMouseY,
            initialWidth,
            initialHeight,
            initialPosition,
            resizeDirection,
          } = resizingDataRef.current;
      
          const deltaX = event.type === 'touchmove'
            ? (event.touches[0].clientX - initialMouseX) / (zoomLevel / 100)
            : (event.clientX - initialMouseX) / (zoomLevel / 100);
          const deltaY = event.type === 'touchmove'
            ? (event.touches[0].clientY - initialMouseY) / (zoomLevel / 100)
            : (event.clientY - initialMouseY) / (zoomLevel / 100);
      
          const aspectRatio = initialWidth / initialHeight;
      
          const updatedShapes = shapes.map((shape) => {
            if (shape.id !== shapeId) return shape;
      
            let newWidth = initialWidth;
            let newHeight = initialHeight;
            let newLeft = initialPosition.left;
            let newTop = initialPosition.top;
      
            switch (resizeDirection) {
              case 'top-left': {
                const delta = Math.min(-deltaX, -deltaY);
                newWidth = Math.max(initialWidth + delta, 1);
                newHeight = newWidth / aspectRatio;
                newLeft = initialPosition.left - (newWidth - initialWidth);
                newTop = initialPosition.top - (newHeight - initialHeight);
                break;
              }
              case 'top-right': {
                const delta = Math.min(deltaX, -deltaY);
                newWidth = Math.max(initialWidth + delta, 1);
                newHeight = newWidth / aspectRatio;
                newTop = initialPosition.top - (newHeight - initialHeight);
                break;
              }
              case 'bottom-left': {
                const delta = Math.min(-deltaX, deltaY);
                newWidth = Math.max(initialWidth + delta, 1);
                newHeight = newWidth / aspectRatio;
                newLeft = initialPosition.left - (newWidth - initialWidth);
                break;
              }
              case 'bottom-right': {
                const delta = Math.min(deltaX, deltaY);
                newWidth = Math.max(initialWidth + delta, 1);
                newHeight = newWidth / aspectRatio;
                break;
              }
              case 'top-center': {
                newHeight = Math.max(initialHeight - deltaY, 1);
                newTop = initialPosition.top + deltaY;
                break;
              }
              case 'bottom-center': {
                newHeight = Math.max(initialHeight + deltaY, 1);
                break;
              }
              case 'left-center': {
                newWidth = Math.max(initialWidth - deltaX, 1);
                newLeft = initialPosition.left + deltaX;
                break;
              }
              case 'right-center': {
                newWidth = Math.max(initialWidth + deltaX, 1);
                break;
              }
              default:
                break;
            }
      
            return {
              ...shape,
              position: { top: newTop, left: newLeft },
              width: newWidth,
              height: newHeight,
            };
          });
      
          setShapes(updatedShapes);
          return; // Exit early since we're resizing
        }
      
        // Handle dragging
        if (draggingShape) {
          const { shapeId, offsetX, offsetY } = draggingShape;
      
          const updatedShapes = shapes.map((shape) => {
            if (shape.id !== shapeId) return shape;
      
            return {
              ...shape,
              position: {
                top: (event.type === 'touchmove'
                  ? (event.touches[0].clientY - offsetY) / (zoomLevel / 100)
                  : (event.clientY - offsetY) / (zoomLevel / 100)),
                left: (event.type === 'touchmove'
                  ? (event.touches[0].clientX - offsetX) / (zoomLevel / 100)
                  : (event.clientX - offsetX) / (zoomLevel / 100)),
              },
            };
          });
      
          setShapes(updatedShapes);
        }
      };
      const handleMouseUp = () => {
        resizingDataRef.current = null; 
        setDraggingShape(null);
      };
      const handleTouchEnd = () => {
        resizingDataRef.current = null;
        setDraggingShape(null);
        setIsDragging(false);
      }



      useEffect(() => {
        const disableTouchScroll = (event) => {
          if (resizingDataRef.current) {
            event.preventDefault(); // Prevent scrolling during resize
          }
        };
      
        document.addEventListener('touchmove', disableTouchScroll, { passive: false });
        console.log("gommala")
      
        return () => {
          document.removeEventListener('touchmove', disableTouchScroll,{passive:false});
        };
      
      }, []);
      
      const renderShape = (shape) => {
        const style = {
          top: `${calculatePosition(shape.position.top)}px`,
          left: `${calculatePosition(shape.position.left)}px`,
          width: `${calculateSize(shape.width)}px`,
          height: `${calculateSize(shape.height)}px`,
          transform:`rotate(${shape.rotate}deg)`,
          position: 'absolute',
          cursor: 'move',
          userSelect: 'none',
        };
      
        const isSelected = selectedShapeId === shape.id;
      
        // Shape-specific rendering
        let shapeElement = null;
      
        if (shape.type === 'square') {
          shapeElement = <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />;
        }
      
        if (shape.type === 'circle') {
          shapeElement = (
            <div
              style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'red' }}
            />
          );
        }
      
        if (shape.type === 'triangle') {
          shapeElement = (
            <svg
              style={{ width: '100%', height: '100%', display: 'block' }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              preserveAspectRatio="xMidYMid meet"
            >
              <polygon points="10,0 20,20 0,20" fill={'red'} />
            </svg>
          );
        }
      
        if (shape.type === 'rectangle') {
          shapeElement = <div style={{ width: '100%', height: '100%', backgroundColor: shape.color }} />;
        }
      
        if (shape.type === 'pentagon') {
          shapeElement = (
            <svg
              style={{ width: '100%', height: '100%', display: 'block' }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              preserveAspectRatio="xMidYMid meet"
            >
              <polygon points="10,0 20,7 16,20 4,20 0,7" fill={'red'} />
            </svg>
          );
        }
      
        if (shape.type === 'star') {
          shapeElement = (
            <svg
              style={{ width: '100%', height: '100%', display: 'block' }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              preserveAspectRatio="xMidYMid meet"
            >
              <polygon
                points="10,0 12,7 20,7 14,12 16,20 10,15 4,20 6,12 0,7 8,7"
                fill={"red"}
              />
            </svg>
          );
        }
      
        if (shape.type === 'heart') {
          shapeElement = (
            <svg
              style={{ width: '100%', height: '100%', display: 'block' }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M10 17s5-3.6 7-7c1.5-2.3 1-5-1.5-7-2-2-4.5-1.5-6 1-1-2.5-4-3-6-1-2.5 2-3 4.7-1.5 7 2 3.4 7 7 7 7z"
                fill={'red'}
              />
            </svg>
          );
        }
      
        if (shape.type === 'line') {
          shapeElement = (
            <div
              style={{
                width: '100%',
                height: '2px', // Line thickness
                backgroundColor: 'blue',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)', // Center the line vertically
              }}
            />
          );
        }
      
        return (
          <div
            key={shape.id}
            style={style}
            onMouseDown={(e) => handleMouseDown(e, shape.id)}
            onClick={() => handleShapeClick(shape.id)}
            onTouchStart={(e) => handleTouchStart(e, shape.id)} // Add touch start
            onTouchMove={handleMouseMove} // Add touch move
            onTouchEnd={handleTouchEnd} // Add touch end
            className={isSelected?"border border-black":'none'}
          >
            {shapeElement}
      
            {isSelected && (
              <>
{shape.type === 'line' ? (
  <>
    {/* Line Handlers */}
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'left-center')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'start')}
      className="absolute top-[50%] left-[-4px] translate-y-[-50%] w-2 h-2 z-50 bg-blue-500 cursor-pointer rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'right-center')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'end')}
      className="absolute top-[50%] right-[-4px] translate-y-[-50%] w-2 h-2 z-50 bg-blue-500 cursor-pointer rounded-full"
    ></div>
  </>
) : shape.type === 'star' || shape.type === 'heart' || shape.type === 'pentagon' || shape.type === 'rectangle'|| shape.type === "triangle" || shape.type === "circle"? (
  <>
    {/* Corner Handlers for Specific Shapes */}
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'top-left')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'top-left')}
      className="absolute top-[-4px] left-[-4px] w-2 h-2 z-50 bg-blue-500 cursor-nwse-resize rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'top-right')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'top-right')}
      className="absolute top-[-4px] right-[-4px] w-2 h-2 z-50 bg-blue-500 cursor-nesw-resize rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'bottom-left')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'bottom-left')}
      className="absolute bottom-[-4px] left-[-4px] w-2 h-2 z-50 bg-blue-500 cursor-nesw-resize rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'bottom-right')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'bottom-right')}
      className="absolute bottom-[-4px] right-[-4px] w-2 h-2 z-50 bg-blue-500 cursor-nwse-resize rounded-full"
    ></div>
  </>
) : (
  <>
    {/* Corner and Center Handlers for Other Shapes */}
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'top-left')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'top-left')}
      className="absolute top-[-4px] left-[-4px] w-2 h-2 z-50 bg-blue-500 cursor-nwse-resize rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'top-right')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'top-right')}
      className="absolute top-[-4px] right-[-4px] w-2 h-2 z-50 bg-blue-500 cursor-nesw-resize rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'bottom-left')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'bottom-left')}
      className="absolute bottom-[-4px] left-[-4px] w-2 h-2 z-50 bg-blue-500 cursor-nesw-resize rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'bottom-right')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'bottom-right')}
      className="absolute bottom-[-4px] right-[-4px] w-2 h-2 z-50 bg-blue-500 cursor-nwse-resize rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'top-center')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'top-center')}
      className="absolute top-[-4px] left-[50%] translate-x-[-50%] w-2 h-2 z-50 bg-blue-500 cursor-ns-resize rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'bottom-center')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'bottom-center')}
      className="absolute bottom-[-4px] left-[50%] translate-x-[-50%] w-2 h-2 z-50 bg-blue-500 cursor-ns-resize rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'left-center')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'left-center')}
      className="absolute top-[50%] left-[-4px] translate-y-[-50%] w-2 h-2 z-50 bg-blue-500 cursor-ew-resize rounded-full"
    ></div>
    <div
      onMouseDown={(e) => handleResizeMouseDown(e, shape.id, 'right-center')}
      onTouchStart={(e) => handleResizeStart(e, shape.id, 'right-center')}
      className="absolute top-[50%] right-[-4px] translate-y-[-50%] w-2 h-2 z-50 bg-blue-500 cursor-ew-resize rounded-full"
    ></div>
  </>
)}

              </>
            )}
          </div>
        );
      };
      console.log(selectedShapeId)       
      return (
        <div className="main mt-[60px] w-full overflow-hidden " onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}
        >
                <ToolTop 
                shapes={shapes} 
                setShapes={setShapes} 
                containerSize={containerSize} 
                setContainerSize={setContainerSize} 
                zoom={zoom} 
                handleAddShape={handleAddShape}
                isWidthInRange={isWidthInRange}
                selectedShapeId = {selectedShapeId}
                />
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
          <div className="tool flex items-stretch h-[calc(100vh-60px)] box-border relative overflow-hidden">
            <div
              ref={workareaRef}
              className="tool-workarea mt-[48px] w-auto p-0  text-center box-border flex-1 relative"
              style={{
                overflowX:isDragging?"hidden":"auto",
                overflowY:isDragging?"hidden":"auto"
              }}
              
            >
              <div className="editpdf-workarea bg-white p-4 rounded-lg shadow-md">
                <div
                  className="tool_workarea_rendered flex justify-center m-0 mx-auto p-0 transition-none flex-wrap"
                  style={{ width: `${calculatedEditorWidth}px` }}
                >
                  <div
                    className="editor-content flex flex-wrap flex-row justify-center m-[40px] shadow-none max-w-none relative"
                    style={{ width: `${calculatedEditorWidth}px` }}
                  >
                    <div className="editor-page block box-border shadow-2xl" style={{ padding: `${calculatedPadding}px` }}>
                      <div
                        ref={pageCanvasRef}
                        className="page-canvas z-40 overflow-hidden relative select-none"
                        style={{
                          width: `${calculatedPageWidth}px`,
                          height: `${calculatedPageHeight}px`,
                        }}
                      >
                        <img
                          className="pdf-img pointer-events-none z-30 image-orientation-from-image vertical-align-middle border-0 overflow-clip-margin-content-box overflow-clip"
                          src="https://d3jq6id3uwlfp0.cloudfront.net/media/upload_Files/annotate_file/b38dc85f-7470-451c-8efe-92cec8015c4f_page_1.jpg"
                          alt="PDF Image"
                          style={{
                            width: `${calculatedPageWidth}px`,
                            height: `${calculatedPageHeight}px`,
                          }}
                        />
                        {shapes.map((shape) => renderShape(shape))}
    
    
    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}