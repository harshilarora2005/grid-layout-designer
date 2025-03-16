import { useState } from 'react';
import { Rnd } from 'react-rnd';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const GridItem = ({ item, cellWidth, cellHeight, gridGap, onDragStop, onResize, onRemove}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const width = item.colSpan * (cellWidth + gridGap) - gridGap;
  const height = item.rowSpan * (cellHeight + gridGap) - gridGap;
  const x = (item.col - 1) * (cellWidth + gridGap);
  const y = (item.row - 1) * (cellHeight + gridGap);

  return (
    <Rnd
      bounds="parent"
      size={{
        width,
        height,
      }}
      position={{
        x,
        y,
      }}
      onDragStart={() => setIsDragging(true)}
      onDrag={(e, data) => {
        // Free dragging, no restrictions during drag
      }}
      onDragStop={(e, data) => {
        setIsDragging(false);
        onDragStop(item.id, data);
      }}
      onResizeStart={() => setIsResizing(true)}
      onResize={(e, direction, ref, delta, position) => {
        // While resizing, don't restrict the dimensions to grid
        // Just allow the component to resize freely
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setIsResizing(false);
        onResize(item.id, direction, ref);
      }}
      enableResizing={{ bottomRight: true }}
      resizeHandleClasses={{ bottomRight: 'resize-handle' }}
      dragHandleClassName="drag-handle"
      className={`${isResizing || isDragging ? 'z-10' : ''}`}
    >
      <div 
        className={`w-full h-full rounded-lg border-2 flex items-center justify-center relative shadow-md transition-all ${
          isDragging ? 'bg-[#bbdefb] border-[#2196f3]' : 'bg-[#e3f2fd] border-[#bbdefb] hover:shadow-lg'
        }`}
      >
        <div className='absolute top-[-0.250rem] left-0 z-10 text-red-400 '>
          <FontAwesomeIcon icon={faX} className='cursor-pointer'
          onClick={(e) => {
            e.stopPropagation(); 
            onRemove();
          }}/>
        </div>
        <div className="drag-handle absolute inset-0 rounded-lg cursor-move" />
        <span className="text-xl font-semibold text-[#1976d2] pointer-events-none">
          {item.number}
        </span>
        <div className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-se-resize text-[#1976d2]">
          <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} flip='vertical' />
        </div>
      </div>
    </Rnd>
  );
};

export default GridItem;