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
      <ReactDraggable targetContext={dragDropContext} uniqueid="image-item">
        <Image
          uniqueid="image-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="video-item">
        <Video
          uniqueid="video-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="teams-item">
        <Teams
          uniqueid="teams-item"
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

      <ReactDraggable targetContext={dragDropContext} uniqueid="approval-item">
        <Approval
          uniqueid="approval-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="feedback-item">
        <Feedback
          uniqueid="feedback-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="wiki-item">
        <Wiki
          uniqueid="wiki-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>

      <ReactDraggable targetContext={dragDropContext} uniqueid="voice-item">
        <Voice
          uniqueid="voice-item"
          connectorContext={connectorContext}
          dragDropContext={dragDropContext}
        />
      </ReactDraggable>
    </div>
  );
};
