import React, { Suspense, lazy } from 'react';
import './i18n'; // Add this line for i18n support

import { BrowserRouter, Route, Routes } from 'react-router-dom';





import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';

//Pages
const QuemSomos = lazy(() => import('./pages/About/QuemSomos.jsx'));
//const TireSuasDuvidas = lazy(() => import('./pages/TireSuasDuvidas/TireSuasDuvidas'));
const Sistemas = lazy(() => import('./pages/Sistemas/Sistemas.jsx'));
const Contato = lazy(() => import('./pages/Contato/contato.jsx'));
const TrabalheConosco = lazy (() => import('./pages/TrabalheConosco/TrabalheConosco.jsx') );
const FormularioContato = lazy (() => import('./pages/FormularioContato/FormularioContato.jsx'));
//const Blog = lazy (() => import('./pages/Blog/Blog') );



//Componentes
const Banner = lazy (() => import('./Components/Banner/banner.jsx'));
//const Header = lazy (() => import('./Components/Header/header'));
//const Footer = lazy (() => import('./Components/Footer/footer'));
//const Features = lazy (() => import('./Components/Features/features.jsx'));
const Precos = lazy( ()=> import('./Components/Precos/precos.jsx')) ; 

//Sistema
const Login = lazy (() => import('./Sistema/Login/login.jsx'));
const Home = lazy(() => import('./Sistema/Home/home.jsx'));
const NovaConta = lazy (() => import('./Sistema/NovaConta/NovaConta.jsx'));
const ResetSenha = lazy (() => import('./Sistema/ResetSenha/resetsenha.jsx'));
const Menu = lazy (() => import('./Sistema/Menu/menu.jsx'));
const DiarioEmocional = lazy (() => import('./Sistema/DiarioEmocional/diarioemocional.jsx'));
const GerenciamentoEmocional = lazy (() => import('./Sistema/GerenciamentoEmocional/gerenciamentoemocional.jsx'));
const DiarioTrader = lazy (() => import('./Sistema/DiarioTrader/diariotrader.jsx'));
const Dashboard = lazy (() => import('./Sistema/Dashboard/dashboard.jsx'));
const GerenciamentoRisco = lazy (() => import('./Sistema/GerenciamentoRisco/gerenciamentorisco.jsx'));

const NavbarDiario = lazy (() => import('./Sistema/DiarioTrader/NavbarDiario.jsx'));
const UpdateTradeModal = lazy (() => import('./Sistema/DiarioTrader/UpdateTradeModal.jsx'));
const TradeSearch = lazy (() => import('./Sistema/DiarioTrader/TradeSearch.jsx'));
const TradeTable = lazy (() => import('./Sistema/DiarioTrader/TradeTable.jsx'));
const TradeForm = lazy (()=> import('./Sistema/DiarioTrader/TradeForm.jsx'));
const TradeRow = lazy (() => import('./Sistema/DiarioTrader/TradeRow.jsx'));
const EditModal = lazy (() => import('./Sistema/DiarioTrader/EditModal.jsx'));
const UserAdmin = lazy (() => import('./Sistema/UserAdmin/UserAdmin.jsx'));
const Button = lazy (() => import('./Sistema/DiarioTrader/Button.jsx'));
const Botao = lazy (() => import('./Sistema/DiarioTrader/Botao.jsx'));


//GERENCIAMENTO DE RISCO//


const NavBarRisco = lazy (() => import('./Sistema/GerenciamentoRisco/NavBarRisco.jsx'));

//PLANEJAMENTO TRADER//

const PlanejamentoTrader = lazy (() => import('./Sistema/PlanejamentoTrader/planejamentotrader.jsx'));
const NavBarPlanejamento = lazy (() => import('./Sistema/PlanejamentoTrader/NavBarPlanejamento.jsx'));

//GERENCIAMENTO EMOCIONAL//

const FormularioRegistroEmocoes = lazy (() => import('./Sistema/GerenciamentoEmocional/FormularioRegistroEmocoes.jsx'));
function App() {
    return (

        
        <Suspense fallback={<div>Carregando...</div>}>

        <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<QuemSomos />} />
            <Route path="/NovaConta" element={<NovaConta />} />
            <Route path="/resetsenha" element={<ResetSenha />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/Sistemas" element={<Sistemas />} />
            <Route path="/TrabalheConosco" element={<TrabalheConosco />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="FormularioContato" element={<FormularioContato />} />
            <Route path="/precos" element={<Precos />} />
            <Route path="/GerenciamentoEmocional" element={<GerenciamentoEmocional />} />
            <Route path="DiarioEmocional" element={<DiarioEmocional />} />
            <Route path="DiarioTrader" element={<DiarioTrader />} />
            <Route path="DashBoard" element={<Dashboard />} />
            <Route path="gerenciamentoemocional" element={<GerenciamentoEmocional />} />
            <Route path="gerenciamentorisco" element={<GerenciamentoRisco />} />
            <Route path="planejamentotrader" element={<PlanejamentoTrader />} />
            <Route path="navbardiario" element={<NavbarDiario />} />
            <Route path="updatetrademodal" element={<UpdateTradeModal />} />
            <Route path="tradesearch" element={<TradeSearch />} />
            <Route path="tradeform" element={<TradeForm />} />
            <Route path="button" element={<Button />} />
            <Route path="botao" element={<Botao />} />
            <Route path="tradetable" element={<TradeTable />} />
            <Route path="editmodal" element={<EditModal />} />
            <Route path="traderow" element={<TradeRow />} />
            <Route path="useradmin" element={<UserAdmin />} />
            <Route path="navbarrisco" element={<NavBarRisco />} />
            <Route path="navbarplanejamento" element={<NavBarPlanejamento />} />
            <Route path="FormularioRegistroEmocoes" element={<FormularioRegistroEmocoes />} />

           
            
            
            


        </Routes>
        
        </Suspense>

    );
}

export default App