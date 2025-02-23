import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import "../styles/modal.css";

const PopupMaster = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    function handleFocus(event) {
      setTimeout(() => {
        event.target.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300); // Ajuste para um delay menor
    }

    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => input.addEventListener("focus", handleFocus));

    return () => {
      inputs.forEach(input => input.removeEventListener("focus", handleFocus));
    };
  }, []);

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
      <div className="button-div">

        <button className="master-loguin">Entrar</button>
      </div>
      </div>
    </div>
  );
};

export default PopupMaster;
