import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import CommentBox from "../components/CommentBox";
import Footer from "../components/Footer";
import Climax from "../components/Climax";
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
        <main>
            <Header />
            <div className="line">
                <h1>Área do Aluno</h1>
                <span></span>
            </div>
            <div className="only-on">
                <h2>Seja bem-vindo!</h2>
                <div className="empty-card">

                    <div className="empty-photo" style={{ backgroundImage: `url(${profilePhoto})` }} />
                    <div className="empty-info">
                        <p className="empty-title">{student.name}</p>
                        <p className="empty-text">Matricula: {student.registration}</p>
                    </div>
                </div>
            </div>

            <div className="only-page-container">
                <div className="only-container">


                    <div className="only-text">
                        <p>Agora baste ler o QR Code pra marcar sua presença hoje!</p>

                    </div>

                    {/* Sera trocado pela requisicao do aluno logado com um componente! */}

                    <div className="only-div">
                        <div className="only-div-children">


                            <div className="qrcode-scaner">

                                <p className="expiration-text">Abrir</p>
                            </div>
                            <div className="qrcode-display qrcode-placeholder">
                                <div className="qrcode-blurred">
                                </div>
                                <p className="expiration-text">Expira em...</p>
                            </div>
                            <div className="link-edit">
                                {/* Botao deve abrir a camera no celular */}
                                <Button textButton="Ler Código QR" />
                            </div>
                        </div>

                        <div className="only-div-children">
                            <Climax />
                        </div>
                    </div>

                </div>
                <div>
                    <div className="comment-div">

                        <div className="only-div-children">
                            <h4>Gostou da aula?</h4>
                            <p>Deixe uma avaliação para o professor</p>
                            <CommentBox />
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </main>

    );
};


export default OnlyPage;
