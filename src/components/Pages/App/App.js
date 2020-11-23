import React from "react";
import { Layout } from "../../Templates/Layout/Layout";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout />
    </DndProvider>
  );
}

export default App;
