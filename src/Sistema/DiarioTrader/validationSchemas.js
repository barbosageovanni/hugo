// src/validationSchemas.js

import * as Yup from 'yup';

export const tradeValidationSchema = Yup.object({
  trade: Yup.string()
    .required('O campo trade é obrigatório'),
  Resultado: Yup.string()
    .required('O campo Resultado é obrigatório'),
  diaMes: Yup.date()
    .required('O campo dia/mês é obrigatório'),
  Hora: Yup.string()
    .required('O campo Hora é obrigatório'),
  tradeDia: Yup.string()
    .required('O campo trade do Dia é obrigatório'),
  AtivoOperado: Yup.string()
    .required('O campo Ativo Operado é obrigatório'),
  TipoOperacao: Yup.string()
    .required('O campo Tipo de Operação é obrigatório')
    .oneOf(['Compra', 'Venda'], 'Tipo de operação inválido'),
  Setup: Yup.string()
    .required('O campo Setup é obrigatório'),
  GatilhoEntrada: Yup.string()
    .required('O campo Gatilho de Entrada é obrigatório'),
  MMA9: Yup.string()
    .required('O campo MMA9 é obrigatório'),
  MMA20: Yup.string()
    .required('O campo MMA20 é obrigatório'),
  MMA200: Yup.string()
    .required('O campo MMA200 é obrigatório'),
  TipoEntrada: Yup.string()
    .required('O campo Tipo de Entrada é obrigatório'),
  TradeRealizado: Yup.string()
    .required('O campo Trade Realizado é obrigatório'),
  TipoStop: Yup.string()
    .required('O campo Tipo de Stop é obrigatório'),
  LocalStop: Yup.string()
    .required('O campo Local do Stop é obrigatório'),
  GestaoStop: Yup.string()
    .required('O campo Gestão de Stop é obrigatório'),
  QualoErro: Yup.string()
    .required('O campo Qual o Erro é obrigatório'),
  ResultadoMonetario: Yup.number()
    .required('O campo Resultado Monetário é obrigatório')
    .typeError('O campo Resultado Monetário deve ser um número'),
  ResultadoEmPtos: Yup.number()
    .required('O campo Resultado em Pontos é obrigatório')
    .typeError('O campo Resultado em Pontos deve ser um número'),
  Comentarios: Yup.string()
    .max(500, 'Os comentários não podem exceder 500 caracteres'),
});

