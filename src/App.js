import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { LoaderProvider, useLoader } from "./context/LoaderContext";
import Dashboard from "./pages/Dashboard";
import MasterPage from "./pages/MasterPage";
import OnlyPage from "./pages/OnlyPage";
import ListOnly from "./pages/ListOnly";
import SupportPage from "./pages/SupportPage";
import Profile from "./pages/Profile";
import "./styles/global.css";

function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </LoaderProvider>
  );
}

function AnimatedRoutes() {
  const { setIsNavigating } = useLoader();
  const navigate = useNavigate();

  // Função para lidar com a navegação ativando o Loader antes
  const handleNavigate = (path) => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 2000); // Tempo para mostrar o loader antes da troca de página
  };

  return (
    <Routes>
      <Route path="/" element={<Dashboard onNavigate={handleNavigate} />} />
      <Route path="/MasterPage" element={<MasterPage onNavigate={handleNavigate} />} />
      <Route path="/OnlyPage" element={<OnlyPage onNavigate={handleNavigate} />} />
      <Route path="/ListOnly" element={<ListOnly onNavigate={handleNavigate} />} />
      <Route path="/SupportPage" element={<SupportPage onNavigate={handleNavigate} />} />
      <Route path="/Profile" element={<Profile onNavigate={handleNavigate} />} />
    </Routes>
  );
}

export default App;
