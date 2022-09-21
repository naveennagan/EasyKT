import React from "react";

export const CreateWorkflow = (props)=>{
    const { onHide } = props;

    return (
        <div className="create-workflow-container" id="create-workflow">
            <button className="close-workflow" onClick = {()=>{
                onHide();
            }}>&#10006;</button>
        </div>
    )
}