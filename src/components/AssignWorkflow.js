import React from 'react';

export const AssignWorkflow = (props)=>{
  const { workflowData, onAssign, onCancel } = props;
  

  return <div className='assign-workflow'>
      <div className='workflow-assign-details'>
            <div className='workflow-details'>
                Onboarding Flow
            </div>
            <div className='workflow-assignees'>
                <p>Assign To </p>
                <select className="selectpicker">
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