import React from 'react';

export const Circle = ()=>{

    const onDragStart = (event)=>{
        event.dataTransfer.setData("text", event.target.id);
    }
    

    return (
    <div id="sidebar-circle" className='sidebar-circle' draggable="true" onDragStart={onDragStart}>
       Quiz Item
       <div className='connector-point connector-left' id="connector-left"></div>
       <div className='connector-point connector-right' 
       connector="true" draggable = "true" id="connector-right"></div>
    </div>
    )
}