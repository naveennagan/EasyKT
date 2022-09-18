import React from "react";
import { triggersData } from "../data/triggerData";

export const Trigger = ()=>{

    let triggersListData = triggersData;

    const triggerHeaderView = ()=>{
        return <div className="trigger-header">
            <p className="trigger-header-title"> S.No. </p>
            <p className="trigger-header-title"> Name </p>
            <p className="trigger-header-title"> Completed </p>
            <p className="trigger-header-title"> AssignedTo </p>
            <p className="trigger-header-title"> Status </p>
            <p className="trigger-header-title"> Action </p>
        </div>
    }

    const triggerItemView = (index, trigger)=>{
        return <div className="trigger-row">
            <p className="trigger-row-title"> {index} </p>
            <p className="trigger-row-title"> {trigger.name} </p>
            <p className="trigger-row-title"> { `Step ${trigger.currentStep} of ${trigger.totalSteps} completed.`} </p>
            <p className="trigger-row-title"> {trigger.assignedTo} </p>
            <p className={`trigger-row-title ${trigger.status === 'Done' ? 'trigger-completed':'trigger-progress'}`}> {trigger.status} </p>
            <p className="trigger-row-title trigger-row-action"> {trigger.status ==='Done' ? 'Review': 'Remind'}</p>
        </div>
    }

    return (
        <div className="trigger-container">
            <div className="trigger-table">
                { triggerHeaderView() }
                {
                    triggersListData.map((triggerData,index)=>{
                        return triggerItemView(index+1, triggerData);
                    })
                }
            </div>
        </div>
    )
}