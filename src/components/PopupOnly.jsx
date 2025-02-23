import React, { useEffect } from "react";
import "../styles/modal.css";

const PopupOnly = ({ onClose }) => {
  useEffect(() => {
    function handleFocus(event) {
      setTimeout(() => {
        event.target.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200); // Delay reduzido para suavizar a transição
    }

    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => input.addEventListener("focus", handleFocus));

    return () => {
      inputs.forEach((input) => input.removeEventListener("focus", handleFocus));
    };
  }, []);

  return (
    <div className="popup show">
      <div className="popup-content animate">
        <button className="close-icon" onClick={onClose}>✖</button>
        <h2>Login Aluno</h2>

        <div className="inputGroup">
          <input 
            className="input-group" 
            type="number" 
            id="matricula" 
            required 
            autoComplete="off" 
            placeholder=" " 
          />
          <label htmlFor="matricula">Matrícula</label>
        </div>

        <div className="inputGroup">
          <input 
            className="input-group" 
            type="text" 
            id="nome"  // Corrigido ID duplicado
            required 
            autoComplete="off" 
            placeholder=" " 
          />
          <label htmlFor="nome">Nome</label>
        </div>
    <div className="button-div">

        <button className="only-loguin">Entrar</button>
    </div>
      </div>
    </div>
  );
};

export default PopupOnly;
