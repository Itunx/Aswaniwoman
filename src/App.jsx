import React from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Component from "./components/component";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Component />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
