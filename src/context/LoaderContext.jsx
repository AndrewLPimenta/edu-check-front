import { createContext, useState, useContext } from "react";
import Loader from "../components/Loader";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false); 

  return (
    <LoaderContext.Provider value={{ loading, setLoading, isNavigating, setIsNavigating }}>
      {loading && <Loader />} {/* ✅ Mostra o Loader quando carregando */}
      {children}
    </LoaderContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useLoader = () => useContext(LoaderContext);
