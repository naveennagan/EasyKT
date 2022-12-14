import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { SiMicrosoftteams } from "react-icons/si";
import { ReactConnectorStart, ReactConnectorEnd } from 'react-connector-tool';
import { AppContext } from "../AppContext";

export const Teams = (props) => {
   
  const { uniqueid, connectorContext, dragDropContext } = props;
  const { appState, setAppState } = useContext(AppContext);


  return (
    <div className="col-md-6 iconCss">
      <SiMicrosoftteams
        value={{ color: "green", size: "100em" }}
        id="sidebar-rectangle"
        onClick={(event) => {
          console.log("Rectangle Clicked ", uniqueid);
          setAppState({ ...appState, selectedNode: `Teams ${uniqueid}` });
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
      </SiMicrosoftteams>
      <div className="iconLabel">Teams</div>


      <ReactConnectorStart connectorContext={connectorContext} uniqueid = { uniqueid } >
          <div className='right-connector' />
      </ReactConnectorStart>

      <ReactConnectorEnd selector="create-workflow" connectorContext={connectorContext} uniqueid = { uniqueid } >
          <div className='left-connector' />
      </ReactConnectorEnd>
    </div>
  );
};
