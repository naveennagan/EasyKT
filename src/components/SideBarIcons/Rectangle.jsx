import React from 'react';

export const Rectangle = ()=>{

    const onDragStart = (event)=>{
        event.dataTransfer.setData("text", event.target.id);
    }
    
    return (
    <div id="sidebar-rectangle" className='sidebar-rectangle' draggable="true" onDragStart={onDragStart}>
       Rectangle
    </div>
    )
}