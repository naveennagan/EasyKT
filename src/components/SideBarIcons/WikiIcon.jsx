import React from "react";
import { IconContext } from "react-icons";
import { ImWikipedia } from "react-icons/im";
import { ReactConnectorStart, ReactConnectorEnd } from 'react-connector-tool';

export const Wiki = (props) => {

  const { uniqueid, connectorContext, dragDropContext } = props;

  return (
    <div className="col-md-6 iconCss">
      <ImWikipedia
        value={{ color: "green", size: "100em" }}
        id="sidebar-rectangle"
        onClick={(event) => {
          console.log("Rectangle Clicked ");
        }}
      >
        <div
          className="connector-point connector-left"
          id="connector-left"
        ></div>
        <div
          className="connector-point connector-right"
          connector="true"
          draggable="true"
          id="connector-right"
        ></div>
      </ImWikipedia>
      <div className="iconLabel">Wiki</div>
      <ReactConnectorStart connectorContext={connectorContext} uniqueid = { uniqueid } >
          <div className='right-connector' />
      </ReactConnectorStart>

      <ReactConnectorEnd connectorContext={connectorContext} uniqueid = { uniqueid } >
          <div className='left-connector' />
      </ReactConnectorEnd>
    </div>
  );
};
