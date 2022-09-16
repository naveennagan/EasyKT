import React, { useState } from 'react';
import { ReactDropArea } from 'react-drag-drop-tool';
import { DashBoardTabs } from './DashboardTabs';
import { SearchBot } from './search-bot/SearchBot';
import { Task } from './Task';
import { Trigger } from './Trigger';
import { Workflow } from './Workflow';

export const Dashboard = (props)=>{
    const [tab, setTab] = useState("Workflow");

    const { dragDropContext } = props;

    const getTabContentView = ()=>{
        switch(tab){
            case "Workflow":{
                return <Workflow />
            }
            case "Trigger":{
                return <ReactDropArea dropContext = {dragDropContext} >
                    <Trigger />
                </ReactDropArea>
            }
            case "Task":{
                return <Task />
            }
            case "SearchBot":{
                return <SearchBot />
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