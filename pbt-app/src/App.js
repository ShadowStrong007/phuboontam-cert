import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/font.css"
import "./assets/css/global-css.css";
import HomePage from "./views/pages/Template";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
      </Routes>
    </div>
  );
}
export default App;
