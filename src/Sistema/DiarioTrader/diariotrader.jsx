import React, { useReducer, useEffect, useCallback } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./diariotrader.css";
import NavbarDiario from "./NavbarDiario";
import UpdateTradeModal from "./UpdateTradeModal";
import TradeSearch from "./TradeSearch.jsx";
import TradeForm from "./TradeForm.jsx";
import TradeTable from "./TradeTable.jsx";


const apiURL = process.env.REACT_APP_API_URL || "https://basicomanagement.com.br/trades";

// Estrutura de estado inicial e reducer
const initialState = {
  trades: [],
  currentTrade: null, // Alterado para armazenar o trade atual inteiro, incluindo o ID
};


function reducer(state, action) {
  switch (action.type) {
    case 'SET_TRADES':
      return { ...state, trades: action.payload };
    case 'SET_FORM_DATA':
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case 'TOGGLE_MODAL':
      return { ...state, isModalOpen: !state.isModalOpen, currentTradeForEdit: action.payload || null };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}


function DiarioTrader() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTrades = useCallback(async () => {
    try {
      const response = await axios.get(apiURL);
      dispatch({ type: 'SET_TRADES', payload: response.data });
    } catch (error) {
      toast.error("Erro ao carregar trades.");
    }
  }, []);

  useEffect(() => {
    fetchTrades();
  }, [fetchTrades]);

  // Função para tratar a edição de trades
  const handleEdit = useCallback((trade) => {
    dispatch({ type: 'SET_CURRENT_TRADE', payload: trade });
  }, []);

  

  const handleDelete = async (tradeId) => {
    try {
      await axios.delete(`${apiURL}/${tradeId}`);
      toast.success('Trade excluído com sucesso!');
      fetchTrades(); // Refresh trades list
    } catch (error) {
      toast.error("Erro ao excluir trade.");
    }
  };
  // Filtragem de trades baseada em searchTerm
  const filteredTrades = state.searchTerm
    ? state.trades.filter(trade => trade.description.toLowerCase().includes(state.searchTerm.toLowerCase()))
    : state.trades;


  // Esta função será passada para o TradeForm
 const saveTrade = async (tradeData, isEditing) => {
    const method = isEditing ? 'put' : 'post';
    const url = isEditing ? `${apiURL}/${tradeData.id}` : apiURL;

    try {
      await axios[method](url, tradeData);
      toast.success(`Trade ${isEditing ? 'atualizado' : 'criado'} com sucesso!`);
      fetchTrades(); // Atualiza a lista após salvar
      dispatch({ type: 'RESET_CURRENT_TRADE' }); // Reseta o trade atual após salvar
    } catch (error) {
      toast.error(`Erro ao ${isEditing ? 'atualizar' : 'criar'} trade.`);
    }
  };

  // Função para selecionar um trade para edição
  const editTrade = (trade) => {
    dispatch({ type: 'SET_CURRENT_TRADE', payload: trade });
  };

  // Função para criar um novo trade (limpa o trade atual)
  const newTrade = () => {
    dispatch({ type: 'RESET_CURRENT_TRADE' });
  };

  return (


    <div>
      <NavbarDiario />
      <header className="header-text center me-auto">
        <h5 className="sub-title-text-center">Bem-vindo(a) ao Diário de Trader!</h5>
      </header>  

      <div className="containerWindow containerWindowDark">
      <TradeSearch searchTerm={state.searchTerm} dispatch={dispatch} />
      <button onClick={newTrade} className="btn btn-success btn-sm">Novo Trade</button> {/* Botão Novo Trade */}
        
      <TradeForm
          currentTrade={state.currentTrade}
          onSave={(tradeData, isEditing) => saveTrade(tradeData, isEditing)}
        />
        <TradeTable
          trades={state.trades}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        {state.isModalOpen && (
          <UpdateTradeModal
            isOpen={state.isModalOpen}
            onClose={() => dispatch({ type: 'TOGGLE_MODAL' })}
            tradeData={state.currentTrade}
            onSave={(updatedTrade) => {
              // Atualizar a lista de trades aqui se necessário
              fetchTrades();
            }}
          />
        )}
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}

export default DiarioTrader;