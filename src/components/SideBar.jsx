import React from 'react';
import { ReactConnectorContext } from 'react-connector-tool';
import { ReactDraggable } from 'react-drag-drop-tool';

import { Circle } from "./SideBarIcons/Circle";
import { Circle1 } from "./SideBarIcons/Circle copy";
import { Circle2 } from "./SideBarIcons/Circle copy 2";
import { Circle3 } from "./SideBarIcons/Circle copy 3";
import { Circle4 } from "./SideBarIcons/Circle copy 4";
import { Circle5 } from "./SideBarIcons/Circle copy 5";
import { Circle6 } from "./SideBarIcons/Circle copy 6";
import { Circle7 } from "./SideBarIcons/Circle copy 7";


export const Sidebar = (props) => {
  const { dragDropContext } = props;

    const connectorContext = ReactConnectorContext("connect-shapes");


    return (
    <div className='ek-sidebar'>
     
       <ReactDraggable targetContext = {dragDropContext} uniqueid = "circle-item">
          <Circle uniqueid="circle-item" connectorContext={connectorContext} dragDropContext={dragDropContext}/>
       </ReactDraggable>

       <ReactDraggable targetContext = {dragDropContext} uniqueid = "circle1-item">
          <Circle1 uniqueid="circle1-item" connectorContext={connectorContext} dragDropContext={dragDropContext}/>
       </ReactDraggable>

       <ReactDraggable targetContext = {dragDropContext} uniqueid = "circle2-item">
          <Circle2 uniqueid="circle2-item" connectorContext={connectorContext} dragDropContext={dragDropContext}/>
       </ReactDraggable>

       <ReactDraggable targetContext = {dragDropContext} uniqueid = "circle3-item">
          <Circle3 uniqueid="circle3-item" connectorContext={connectorContext} dragDropContext={dragDropContext}/>
       </ReactDraggable>

       <ReactDraggable targetContext = {dragDropContext} uniqueid = "circle4-item">
          <Circle4 uniqueid="circle4-item" connectorContext={connectorContext} dragDropContext={dragDropContext}/>
       </ReactDraggable>

       <ReactDraggable targetContext = {dragDropContext} uniqueid = "circle5-item">
          <Circle5 uniqueid="circle5-item" connectorContext={connectorContext} dragDropContext={dragDropContext}/>
       </ReactDraggable>

       <ReactDraggable targetContext = {dragDropContext} uniqueid = "circle6-item">
          <Circle6 uniqueid="circle6-item" connectorContext={connectorContext} dragDropContext={dragDropContext}/>
       </ReactDraggable>

       <ReactDraggable targetContext = {dragDropContext} uniqueid = "circle7-item">
          <Circle7 uniqueid="circle7-item" connectorContext={connectorContext} dragDropContext={dragDropContext}/>
       </ReactDraggable>

    </div>
  );
};