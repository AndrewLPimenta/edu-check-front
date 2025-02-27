import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "../styles/qr.css";

const QRCodeScanner = ({ scanning, setScanResult }) => {
    const [scanner, setScanner] = useState(null); // Estado para armazenar o scanner

    useEffect(() => {
        if (scanning) {
            // Inicializar o scanner somente quando scanning for true
            const newScanner = new Html5QrcodeScanner(
                "reader",
                { fps: 10, qrbox: 200 },
                false
            );

            // Iniciar o scanner
            newScanner.render(
                (decodedText) => {
                    setScanResult(decodedText); // Armazenar o resultado do QR Code
                },
                (error) => {
                    console.log(error); // Caso haja algum erro durante a leitura
                }
            );

            // Atualizar o estado para armazenar o scanner
            setScanner(newScanner);

            // Limpar o scanner quando o componente for desmontado ou quando 'scanning' mudar para false
            return () => {
                newScanner.clear();
            };
        }
    }, [scanning, setScanResult]); // Re-aciona quando 'scanning' for true

    return (
        <div className="qrcode-display-scaner">
            <div className="qrcode-placeholder-scaner">
                <div className="qrcode-black-bg-scaner">
                    {/* Aqui, o scanner vai ser renderizado, mas só quando 'scanning' for true */}
                    <div id="reader"></div>
                </div>
            </div>
        </div>
    );
};

export default QRCodeScanner;
