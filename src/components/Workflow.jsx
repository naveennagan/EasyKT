import React, { useState, useEffect } from "react";
import { CreateWorkflow } from "./CreateWorkflow";
import { WorkflowItem } from "./WorkFlowItem";
import { ReactDropArea } from 'react-drag-drop-tool';
import { workflowData } from "../data/workflowData";

export const Workflow = (props)=>{

   const { dragDropContext } = props; 

   const [ showCreateWorkflow, setShowCreateWorkflow] = useState(false);

   const workflowList = workflowData;
   
   const hideCreateWorkflowView = () => {
        setShowCreateWorkflow(false);
   }

   console.log(dragDropContext.data);

   useEffect(()=>{
    console.log(dragDropContext);
   },[dragDropContext]);

    return (
        
            showCreateWorkflow ? (
               <ReactDropArea dropContext = {dragDropContext} >
                    <CreateWorkflow  onHide={hideCreateWorkflowView}/>
                </ReactDropArea>)
                : 
                <div className="workflow-container">
                    <div className="create-workflow-button" onClick={()=>{
                        setShowCreateWorkflow(true);
                    }}>
                        <span className="create-workflow-icon">&#43;</span>
                    </div>
                    <>
                        {  
                            workflowList.map((workflowData)=>{
                                return <WorkflowItem workflowData={workflowData}></WorkflowItem>
                            })
                        }
                    </> 
                </div>
    )
}