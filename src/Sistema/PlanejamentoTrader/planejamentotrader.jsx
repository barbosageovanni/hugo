import React, { useReducer, useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import NavBarPlanejamento from './NavBarPlanejamento';
import CreatableSelect from 'react-select/creatable';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup'; // Adicionado para validação
import './planejamentotrader.css';
import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL || "https://basicomanagement.com.br/trades";

const initialState = {
  trades: [],
  currentTrade: null,
  isModalOpen: false,
  searchTerm: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TRADES':
      return { ...state, trades: action.payload };
    case 'RESET_CURRENT_PLAN':
      return { ...state, currentTrade: null };
    case 'TOGGLE_MODAL':
      return { ...state, isModalOpen: !state.isModalOpen };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };

    case 'DELETE_TRADE':
      // Supondo que cada trade tem um ID único
      return { ...state, trades: state.trades.filter(trade => trade.id !== action.payload) };
    case 'EDIT_TRADE':
      // Encontra e atualiza o trade; isso é apenas um esqueleto
      const updatedTrades = state.trades.map(trade =>
        trade.id === action.payload.id ? { ...trade, ...action.payload.data } : trade
      );
      return { ...state, trades: updatedTrades };
    default:
      return state;
  }
}

const PlanejamentoTrader = () => {
const [state, dispatch] = useReducer(reducer, initialState);
const [capitalMinimo, setCapitalMinimo] = useState(0);
const [quantidadeContratos, setQuantidadeContratos] = useState(0);
const [valorContrato, setvalorContrato] = useState(0);
const [riscoPontosOperacao, setRiscoPontosOperacao] = useState(0);
const [valorPontoFormatado, setValorPontoFormatado] = useState('');
const [valorContratoFormatado, setValorContratoFormatado] = useState('');
const [capitalDisponivel, setcapitalDisponivel] = useState(0);

const calcularCapitalMinimo = () => {
  const resultado = quantidadeContratos * valorContrato * riscoPontosOperacao;
  setCapitalMinimo(resultado);
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

const atualizarValorContrato = (valor) => {
  const valorLimpo = valor.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  if (valorLimpo.match(/\.$/) || valorLimpo === ".") {
    setValorPontoFormatado(valorLimpo);
  } else {
    const valorNumerico = parseFloat(valorLimpo);
    setvalorContrato(valorNumerico || 0);
    setValorContratoFormatado(valorNumerico ? formatCurrency(valorNumerico) : valorLimpo);
  }
};

useEffect(() => {
  const calcularQuantidadeContratos = () => {
    // Certifique-se de que valorContrato e riscoPontosOperacao sejam números válidos e maiores que 0 para evitar divisão por zero.
    if (valorContrato > 0 && riscoPontosOperacao > 0) {
      const quantidade = capitalDisponivel / (valorContrato * riscoPontosOperacao * 20); // Supondo que 20 seja o número de operações perdedoras aceitáveis.
      setQuantidadeContratos(Math.floor(quantidade)); // Arredondar para baixo para garantir um número inteiro de contratos.
    }
  };

  const calcularCapitalMinimoNecessario = () => {
    const resultado = quantidadeContratos * valorContrato * riscoPontosOperacao;
    setCapitalMinimo(resultado);
  };

  calcularQuantidadeContratos();
  calcularCapitalMinimoNecessario();
  // Esses cálculos serão disparados toda vez que os valores de capitalDisponivel, valorPonto, ou riscoPontosOperacao mudarem.
}, [capitalDisponivel, valorContrato, riscoPontosOperacao, quantidadeContratos]);


// Função de submissão ajustada para uso com reducer
const submitForm = (formData, dispatch) => {
  fetch('/api/forms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha ao enviar o formulário');
      }
      return response.json();
    })
    .then(data => {
      alert('Obrigado por enviar o formulário!');
      // Aqui você pode utilizar os dados retornados do servidor se necessário
      dispatch({ type: 'SUBMIT_FORM', payload: formData });
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    });
};



// Esquema de validação Yup para o formulário
const validationSchema = Yup.object().shape({
  diaMes: Yup.date().required('O campo Dia do Mês é obrigatório'),
  Hora: Yup.string().required('O campo Hora é obrigatório'),
  quantidadeContratos: Yup.number().positive().integer().required('Quantidade de contratos é obrigatória'),
  valorPonto: Yup.number().positive().required('O valor do ponto é obrigatório'),
  riscoPontosOperacao: Yup.number().positive().required('O risco por operação é obrigatório'),
  // Continue com as validações dos outros campos...
});




  // Função de submissão ajustada para uso com reducer
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      if (state.currentTrade) {
        // Lógica para atualizar um trade existente
        await axios.put(`${apiURL}/${state.currentTrade.id}`, values);
        toast.success('Trade atualizado com sucesso!');
      } else {
        // Lógica para criar um novo trade
        await axios.post(apiURL, values);
        toast.success('Trade criado com sucesso!');
      }
      resetForm();
      dispatch({ type: 'RESET_CURRENT_PLAN' });
      fetchTrades(); // Atualizar a lista de trades
    } catch (error) {
      toast.error('Ocorreu um erro ao realizar a operação.');
    } finally {
      setSubmitting(false);
    }
  };
  

    // Funções para adicionar novos valores
    const adicionarValor = (setor, novoValor, setNovoValor) => {
      if (novoValor.trim() !== '') {
        setor(valoresAtuais => [...valoresAtuais, novoValor]);
        setNovoValor('');
      }
    };
  

  // Estado para opções de Ativo Operado
  const [AtivoOperadoOptions, setAtivoOperadoOptions] = useState([
    { value: 'Mini Indice', label: 'Mini Indice' },
    { value: 'Mini Dólar', label: 'Mini Dólar' },
    // Adicione mais opções conforme necessário
  ]);

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
  ]);

  const initialValues = {
    diaMes: '',
    Hora: '',
    estrategia: '',
    relacaoRiscoRetorno: '',
    assertividade: '',
    numeroOperacoes: '',
    AtivoOperado: '',
    capitalDisponivel:'',
    quantidadeContratos: '',
    valorContrato: '',
    riscoPontosOperacao:'',
    metaPontosOperacao: '',
    calcularCapitalMinimo : '',
    entrada: '',
    saida: '',
    entradaStopLoss: '',
    saidaStopLoss: '',
    riscoMaximo: '',
    riscoMinimo: '',
    capitalMinimo: '',
    comentarios: '',
  };

  // Adicionando um novo setup ou selecionando um existente
  const handleSetupChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    // Atualize o estado com o novo valor ou a seleção
  };

  const handleAtivoOperadoChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    // Atualize o estado com o novo valor ou a seleção
  };

    // Função para criar um novo trade (limpa o trade atual)
    const newPlan = () => {
      dispatch({ type: 'RESET_CURRENT_PLAN' });
    };

// Supondo que a função fetchTrades esteja definida assim:
const fetchTrades = async () => {
  try {
    const response = await axios.get(apiURL);
    dispatch({ type: 'SET_TRADES', payload: response.data });
  } catch (error) {
    toast.error("Erro ao buscar trades.");
  }
};

// Função para deletar um trade
const handleDelete = async (tradeId) => {
  try {
    await axios.delete(`${apiURL}/${tradeId}`);
    toast.success('Trade excluído com sucesso!');
    fetchTrades(); // Atualiza a lista de trades após a exclusão
  } catch (error) {
    toast.error("Erro ao excluir trade.");
  }
};


// UseEffect para carregar trades quando o componente é montado
useEffect(() => {
  fetchTrades();
}, []);

const handleSetCurrentTradeForEdit = (trade) => {
  dispatch({ type: 'SET_CURRENT_TRADE', payload: trade });
};


      // Supondo a definição de estados relevantes no componente
   // Suponha que este estado e setter já estejam definidos
  const [novoSetup, setNovoSetup] = useState('');
  const [novoAtivoOperado, setNovoAtivoOperado] = useState('');

// Para adicionar um novo setup
const handleAdicionarSetup = () => {
  if (novoSetup.trim() !== '') {
    setSetupOptions(setupsAnteriores => [...setupsAnteriores, { label: novoSetup, value: novoSetup }]);
    setNovoSetup(''); // Limpar após adicionar
  }
};

// Similarmente para adicionar um novo Ativo Operado
const handleAdicionarAtivoOperado = () => {
  if (novoAtivoOperado.trim() !== '') {
    setAtivoOperadoOptions(ativosAnteriores => [...ativosAnteriores, { label: novoAtivoOperado, value: novoAtivoOperado }]);
    setNovoAtivoOperado(''); // Limpar após adicionar
  }
};

    return (
      <div>
        <NavBarPlanejamento />

<br/>
<br/>
<br/>
<br/>
        <header className="header-text center me-auto">
          <h5 className="sub-title-text-center">Bem-vindo(a) ao Planejamento Trader!</h5>
        </header>
        
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
        <Form className="container-FormularioPlanejamento mt-5">
        
          <div>
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
            <label htmlFor="novoSetup">Setup</label>
            <CreatableSelect
              isClearable
              onChange={handleSetupChange}
              options={setupOptions}
            />
           <button type="button" className="btn btn-primary" onClick={adicionarValor} >Adicionar Setup</button>
          </div>

          <div className="form-group">
            <label htmlFor="relacaoRiscoRetorno">Relação Risco x Retorno:</label>
            <Field name="relacaoRiscoRetorno" type="text" className="form-control" />
            <ErrorMessage name="relacaoRiscoRetorno" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="assertividade">Taxa de assertividade:</label>
            <Field name="assertividade" type="text" className="form-control" />
            <ErrorMessage name="assertividade" component="div" className="error-message" />
          </div>


          <div className="form-group">
            <label htmlFor="numeroOperacoes">Número de Operacoes no dia:</label>
            <Field name="numeroOperacoes" type="text" className="form-control" />
            <ErrorMessage name="numeroOperacoes" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="AtivoOperado">Ativo Operado</label>
            <CreatableSelect
              isClearable
              onChange={handleAtivoOperadoChange}
              options={AtivoOperadoOptions}
            />
           <button type="button" className="btn btn-primary" onClick={adicionarValor} >Adicionar Ativo Operado</button>
          </div>

          <div className="form-group">
            <label htmlFor="capitalDisponivel">Capital Disponível</label>
            <Field name="capitalDisponivel" type="text" className="form-control" />
            <ErrorMessage name="capitalDisponivel" component="div" className="error-message" />
          </div>


          <div className="form-group">
            <label htmlFor="quantidadeContratos">Quantidade Contratos?</label>
            <Field name="quantidadeContratos" type="text" className="form-control" />
            <ErrorMessage name="quantidadeContratos" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="valorContrato">Qual o valor do contrato?</label>
            <Field name="valorContrato" type="text" className="form-control" />
            <ErrorMessage name="valorContrato" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="riscoPontosOperacao">Qual risco por operação?</label>
            <Field name="riscoPontosOperacao" type="text" className="form-control" />
            <ErrorMessage name="riscoPontosOperacao" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="metaPontosOperacao">Meta Pontos por Operacao?</label>
            <Field name="metaPontosOperacao" type="text" className="form-control" />
            <ErrorMessage name="metaPontosOperacao" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="capitalMinimo">Capital Mínimo Necessário:</label>
            <input 
              className="form-control"
              type="text" 
              id="capitalMinimo" 
              
              value={capitalMinimo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
              readOnly
            />
            <ErrorMessage name="capitalMinimo" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="entrada">Entrada</label>
            <Field name="entrada" type="text" className="form-control" />
            <ErrorMessage name="entrada" component="div" className="error-message" />
          </div>
          
          <div className="form-group">
            <label htmlFor="saida">Saída</label>
            <Field name="saida" type="text" className="form-control" />
            <ErrorMessage name="saida" component="div" className="error-message" />
          </div>

          
          <div className="form-group">
            <label htmlFor="entradaStopLoss">Entrada Stop Loss</label>
            <Field name="entradaStopLoss" type="text" className="form-control" />
            <ErrorMessage name="entradaStopLoss" component="div" className="error-message" />
          </div>

          
          <div className="form-group">
            <label htmlFor="saidaStopLoss">Saída Stop Loss</label>
            <Field name="saidaStopLoss" type="text" className="form-control" />
            <ErrorMessage name="saidaStopLoss" component="div" className="error-message" />
          </div>


          <div className="form-group">
            <label htmlFor="riscoMaximo">Risco Máximo aceitável</label>
            <Field name="riscoMaximo" type="text" className="form-control" />
            <ErrorMessage name="riscoMaximo" component="div" className="error-message" />
          </div>

          
          <div className="form-group">
            <label htmlFor="riscoMinimo">Risco Mínimo aceitável</label>
            <Field name="riscoMinimo" type="text" className="form-control" />
            <ErrorMessage name="riscoMinimo" component="div" className="error-message" />
          </div>


          <div className="form-group">
            <label htmlFor="capitalMinimo">Capital Mínimo sugerido</label>
            <Field name="capitalMinimo" type="text" className="form-control" />
            <ErrorMessage name="capitalMinimo" component="div" className="error-message" />
          </div>

          
          <div className="form-group">
            <label htmlFor="comentarios">Comentários</label>
            <Field name="comentarios" as="textarea" rows="5" className="form-control" />
            <ErrorMessage name="comentarios" component="div" className="error-message" />
          </div>

          

           {/* Exemplo de implementação dos botões dentro de um contexto de listagem de trades */}
              {state.trades.map((trade) => (
                <div key={trade.id}>
                  {/* Informações do trade */}
                  <button type="button" className="btn btn-editar" onClick={() => handleSetCurrentTradeForEdit(trade)}>Alterar</button>
                  <button type="button" className="btn btn-delete" onClick={() => handleDelete(trade.id)}>Excluir</button>
                </div>
              ))}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Enviar</button>
            <button type="button" className="btn btn-primary" onClick={() => dispatch({ type: 'RESET_CURRENT_PLAN' })}>Novo Planejamento</button>
            
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default PlanejamentoTrader;
