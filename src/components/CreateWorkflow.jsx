import React from "react";
import { MdSaveAlt } from "react-icons/md";
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
          <MdSaveAlt>&#10006;</MdSaveAlt>
        </button>
      </div>
    </>
  );
};
