import React, {useEffect, useState} from 'react'

const TaskPreview = ({task, setShow}) => {
    const {currentStep: currentStepCount, steps, totalSteps, triggeredBy} = task;
    const [selectedStepCount, setSelectedStepCount] = useState(currentStepCount)
    const [selectedStep, setSelectedStep] = useState(steps[selectedStepCount-1])
    const [showHelp, setShowHelp] = useState(false)

    useEffect(() => {
        setSelectedStep(steps[selectedStepCount - 1])
    }, [selectedStepCount])

    const onPreviousClick = () => {
        if(selectedStepCount > 1 ) {
            setSelectedStepCount(selectedStepCount - 1)
        }
        setShowHelp(false)
    }

    const onNextClick = () => {
        if(selectedStepCount < totalSteps){
            setSelectedStepCount(selectedStepCount + 1)
        }
        setShowHelp(false)
    }

    const onNeedHelpClick = () => {
        //show the list of author and the persons who completed this step
        setShowHelp(!showHelp)
    }

    const onAskQueryClick = () => {
        //allow user to write query
        setShowHelp(false)
    }

    const Preview = () => {
        return(
         <div className='preview-help-view'>
            You can reach out to following people who have completed this step: 
            <div>Author: {triggeredBy}</div>
            {selectedStep.completedBy.map(item => 
                <div>
                    {item}
                </div>)
            }
            <div className='preview-help-button-container'>
            <button className='preview-help-button' onClick={() => setShowHelp(false)}>OK</button>
            </div>
        </div>
        )
    }

    return(
        <>
        <div className='preview-container'>
            <i className="bi bi-x-lg preview-close-button" onClick={() => setShow(false)}></i>
            <div className='preview-title-container'>
               <div className='preview-title'>{selectedStep.title}</div>
            </div>
            <div className='preview-content'>
            <div>{selectedStep.description}</div>
            </div>
            <div className='preview-footer'>
            <i className="bi bi-arrow-left-square preview-footer-buttons" onClick={() => onPreviousClick()}></i>
            <i className="bi bi-arrow-right-square preview-footer-buttons" onClick={() => onNextClick()}></i>
            <i className="bi bi-question-square preview-footer-buttons" onClick={() => onAskQueryClick()}></i>
            <i className="bi bi-person-square preview-footer-buttons" onClick={() => onNeedHelpClick()}></i>
            </div>
            {showHelp && <Preview/>}
        </div>
        </>
    )
}

export default TaskPreview