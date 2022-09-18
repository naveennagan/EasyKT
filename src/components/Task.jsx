import React from "react";

export const Task = ()=>{

    let tasksData = [
        {
            id: "1",
            name: "Onboarding flow",
            status:"Progress",
            workflow: "workflow-1",
            currentStep: 2,
            totalSteps: 3,
            triggeredBy: "Steve"
        },
        {
            id: "2",
            name: "Data import",
            status:"Progress",
            workflow: "workflow-2",
            currentStep: 3,
            totalSteps: 5,
            triggeredBy: "John"
        },
        {
            id: "3",
            name: "Machine setup",
            status:"Done",
            workflow: "workflow-3",
            currentStep: 3,
            totalSteps: 3,
            triggeredBy: "John"
        },
        {
            id: "4",
            name: "Frontend Setup",
            status:"Progress",
            workflow: "workflow-4",
            currentStep: 2,
            totalSteps: 5,
            triggeredBy: "Steve"
        },
        {
            id: "5",
            name: "Sign Documents",
            status:"Done",
            workflow: "workflow-5",
            currentStep: 3,
            totalSteps: 3,
            triggeredBy: "John"
        }

    ];

    const taskHeaderView = ()=>{
        return <div className="task-header">
            <p className="task-header-title"> S.No. </p>
            <p className="task-header-title"> Name </p>
            <p className="task-header-title"> Completed </p>
            <p className="task-header-title"> TriggeredBy </p>
            <p className="task-header-title"> Status </p>
            <p className="task-header-title"> Action </p>
        </div>
    }

    const taskItemView = (index, task)=>{
        return <div className="task-row">
            <p className="task-row-title"> {index} </p>
            <p className="task-row-title"> {task.name} </p>
            <p className="task-row-title"> { `Step ${task.currentStep} of ${task.totalSteps} completed.`} </p>
            <p className="task-row-title"> {task.triggeredBy} </p>
            <p className={`task-row-title ${task.status === 'Done' ? 'task-completed':'task-progress'}`}> {task.status} </p>
            <p className="task-row-title task-row-action"> {task.status ==='Done' ? 'Review': 'Resume'}</p>
        </div>
    }

    return (
        <div className="task-container">
            <div className="task-table">
                { taskHeaderView() }
                {
                    tasksData.map((taskData,index)=>{
                        return taskItemView(index+1, taskData);
                    })
                }
            </div>
        </div>
    )
}