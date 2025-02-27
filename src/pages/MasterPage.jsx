import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CustomCalendar from "../components/CustomCalendar";
import QRCodeComponent from "../components/QrCodeComponent";
import Presents from "../components/Presents";
import Footer from "../components/Footer";
import "../styles/userPages.css";

const GenerateQRCode = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        setSelectedDate(new Date());
    }, []);
const [studentsList, setStudentsList] = useState([]);

    return (
        <main>
            <Header />
            <div className="line">
            <h1>Área do Professor</h1>
            <span></span>
            </div>
            <div className="master-container">
                <div className="master-painel">
                    <div className="calendar-container">
                        <h2>Semana Atual</h2>
                        <CustomCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
                    </div>
                    <div className="only-container">
                    <QRCodeComponent selectedDate={selectedDate} />
                    <Presents students={studentsList} />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default GenerateQRCode;
