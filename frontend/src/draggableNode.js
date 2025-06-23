// draggableNode.js
import React from 'react';
import { cn } from './lib/utils';

export const DraggableNode = ({ type, label }) => {
    
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={cn(type, "text-[12px] cursor-grab min-w-[80px] h-[30px] px-3 py-3 flex items-start justify-center flex-col rounded-md bg-hover-2/50 border-1 border-border-2/80 hover:border-border-2/90  hover:bg-hover-2 active:bg-hover/60 transition-colors")}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
          <span className='text-foreground/50'>{label}</span>
      </div>
    );
  };
  