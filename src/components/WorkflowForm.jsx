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
      wfDesc: appState.workflowDesc,
      wfAuthor: appState.workflowAuthor,
    });
  }, [appState.selectedNode]);

  return (
    <div className="h3 font-big m-2">
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
          value={formData.wfDesc || ""}
          onChange={(e) => {
            setFormData({ ...formData, wfDesc: e.target.value });
          }}
        />
      </div>
      <div className="mb-3  text-left">
        Author
        <input
          type="text"
          className="form-control"
          value={formData.author || ""}
          onChange={(e) => {
            setFormData({ ...formData, author: e.target.value });
          }}
        />
      </div>
      {appState?.selectedNode && (
        <>
          <div className="mb-3 text-left">
            Step Type: {appState.selectedNode.split(" ")?.[0]}
          </div>
          <div className="mb-3 text-left">
            Current Step Name
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
            Step Description
            <textarea
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

      <div className="mt-5">
        <button className="btn btn-primary m-3" onClick={onHide} title="close workflow">
          <i className="bi bi-x-lg m-4 font-size-large"></i>
        </button>
        <button
          className="btn btn-primary"
          title="save workflow"
          onClick={() => {
            setAppState({
              ...appState,
              [appState.selectedNode]: formData,
              workflowName: formData.wfName,
              workflowAuthor: formData.wfAuthor,
              workflowDesc: formData.wfDesc,
              selectedNode: null,
            });
          }}
        >
          <i className="bi bi-check2 m-4 font-size-large"></i>
        </button>
        <button
          className="btn btn-primary m-3"
          title="create workflow"
          onClick={() => {
            setAppState({
              ...appState,
              workflowData: [
                ...appState.workflowData,
                {
                  name: formData.wfName,
                  description: formData.wfDesc,
                  id: appState.workflowData.length + 2,
                  author: formData.author,
                  steps: [{}],
                },
              ],
            });
            onHide();
          }}
        >
          <i className="bi bi-diagram-3 m-4 font-size-large"></i>
        </button>
      </div>
    </div>
  );
};
