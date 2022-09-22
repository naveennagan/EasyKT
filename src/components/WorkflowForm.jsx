import React, { useState, useEffect } from "react";

export const WorkflowForm = (props) => {
  const { nodeId } = props;

  return (
    <div className="h3">
      <div className="mb-3">
        Workflow Name
        <input type="text" className="form-control" />
      </div>

      <div className="mb-3">Node Type: {}</div>
      <div className="mb-3">
        Current Node Name
        <input type="text" className="form-control" />
      </div>

      <div className="mb-3">
       Node Description
        <textarea type="text" className="form-control" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button type="submit" className="btn btn-primary">
        Cancel
      </button>
    </div>
  );
};
