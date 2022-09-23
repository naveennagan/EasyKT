import React from "react";


export const WorkflowItem = (props)=>{
   const { workflowData } = props;


   return <div className="workflow-item">
         <p className="workflow-item-title">
             {workflowData.name}
         </p>
         <div className="workflow-item-details">
             <img className="workflow-item-image" src="https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/17/main/GeiehNbQ1t86Mg5zKnEgucWslfZXTckjj8mSDV2O.png"></img>
         </div>
         <div className="workflow-step-details">
             <p className="workflow-step">Total Steps - {workflowData.steps?.length+1}</p>
             <p className="workflow-author">Author - {workflowData.author}</p>
         </div>
   </div>

}