import React, { useState, useEffect, useRef } from "react";
import { QrReader } from "react-qr-reader"; // Importação da biblioteca para o leitor de QR Code
import Button from "./Button"; // Componente do botão
import "../styles/qr.css";

const QRCodeScanner = ({ scanning, setScanResult }) => {
  const videoRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false); // Estado para controlar se o usuário deu permissão
  const [scannerStarted, setScannerStarted] = useState(false); // Controla se o scanner foi iniciado
  const [presenceMarked, setPresenceMarked] = useState(false); // Estado para controlar se a presença foi marcada

  // Função para lidar com o resultado do QR Code
  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text); // Retorna o texto do QR Code
    }
  };

  // Função para lidar com erros no scanner
  const handleError = (err) => {
    console.error("Erro ao escanear QR Code:", err);
  };

  // Função para ativar o scanner após permissão
  const handleScannerButtonClick = () => {
    // Solicita permissão para usar a câmera antes de abrir o scanner
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        setHasPermission(true); // Permissão concedida
        setScannerStarted(true); // Começa o scanner após a permissão
      })
      .catch((error) => {
        console.error("Erro ao acessar a câmera:", error);
        alert("Por favor, permita o acesso à câmera.");
      });
  };

  // Função para perguntar sobre a presença e fechar o scanner
  const handleCloseScanner = () => {
    const userConfirmed = window.confirm("Você já marcou presença?");

    if (userConfirmed) {
      setPresenceMarked(true); // Marca a presença
      setScannerStarted(false); // Fecha o scanner
    }
  };

  // Iniciar o processo de pedir permissão assim que o componente for montado
  useEffect(() => {
    if (!hasPermission) {
      handleScannerButtonClick();
    }
  }, [hasPermission]);

  useEffect(() => {
    if (scannerStarted) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.error('Não foi possível acessar a câmera: ', err);
        });
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [scannerStarted]);

  return (
    <div className="qr-scaner">
      {/* Exibe o vídeo da câmera diretamente */}
      {scannerStarted && !presenceMarked && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="qr-video"
        />
      )}

      <div className="div-buton">
        {/* Exibe o botão para permitir o acesso à câmera, se necessário */}
        {!scannerStarted && !hasPermission && (
          <Button
            onClick={handleScannerButtonClick} // Ativa o scanner ao clicar no botão
            textButton="Permitir Acesso à Câmera" // Texto do botão
          />
        )}

        {/* Caso a permissão tenha sido concedida e o scanner esteja visível, exibe outro botão */}
        {hasPermission && scannerStarted && !presenceMarked && (
          <Button
            onClick={handleCloseScanner} // Pergunta sobre presença antes de fechar
            textButton="Fechar Scanner" // Texto do botão
          />
        )}

        {/* Exibe o texto se a presença for marcada */}
        {presenceMarked && <p>Presença marcada!</p>}
      </div>
    </div>
  );
};

export default QRCodeScanner;
