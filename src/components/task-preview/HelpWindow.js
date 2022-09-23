import "./TaskPreview.css";

const HelpWindow = ({triggeredBy, selectedStep, setShowHelp}) => {

    return (
      <div className="preview-help-view">
        You can reach out to the following people who have completed this step:
        <div>
          {triggeredBy} (Author)
          <a 
          href="https://teams.microsoft.com/"
          className="bi bi-microsoft-teams preview-help-image"
          target="_blank"
          ></a>
        </div>
        {selectedStep.completedBy.map((item) => (
          <div>
            {item}
            <a
             href="https://teams.microsoft.com/"
            className="bi bi-microsoft-teams preview-help-image"
            target="_blank"
            ></a>
          </div>
        ))}
        <div className="preview-help-button-container">
          <button
            className="preview-help-button"
            onClick={() => setShowHelp(false)}
          >
            OK
          </button>
        </div>
      </div>
    );
  };

  export default HelpWindow