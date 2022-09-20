import React from "react";
import { ReactDraggable } from "react-drag-drop-tool";
import { Circle } from "./SideBarIcons/Circle";
import { Circle1 } from "./SideBarIcons/Circle copy";
import { Circle2 } from "./SideBarIcons/Circle copy 2";
import { Circle3 } from "./SideBarIcons/Circle copy 3";
import { Circle4 } from "./SideBarIcons/Circle copy 4";
import { Circle5 } from "./SideBarIcons/Circle copy 5";
import { Circle6 } from "./SideBarIcons/Circle copy 6";
import { Circle7 } from "./SideBarIcons/Circle copy 7";

import { Rectangle } from "./SideBarIcons/Rectangle";
import { TextItem } from "./SideBarIcons/TextItem";

export const Sidebar = (props) => {
  const { dragDropContext } = props;

  return (
    <div className="ek-sidebar">
      <ReactDraggable targetContext={dragDropContext}>
        <Rectangle />
      </ReactDraggable>
      <ReactDraggable targetContext={dragDropContext}>
        <Circle />
      </ReactDraggable>
      <ReactDraggable targetContext={dragDropContext}>
        <Circle1 />
      </ReactDraggable>
      <ReactDraggable targetContext={dragDropContext}>
        <Circle2 />
      </ReactDraggable>
      <ReactDraggable targetContext={dragDropContext}>
        <Circle3 />
      </ReactDraggable>
      <ReactDraggable targetContext={dragDropContext}>
        <Circle4 />
      </ReactDraggable>
      <ReactDraggable targetContext={dragDropContext}>
        <Circle5 />
      </ReactDraggable>
      <ReactDraggable targetContext={dragDropContext}>
        <Circle6 />
      </ReactDraggable>
      <ReactDraggable targetContext={dragDropContext}>
        <Circle7 />
      </ReactDraggable>

      {/* <ReactDraggable targetContext={dragDropContext}>
        <TextItem />
      </ReactDraggable> */}
    </div>
  );
};
