import React, { useState, useEffect } from "react";
import { useLoader } from "../context/LoaderContext";
import "../styles/dashboard.css";
import Header from "../components/Header";
import PopupWellcome from "../components/PopupWellcome";
import PopupOnly from "../components/PopupOnly";
import PopupMaster from "../components/PopupMaster";

const Dashboard = () => {
    const [popup, setPopup] = useState(null);
    const [showPopup, setShowPopup] = useState(false); 
    const { setLoading, isNavigating } = useLoader();

    const handleSelection = (type) => {
        setPopup(type); 
    };
    
    const handleClose = () => {
        setPopup(null);
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowPopup(true); //  Exibe o popup apenas quando o loader some
        }, 2000);
    }, [setLoading]);

    return (
        <main className={`dashboard ${isNavigating ? "blurred" : ""}`}>
            <div className={`main ${isNavigating ? "blurred" : ""}`}>   
                <Header />
                {showPopup && popup === null && <PopupWellcome onSelect={handleSelection} />} 
                {popup === "aluno" && <PopupOnly onClose={handleClose} />}
                {popup === "professor" && <PopupMaster onClose={handleClose} />}
            </div> 
        </main>
    );
};

export default Dashboard;
