import React from "react";

export const Workflow = ()=>{

    const onDrop = (event) => {

        event.preventDefault();

        var dragX = event.pageX;

        var dragY = event.pageY;

        var containerOffSetTop = document.getElementById("workflow-container").offsetTop;

        var containerOffSetLeft = document.getElementById("workflow-container").offsetLeft;

        const adjustMentTop = 50;
        
        const adjustMentLeft = 50;

        console.log("Dropped Location ", dragX+","+dragY);

        var data=event.dataTransfer.getData("text");

        var element = document.getElementById(data);
        

        if(data && !data.includes("copiedElement")){
            
            console.log("This is not copied element.");
            
            element = element.cloneNode(true);

            element.classList.add("dropped-shape");
            
            element.id = data+"-copiedElement"+(new Date().toISOString()); 

            element.addEventListener("dragstart",(event)=>{
                console.log("Dragging the already copied element.");
                event.dataTransfer.setData("text", event.target.id);
            });

        }

        element.style.left = dragX - containerOffSetLeft - adjustMentLeft;

        element.style.top = dragY -  containerOffSetTop - adjustMentTop;

        event.target.appendChild(element);
    }

    const onDragOver = (event) => {
       event.preventDefault();
    }

    return (
        <div id="workflow-container" className="workflow-container" onDrop={onDrop} onDragOver={onDragOver}>
            Workflow
        </div>
    )
}