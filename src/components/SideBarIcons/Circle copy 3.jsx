import React from "react";
import { IconContext } from "react-icons";
import { MdQuiz } from "react-icons/md";

export const Circle3 = () => {
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
      <MdQuiz
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
      </MdQuiz>
      <div className="iconLabel">Quiz</div>
    </div>
  );
};
