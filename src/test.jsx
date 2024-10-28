import React, { useState, useRef } from 'react';
import { Square, Circle, Triangle, GripVertical, Trash2, Move } from 'lucide-react';

const ShapeEditor = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(null);
  const [draggedLayer, setDraggedLayer] = useState(null);
  const [dragOverLayer, setDragOverLayer] = useState(null);
  const layerPanelRef = useRef(null);

  const addShape = (type) => {
    const newShape = {
      id: Date.now(),
      type,
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      zIndex: shapes.length,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} ${shapes.length + 1}`
    };
    setShapes([...shapes, newShape]);
  };

  const handleShapeClick = (id, e) => {
    e.stopPropagation();
    setSelectedShape(id);
  };

  // Layer drag handling
  const handleDragStart = (e, id) => {
    if (e.type === 'touchstart') {
      // Prevent scrolling while dragging on touch devices
      e.preventDefault();
    }
    setDraggedLayer(id);
    
    // Set drag ghost image for mouse events
    if (e.dataTransfer) {
      const dragGhost = document.createElement('div');
      dragGhost.classList.add('w-2 h-2 opacity-0');
      document.body.appendChild(dragGhost);
      e.dataTransfer.setDragImage(dragGhost, 0, 0);
      setTimeout(() => document.body.removeChild(dragGhost), 0);
    }
  };

  const handleDragOver = (e, id) => {
    e.preventDefault();
    if (draggedLayer === id) return;
    setDragOverLayer(id);
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    if (!draggedLayer || draggedLayer === targetId) return;

    const newShapes = [...shapes];
    const draggedIndex = newShapes.findIndex(s => s.id === draggedLayer);
    const targetIndex = newShapes.findIndex(s => s.id === targetId);

    // Reorder array
    const [draggedShape] = newShapes.splice(draggedIndex, 1);
    newShapes.splice(targetIndex, 0, draggedShape);

    // Update z-indices
    newShapes.forEach((shape, index) => {
      shape.zIndex = index;
    });

    setShapes(newShapes);
    setDraggedLayer(null);
    setDragOverLayer(null);
  };

  // Touch event handling for mobile
  const handleTouchMove = (e) => {
    e.preventDefault();
    if (!draggedLayer) return;

    const touch = e.touches[0];
    const layerPanel = layerPanelRef.current;
    const layerElements = layerPanel.querySelectorAll('.layer-item');

    // Find the layer element under the touch point
    const touchTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    const layerItem = touchTarget.closest('.layer-item');
    
    if (layerItem) {
      const targetId = parseInt(layerItem.dataset.id);
      if (targetId !== draggedLayer) {
        setDragOverLayer(targetId);
      }
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    if (draggedLayer && dragOverLayer) {
      handleDrop(e, dragOverLayer);
    }
    setDraggedLayer(null);
    setDragOverLayer(null);
  };

  const deleteShape = (id) => {
    setShapes(shapes.filter(s => s.id !== id));
    if (selectedShape === id) {
      setSelectedShape(null);
    }
  };

  // Canvas shape handling
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

  return (
    <div className="p-4 flex flex-col md:flex-row gap-4 border border-black" onClick={()=>setSelectedShape(false)}>
      <div className="flex-1">
        <div className="mb-4 flex flex-wrap gap-2">
          <div onClick={() => addShape('square')}>
            <Square className="mr-2" />
            Add Square
          </div>
          <div onClick={() => addShape('circle')}>
            <Circle className="mr-2" />
            Add Circle
          </div>
          <div onClick={() => addShape('triangle')}>
            <Triangle className="mr-2" />
            Add Triangle
          </div>
        </div>
        <div className="relative w-full h-96 overflow-hidden bg-gray-50">
          {shapes.map(renderShape)}
        </div>
      </div>
      
      {/* Layer Panel */}
      <div
        className="w-full md:w-64 p-4"
        ref={layerPanelRef}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <h3 className="font-bold mb-4">Layers</h3>
        <div className="space-y-2">
          {[...shapes].reverse().map((shape) => (
            <div
              key={shape.id}
              data-id={shape.id}
              className={`layer-item flex items-center justify-between p-2 rounded cursor-move touch-none
                ${selectedShape === shape.id ? 'bg-blue-100' : 'bg-gray-50'}
                ${dragOverLayer === shape.id ? 'border-t-2 border-blue-500' : ''}
                ${draggedLayer === shape.id ? 'opacity-50' : ''}`}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, shape.id)}
              onDragOver={(e) => handleDragOver(e, shape.id)}
              onDrop={(e) => handleDrop(e, shape.id)}
              onTouchStart={(e) => handleDragStart(e, shape.id)}
              onClick={(e) => handleShapeClick(shape.id, e)}
            >
              <div className="flex items-center gap-2">
                <GripVertical className="w-4 h-4" />
                <Move className="w-4 h-4" />
                <span>{shape.name}</span>
              </div>
              <div
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-red-500"
                onClick={() => deleteShape(shape.id)}
              >
                <Trash2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShapeEditor;