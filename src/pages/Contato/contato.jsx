import React from 'react';
import {useEffect} from "react";
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
//import FormularioContato from '../FormularioContato/FormularioContato';
//import './Contato.css'; // Certifique-se de criar e importar o CSS para estilização

function Contato(){
  
  useEffect(() => window.scrollTo(0, 0),[]);

 
  return (
    <section id="contato">
      <Header /> {/* Usando o componente Header */}
      <div className="contato-container">
        <section className="banner-contato" style={{ backgroundImage: 'url(/Logos/FaleConosco1.jpg)' }}>
          <h2>Precisa de atendimento?</h2>
          <button className="btn btn-md btn-entre-em-contato">
              <a href="./FormularioContato" style={{ color: 'white', textDecoration: 'none' }}>Entre em Contato</a>
          </button>
          
        </section>
        
              

         
       
      </div>
      <Footer />
    </section>
  );
};

export default Contato;