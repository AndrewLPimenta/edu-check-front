import React from "react";
import Button from "./Button";
import "../styles/modal.css";

const PopupWellcome = ({ onSelect }) => {
  return (
    <div className="popup show">
      <div className="popup-content animate">
        <h2>Bem-vindo ao Sistema</h2>
        <p>Selecione uma opção para continuar:</p>
        <div className="button-div">
        <Button textButton="Aluno" onClick={() => onSelect("aluno")} />
        <Button textButton="Professor" onClick={() => onSelect("professor")} />
        {/* <button className="select-to" onClick={() => onSelect("aluno")}>Aluno</button>
        <button className="select-to" onClick={() => onSelect("professor")}>Professor</button> */}
        </div>
      </div>
    </div>
  );
};

export default PopupWellcome;
