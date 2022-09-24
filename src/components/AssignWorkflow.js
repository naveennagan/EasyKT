import React from 'react';

export const AssignWorkflow = (props)=>{
  const { workflowData, onAssign, onCancel } = props;
  

  return <div className='assign-workflow'>
      <p className='workflow-modal-title'> Assign Workflow</p>
      <i
          className="bi bi-x-lg preview-close-button"
          onClick={ onCancel }
        ></i>
      <div className='workflow-assign-details'>
            <div className='workflow-details'>
                <p className='worflow-title'>{ workflowData.name }</p>
                <p className='worflow-label'>Steps: {workflowData.steps.length}</p>
                <p className='worflow-label'>Author: {workflowData.author}</p>
            </div>
            <div className='workflow-assignees'>
                <p className='worflow-assign-label'>Assign To </p>
                <select className="select-user-picker">
                    <option>Steve</option>
                    <option>John</option>
                    <option>Dave</option>
                </select>
            </div>
        </div>
        <div className='workflow-actions'>
           <button className='assign-workflow-action' onClick={ onAssign }>Assign</button>
           <button className='assign-workflow-cancel' onClick={ onCancel }>Cancel</button>
        </div>
  </div>
}