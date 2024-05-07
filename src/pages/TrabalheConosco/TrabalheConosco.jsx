import React from 'react';
import {useEffect} from "react";
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
//import Features from './Components/Features/features.jsx';
//import Precos from './Components/Precos/precos.jsx';
//import { Link } from 'react-router-dom';

function TrabalheConosco(){

  useEffect(() => window.scrollTo(0, 0),[]);

  return ( 


    <section id="TrabalheConosco">

    <Header /> {/* Usando o componente Header */}
    


      <div className="TrabalheConosco container-fluid">

          <div className="row">

              <div className="col-md-6">
                
                {/*Seção Titulo Trabalhe conosco*/}
                <section className='TrabalheConosco'>

                  <h2 className="fs-4">Trabalhe conosco</h2>

             
                    {/*Seção texto Trabalhe conosco*/}
                  
                  <h6><article className='TrabalheConosco'>


                  <p> A Básico Management está na vanguarda da evolução do mercado financeiro, especificamente no segmento de day trade e bolsa de valores. O ambiente está em constante evolução, marcado por uma crescente
                  diversidade de estratégias, ferramentas de análise e oportunidades de melhoria nas estratégias e gestão comportamental.</p>
                  <p>Nosso objetivo é transcender as expectativas básicas do trading, promovendo não apenas a maximização de ganhos, mas também contribuindo para o desenvolvimento econômico e a geração de empregos
                  através de nossas operações. Nos destacamos como uma das empresas mais versáteis e com profunda expertise no mercado financeiro. 
                  Nossa familiaridade com as nuances da bolsa de valores nacional reflete nosso comprometimento em adaptar e compartilhar estratégias de sucesso.</p>
                  <p>  Diariamente, nossas equipes se dedicam a superar desafios com o intuito de otimizar resultados e entregar o máximo em performance de investimentos. Esse comprometimento é fundamentado em valores
                  essenciais como integridade nas operações, segurança nas transações, busca pela excelência, foco no cliente e uma forte orientação para resultados, mantendo sempre o respeito pelas pessoas envolvidas..</p>


                  </article></h6>

                </section>

              {/*Seção Titulo do Sobre Liderança na Básico Management*/}

                <section className='liderança_basico'>

                  <h2 className="fs-4">Liderança na Básico Management</h2>


                  <h6><article className='liderança_basico'>

                      <p> Na Básico Management a excelência em liderança é fundamental para a dinâmica e o sucesso das operações no mercado de day trade e bolsa de valores. Por isso, investir na formação e no aprimoramento dos nossos líderes 
                      é uma das nossas principais estratégias. A Academia de Líderes se destaca como um centro de excelência, oferecendo programas 
                      de treinamento focados em habilidades de comunicação eficaz, inteligência emocional e gestão de equipes.</p>
                
                 </article></h6>

                </section>

              {/*Seção Titulo do Sobre Nossa visão*/}

                <section className='nossos_valores'>

                <h2 className="fs-4">Nossos Valores</h2>

                <h6><article className='sobre_nossos_valores'>

                        <p>Confiança: A base de todas as nossas interações e serviços.</p>
                        <p>Inovação: Estamos constantemente em busca de melhorias e inovações.</p>
                        <p>Responsabilidade: Agimos com integridade e transparência em todas as nossas operações.</p>
                        <p>Suporte ao Cliente: Nosso suporte é incansável, sempre disponível para atender às necessidades de nossos clientes.</p>
                        
                </article></h6>

                </section> 



                 <h4>Gerencie seus trades de um unico lugar com uma equipe profissional</h4>
                 
              </div>

              <div className="col-lg-6">
                  <img src="Logos/TrabalheConosco2.jpg" alt="" />

              </div>

          </div>
      </div>

      <Footer />

  </section>

);
};

export default TrabalheConosco;