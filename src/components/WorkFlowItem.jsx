import React from "react";


export const WorkflowItem = (props)=>{
   const { workflowData } = props;


   return <div className="workflow-item">
         <p className="workflow-item-title">
             {workflowData.name}
         </p>
         <div className="workflow-item-details">
             <img className="workflow-item-image" src="https://i.picsum.photos/id/1006/200/200.jpg?hmac=yv53p45TOMz8bY4ZXUVRMFMO0_6d5vGuoWtE2hJhxlc"></img>
         </div>
         <div className="workflow-step-details">
             <p className="workflow-step">Total Steps - {workflowData.steps.length+1}</p>
             <p className="workflow-author">Author - {workflowData.author}</p>
         </div>
   </div>

}