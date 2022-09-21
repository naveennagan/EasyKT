import React from "react";
import { IconContext } from "react-icons";
import { FcHeadset } from "react-icons/fc";
import { IoTextOutline } from "react-icons/io5";
import { ReactConnectorStart, ReactConnectorEnd } from 'react-connector-tool';

export const Text = (props) => {

  const { uniqueid, connectorContext, dragDropContext } = props;

  const onDragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };

  return (
    <div className="col-md-6 iconCss m-4">
      <IoTextOutline
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
      </IoTextOutline>
      <div className="iconLabel">Text</div>
      <ReactConnectorStart connectorContext={connectorContext} uniqueid = { uniqueid } >
          <div className='right-connector' />
      </ReactConnectorStart>

      <ReactConnectorEnd selector="create-workflow" connectorContext={connectorContext} uniqueid = { uniqueid } >
          <div className='left-connector' />
      </ReactConnectorEnd>
    </div>
  );
};
