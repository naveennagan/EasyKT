import React from 'react';

export const Circle = ()=>{

    const onDragStart = (event)=>{
        event.dataTransfer.setData("text", event.target.id);
    }
    

    return (
    <div id="sidebar-circle" className='sidebar-circle' draggable="true" onDragStart={onDragStart}>
       Circle
       <div className='connector-point connector-right'></div>
       <div className='connector-point connector-left'></div>
    </div>
    )
}