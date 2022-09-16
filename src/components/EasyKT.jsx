import React from 'react';
import { Home } from './Home';

import { ReactDraggable, createReactDragDropContext } from 'react-drag-drop-tool';

export const EasyKT = ()=>{

    const dragDropContext = createReactDragDropContext("drag-drop-1");

    return (<div>
        <Home />
        <ReactDraggable targetContext= {dragDropContext} >
            <div>Drag</div>
        </ReactDraggable>
    </div>)
}