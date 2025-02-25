import React, { useEffect, useState } from "react";
import "../styles/modal.css";
import Button from "./Button";
const PopupOnly = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    function handleFocus(event) {
      setTimeout(() => {
        event.target.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }

    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => input.addEventListener("focus", handleFocus));

    return () => {
      inputs.forEach((input) => input.removeEventListener("focus", handleFocus));
    };
  }, []);

  const handleLogin = () => {
    if (!username || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    setError("");
    console.log("Login enviado: ", { username, password });
    // Aqui chamaremos a API futuramente
  };
  

  return (
    <div className="popup show">
      <div className="popup-content animate">
        <button className="close-icon" onClick={onClose}>✖</button>
        <h2>Login Aluno</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="inputGroup">
          <input 
            className="input-group" 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
            autoComplete="off" 
            placeholder=" " 
          />
          <label htmlFor="username">Nome de Usuário</label>
        </div>

        <div className="inputGroup">
          <input 
            className="input-group" 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            autoComplete="off" 
            placeholder=" " 
          />
          <label htmlFor="password">Senha</label>
        </div>
    
        <div className="button-div">
          <Button className="only-loguin" onClick={handleLogin}>Entrar</Button>
        </div>
      </div>
    </div>
  );
};

export default PopupOnly;
