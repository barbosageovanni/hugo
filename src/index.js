import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';
import './i18n'; // Add this line for i18n support



const LazyComponent = React.lazy(() => import('./LazyComponent.js'));
// Componentes carregados de forma assíncrona
const App = lazy(() => import('./App'));

//Pages
const QuemSomos = lazy(() => import('./pages/About/QuemSomos.jsx'));
const TireSuasDuvidas = lazy(() => import('./pages/TireSuasDuvidas/TireSuasDuvidas'));
const Sistemas = lazy(() => import('./pages/Sistemas/Sistemas'));
const TrabalheConosco = lazy (() => import('./pages/TrabalheConosco/TrabalheConosco') );
const Blog = lazy (() => import('./pages/Blog/Blog') );
const Contato = lazy (() => import('./pages/Contato/contato.jsx'));
const FormularioContato = lazy (() => import('./pages/FormularioContato/FormularioContato.jsx')) ;


//Componentes
const Banner = lazy (() => import('./Components/Banner/banner.jsx'));
const Header = lazy (() => import('./Components/Header/header'));
const Footer = lazy (() => import('./Components/Footer/footer'));
const Features = lazy (() => import('./Components/Features/features.jsx'));
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
const PlanejamentoTrader = lazy (() => import('./Sistema/PlanejamentoTrader/planejamentotrader.jsx'));
const NavbarDiario = lazy (() => import('./Sistema/DiarioTrader/NavbarDiario.jsx'));
const UpdateTradeModal = lazy (() => import('./Sistema/DiarioTrader/UpdateTradeModal'));
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
//import NovoTrader from './Sistema/novotrader/novotrader.jsx';

//PLANEJAMENTO TRADER//
const NavBarPlanejamento = lazy (() => import('./Sistema/PlanejamentoTrader/NavBarPlanejamento.jsx'));
// Cria uma instância do roteador de navegação usando o createBrowserRouter.

//GERENCIAMENTO EMOCIONAL//

const FormularioRegistroEmocoes = lazy (() => import('./Sistema/GerenciamentoEmocional/FormularioRegistroEmocoes.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <QuemSomos />
      </Suspense>
    ),
  },
      {
        path: "/Sistemas",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Sistemas />
          </Suspense>
        ),
      },
      {
        path: "/TireSuasDuvidas",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <TireSuasDuvidas />
          </Suspense>
        ),
      },
      {
        path: "/TrabalheConosco",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <TrabalheConosco />
          </Suspense>
        ),
      },
      {
        path: "/Blog",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/Header",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Header />
          </Suspense>
        ),
      },
      {
        path: "/Footer",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Footer />
          </Suspense>
        ),
      },
      {
        path: "/Banner",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Banner />
          </Suspense>
        ),
      },
      {
        path: "/Features",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Features />
          </Suspense>
        ),
      },
      {
        path: "/Precos",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Precos />
          </Suspense>
        ),
      },
      {
        path: "/Home",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/Login",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/NovaConta",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <NovaConta />
          </Suspense>
        ),
      },
       {
        path: "/resetsenha",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <ResetSenha />
          </Suspense>
        ),
      },
      {
        path: "/menu",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/diarioemocional",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <DiarioEmocional />
          </Suspense>
        ),
      },
      {
        path: "/gerenciamentoemocional",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <GerenciamentoEmocional />
          </Suspense>
        ),
      },  
      {
        path: "/diarioTrader",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <DiarioTrader />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/gerenciamentoemocional",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <GerenciamentoEmocional />
          </Suspense>
        ),
      },
      {
        path: "/gerenciamentorisco",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <GerenciamentoRisco />
          </Suspense>
        ),
      },
      {
        path: "/planejamentotrader",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <PlanejamentoTrader />
          </Suspense>
        ),
      },
      {
        path: "/navbardiario",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <NavbarDiario />
          </Suspense>
        ),
      },
      {
        path: "/updatetrademodal",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <UpdateTradeModal />
          </Suspense>
        ),
      },
      {
        path: "/tradesearch",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <TradeSearch />
          </Suspense>
        ),
      },
      {
        path: "/tradeform",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <TradeForm />
          </Suspense>
        ),
      },
      {
        path: "/button",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Button />
          </Suspense>
        ),
      },
      {
        path: "/botao",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Botao />
          </Suspense>
        ),
      },
      {
        path: "/tradetable",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <TradeTable />
          </Suspense>
        ),
      },
      {
        path: "/editmodal",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <EditModal />
          </Suspense>
        ),
      },
      {
        path: "/traderow",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <TradeRow />
          </Suspense>
        ),
      },
      {
        path: "/useradmin",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <UserAdmin />
          </Suspense>
        ),
      },
      {
        path: "/contato",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Contato />
          </Suspense>
        ),
      },
      {
        path: "/formulariocontato",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <FormularioContato />
          </Suspense>
        ),
      },
      {
        path: "/navbarrisco",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <NavBarRisco />
          </Suspense>
        ),
      },
      {
        path: "/navbarplanejamento",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <NavBarPlanejamento />
          </Suspense>
        ),
      },
      {
        path: "/formularioregistroemocoes",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <FormularioRegistroEmocoes />
          </Suspense>
        ),
      },
   
]);

// Renderiza a raiz do aplicativo com o roteador de navegação.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
);
