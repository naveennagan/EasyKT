import React from 'react';
import { Menu } from './Menu';
import { Container } from './Container';
import { createReactDragDropContext  } from 'react-drag-drop-tool';

export const Home = ()=>{

    
    const createDragDropContext = createReactDragDropContext("easy-kt-workflow");
    
    return (
    <div className="ek-home">
       <Menu />
       <Container dragDropContext= {createDragDropContext} />
    </div>)
}