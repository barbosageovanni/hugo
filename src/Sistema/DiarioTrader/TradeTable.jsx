import React from 'react';
import './TradeTable.css';
import TradeRow from "./TradeRow.jsx";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TradeTable = ({ trades, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered" aria-labelledby="Tabela de Trades">
        <thead className="table-secondary">
          <tr>
            <th scope="col">Trade</th>
            <th scope="col">Dia do Mês</th>
            <th scope="col">Hora da Operação</th>
            <th scope="col">Trade do Dia</th>
            <th scope="col">Ativo Operado</th>
            <th scope="col">Tipo de Operação</th>
            <th scope="col">Setup</th>
            <th scope="col">Trigger</th>
            <th scope="col">MMA9</th>
            <th scope="col">MMA20</th>
            <th scope="col">MMA200</th>
            <th scope="col">Qual o Tipo de Entrada?</th>
            <th scope="col">O Trade foi realizado?</th>
            <th scope="col">Setup de Stop</th>
            <th scope="col">Posição do seu Stop?</th>
            <th scope="col">Como foi a gestão do seu Stop?</th>
            <th scope="col">Qual foi o seu maior erro?</th>
            <th scope="col">Qual foi seu resultado?</th>
            <th scope="col">Resultado Monetário</th>
            <th scope="col">Resultado em Pontos</th>
            <th scope="col">Comentários</th>
          </tr>
        </thead>
        <tbody>
        { (trades || []).map((trade) => (
          <TradeRow
            key={trade.id}
            trade={trade}
            onEdit={() => onEdit(trade)}
            onDelete={() => onDelete(trade.id)}
          />
        ))}
        </tbody>
      </table>
      
      <div className="formulario-links mt-4">
        <Link to="/TradeForm" className="mx-2">Retornar ao Formulário</Link>
      </div>
    </div>
  );
};

TradeTable.propTypes = {
  trades: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TradeTable;
