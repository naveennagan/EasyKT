import React, { useState } from "react";

export const Workflow = ()=>{


    const [errorMessage, setErrorMessage]= useState("");

    const changeIdsRecursively = (elem)=> {
        if(!elem.id){
            return;
        }
        var newElemId = elem.id + "-copiedElement" + new Date().getTime();
        elem.id = newElemId;
        var childElems = elem.children || [];
        for(var i = 0; i< childElems.length;i++){
            changeIdsRecursively(childElems[i]);
        }
    }

    const onDrop = (event) => {

        event.preventDefault();

        var dropLocationElementId = event.target.id;

        var dragX = event.pageX;

        var dragY = event.pageY;

        var containerOffSetTop = document.getElementById("workflow-container").offsetTop;

        var containerOffSetLeft = document.getElementById("workflow-container").offsetLeft;

        const adjustMentTop = 50;
        
        const adjustMentLeft = 50;

        console.log("Dropped Location ", dragX+","+dragY);

        var data=event.dataTransfer.getData("text");

        var element = document.getElementById(data);

        if(data && data.includes("connector")){
            console.log("Connector drag");
            createArrow(dropLocationElementId, data);
            return;
        }

        if(data && !data.includes("copiedElement")){
            
            console.log("This is not copied element.");
            
            element = element.cloneNode(true);

            element.classList.add("dropped-shape");
            
            changeIdsRecursively(element);

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

    const isValidConnection = (id1, id2) => {
        const notSameId = id1 != id2;
        const validConnection =  id1.includes("connector") || id2.includes("connector");
        const validPair1 = id1.includes("left") && id2.includes("right");
        const validPair2 = id1.includes("right") && id2.includes("left");
        return notSameId && validConnection && (validPair1 || validPair2);    
    }


    const createArrow = (id1, id2)=>{
        if(!isValidConnection(id1,id2)){
            setErrorMessage(" Please connect properly !");
            setTimeout(()=>{
                setErrorMessage("");
            },5000);
            return;
        }
        var rect1 = document.getElementById(id1).parentElement.getBoundingClientRect();
        console.log(rect1);

        var rect2 = document.getElementById(id2).parentElement.getBoundingClientRect();
        console.log(rect2);
      

        drawLine(rect1.x, rect1.y, rect2.x, rect2.y);
     }

    const drawLine = (x1,y1, x2,y2) => {
        console.log("Drawing line between ", x1, y1, " to ", x2, y2);
        var div = document.createElement('div');
        div.style.height = "2px";
        const width = (Math.abs(x1-x2)-60)+"px";
        div.style.width = width;
        const rotateAngle = Math.atan2(y2-y1,x2-x1);
        div.style.backgroundColor = "black";
        div.style.position = "fixed";
        div.style.left = x2+100;
        div.style.top = y2+50;
        div.style.transform = `rotate(${rotateAngle}rad)`;
        document.getElementById("workflow-container").appendChild(div);
    }
   

    return (
        <div id="workflow-container" className="workflow-container" onDrop={onDrop} onDragOver={onDragOver}>
            Workflow 
            <div className="error-message" onClick={()=>{
                setErrorMessage("");
            }}>{errorMessage}</div>
        </div>
    )
}