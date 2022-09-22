import React, { useState } from 'react';
import { ReactDropArea } from 'react-drag-drop-tool';
import { DashBoardTabs } from './DashboardTabs';
import { SearchBot } from './search-bot/SearchBot';
import { Task } from './Task';
import { Trigger } from './Trigger';
import { Workflow } from './Workflow';

export const Dashboard = (props)=>{
    const [tab, setTab] = useState("Workflow");

    const { dragDropContext, connectorContext } = props;

    const getTabContentView = ()=>{
        switch(tab){
            case "Workflow":{
                return <Workflow dragDropContext = {dragDropContext} connectorContext={connectorContext}/>
            }
            case "Trigger":{
                return <Trigger />
            }
            case "Task":{
                return <Task/>
            }
            case "SearchBot":{
                return <SearchBot />
            }
            default:{
                return <Workflow dragDropContext = {dragDropContext} />
            }
        }
    }

    const selectTab = (tab)=>{
        setTab(tab);
    }

    return (
        < >
        <div className='ek-dashboard'>
            <DashBoardTabs onTabSelect ={selectTab} tab={tab} />
            <div className='tab-container'>
                    {getTabContentView()}
            </div>
        </div>
        </>
    )
}