import React, { useState } from "react";
import { AssignWorkflow } from "./AssignWorkflow";
import CustomModal from "./Modal";

export const WorkflowItem = (props) => {
  const { workflowData } = props;

  const [showAssignWorkflow, setShowAssignWorkflow] = useState(false);

  const onAssign = () => {
    setShowAssignWorkflow(false);
  };

  const onCancel = () => {
    setShowAssignWorkflow(false);
  };

  const getAssignWorkflowView = () => {
    return (
      <CustomModal
        style={{
          content: {
            height: "300px",
            width: "300px",
            inset: "100px",
            padding: "0px",
            margin: "auto",
          },
        }}
      >
        <AssignWorkflow workflowData= {workflowData} onAssign={onAssign} onCancel={onCancel} />
      </CustomModal>
    );
  };

  return (
    <>
      <div
        className="workflow-item"
        onClick={() => {
          setShowAssignWorkflow(true);
        }}
      >
        <p className="workflow-item-title">{workflowData.name}</p>
        <div className="workflow-item-details">
          <img
            className="workflow-item-image"
            src="https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/17/main/GeiehNbQ1t86Mg5zKnEgucWslfZXTckjj8mSDV2O.png"
          ></img>
        </div>
        <div className="workflow-step-details">
          <p className="workflow-step">
            Total Steps - {workflowData.steps?.length + 1}
          </p>
          <p className="workflow-author">Author - {workflowData.author}</p>
        </div>
      </div>
      {showAssignWorkflow && getAssignWorkflowView()}
    </>
  );
};
