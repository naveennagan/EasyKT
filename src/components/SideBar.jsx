import React from 'react';
import { ReactConnectorContext } from 'react-connector-tool';
import { ReactDraggable } from 'react-drag-drop-tool';
import { Circle } from './SideBarIcons/Circle';
import { Rectangle } from './SideBarIcons/Rectangle';
import { TextItem } from './SideBarIcons/TextItem';

export const Sidebar = (props)=>{

    const { dragDropContext } = props;

    const connectorContext = ReactConnectorContext("connect-shapes");


    return (
    <div className='ek-sidebar'>
       
       <Rectangle />
       <Circle />
       
       <ReactDraggable targetContext = {dragDropContext} uniqueid = "text-item">
          <TextItem uniqueid="text-item" connectorContext={connectorContext} dragDropContext={dragDropContext}/>
       </ReactDraggable>

    </div>
    )
}