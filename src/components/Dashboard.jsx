import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { DashBoardTabs } from "./DashboardTabs";
import { SearchBot } from "./search-bot/SearchBot";
import { SmartConverter } from "./smart-converter/SmartConverter";
import { Task } from "./Task";
import { Trigger } from "./Trigger";
import { Workflow } from "./Workflow";

export const Dashboard = (props) => {
  const [tab, setTab] = useState("Workflow");

  const { appState, setAppState } = useContext(AppContext);
  const { dragDropContext, connectorContext } = props;

  const getTabContentView = () => {
    switch (tab) {
      case "Workflow": {
        return (
          <Workflow
            dragDropContext={dragDropContext}
            connectorContext={connectorContext}
          />
        );
      }
      case "Trigger": {
        return <Trigger />;
      }
      case "Task": {
        return <Task />;
      }
      case "SearchBot": {
        return <SearchBot />;
      }
      case "SmartConverter": {
        return <SmartConverter />;
      }
      default: {
        return <Workflow dragDropContext={dragDropContext} />;
      }
    }
  };

  const selectTab = (tab) => {
    setTab(tab);
    setAppState({ ...appState, currentTab: tab });
  };

  return (
    <>
      <div className="ek-dashboard">
        <DashBoardTabs onTabSelect={selectTab} tab={tab} />
        <div className="tab-container">{getTabContentView()}</div>
      </div>
    </>
  );
};
