import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import Button from "./Button";
import "../styles/qr.css";

const QRCodeComponent = ({ selectedDate }) => {
    const [qrCodeData, setQrCodeData] = useState(null);
    const [expirationTime, setExpirationTime] = useState(null);
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (expirationTime) {
            const interval = setInterval(() => {
                const now = new Date();
                const diff = Math.max(0, Math.floor((expirationTime - now) / 1000));
                setTimeLeft(diff);
                if (diff === 0) {
                    setQrCodeData(null);
                    setExpirationTime(null);
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [expirationTime]);

    const generateQRCode = () => {
        const currentTime = new Date();
        const expiration = new Date(currentTime.getTime() + 10 * 60000);
        const formattedDate = selectedDate.toISOString().split("T")[0];
        const uniqueCode = `https://seusite.com/qrcode/${formattedDate}`;
        setQrCodeData(uniqueCode);
        setExpirationTime(expiration);
        setTimeLeft(10 * 60);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div >
            <div className="div-button">
            <Button
            onClick={generateQRCode}
            textButton="Gerar QR Code"
            />
</div>
            {qrCodeData ? (
                <div className="qrcode-display">
                    <QRCode value={qrCodeData} size={200} />
                    <p className="expiration-text">Expira em {formatTime(timeLeft)}</p>
                </div>
            ) : (
                <div className="qrcode-display qrcode-placeholder">
                    <div className="qrcode-blurred">
                        <QRCode value="placeholder" size={200} />
                    </div>
                    <p className="expiration-text">Aguardando QR Code...</p>
                </div>
            )}
        </div>
    );
};

export default QRCodeComponent;
