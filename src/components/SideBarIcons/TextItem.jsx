import React from "react";

import { ReactConnectorStart, ReactConnectorEnd } from 'react-connector-tool';

export const TextItem = (props)=>{

    const { uniqueid, connectorContext, dragDropContext } = props;
    
    return (
        <div  className='sidebar-rectangle' onClick = {()=>{
            console.log(uniqueid);
            console.log(dragDropContext);
            console.log(connectorContext);
        }}>
            Text Input
            <ReactConnectorStart connectorContext={connectorContext} uniqueid = { uniqueid } >
                <div className='right-connector' />
            </ReactConnectorStart>
            
            
            <ReactConnectorEnd connectorContext={connectorContext} uniqueid = { uniqueid } >
                <div className='left-connector' />
            </ReactConnectorEnd>
        </div>
    )
}
