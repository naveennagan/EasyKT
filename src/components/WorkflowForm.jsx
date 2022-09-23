import React, { useState, useEffect, useContext } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { AppContext } from "./AppContext";

export const WorkflowForm = (props) => {
  const { onHide } = props;
  const { appState, setAppState } = useContext(AppContext);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({
      ...appState[appState.selectedNode],
      wfName: appState.workflowName,
    });
  }, [appState.selectedNode]);

  return (
    <div className="h3">
      <div className="mb-3 text-left">
        Workflow Name
        <input
          type="text"
          className="form-control"
          value={formData.wfName || ""}
          onChange={(e) => {
            setFormData({ ...formData, wfName: e.target.value });
          }}
        />
      </div>
      <div className="mb-3 text-left">
        Workflow Description
        <input
          type="text"
          className="form-control"
          value={formData.wfName || ""}
          onChange={(e) => {
            setFormData({ ...formData, wfName: e.target.value });
          }}
        />
      </div>
      {appState?.selectedNode && (
        <>
          <div className="mb-3 text-left">
            Node Type: {appState.selectedNode.split(" ")?.[0]}
          </div>
          <div className="mb-3 text-left">
            Current Node Name
            <input
              type="text"
              className="form-control"
              value={formData.nodeName || ""}
              onChange={(e) => {
                setFormData({ ...formData, nodeName: e.target.value });
              }}
            />
          </div>

          <div className="mb-3 text-left">
            Node Description
            <textarea
              type="text"
              className="form-control"
              value={formData.nodeDesc || ""}
              onChange={(e) => {
                setFormData({ ...formData, nodeDesc: e.target.value });
              }}
            />
          </div>
          <div className="mb-3  text-left">
            Author
            <input
              type="text"
              className="form-control"
              value={formData.nodeDesc || ""}
              onChange={(e) => {
                setFormData({ ...formData, nodeDesc: e.target.value });
              }}
            />
          </div>
        </>
      )}

      <button className="close-workflow" onClick={onHide}>
        <IoClose>&#10006;</IoClose>
      </button>
      <button
        className="close-workflow"
        onClick={() => {
          setAppState({
            ...appState,
            [appState.selectedNode]: formData,
            workflowName: formData.wfName,
            selectedNode: null,
          });
        }}
      >
        <AiOutlineSave>&#10006;</AiOutlineSave>
      </button>
    </div>
  );
};
