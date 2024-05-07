import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarEmocoes.css';

const NavBarEmocoes = () => {
    return (
        <nav className="navbar-expand-sm navbar bg">
        
        <div className="diario-trader-container navbar-fixed-top sm-1">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                </div> 
                <ul className="navbar-nav nav-underline ms-auto">
                            
                    <li className="nav-list">
                    <li className="active"><a href="home"><i className="icon-home"></i> Home</a></li>
                    </li>
                    <li className="nav-item">
                    <Link to="/diariotrader" className="nav-link" aria-current="page" >Diário de Trader</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/planejamentotrader" className="nav-link" aria-current="page" >Planejamento Diário</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/gerenciamentoemocional" className="nav-link" aria-current="page" >Gerenciamento Emocional</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/diarioemocional" className="nav-link" aria-current="page" >Diário Emocional</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/relatorios" className="nav-link" aria-current="page" >Relatórios</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/trades" className="nav-link" aria-current="page" >Trades</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/dashboard" className="nav-link" aria-current="page" >DashBoard</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page" >Sair</Link>
                    </li>
                    
                </ul>

            </div>
    </nav>
    );
}

export default NavBarEmocoes;