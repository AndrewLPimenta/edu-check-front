import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MasterPage from "./pages/MasterPage";
import OnlyPage from "./pages/OnlyPage";
import ListOnly from "./pages/ListOnly";
import SupportPage from "./pages/SupportPage";
import "./styles/global.css";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/MasterPage" element={<MasterPage />} />
        <Route path="/OnlyPage" element={<OnlyPage />} />
        <Route path="/ListOnly" element={<ListOnly />} />
        <Route path="/SupportPage" element={<SupportPage />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;