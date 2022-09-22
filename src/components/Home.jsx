import React from 'react';
import { Menu } from './Menu';
import { Container } from './Container';
import { createReactDragDropContext  } from 'react-drag-drop-tool';
import ReactConnectorContext from 'react-connector-tool/dist/ReactConnectorContext';

export const Home = ()=>{

    
    const createDragDropContext = createReactDragDropContext("easy-kt-workflow");

    const connectorContext = ReactConnectorContext("connect-shapes");

    
    return (
    <div className="ek-home">
       <Menu />
       <Container dragDropContext= {createDragDropContext} connectorContext={connectorContext}/>
    </div>)
}