import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Select from 'react-select';
import './TradeForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { tradeValidationSchema } from './validationSchemas';
import CreatableSelect from 'react-select/creatable';

function TradeForm({ currentTrade, onSave }) {
  // Estados para armazenar múltiplos valores de Setup, Gatilho de Entrada e Ativos Operados
  const [setups, setSetups] = useState(currentTrade?.Setup ? currentTrade.Setup.split(', ') : []);
  const [gatilhosEntrada, setGatilhosEntrada] = useState(currentTrade?.GatilhoEntrada ? currentTrade.GatilhoEntrada.split(', ') : []);
  const [ativosOperados, setAtivosOperados] = useState(currentTrade?.AtivoOperado ? currentTrade.AtivoOperado.split(', ') : []);
  
  const [novoSetup, setNovoSetup] = useState('');
  const [novoGatilho, setNovoGatilho] = useState('');
  const [novoAtivo, setNovoAtivo] = useState('');

  const isEditing = Boolean(currentTrade);

  // Funções para adicionar novos valores
  const adicionarValor = (setor, novoValor, setNovoValor) => {
    if (novoValor.trim() !== '') {
      setor(valoresAtuais => [...valoresAtuais, novoValor]);
      setNovoValor('');
    }
  };

  const [opcoesTipoOperacao, setOpcoesTipoOperacao] = useState([
    { value: 'Compra', label: 'Compra' },
    { value: 'Venda', label: 'Venda' }
]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      // Atualiza valores com os arrays
      const dadosCompletos = {
        ...values,
        AtivoOperado: ativosOperados.join(', '),
        Setup: setups.join(', '),
        GatilhoEntrada: gatilhosEntrada.join(', '),
      };
      await onSave(dadosCompletos, isEditing);
      toast.success(`Trade ${isEditing ? 'atualizado' : 'criado'} com sucesso!`);
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro ao realizar a operação.');
    } finally {
      setSubmitting(false);
    }
  };

    // Estado para opções de Ativo Operado
  const [AtivoOperadoOptions, setAtivoOperadoOptions] = useState([
    { value: 'Mini Indice', label: 'Mini Indice' },
    { value: 'Mini Dólar', label: 'Mini Dólar' },
     // Adicione mais opções conforme necessário
  ]);

  // Estado para opções de Setup
const [setupOptions, setSetupOptions] = useState([
  { value: 'Pivot de abertura - Médias não alinhadas', label: 'Pivot de abertura - Médias não alinhadas' },
  { value: 'Pivot Aleatório Contra Tendência', label: 'Pivot Aleatório Contra Tendência' },
  { value: 'Pivot Aleatório a Favor Da Tendência ', label: 'Pivot Aleatório a Favor Da Tendência' },
  { value: 'Trade De Abertura - Correção Nas Primeiras Barras Com Entrada No toque Da MMA', label: 'Trade De Abertura - Correção Nas Primeiras Barras Com Entrada No toque Da MMA' },
  { value: 'Setup VWAP', label: 'Setup VWAP' },
  { value: 'Reversão Suporte do dia', label: 'Reversão Suporte do dia' },
  { value: 'Reversão Resistência do dia', label: 'Reversão Resistência do dia' },
  { value: 'Reversão FIBO 61.8%', label: 'Reversão FIBO 61.8%' },
  { value: 'Reversão FIBO 50%', label: 'Reversão FIBO 50%' },
  { value: 'TTR ', label: 'TTR' },
  { value: 'Entrada emocional', label: 'Entrada emocional' },
  { value: 'Barra de climax de alta ', label: 'Barra de climax de alta' },
  { value: 'Barra de climax de baixa ', label: 'Barra de climax de baixa' },
  { value: 'Reversão Toque LTA ', label: 'Reversão Toque LTA' },
  { value: 'Reversão Toque LTB ', label: 'Reversão Toque LTB' },
  { value: 'Rompimento de Suporte ', label: 'Rompimento de Suporte' },
  { value: 'Rompimento de Resistência ', label: 'Rompimento de Resistência' },
  { value: 'Powerbreakout / MMA20 ', label: 'Powerbreakout / MMA20' },



  // Adicione mais opções de setup conforme necessário
]);

const [GatilhoEntradaOptions, setGatilhoEntradaOptions] = useState([
  { value: 'Rompimento de Figura', label: 'Rompimento de Figura' },
  { value: 'Gift Na 1° Confirmação', label: 'Gift Na 1A Confirmação' },
  { value: 'Gift Na 2° Confirmação', label: 'Gift Na 2° Confirmação' },
  { value: 'Pullback oculto', label: 'Pullback oculto' },
  { value: 'Doji Suporte ', label: 'Doji Suporte' },
  { value: 'Doji Resistência ', label: 'Doji Resistência' },
  { value: 'Doji Fibo 50% ', label: 'Doji Fibo 50%' },
  { value: 'Martelo em Fundo ', label: 'Martelo em Fundo' },
  { value: 'Estrela Cadente em Topo ', label: 'Estrela Cadente em Topo' },
  { value: 'Sell the close Barra rompimento ', label: 'Sell the close Barra rompimento' },
  { value: 'Barra de sinal ', label: 'Barra de sinal' },
  { value: 'Reversão do candle de climax ', label: 'Reversão do candle de climax' },
  // Adicione mais opções conforme necessário
]);

const handleGatilhoChange = (newValue, actionMeta) => {
  console.group('Value Changed');
  console.log(newValue);
  console.log('action: ${actionMeta.action}');
  console.groupEnd();
  // Atualize o estado com o novo valor ou a seleção
};

// Adicionando um novo setup ou selecionando um existente
const handleSetupChange = (newValue, actionMeta) => {
  console.group('Value Changed');
  console.log(newValue);
  console.log('action: ${actionMeta.action}');
  console.groupEnd();
  // Atualize o estado com o novo valor ou a seleção
};

const handleAtivoOperadoChange = (newValue, actionMeta) => {
  console.group('Value Changed');
  console.log(newValue);
  console.log('action: ${actionMeta.action}');
  console.groupEnd();
  // Atualize o estado com o novo valor ou a seleção
};






  const handleCriarOpcao = (valorInput) => {
    const novaOpcao = { value: valorInput, label: valorInput };
    setOpcoesTipoOperacao(opcoesAnteriores => [...opcoesAnteriores, novaOpcao]);
    return novaOpcao;
};

  return (
    <Formik
      initialValues={{
        trade: currentTrade?.trade || '',
        Resultado: currentTrade?.Resultado || '',
        diaMes: currentTrade?.diaMes || '',
        Hora: currentTrade?.Hora || '',
        tradeDia: currentTrade?.tradeDia || '',
        AtivoOperado: novoAtivo,
        TipoOperacao: currentTrade?.TipoOperacao || '',
        Setup: novoSetup,
        GatilhoEntrada: novoGatilho,
        MMA9: currentTrade?.MMA9 || '',
        MMA20: currentTrade?.MMA20 || '',
        MMA200: currentTrade?.MMA200 || '',
        TipoEntrada: currentTrade?.TipoEntrada || '',
        TradeRealizado: currentTrade?.TradeRealizado || '',
        TipoStop: currentTrade?.TipoStop || '',
        LocalStop: currentTrade?.LocalStop || '',
        GestaoStop: currentTrade?.GestaoStop || '',
        QualoErro: currentTrade?.QualoErro || '',
        ResultadoMonetario: currentTrade?.ResultadoMonetario || '',
        ResultadoEmPtos: currentTrade?.ResultadoEmPtos || '',
        Comentarios: currentTrade?.Comentarios || '',
      }}
      validationSchema={tradeValidationSchema}
      onSubmit={handleSubmit}
    >
     {({ isSubmitting, setFieldValue }) => (


    <Form className="container-TradeForm mt-5">
        {/* Campos do Formulário */}
        {/* Exemplo para o campo 'trade' */}

        <div className="form-group">
          <label htmlFor="tradeInput" className="form-label">Trade n°</label>
          <Field name="trade" type="number" className="form-control-trade" />
          <ErrorMessage name="trade" component="div" className="error-message" />
        </div>

         <div className="form-group">
            <label htmlFor="Resultado">Resultado</label>
            <Field name="Resultado" as="select" className="form-control">
              <option value="Gain">Gain</option>
              <option value="Loss">Loss</option>
            </Field>
            <ErrorMessage name="Resultado" component="div" className="error-message" />
          </div>

          <div className="form-group">
          <label htmlFor="diaMes">Dia do Mês</label>
          <Field name="diaMes" type="date" className="form-control" />
          <ErrorMessage name="diaMes" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <label htmlFor="Hora">Hora</label>
          <Field name="Hora" type="time" className="form-control" />
          <ErrorMessage name="Hora" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <label htmlFor="tradeDia">Trade do Dia</label>
          <Field name="tradeDia" type="number" className="form-control" />
          <ErrorMessage name="tradeDia" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <label htmlFor="novoAtivo">Ativo Operado</label>
          <CreatableSelect
            isClearable
            onChange={handleAtivoOperadoChange}
            options={AtivoOperadoOptions}
          />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => adicionarValor(setAtivosOperados, novoAtivo)}
            >
              Adicionar Ativo
            </button>
          </div>

          <div className="form-group">
                        <label htmlFor="TipoOperacao">Tipo de Operação</label>
                        <Select
                            options={opcoesTipoOperacao}
                            onChange={opcao => setFieldValue('TipoOperacao', opcao.value)}
                            onCreateOption={handleCriarOpcao}
                            isCreatable
                        />
                    </div>

  {/* Linha 2 */}
          <div className="containerWindow containerWindowDark">
              <div className="containerHeader ">
                    <div className="containerHeaderLeft">
                    <h6>Detalhes do Trade</h6>
              </div>
          </div>
          <div className="form-row">
    
          <div className="form-group">
            <label htmlFor="novoSetup">Setup</label>
            <CreatableSelect
                isClearable
                onChange={handleSetupChange}
                options={setupOptions}
              />
            <button type="button" onClick={() => adicionarValor(setSetups, novoSetup, setNovoSetup)} className="btn btn-secondary">Adicionar Setup</button>
          </div>

          
          <div className="form-group">
            <label htmlFor="novoGatilho">Gatilho de Entrada</label>
            <CreatableSelect
                isClearable
                onChange={handleGatilhoChange}
                options={GatilhoEntradaOptions}
              />
            <button type="button" onClick={() => adicionarValor(setGatilhosEntrada, novoGatilho, setNovoGatilho)} className="btn btn-secondary">Adicionar Gatilho</button>
          </div>
    </div>
        {/* Linha 3 */}
        
        <div className="form-group">
              <label htmlFor="MMA9">MMA9</label>
              <Field name="MMA9" as="select" className="form-control">
                <option value="">Selecione</option>
                <option value="AMercado">A Favor</option>
                <option value="OrdemLimitada">Contra</option>
                <option value="OrdemStop">Flat</option>
              </Field>
              <ErrorMessage name="MMA9" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="MMA20">MMA20</label>
              <Field name="MMA20" as="select" className="form-control">
                <option value="">Selecione</option>
                <option value="AMercado">A Favor</option>
                <option value="OrdemLimitada">Contra</option>
                <option value="OrdemStop">Flat</option>
              </Field>
              <ErrorMessage name="MMA20" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="MMA200">MMA200</label>
              <Field name="MMA200" as="select" className="form-control">
                <option value="">Selecione</option>
                <option value="AMercado">A Favor</option>
                <option value="OrdemLimitada">Contra</option>
                <option value="OrdemStop">Flat</option>
              </Field>
              <ErrorMessage name="MMA200" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="TipoEntrada">Tipo de Entrada</label>
              <Field name="TipoEntrada" as="select" className="form-control">
                <option value="">Selecione</option>
                <option value="AMercado">A Mercado</option>
                <option value="OrdemLimitada">Ordem Limitada</option>
                <option value="OrdemStop">Ordem Stop</option>
                <option value="OrdemStop">Violação</option>
                <option value="NA">N.A - Nenhuma das Anteriores</option>
              </Field>
              <ErrorMessage name="TipoEntrada" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="TradeRealizado">Trade Realizado</label>
              <Field name="TradeRealizado" as="select" className="form-control">
                <option value="Sim">Realizado</option>
                <option value="Nao">Hesitado</option>
              </Field>
              <ErrorMessage name="TradeRealizado" component="div" className="error-message" />
            </div>
                  </div>

          {/* Linha 4 */}
          <div className="containerWindow containerWindowDark">
          <div className="containerHeader ">
            <div className="containerHeaderLeft">
            <h6>Gerenciamento de Stop</h6>
            </div>
          </div>
          

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="TipoStop">Tipo de Stop</label>
              <Field name="TipoStop" as="select" className="form-control">
                <option value="">Insira como foi a seu Stop</option>
                <option value="Barra">Automático</option>
                <option value="Barra">Trailing</option>
                <option value="Barra">Técnico</option>
                <option value="Barra">Manual Antecipado</option>
                <option value="Barra">Própria barra</option>
                <option value="NA">N.A - Nenhuma das Anteriores</option>
                {/* Adicione mais opções aqui conforme necessário */}
              </Field>
              <ErrorMessage name="TipoStop" component="div" className="error-message" />
            </div>

            

          <div className="form-group">
                <label htmlFor="LocalStop">Local do Stop</label>
                <Field name="LocalStop" as="select" className="form-control">
                  <option value="">Selecione uma opção</option>
                  <option value="Barra">Barra de Entrada</option>
                  <option value="UltimoTopo">Ultimo Topo</option>
                  <option value="UltimoFundo">Ultimo Fundo</option>
                  <option value="RetracaoDeFibo">Retração de Fibo</option>
                  <option value="MMA9">MMA9</option>
                  <option value="MMA20">MMA20</option>
                  <option value="MMA200">MMA200</option>
                  <option value="Pullback">Pullback</option>
                  <option value="NA">N.A - Nenhuma das Anteriores</option>
                </Field>
                <ErrorMessage name="LocalStop" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-group">
            <label htmlFor="GestaoStop">Gestão de Stop</label>
            <Field name="GestaoStop" as="select" className="form-control">
                  <option value="">Selecione uma opção</option>
                  <option value="Barra">Barra de Entrada</option>
                  <option value="ToposeFundos">Topos e Fundos</option>
                  <option value="ManualAntecipado">Manual antecipado</option>
                  <option value="RetracaoDeFibo">Retração de Fibo</option>
                  <option value="MMA9">MMA9</option>
                  <option value="MMA20">MMA20</option>
                  <option value="MMA200">MMA200</option>
                  <option value="Pullback">Pullback</option>
                  <option value="NA">N.A - Nenhuma das Anteriores</option>
                </Field>
            <ErrorMessage name="GestaoStop" component="div" className="error-message" />
          </div>
          
          <div className="form-group">
            <label htmlFor="QualoErro">Qual foi o seu Erro?</label>
            <Field name="QualoErro" as="select" className="form-control">
              <option value="">Selecione</option>
              <option value="Ganancia">Ganância</option>
              <option value="MedoPerderOportunidade">Medo de perder oportunidade</option>
              <option value="StopGainmalPosicionado">Stop Gain mal posicionado</option>
              <option value="StopLossmalPosicionado">Stop Loss mal posicionado</option>
              <option value="Ansiedade">Ansiedade para boletar</option>
              <option value="Distração">Distração e Falta de Atenção</option>
              <option value="NaoRespeiteiStopTecnico">Não respeitei Stop Técnico</option>
              <option value="SaidaAntecipadaAlfacei">Saída Antecipada "Alfacei"</option>
              <option value="IgnoreiMeuPlano">Ignorei meu Plano</option>
              <option value="HesitacaInverterMao">Hesitação em inverter a mão</option>
              <option value="HesitacaEntrar">Hesitação em entrar na operação</option>
              <option value="EntradaAtrasada">Entrada Atrasada</option>
              <option value="NASeguiOperacional">N.A - Segui o operacional</option>
            </Field>
            <ErrorMessage name="QualoErro" component="div" className="error-message" />
          </div>

          </div>

                      {/* Linha 5 */}

          <div className="containerWindow containerWindowDark">
              <div className="containerHeader ">
               <div className="containerHeaderLeft">
               <h6>Resultado diário</h6>
              </div>
          </div>

          <div className="form-row">

            <div className="form-group">
            <label htmlFor="ResultadoMonetario">Resultado Monetário</label>
            <Field name="ResultadoMonetario" type="number" step="0.01" className="form-control" />
            <ErrorMessage name="ResultadoMonetario" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="ResultadoEmPtos">Resultado em Pontos?</label>
            <Field name="ResultadoEmPtos" type="number" className="form-control" />
            <ErrorMessage name="ResultadoEmPtos" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="Comentarios">Comentários</label>
            <Field name="Comentarios" as="textarea" rows="5" className="form-control" />
            <ErrorMessage name="Comentarios" component="div" className="error-message" />
          </div>

        </div>
        {ativosOperados.length > 0 && (
            <div className="form-group">
              <label>Ativos Operados:</label>
              <ul>
                {ativosOperados.map((ativo, index) => (
                  <li key={index}>{ativo}</li>
                ))}
              </ul>
            </div>
          )}
      </div>
      {gatilhosEntrada.length > 0 && (
            <div className="form-group">
              <label>Gatilhos de Entrada:</label>
              <ul>
                {gatilhosEntrada.map((gatilho, index) => (
                  <li key={index}>{gatilho}</li>
                ))}
              </ul>
            </div>
          )}
           {setups.length > 0 && (
            <div className="form-group">
              <label>Setups:</label>
              <ul>
                {setups.map((setup, index) => (
                  <li key={index}>{setup}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Botões de Ação */}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Processando...' : isEditing ? 'Atualizar Trade' : 'Criar Trade'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default TradeForm;