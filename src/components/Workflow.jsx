import React, { useState, useContext } from "react";
import { CreateWorkflow } from "./CreateWorkflow";
import { WorkflowItem } from "./WorkFlowItem";
import { ReactDropArea } from "react-drag-drop-tool";
import { WorkflowForm } from "./WorkflowForm";
import { AppContext } from "./AppContext";

export const Workflow = (props) => {
  const [showCreateWorkflow, setShowCreateWorkflow] = useState(false);
  const { dragDropContext, connectorContext } = props;

  const {
    appState: { workflowData: workflowList },
  } = useContext(AppContext);

  const hideCreateWorkflowView = () => {
    setShowCreateWorkflow(false);
  };

  console.log({ props });

  return showCreateWorkflow ? (
    <div className="row h-100">
      <div className="col-9">
        <ReactDropArea dropContext={dragDropContext}>
          <CreateWorkflow />
        </ReactDropArea>
      </div>
      <div className="col-3 card p-2">
        <WorkflowForm onHide={hideCreateWorkflowView} />
      </div>
    </div>
  ) : (
    <div className="workflow-container">
      <div
        className="create-workflow-button"
        onClick={() => {
          setShowCreateWorkflow(true);
        }}
      >
        <span className="create-workflow-icon">&#43;</span>
      </div>
      <>
        {workflowList?.map((workflowData) => {
          return <WorkflowItem workflowData={workflowData}></WorkflowItem>;
        })}
      </>
    </div>
  );
};
