import React from 'react';
import { Sidebar } from './SideBar';
import { Dashboard } from './Dashboard';

export const Container = (props)=>{
    
    const { dragDropContext } = props;

    return (
    <div className='ek-container'>
        <Sidebar dragDropContext = {dragDropContext} />
        <Dashboard dragDropContext= {dragDropContext} />
    </div>
    )
}