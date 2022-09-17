import React, { useState } from "react";
import { WorkflowItem } from "./WorkFlowItem";

export const Workflow = ()=>{

   const workflowList = [
       {
           id: 1,
           name: "OnBoarding Flow",
           author: "Steve",
           steps: [
               {
                   id: "step1",
                   name: "Review Documents"
               },
               {
                id: "step2",
                name: "Sign Documents"
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
                name: "Review Documents"
            },
            {
             id: "step2",
             name: "Sign Documents"
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
                name: "Review Documents"
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
                name: "Review Documents"
            },
            {
             id: "step2",
             name: "Sign Documents"
         },
         {
            id: "step3",
            name: "Sign Documents"
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
                name: "Review Documents"
            },
            {
             id: "step2",
             name: "Sign Documents"
         },
         {
            id: "step3",
            name: "Sign Documents"
        },
        {
            id: "step4",
            name: "Sign Documents"
        }
        ]
    }
   ]

    return (
        <div className="workflow-container">
             <div className="create-workflow-button">
                    <span className="create-workflow-icon">&#43;</span>
            </div>
            {  
                workflowList.map((workflowData)=>{
                    return <WorkflowItem workflowData={workflowData}></WorkflowItem>
                })
            }
        </div>
    )
}