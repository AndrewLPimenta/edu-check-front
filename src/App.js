import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GenerateQRCode from "./pages/GenerateQRCode";
import "./styles/global.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/GenerateQRCode" element={<GenerateQRCode />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
