import React from 'react';
import { ReactDraggable } from 'react-drag-drop-tool';
import { Circle } from './SideBarIcons/Circle';
import { Rectangle } from './SideBarIcons/Rectangle';
import { TextItem } from './SideBarIcons/TextItem';

export const Sidebar = (props)=>{

    const { dragDropContext } = props;

    return (
    <div className='ek-sidebar'>
       <Rectangle />
       <Circle />
       <ReactDraggable targetContext = {dragDropContext} >
        <TextItem />
       </ReactDraggable>
    </div>
    )
}