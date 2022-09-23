import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";

export const Menu = () => {
  const { appState, setAppState } = useContext(AppContext);

  const [searchInput, setSearchInput] = useState("");

  const updateWorkflow = () => {
    const results = appState.workflowData.reduce((acc, workflow) => {
      if (workflow.name.toLowerCase().includes(searchInput.toLowerCase())) {
        acc.push(workflow);
      }
      return acc;
    }, []);
    setAppState({ ...appState, workflowData: results });
  };

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };

  const onSearchClick = () => {
    updateWorkflow();
  };

  const onSearchClear = () => {
    setSearchInput("");
  };
  return (
    <div className="ek-menu justify-content-center p-3">
      <input
        className="input-lg search-rounded px-4"
        type="text"
        value={searchInput}
        onChange={onInputChange}
        onKeyUp={onEnterPress}
        placeholder="Search for anything..."
      />
      <i
        className="bi bi-search m-5 font-size-large"
        onClick={onSearchClick}
      ></i>
      <i className="bi bi-x-lg font-size-large" onClick={onSearchClear}></i>
    </div>
  );
};
