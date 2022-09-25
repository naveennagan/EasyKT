import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";

export const Menu = () => {
  const { appState, setAppState, resetData } = useContext(AppContext);

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

  const updateTasks = () => {
    const results = appState.tasksData.reduce((acc, task) => {
      if (task.name.toLowerCase().includes(searchInput.toLowerCase())) {
        acc.push(task);
      }
      return acc;
    }, []);
    setAppState({ ...appState, tasksData: results });
  };

  const updateTrigger = () => {
    const results = appState.triggersData.reduce((acc, trigger) => {
      if (trigger.name.toLowerCase().includes(searchInput.toLowerCase())) {
        acc.push(trigger);
      }
      return acc;
    }, []);
    setAppState({ ...appState, triggersData: results });
  };

  const onSearchClick = () => {
    switch (appState.currentTab) {
      case "Workflow": {
        updateWorkflow();
        break;
      }
      case "Trigger": {
        updateTrigger();
        break;
      }
      case "Task": {
        updateTasks();
        break;
      }
    }
  };

  const onSearchClear = () => {
    setSearchInput("");
    resetData();
  };

  return (
    <div className="ek-menu p-3">
      <img
        width="30px"
        height="30px"
        right="10px"
        border-radius="50% !important"
        src="https://bglaw.com/wp-content/uploads/2020/05/avatar-placeholder-550x550.png"
        alt="logo"
        style={{ float: "left", borderRadius: "50px", margin: "10px" }}
      />
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
      <i
        className="bi bi-list font-size-large"
        style={{ float: "right", margin: "15px", color: "white" }}
        onClick={onSearchClear}
      ></i>
    </div>
  );
};
