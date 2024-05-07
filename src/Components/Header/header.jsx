import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-light">
      
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto">
            
          <li className="nav-item">
              <Link className="nav-link" to="/banner">Home</Link>
            </li>      
            <li className="nav-item">
              <Link className="nav-link" to="/sistemas">Sistemas</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/About">Quem Somos</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/TrabalheConosco">Trabalhe Conosco</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Contato">Contato</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Login">Login</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Header;