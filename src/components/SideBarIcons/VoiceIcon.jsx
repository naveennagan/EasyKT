import React from "react";
import { IconContext } from "react-icons";
import { BiUserVoice } from "react-icons/bi";

export const Voice = () => {
  const onDragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };

  return (
    // <div id="sidebar-circle" className='sidebar-circle' draggable="true" onDragStart={onDragStart}>
    //    Quiz Item
    //    <div className='connector-point connector-left' id="connector-left"></div>
    //    <div className='connector-point connector-right'
    //    connector="true" draggable = "true" id="connector-right"></div>
    // </div>
    <div className="col-md-6 iconCss">
      <BiUserVoice
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
      </BiUserVoice>
      <div className="iconLabel">Voice</div>
    </div>
  );
};