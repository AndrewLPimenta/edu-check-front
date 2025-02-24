import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom"; // Importa para redirecionamento
import "../styles/modal.css";

const PopupMaster = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    function handleFocus(event) {
      setTimeout(() => {
        event.target.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }

    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => input.addEventListener("focus", handleFocus));

    return () => {
      inputs.forEach(input => input.removeEventListener("focus", handleFocus));
    };
  }, []);

  const handleLogin = () => {
    setLoading(true);
    setMessage("");

    // Simulando a validação no back-end (substituir por uma requisição real depois)
    setTimeout(() => {
      setLoading(false);
      
      if (password === "senhaCorreta123") { // Substitua por uma validação real do back-end
        navigate("/GenerateQRCode"); // Redireciona para a página QRCodeGenerator
      } else {
        setMessage("Senha incorreta! Tente novamente.");
      }
    }, 1500);
  };

  return (
    <div className="popup show">
      <div className="popup-content animate">
        <button className="close-icon" onClick={onClose}>✖</button>
        <h2>Login Professor</h2>

        <div className="inputGroup">
          <input
            className="input-group"
            type={showPassword ? "text" : "password"} 
            id="password"
            name="password"
            required
            autoComplete="new-password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {message && <p className="validation-message">{message}</p>}

        <div className="button-div">
          <button 
            className="master-loguin" 
            onClick={handleLogin} 
            disabled={loading}
          >
            {loading ? "Validando..." : "Entrar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupMaster;
