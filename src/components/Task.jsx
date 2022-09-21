import React, {useState} from "react";
import { tasksData } from "../data/taskData";
import TaskPreview from "./TaskPreview";
import CustomModal from "./Modal";

export const Task = ()=>{
    const tasksListData = tasksData;
   const [show, setShow] = useState(false)
   const [selectedTask, setSelectedTask] = useState(null)

    const openTaskPreview = (task) => {
        setSelectedTask(task)
        setShow(true);
    }
    
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
            <button type="button" className="task-row-title task-row-action" onClick={() => openTaskPreview(task)}> {task.status ==='Done' ? 'Review': 'Resume'}</button>
        </div>
    }

    return (
        <>
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
        {show && 
             <CustomModal style={{content:{ inset: '100px', padding: '0px' }}}>
               <TaskPreview task={selectedTask} setShow={setShow} /> 
             </CustomModal>}
        </>
        
    )
}