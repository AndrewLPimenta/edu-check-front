import React from 'react';
import Social from './Social';
import { Link } from "react-router-dom";
import '../styles/componentsUnity.css';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-itemns'>
                <Social />
            </div>
            <div className='footer-itemns'>
                <p>Telefone: (11) 98765-4321</p>
                <p>Email: contato@exemplo.com</p>
                <p>
                    <Link to="/" >Whatsapp</Link> |
                    <Link to="/" >Email</Link>
                </p>
            </div>
            <div className='footer-itemns'>
                <h3>Política de Privacidade</h3>
                <p>Nós valorizamos a sua privacidade e estamos comprometidos em proteger suas informações pessoais. </p>
                <ul>
                    <li><Link to="/">Leia nossa Política de Privacidade completa</Link></li>
                </ul>
            </div>
            <div className='footer-itemns'>
                <h5>Conheça os criadores do Software!</h5>
                <h7>Acesse o perfil do <Link to="https://github.com/AndrewLPimenta">GitHub</Link>!</h7>
            </div>
            <div className='footer-inc'>
                <p>Todos os direitos reservados.</p>
                <p>Edu Check</p>
                <p>© 2023</p>
            </div>
            <div className='footer-itemns'>
                <h5>Precisa de Ajuda?</h5>
                <h7>Entre em contato com o suporte <Link to="/SupportPage">Aqui</Link>.</h7>
            </div>
        </footer>
    );
}