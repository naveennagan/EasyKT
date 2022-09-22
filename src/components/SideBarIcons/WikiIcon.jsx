import React, { useContext } from "react";
import { ImWikipedia } from "react-icons/im";
import { ReactConnectorStart, ReactConnectorEnd } from "react-connector-tool";
import { AppContext } from "../AppContext";

export const Wiki = (props) => {
  const { uniqueid, connectorContext } = props;

  const { appState, setAppState } = useContext(AppContext);

  return (
    <div className="col-md-6 iconCss">
      <ImWikipedia
        value={{ color: "green", size: "100em" }}
        id="sidebar-rectangle"
        onClick={(event) => {
          console.log("Wiki Rectangle Clicked ");
          setAppState({ ...appState, selectedNode: `Wiki ${uniqueid}` });
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
