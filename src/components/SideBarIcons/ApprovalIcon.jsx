import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { ReactConnectorStart, ReactConnectorEnd } from 'react-connector-tool';
import { MdApproval } from "react-icons/md";
import { AppContext } from "../AppContext";

export const Approval = (props) => {

  const { uniqueid, connectorContext, dragDropContext } = props;
  const { appState, setAppState } = useContext(AppContext);


  return (
    <div className="col-md-6 iconCss">
      <MdApproval
        value={{ color: "green", size: "100em" }}
        id="sidebar-rectangle"
        onClick={(event) => {
          console.log("Approval Clicked ");
          setAppState({ ...appState, selectedNode: `Approval ${uniqueid}` });
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
      </MdApproval>
      <div className="iconLabel">Approval</div>

      <ReactConnectorStart connectorContext={connectorContext} uniqueid = { uniqueid } >
          <div className='right-connector' />
      </ReactConnectorStart>

      <ReactConnectorEnd selector="create-workflow" connectorContext={connectorContext} uniqueid = { uniqueid }>
          <div className='left-connector' />
      </ReactConnectorEnd>

    </div>
  );
};
