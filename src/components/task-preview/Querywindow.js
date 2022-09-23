import "./TaskPreview.css";

  const QueryWindow = ({value, onValueChange, onSubmitQuery, setShowQuery}) => {
    return (
      <div className="preview-query-view">
        You can type your query here
        <textarea
          style={{width: '100%', color: '#464EB8'}}
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
        />
        <div className="preview-help-button-container">
          <button
            className="preview-query-button"
            onClick={() => {
                setShowQuery(false)
                onSubmitQuery()
                onValueChange('')
            }}
          >
            Submit
          </button>
          <button
            className="preview-query-button"
            onClick={
                () => {
                    setShowQuery(false)
                    onValueChange('')
                }
            }
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  export default QueryWindow