import React from "react";
import { tasksData } from "../data/taskData";

export const Task = ()=>{

    const tasksListData = tasksData;

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
                    tasksListData.map((taskData,index)=>{
                        return taskItemView(index+1, taskData);
                    })
                }
            </div>
        </div>
    )
}