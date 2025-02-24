import React, { useState, useEffect } from "react";
import Presents from "../components/Presents";
import Header from "../components/Header";
import "../styles/userPages.css";

const OnlyPage = ({ student = { id: 1, name: "Aluno", registration: "000000", photo: "https://via.placeholder.com/100" } }) => {
    const [profilePhoto, setProfilePhoto] = useState(student.photo);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="only-page-container">
            <Header />
            <div className="line">
                <h1>Área do Aluno</h1>
                <span></span>
            </div>
            <div className="only-container">
                <div className="empty-card">

                <Presents />
                </div>
            </div>
        </div>

    );
};


export default OnlyPage;
