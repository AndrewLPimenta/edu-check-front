import React, { useState, useEffect } from "react";
import { useLoader } from "../context/LoaderContext";
import "../styles/dashboard.css";
import Header from "../components/Header";
import Select from "../components/Select";
import PopupWellcome from "../components/PopupWellcome";
import PopupOnly from "../components/PopupOnly";
import PopupMaster from "../components/PopupMaster";

const Dashboard = () => {
    const [popup, setPopup] = useState("select"); // Inicialmente exibe o Select
    const [showPopup, setShowPopup] = useState(false);
    const { setLoading, isNavigating } = useLoader();

    const handleSelection = (type) => {
        setPopup(type);
    };
    
    const handleClose = () => {
        setPopup("select"); // Garante que o fluxo recomeça ao fechar
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowPopup(true); // Exibe o popup apenas quando o loader some
        }, 2000);
    }, [setLoading]);

    return (
        <main style={{ overflow: "hidden", height: "100vh" }} className={`dashboard ${isNavigating ? "blurred" : ""}`}>
            <div className={`main ${isNavigating ? "blurred" : ""}`}>   
                <Header />
                {showPopup && popup === "select" && <Select onSelect={handleSelection} />} 
                {showPopup && popup === "popupwellcome" && <PopupWellcome onSelect={handleSelection} />} 
                {popup === "aluno" && <PopupOnly onClose={handleClose} />} 
                {popup === "professor" && <PopupMaster onClose={handleClose} />} 
            </div> 
        </main>
    );
};

export default Dashboard;
