import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { FaPhotoVideo } from "react-icons/fa";
import { ReactConnectorStart, ReactConnectorEnd } from "react-connector-tool";
import { AppContext } from "../AppContext";

export const Video = (props) => {
  const { uniqueid, connectorContext, dragDropContext } = props;
  const { appState, setAppState } = useContext(AppContext);

  return (
    <div className="col-md-6 iconCss">
      <FaPhotoVideo
        value={{ color: "green", size: "100em" }}
        id="sidebar-rectangle"
        onClick={(event) => {
          console.log("Video Rectangle Clicked ");
          setAppState({ ...appState, selectedNode: `Video ${uniqueid}` });
        }}
      >
        StepPp
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
      </FaPhotoVideo>
      <div className="iconLabel">Video</div>
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
