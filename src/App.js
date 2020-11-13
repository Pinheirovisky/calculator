import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";

// Components
import { Display, Keyboard } from "./components";

// Theme
import { theme } from "./themes";

const App = () => {
  const [value, changeValue] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Display value={value} />
        <Keyboard changeValue={changeValue} value={value} />
      </div>
    </ThemeProvider>
  );
};

export default App;
