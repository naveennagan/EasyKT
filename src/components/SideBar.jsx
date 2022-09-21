import React from "react";
import { ReactConnectorContext } from "react-connector-tool";
import { ReactDraggable } from "react-drag-drop-tool";

import { Image } from "./SideBarIcons/ImageIcon";
import { Video } from "./SideBarIcons/VideoIcon";
import { Teams } from "./SideBarIcons/TeamsIcon";
import { Quiz } from "./SideBarIcons/QuizIcon";
import { Approval } from "./SideBarIcons/ApprovalIcon";
import { Feedback } from "./SideBarIcons/FeedbackIcon";
import { Wiki } from "./SideBarIcons/WikiIcon";
import { Voice } from "./SideBarIcons/VoiceIcon";

export const Sidebar = (props) => {
  const { dragDropContext } = props;

  const connectorContext = ReactConnectorContext("connect-shapes");

  return (
    <div className="ek-sidebar">
      <ReactDraggable targetContext={dragDropContext} uniqueid="circle-item">
        <Image
          uniqueid="circle-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="circle1-item">
        <Video
          uniqueid="circle1-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="circle2-item">
        <Teams
          uniqueid="circle2-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="circle3-item">
        <Quiz
          uniqueid="circle3-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="circle4-item">
        <Approval
          uniqueid="circle4-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="circle5-item">
        <Feedback
          uniqueid="circle5-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="circle6-item">
        <Wiki
          uniqueid="circle6-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="circle7-item">
        <Voice
          uniqueid="circle7-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>
    </div>
  );
};
