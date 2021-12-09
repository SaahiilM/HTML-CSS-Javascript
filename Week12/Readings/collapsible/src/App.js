import React from "react";
import Collapsible from "./collapsible";

function App() {
  return (
    <div>
      <Collapsible label="This is label">
        <h1>This is collapsible </h1>
        <p>lorem</p>
      </Collapsible>
      <Collapsible label="Click me" />
      <Collapsible label="😀" />
    </div>
  );
}

export default App;
