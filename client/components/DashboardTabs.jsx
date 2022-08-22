import React from 'react';

export const DashBoardTabs = (props)=>{

    const { onTabSelect, tab} = props;
    return (
        <div className='dashboard-tab-container'>
          <div className={`dashboard-tab ${tab === 'Workflow'?"tab-selected": "tab-not-selected"}`} onClick={()=>{
              onTabSelect("Workflow")
          }}>
               Workflow
          </div>
          <div className={`dashboard-tab ${tab === 'Trigger'?"tab-selected": "tab-not-selected"}`} onClick={()=>{
              onTabSelect("Trigger")
          }}>
               Trigger
          </div>
          <div className={`dashboard-tab ${tab === 'Task'?"tab-selected": "tab-not-selected"}`} onClick={()=>{
              onTabSelect("Task")
          }}>
               Task
          </div>
    </div>)
}