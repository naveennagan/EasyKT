import React from 'react';
import { Circle } from './SideBarIcons/Circle';
import { Rectangle } from './SideBarIcons/Rectangle';

export const Sidebar = ()=>{
    return (
    <div className='ek-sidebar'>
       <Rectangle />
       <Circle />
    </div>
    )
}