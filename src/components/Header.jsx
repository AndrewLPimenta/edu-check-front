import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "./Checkbox";
import ThemeToggle from "./ThemeToggle";
import logoLight from "../assets/logo-light-educheck.png";  // Logo modo claro
import logoDark from "../assets/logo-dark-educheck.png";    // Logo modo escuro
import Button from "./Button";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navigate = useNavigate();

  // Atualiza a classe do body quando o tema muda
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Atualiza o estado quando o usuário alterna o tema no ThemeToggle
  useEffect(() => {
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    // Ouvinte para mudanças no localStorage (caso o ThemeToggle altere o tema)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Define a logo correta com base no tema
  const logo = theme === "dark" ? logoDark : logoLight;

  // Alternar menu de navegação
  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  // Ajustar padding do conteúdo abaixo do header dinamicamente
  useEffect(() => {
    const updatePadding = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);

    return () => {
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

  // Verifica se o usuário está logado com base no token
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  // Função para sair (limpa o token)
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header");
      if (header) {
        header.classList.toggle("rolagem", window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="flex">
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>

            {/* Menu de navegação */}
            <div className={`nav ${menuActive ? "active" : ""}`}>
              <ul className="nav-list">
                <li>
                  <Link className="links-nav" to="/Profile">Perfil</Link>
                </li>
                <li>
                  <Link className="links-nav" to="/MasterPage">Area do Professor</Link> {/* Corrigido */}
                </li>
                <li>
                  <Link className="links-nav" to="/">Home</Link>
                </li>
                <li>
                  <Link className="links-nav" to="/OnlyPage">Area do Aluno</Link>
                </li>
                <li>
                  <Link className="links-nav" to="/ListOnly">Presentes</Link>
                </li>
                <li>
                  <Link className="links-nav" to="/SupportPage">Suporte</Link>
                </li>
                {/* Componente ThemeToggle */}
                <ThemeToggle setTheme={setTheme} />

                {/* Botões de login e logout */}
                {!isAuthenticated ? (
                  <li className="btn-contato">
                    <Link to="/contato">

                    </Link>
                  </li>
                ) : (
                  <li className="btn-contato">
                    <button onClick={handleLogout} className="btn-1">
                      Sair
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Componente Checkbox para o menu hambúrguer */}
            <Checkbox menuActive={menuActive} onClick={toggleMenu} />
          </div>
        </div>
      </header>

      {/* Espaço dinâmico abaixo do header */}
      <div style={{ paddingTop: `${headerHeight}px` }} />
    </>
  );
};

export default Header;
