import React, { useEffect } from 'react';
import { Sidebar } from './SideBar';
import { Dashboard } from './Dashboard';

export const Container = (props)=>{
    
    const { dragDropContext, connectorContext } = props;


    return (
    <div className='ek-container'>
        <Sidebar dragDropContext = {dragDropContext} connectorContext={connectorContext}/>
        <Dashboard dragDropContext= {dragDropContext} connectorContext={connectorContext}/>
    </div>
    )
}