import React from 'react';
import { Sidebar } from './SideBar';
import { Dashboard } from './Dashboard';

export const Container = ()=>{
    return (
    <div className='ek-container'>
        <Sidebar />
        <Dashboard />
    </div>
    )
}