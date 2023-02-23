import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="main-cont">
      <Routes>
        <Route element={<Navbar />}>
         <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
