import React from "react";
import { AiOutlineSave } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export const CreateWorkflow = (props) => {
  const { onHide } = props;

  return (
    <>
      <div className="create-workflow-container" id="create-workflow">
        <button
          className="close-workflow"
          onClick={() => {
            onHide();
          }}
        >
          <IoClose>&#10006;</IoClose>
        </button>
        <button
          className="close-workflow"
          onClick={() => {
            onHide();
          }}
        >
          <AiOutlineSave>&#10006;</AiOutlineSave>
        </button>
      </div>
    </>
  );
};
