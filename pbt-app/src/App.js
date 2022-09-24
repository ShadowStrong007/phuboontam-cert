import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/font.css"
import "./assets/css/global-css.css";
import HomePage from "./views/pages/Template";
import Home from "./views/pages/Home";
import Product from "./views/pages/Product";

function App() {
  return (
    <div className="App font-th">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/product" element={<Product />} exact />
      </Routes>
    </div>
  );
}
export default App;
