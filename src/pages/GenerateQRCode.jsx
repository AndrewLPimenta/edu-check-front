import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CustomCalendar from "../components/CustomCalendar";
import QRCodeComponent from "../components/QrCodeComponent";
import "../styles/userPages.css";

const GenerateQRCode = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        setSelectedDate(new Date());
    }, []);

    return (
        <div className="qrcode-generation-container">
            <Header />
            <h1>Área do Professor</h1>
            <div className="master-container">
                <div className="master-painel">
                    <div className="calendar-container">
                        <h2>Semana Atual</h2>
                        <CustomCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
                    </div>
                    {/* Aqui está o componente de QR Code */}
                    <QRCodeComponent selectedDate={selectedDate} />
                </div>
            </div>
        </div>
    );
};

export default GenerateQRCode;
