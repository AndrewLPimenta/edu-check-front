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
  const [loading, setLoadingState] = useState(true); // Estado para controlar o carregamento da página

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoadingState(false); // Após o carregamento, altera o estado para exibir o conteúdo
    }, 1000); // Verifique se 1000ms é o tempo ideal
  }, []);

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
        <h2>Área do Aluno</h2>
        <span></span>
      </div>

      {loading ? (
        <div>Carregando...</div> // Mostrar uma mensagem ou um indicador de carregamento
      ) : (
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
      )}

      <div className="only-page-container">
        <div className="only-container">
          <div className="only-text">
            <p>Apenas Leia, e estará Presente!</p>
          </div>

          <div className="only-div">
            <div className="only-div-children">
              {/* Exibe o scanner após o carregamento da página */}
              {!loading && <QRCodeScanner setScanResult={setScanResult} />} 
              {scanResult && (
                <p className="scan-result">QR Code detectado: {scanResult}</p>
              )}
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
