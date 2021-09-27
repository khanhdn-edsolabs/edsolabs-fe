import DataContextProvider from "./Context/dataContext";
import React from "react";
import Page from "./Components/Page";

function App() {
  return (
    <DataContextProvider>
      <Page/>
    </DataContextProvider>
  );
}

export default App;
