import React from 'react';

export const Rectangle = ()=>{

    const onDragStart = (event)=>{
        event.dataTransfer.setData("text", event.target.id);
    }
    

    return (
    <div id="sidebar-rectangle" className='sidebar-rectangle' draggable="true" onDragStart={onDragStart} onClick={(event)=>{
        console.log("Rectangle Clicked ");
    }}>
       Step
       <div className='connector-point connector-left' id="connector-left"></div>
       <div className='connector-point connector-right' 
       connector="true" draggable = "true" id="connector-right"></div>
    </div>
    )
}