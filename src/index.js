import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/Pages/App/App";
import { EditorContextProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <EditorContextProvider>
      <App />
    </EditorContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
