import React, { useEffect, useState } from "react";
import "./TaskPreview.css";
import QueryWindow from "./Querywindow";
import HelpWindow from "./HelpWindow";
import {Status} from '../../data/taskData';
import ContentWindow from "./ContentWindow";

const getTaskStatus = (taskStatus, selectedStepCount, currentStepCount) => {
  if(taskStatus === 'Done'){
    return Status.Completed
  }
  if(selectedStepCount < currentStepCount){
   return Status.Completed
  }else if(selectedStepCount == currentStepCount){
    return Status.InProgress
  }else{
    return Status.Pending
  }
}

const TaskPreview = ({ task, setShow }) => {
  const {
    currentStep: currentStepCount,
    steps,
    totalSteps,
    triggeredBy,
    status: taskStatus
  } = task;
  const [selectedStepCount, setSelectedStepCount] = useState(currentStepCount);
  const [selectedStep, setSelectedStep] = useState(
    steps[selectedStepCount - 1]
  );
  const [showHelp, setShowHelp] = useState(false);
  const [showQuery, setShowQuery] = useState(false);
  const [queryValue, setQueryValue] = useState('')
  const [selectedStepStatus, setSelectedStepStatus] = useState(Status.Pending)
  const [showCongratulations, setShowCongratulations] = useState(false)

  useEffect(() => {
    setSelectedStep(steps[selectedStepCount - 1]);
    setSelectedStepStatus(getTaskStatus(taskStatus, selectedStepCount, currentStepCount))
  }, [selectedStepCount]);

  const onPreviousClick = () => {
    if (selectedStepCount > 1) {
      setSelectedStepCount(selectedStepCount - 1);
    }
    setShowHelp(false);
  };

  const onNextClick = () => {
    if (selectedStepCount < totalSteps) {
      setSelectedStepCount(selectedStepCount + 1);
    }
    setShowHelp(false);
  };

  const onNeedHelpClick = () => {
    //show the list of author and the persons who completed this step
    setShowHelp(!showHelp);
    setShowQuery(false);
  };

  const onAskQueryClick = () => {
    //allow user to write query
    setShowQuery(!showQuery);
    setShowHelp(false);
  };

  const onSubmitQuery = () => {
    //make api request to post query
  }

  return (
    <>
      <div className="preview-container">
        <i
          className="bi bi-x-lg preview-close-button"
          onClick={() => setShow(false)}
        ></i>
        <button className="preview-status-button">{selectedStepStatus}</button>
        <div className="preview-title-container">
          <div className="preview-title">{selectedStep.title}</div>
        </div>
        <ContentWindow selectedStep={selectedStep} setShowCongratulations={setShowCongratulations}/>
        <div className="preview-footer">
          <i
            className="bi bi-arrow-left-square preview-footer-buttons"
            onClick={() => onPreviousClick()}
          ></i>
          <i
            className="bi bi-arrow-right-square preview-footer-buttons"
            onClick={() => onNextClick()}
          ></i>
          <i
            className="bi bi-question-square preview-footer-buttons"
            onClick={() => onAskQueryClick()}
          ></i>
          <i
            className="bi bi-person-square preview-footer-buttons"
            onClick={() => onNeedHelpClick()}
          ></i>
        </div>
        {showHelp && <HelpWindow triggeredBy={triggeredBy} selectedStep={selectedStep} setShowHelp={setShowHelp}/>}
        {showQuery && <QueryWindow value={queryValue} onValueChange={setQueryValue} onSubmitQuery={()=> onSubmitQuery()} setShowQuery={setShowQuery}/>}
        {showCongratulations && 
           <div className="preview-congratulation">
            Congratulations, you have completed the course !!
           <i className="bi bi-trophy-fill preview-success-image"></i>
           <button
            className="preview-help-button"
            onClick={() => setShow(false)}
           >
            Thank You
          </button>
        </div>}
      </div>
    </>
  );
};

export default TaskPreview;
