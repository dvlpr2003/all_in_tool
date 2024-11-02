import React, { useState, useRef, useEffect } from 'react';
import { Square, Circle, Triangle } from 'lucide-react';

const ZoomableCanvas = () => {
  const [zoom, setZoom] = useState(100);
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedShapeType, setSelectedShapeType] = useState('square');
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizing, setResizing] = useState(false);

  // Update container size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Handle zoom change
  const handleZoom = (newZoom) => {
    const oldZoom = zoom;
    const newZoomValue = Math.min(Math.max(1, newZoom), 200);
    
    // Calculate the scale factors
    const oldScale = oldZoom / 100;
    const newScale = newZoomValue / 100;
    const scaleChange = newScale / oldScale;

    // Update shapes positions to maintain their relative positions
    setShapes(shapes.map(shape => {
      // Calculate position relative to container center
      const centerX = containerSize.width / 2;
      const centerY = containerSize.height / 2;
      
      // Get vector from center to shape
      const vectorX = shape.x - centerX;
      const vectorY = shape.y - centerY;
      
      // Scale the vector and calculate new position
      const newX = centerX + (vectorX * scaleChange);
      const newY = centerY + (vectorY * scaleChange);

      return {
        ...shape,
        x: newX,
        y: newY,
        width: shape.width * scaleChange,
        height: shape.height * scaleChange
      };
    }));

    setZoom(newZoomValue);
  };

  // Add shape to canvas
  const addShape = () => {
    const defaultSize = 50 * (zoom / 100);
    const centerX = containerSize.width / 2 - defaultSize / 2;
    const centerY = containerSize.height / 2 - defaultSize / 2;

    const newShape = {
      id: Date.now(),
      type: selectedShapeType,
      x: centerX,
      y: centerY,
      width: defaultSize,
      height: defaultSize
    };

    setShapes([...shapes, newShape]);
  };

  // Start dragging a shape
  const startDrag = (e, shape) => {
    e.stopPropagation();
    setIsDragging(true);
    setSelectedShape(shape);
    const rect = containerRef.current.getBoundingClientRect();
    setDragStart({
      x: e.clientX - rect.left - shape.x,
      y: e.clientY - rect.top - shape.y
    });
  };

  // Handle drag movement
  const handleDrag = (e) => {
    if (!isDragging || !selectedShape) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragStart.x;
    const y = e.clientY - rect.top - dragStart.y;

    setShapes(shapes.map(shape => 
      shape.id === selectedShape.id 
        ? { ...shape, x, y }
        : shape
    ));
  };

  // End dragging
  const endDrag = () => {
    setIsDragging(false);
    setSelectedShape(null);
  };

  // Start resizing
  const startResize = (e, shape) => {
    e.stopPropagation();
    setResizing(true);
    setSelectedShape(shape);
    setDragStart({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Handle resize movement
  const handleResize = (e) => {
    if (!resizing || !selectedShape) return;

    const deltaX = (e.clientX - dragStart.x);
    const deltaY = (e.clientY - dragStart.y);
    const scale = zoom / 100;

    setShapes(shapes.map(shape => 
      shape.id === selectedShape.id 
        ? {
            ...shape,
            width: Math.max(20 * scale, shape.width + deltaX),
            height: Math.max(20 * scale, shape.height + deltaY)
          }
        : shape
    ));

    setDragStart({
      x: e.clientX,
      y: e.clientY
    });
  };

  // End resizing
  const endResize = () => {
    setResizing(false);
    setSelectedShape(null);
  };

  // Render shape based on type
  const renderShape = (shape) => {
    const shapeProps = {
      size: shape.width,
      color: selectedShape?.id === shape.id ? '#2563eb' : '#000000'
    };

    switch (shape.type) {
      case 'square':
        return <Square {...shapeProps} />;
      case 'circle':
        return <Circle {...shapeProps} />;
      case 'triangle':
        return <Triangle {...shapeProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-4 flex gap-4 items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedShapeType('square')}
            className={`p-2 border rounded ${selectedShapeType === 'square' ? 'bg-blue-100' : ''}`}
          >
            <Square />
          </button>
          <button
            onClick={() => setSelectedShapeType('circle')}
            className={`p-2 border rounded ${selectedShapeType === 'circle' ? 'bg-blue-100' : ''}`}
          >
            <Circle />
          </button>
          <button
            onClick={() => setSelectedShapeType('triangle')}
            className={`p-2 border rounded ${selectedShapeType === 'triangle' ? 'bg-blue-100' : ''}`}
          >
            <Triangle />
          </button>
        </div>
        <button
          onClick={addShape}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Shape
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleZoom(zoom - 10)}
            className="px-3 py-1 border rounded"
          >
            -
          </button>
          <span>{zoom}%</span>
          <button
            onClick={() => handleZoom(zoom + 10)}
            className="px-3 py-1 border rounded"
          >
            +
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-96 border border-red-600 rounded overflow-hidden bg-gray-50 "
        onMouseMove={(e) => {
          handleDrag(e);
          handleResize(e);
        }}
        onMouseUp={() => {
          endDrag();
          endResize();
        }}
        onMouseLeave={() => {
          endDrag();
          endResize();
        }}
      >
        <div className="relative w-full h-full border border-green-600">
          {shapes.map((shape) => (
            <div
              key={shape.id}
              className="absolute cursor-move"
              style={{
                left: `${shape.x}px`,
                top: `${shape.y}px`,
                width: `${shape.width}px`,
                height: `${shape.height}px`,
              }}
              onMouseDown={(e) => startDrag(e, shape)}
            >
              {renderShape(shape)}
              <div
                className="absolute bottom-0 right-0 w-4 h-4 bg-white border border-gray-300 cursor-se-resize"
                onMouseDown={(e) => startResize(e, shape)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZoomableCanvas;