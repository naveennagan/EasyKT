import React from 'react';

export const Circle = ()=>{

    const onDragStart = (event)=>{
        event.dataTransfer.setData("text", event.target.id);
    }
    

    return (
    <div id="sidebar-circle" className='sidebar-circle' draggable="true" onDragStart={onDragStart}>
       Circle
    </div>
    )
}