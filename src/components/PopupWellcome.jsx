import React from "react";
import "../styles/modal.css";

const PopupWellcome = ({ onSelect }) => {
  return (
    <div className="popup show">
      <div className="popup-content animate">
        <h2>Bem-vindo ao Sistema</h2>
        <p>Selecione uma opção para continuar:</p>
        <div className="button-div">

        <button className="select-to" onClick={() => onSelect("aluno")}>Aluno</button>
        <button className="select-to" onClick={() => onSelect("professor")}>Professor</button>
        </div>
      </div>
    </div>
  );
};

export default PopupWellcome;
