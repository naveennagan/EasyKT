import React, {useState} from "react";
import "./TaskPreview.css";
import { Type } from "../../data/taskData";
import '../../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';
import Parser from 'html-react-parser';

const ContentWindow = ({ selectedStep, setShowCongratulations }) => {
  const { description: {type, data} } = selectedStep;
  const [result, setResult] = useState('')
 

  if (type === Type.Text) {
    const { text } = data;
    return (
      <div className="preview-content">
        <td>{Parser(text)}</td>
      </div>
    );
  }

  if (type === Type.Quiz) {
    const { question, options, answer } = data;
    const selectAnswer = (text) => {
        if(text === answer){
            setResult('Correct')
            setShowCongratulations(true)
        }else{
            setResult('Wrong')
        }
    }

    return (
      <div className="preview-content">
        Answer the following question to move forward
        <div className="preview-quiz-question">
          <td>{Parser(question)}</td>
        </div>
        {options.map((text, index) => (
            <div>
          <button
              key={index}
              className="preview-quiz-button "
              onClick={()=>{
                selectAnswer(text)
              }}>
              {index+1}. {text}
         </button>
         </div>
        ))}
        <div className="preview-quiz-result">Result: <span style={{color: result==='Correct'? '#007500': '#ff0000'}}>{result}</span></div>
      </div>
    );
  }

  if (type === Type.Image) {
    const { text, link } = data;
    return (
      <div className="preview-content">
        <td>{Parser(text)}</td>
        <div className="preview-image" >
          <img src={link} />
        </div>
      </div>
    );
  }

  if (type === Type.Video) {
    const { text, link } = data;
    return (
      <div className="preview-content">
        <td>{Parser(text)}</td>
        <div className="preview-image" >
        <div className="video-container">
        <Player
          playsInline
          src={link}
        />
        </div> 
        </div>
      </div>
    );
  }
};

export default ContentWindow;
