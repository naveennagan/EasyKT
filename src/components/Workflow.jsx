import React, { useState } from "react";
import { CreateWorkflow } from "./CreateWorkflow";
import { WorkflowItem } from "./WorkFlowItem";
import { ReactDropArea } from 'react-drag-drop-tool';

export const Workflow = (props)=>{

   const { dragDropContext } = props; 

   const [ showCreateWorkflow, setShowCreateWorkflow] = useState(false);

   const workflowList = [
       {
           id: 1,
           name: "OnBoarding Flow",
           author: "Steve",
           steps: [
               {
                   id: "step1",
                   name: "Review Documents",
                   type: "Text"
               },
               {
                id: "step2",
                name: "Sign Documents",
                type: "Video"
            }
           ]
       },
       {
        id: 2,
        name: "Data Training Flow",
        author: "Dennis",
        steps: [
            {
                id: "step1",
                name: "Review Documents",
                type: "Text"
            },
            {
             id: "step2",
             name: "Sign Documents",
             type: "Text"
         }
        ]
       },
       {
        id: 3,
        name: "Frontend Testing Course",
        author: "Jake",
        steps: [
            {
                id: "step1",
                name: "Review Documents",
                type: "Text"
            },
           
        ]
    },
    {
        id: 4,
        name: "Pipeline Integration",
        author: "Ruslan",
        steps: [
            {
                id: "step1",
                name: "Review Documents",
                type: "Text"
            },
            {
             id: "step2",
             name: "Sign Documents",
             type: "Quiz"
         },
         {
            id: "step3",
            name: "Sign Documents",
            type: "Text"
        }
        ]
    },
    {
        id: 5,
        name: "Data correction",
        author: "Bob",
        steps: [
            {
                id: "step1",
                name: "Review Documents",
                type: "Text"
            },
            {
             id: "step2",
             name: "Sign Documents",
             type: "Image"
         },
         {
            id: "step3",
            name: "Sign Documents",
            type: "Text"
        },
        {
            id: "step4",
            name: "Sign Documents",
            type: "Text"
        }
        ]
    }
   ]

   
   const hideCreateWorkflowView = () => {
        setShowCreateWorkflow(false);
   }

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