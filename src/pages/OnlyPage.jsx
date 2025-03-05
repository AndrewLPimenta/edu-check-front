import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CommentBox from "../components/CommentBox";
import Footer from "../components/Footer";
import Climax from "../components/Climax";
import { useLoader } from "../context/LoaderContext"; 
import QRCodeScanner from "../components/QRCodeScanner";
import "../styles/userPages.css";

const OnlyPage = ({ 
  student = { id: 1, name: "Aluno", registration: "000000", photo: "https://via.placeholder.com/100" }
}) => {
  const [profilePhoto, setProfilePhoto] = useState(student.photo);
  const { setLoading } = useLoader();
  const [scanResult, setScanResult] = useState(null); 

  useEffect(() => {
    setLoading(true); 
    setTimeout(() => setLoading(false), 1000); 
  }, [setLoading]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePhoto(reader.result);
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
          <div 
            className="empty-photo" 
            style={{ backgroundImage: `url(${profilePhoto})` }}
          />
          <div className="empty-info">
            <p className="empty-title">{student.name}</p>
            <p className="empty-text">Matrícula: {student.registration}</p>
          </div>
        </div>
      </div>

      <div className="only-page-container">
        <div className="only-container">
          <div className="only-text">
            <p>Apenas Leia, e estará Presente!</p>
          </div>

          <div className="only-div">
            <div className="only-div-children">
              <div className="qrcode-scanner">
                {/* Aqui, sempre mostra a área do QR Code */}
               
              </div>

              {/* Exibe o scanner diretamente sem necessidade de alternância */}
              <QRCodeScanner scanning={true} setScanResult={setScanResult} />
            </div>

            <div className="only-div-children">
              <Climax />
            </div>
          </div>
        </div>

        <div className="comment-div">
          <div className="only-div-children">
            <h4>Gostou da aula?</h4>
            <p>Deixe uma avaliação para o professor</p>
            <CommentBox />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default OnlyPage;
