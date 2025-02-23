import React, { useState } from "react";
import "../styles/dashboard.css";
import Header from "../components/Header";
import PopupWellcome from "../components/PopupWellcome";
import PopupOnly from "../components/PopupOnly";
import PopupMaster from "../components/PopupMaster";

const Dashboard = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [popup, setPopup] = useState(null);

    const handleSelection = (type) => {
        setShowWelcome(false); // Esconde o Welcome
        setPopup(type); // Mostra o popup escolhido
    };
    const handleClose = () => {
        setPopup(null); // Fecha qualquer popup
    };

    return (
        <main className="dashboard">
            <Header />
            {/* Garante que o Welcome volta caso nenhum popup esteja aberto */}
            {popup === null && <PopupWellcome onSelect={handleSelection} />}
            {popup === "aluno" && <PopupOnly onClose={handleClose} />}
            {popup === "professor" && <PopupMaster onClose={handleClose} />}
        </main>
    );
};

export default Dashboard;
