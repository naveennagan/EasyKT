import React, { useState, useEffect, useContext } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { AppContext } from "./AppContext";

export const WorkflowForm = (props) => {
  const { onHide } = props;
  const { appState, setAppState } = useContext(AppContext);

  return (
    <div className="h3">
      <div className="mb-3">
        Workflow Name
        <input type="text" className="form-control" />
      </div>
      {appState?.selectedNode && (
        <>
          <div className="mb-3">Node Type: {}</div>
          <div className="mb-3">
            Current Node Name
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            Node Description
            <textarea type="text" className="form-control" />
          </div>
        </>
      )}

      <button className="close-workflow" onClick={onHide}>
        <IoClose>&#10006;</IoClose>
      </button>
      <button className="close-workflow" onClick={onHide}>
        <AiOutlineSave>&#10006;</AiOutlineSave>
      </button>
    </div>
  );
};
