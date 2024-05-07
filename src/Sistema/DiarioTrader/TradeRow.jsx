import React from 'react';
import PropTypes from 'prop-types';

const TradeRow = ({ trade, onEdit, onDelete }) => {
  if (!trade) {
    return null;
  }
  <tr>
    {/* Dados do Trade */}
    <td>{trade.trade}</td>
    
    <td>{trade.Resultado}</td>
    <td>{trade.diaMes}</td>
    <td>{trade.Hora}</td>
    <td>{trade.tradeDia}</td>
    <td>{trade.AtivoOperado}</td>
    <td>{trade.TipoOperacao}</td>
    <td>{trade.Setup}</td>
    <td>{trade.GatilhoEntrada}</td>
    <td>{trade.MMA9}</td>
    <td>{trade.MMA20}</td>
    <td>{trade.MMA200}</td>
    <td>{trade.TipoEntrada}</td>
    <td>{trade.TradeRealizado}</td>
    <td>{trade.TipoStop}</td>
    <td>{trade.LocalStop}</td>
    <td>{trade.GestaoStop}</td>
    <td>{trade.QualoErro}</td>    
    <td>{trade.ResultadoMonetario}</td>
    <td>{trade.ResultadoEmPtos}</td>
    <td>{trade.Comentarios}</td>
    {/* Ações */}
    <td>
      <button onClick={() => onEdit(trade)}>Editar</button>
      <button onClick={() => onDelete(trade.id)}>Excluir</button>
    </td>
  </tr>

};


TradeRow.propTypes = {
  trade: PropTypes.shape({
    id: PropTypes.string.isRequired,
    trade: PropTypes.string.isRequired,
    Resultado: PropTypes.string,
    diaMes: PropTypes.string,
    Hora: PropTypes.string,
    tradeDia: PropTypes.string,
    AtivoOperado: PropTypes.string,
    TipoOperacao: PropTypes.string,
    Setup: PropTypes.string,
    GatilhoEntrada: PropTypes.string,
    MMA9: PropTypes.string,
    MMA20: PropTypes.string,
    MMA200: PropTypes.string,
    TipoEntrada: PropTypes.string,
    TradeRealizado: PropTypes.string,
    TipoStop: PropTypes.string,
    LocalStop: PropTypes.string,
    GestaoStop: PropTypes.string,
    QualoErro: PropTypes.string,
    ResultadoMonetario: PropTypes.string,
    ResultadoEmPtos: PropTypes.string,
    Comentarios: PropTypes.string,
  }).isRequired,
  
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TradeRow;