import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalContextProvider from "./components/GlobalContext";

ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
  document.querySelector("#root")
);
