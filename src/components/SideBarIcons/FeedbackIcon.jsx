import React from "react";
import { IconContext } from "react-icons";
import { RiFeedbackFill } from "react-icons/ri";
import { ReactConnectorStart, ReactConnectorEnd } from 'react-connector-tool';

export const Feedback = (props) => {

  const { uniqueid, connectorContext, dragDropContext } = props;

  return (
    <div className="col-md-6 iconCss">
      <RiFeedbackFill
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
      </RiFeedbackFill>
      <div className="iconLabel">Feedback</div>

      <ReactConnectorStart connectorContext={connectorContext} uniqueid = { uniqueid } >
          <div className='right-connector' />
      </ReactConnectorStart>

      <ReactConnectorEnd selector="create-workflow" connectorContext={connectorContext} uniqueid = { uniqueid } >
          <div className='left-connector' />
      </ReactConnectorEnd>
    </div>
  );
};
