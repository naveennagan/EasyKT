import React, { useState } from 'react';
import { DashBoardTabs } from './DashboardTabs';
import { Task } from './Task';
import { Trigger } from './Trigger';
import { Workflow } from './Workflow';

export const Dashboard = ()=>{
    const [tab, setTab] = useState("Workflow");

    const getTabContentView = ()=>{
        switch(tab){
            case "Workflow":{
                return <Workflow />
            }
            case "Trigger":{
                return <Trigger />
            }
            case "Task":{
                return <Task />
            }
            default:{
                return <Workflow />
            }
        }
    }

    const selectTab = (tab)=>{
        setTab(tab);
    }

    return (
    <div className='ek-dashboard'>
       <DashBoardTabs onTabSelect ={selectTab} tab={tab} />
       <div className='tab-container'>
            {getTabContentView()}
       </div>
    </div>
    )
}