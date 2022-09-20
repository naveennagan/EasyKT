import React from "react";
import { IconContext } from "react-icons";
import { FcHeadset } from "react-icons/fc";
import { IoTextOutline } from "react-icons/io5";

export const Rectangle = () => {
  const onDragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };

  return (
    <div className="col-md-6 iconCss m-4">
      <IoTextOutline
        value={{ color: "green", size: "100em" }}
        id="sidebar-rectangle"
        draggable="true"
        onDragStart={onDragStart}
        onClick={(event) => {
          console.log("Rectangle Clicked ");
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
      </IoTextOutline>
      <div className="iconLabel">Text</div>
    </div>
  );
};
