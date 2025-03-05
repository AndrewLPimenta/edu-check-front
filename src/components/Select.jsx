import React, { useState } from "react";
import Button from "./Button";
import "../styles/modal.css";

const Select = ({ onSelect }) => {
    const [curso, setCurso] = useState("");
    const [periodo, setPeriodo] = useState("");

    const handleEnter = () => {
        if (curso && periodo) {
            onSelect("popupwellcome");
        }
    };

    return (
        <div className="popup show">
            <div className="popup-content animate">
                <h2>Bem-vindo.</h2>
                <p>Selecione seu Curso e Seu Período</p>
                <div className="select-div">
                    <select className="select-home" value={curso} onChange={(e) => setCurso(e.target.value)}>
                        <option className="option-home" value="null">Curso</option>
                        <option className="option-home" value="sistemas de informação">Sistemas de Informação</option>
                    </select>
                    <select className="select-home" value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
                        <option className="option-home" value="null">Período</option>
                        <option className="option-home" value="2º Período">2º Período</option>
                    </select>
                </div>
                <Button textButton="Entrar" onClick={handleEnter} />
            </div>
        </div>
    );
};

export default Select;
