import React, { useState } from "react";
import { Menu } from "./Menu";
import { Container } from "./Container";
import { createReactDragDropContext } from "react-drag-drop-tool";
import ReactConnectorContext from "react-connector-tool/dist/ReactConnectorContext";
import { AppContext } from "./AppContext";
import { workflowData } from "../data/workflowData";
import { triggersData } from "../data/triggerData";
import { tasksData } from "../data/taskData";

export const Home = () => {
  const [appState, setAppState] = useState({
    workflowData,
    triggersData,
    tasksData,
  });

  const createDragDropContext = createReactDragDropContext("easy-kt-workflow");

  const connectorContext = ReactConnectorContext("connect-shapes");

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <div className="ek-home">
        <Menu />
        <Container
          dragDropContext={createDragDropContext}
          connectorContext={connectorContext}
        />
      </div>
    </AppContext.Provider>
  );
};
