import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { BiUserVoice } from "react-icons/bi";
import { ReactConnectorStart, ReactConnectorEnd } from "react-connector-tool";
import { AppContext } from "../AppContext";

export const Voice = (props) => {
  const { uniqueid, connectorContext } = props;
  const { appState, setAppState } = useContext(AppContext);

  return (
    <div className="col-md-6 iconCss">
      <BiUserVoice
        value={{ color: "green", size: "100em" }}
        id="sidebar-rectangle"
        onClick={(event) => {
          console.log("Voice Rectangle Clicked ");
          setAppState({ ...appState, selectedNode: `Voice ${uniqueid}` });
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
      </BiUserVoice>
      <div className="iconLabel">Voice</div>
      <ReactConnectorStart
        connectorContext={connectorContext}
        uniqueid={uniqueid}
      >
        <div className="right-connector" />
      </ReactConnectorStart>

      <ReactConnectorEnd
        selector="create-workflow"
        connectorContext={connectorContext}
        uniqueid={uniqueid}
      >
        <div className="left-connector" />
      </ReactConnectorEnd>
    </div>
  );
};
