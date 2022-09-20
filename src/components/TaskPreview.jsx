import React, {useState} from 'react'

const TaskPreview = ({task}) => {
    const {currentStep: currentStepCount, steps, totalSteps} = task;
    const [selectedStepCount, setSelectedStepCount] = useState(currentStepCount)

    const onPreviousClick = () => {
        if(selectedStepCount > 1 ) {
            setSelectedStepCount(selectedStepCount - 1)
        }
    }

    const onNextClick = () => {
        if(selectedStepCount < totalSteps){
            setSelectedStepCount(selectedStepCount + 1)
        }
    }

    const onNeedHelpClick = () => {
        //show the list of author and the persons who completed this step
        const peopleArray = steps[selectedStepCount-1].completedBy
    }

    const onAskQueryClick = () => {
        //allow user to write querys
    }

    return(
        <div>
            <div>{steps[selectedStepCount-1].title}</div>
            <div>{steps[selectedStepCount-1].description}</div>
            <div>
            <button className='taskPreviewButton' onClick={() => onNeedHelpClick()}>Need Help</button>
            <button className='taskPreviewButton' onClick={() => onAskQueryClick()}>Ask Query</button>
            </div>   
            <div>
            <button className='taskPreviewButton' onClick={() => onPreviousClick()}>Previous</button>
            <button className='taskPreviewButton' onClick={() => onNextClick()}>Next</button>
            </div>       
        </div>
    )
}

export default TaskPreview