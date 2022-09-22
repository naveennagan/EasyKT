import React, { useContext } from "react";

import { ReactConnectorStart, ReactConnectorEnd } from "react-connector-tool";
import { AppContext } from "../AppContext";

export const TextItem = (props) => {
  const { uniqueid, connectorContext, dragDropContext } = props;
  const { appState, setAppState } = useContext(AppContext);

  return (
    <div
      className="sidebar-rectangle"
      onClick={() => {
        setAppState({ ...appState, selectedNode: `Text ${uniqueid}` });
      }}
    >
      Text Input
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
