import React, { useState } from "react";
import Characters from "./Characters";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import "./index.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <h1 id="top">Rick And Morty App</h1>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Characters />;
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
