// Correções aplicadas conforme os itens mencionados
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function UpdateTradeModal({ isOpen, onClose, tradeData, onSave }) {
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    if (isOpen) {
      setEditFormData(tradeData || {});
    }
  }, [tradeData, isOpen]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!editFormData.trade || !editFormData.Resultado) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      const response = await axios.put(`https://basicomanagement.com/trades/${editFormData.id}`, editFormData);
      toast.success('Trade atualizado com sucesso!');
      onSave(response.data); // Notifica o componente pai sobre a atualização
      onClose(); // Fecha o modal
    } catch (error) {
      toast.error('Erro ao atualizar o trade: ' + error.message);
    }
  };

  if (!isOpen) return null;

  // Correção do return para remover texto desnecessário e corrigir o nome da função de mudança
  return (
    <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
                    {/* Campos do formulário */}
            <input
                type="text"
                name="trade"
                value={editFormData.trade || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="Resultado"
                value={editFormData.Resultado || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="date"
                name="diaMes"
                value={editFormData.diaMes || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
             <input
                type="time"
                name="Hora"
                value={editFormData.Hora || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />    

            <input
                type="number"
                name="tradeDia"
                value={editFormData.tradeDia || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="AtivoOperado"
                value={editFormData.AtivoOperado || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="TipoOperacao"
                value={editFormData.TipoOperacao || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="Setup"
                value={editFormData.Setup || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="GatilhoEntrada"
                value={editFormData.GatilhoEntrada || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
                <input
                type="text"
                name="MMA9"
                value={editFormData.MMA9 || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="MMA20"
                value={editFormData.MMA20 || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="MMA200"
                value={editFormData.MMA200 || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />

            <input
                type="text"
                name="TipoEntrada"
                value={editFormData.TipoEntrada || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="TradeRealizado"
                value={editFormData.TradeRealizado || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="TipoStop"
                value={editFormData.TipoStop || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="LocalStop"
                value={editFormData.LocalStop || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="GestaoStop"
                value={editFormData.GestaoStop || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="QualoErro"
                value={editFormData.QualoErro || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="number"
                name="ResultadoMonetario"
                value={editFormData.ResultadoMonetario || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
            <input
                type="number"
                name="ResultadoEmPtos"
                value={editFormData.ResultadoEmPtos || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
                <input
                type="text"
                name="Comentarios"
                value={editFormData.Comentarios || ''}
                onChange={handleFormChange}  // Usando a função aqui
                />
                   <button type="submit">Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTradeModal;