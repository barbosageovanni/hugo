import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button'; // Assumindo que este é um componente de botão estilizado

function TradeSearch({ setSearchTerm, setTrades }) {
    const [searchInput, setSearchInput] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSearch = async () => {
        setErrorMsg('');
        try {
            // Aqui, atualizamos a URL para incluir o identificador específico de trade no parâmetro de busca
            const response = await axios.get(`https://basicomanagement.com.br/trades/search?trade=${searchInput}`);
            setTrades(response.data);
            setSearchTerm(searchInput);
        } catch (error) {
            // Tratamento de erros permanece o mesmo
            if (error.response) {
                setErrorMsg('Erro ao buscar trades: ' + error.response.data.message);
            } else if (error.request) {
                setErrorMsg('Erro de conexão: verifique sua conexão com a internet.');
            } else {
                setErrorMsg('Erro desconhecido: tente novamente.');
            }
        }
    };

    return (
        <div className="search-container">
            <input
                id="tradeInput"
                name="trade"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Procurar Trade"
            />
            {errorMsg && <div className="error-message">{errorMsg}</div>}
            <Button 
                text="Buscar" 
                onClick={handleSearch}
                className="search-button"
            />
        </div>
    );
}

export default TradeSearch;

