        import React, { useState } from 'react';
        import NavBarRisco from "./NavBarRisco";
        import './gerenciamentorisco.css';


        const GerenciamentoRisco = () => {
          const [quantidadeContrato, setQuantidadeContrato] = useState(0);
          const [quantidadePontos, setQuantidadePontos] = useState(0);
          const [valorContrato, setValorContrato] = useState(0); // Valor numérico para cálculos
          const [valorContratoFormatado, setValorContratoFormatado] = useState(""); // Valor formatado para exibição
          const [resultadoRisco, setResultadoRisco] = useState(0);

          const calcularResultadoRisco = () => {
            const resultado = quantidadeContrato * quantidadePontos * valorContrato;
            setResultadoRisco(resultado);
          };

          const formatCurrency = (value) => {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
          };

          const atualizarValorContrato = (valor) => {
            // Permite números e ponto decimal, mas evita múltiplos pontos decimais
            const valorLimpo = valor.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
          
            // Verifica se o valor termina em ponto decimal ou é apenas um ponto para manter a formatação
            if (valorLimpo.match(/\.$/) || valorLimpo === ".") {
              setValorContratoFormatado(valorLimpo);
            } else {
              const valorNumerico = parseFloat(valorLimpo);
              // Atualiza o estado numérico apenas com valores válidos, caso contrário, usa 0
              setValorContrato(valorNumerico || 0);
              // Atualiza o estado formatado com o valor formatado ou mantém o input limpo se for NaN
              setValorContratoFormatado(valorNumerico ? formatCurrency(valorNumerico) : valorLimpo);
            }
          };

          const limparCalculo = () => {
            setQuantidadeContrato(0);
            setQuantidadePontos(0);
            setValorContrato(0);
            setValorContratoFormatado(""); // Resetar para a string vazia ou valor inicial formatado
            setResultadoRisco(0);
          };
          
          

          return (
          <div>
              <NavBarRisco />

              <div className="main-container">
                <header className='sobre_gerenciamentorisco_texto'>
                  <h5 className="sub-title-text-center">Bem-vindo(a) ao Gerenciamento de Risco!</h5>
                </header>  

                <div className="content-flex">
                  <section className='sobre_gerenciamentorisco'>
                     <h6>
                      <article className='sobre_gerenciamentorisco_texto'>

                        <h5 className='sobre_gerenciamentorisco_texto'>Gerenciamento de Risco</h5>

                        <p>Criar um sistema de gerenciamento de risco sólido é fundamental para quem pratica o day trade, pois essa modalidade de negociação envolve decisões rápidas e frequentes que podem resultar em grandes ganhos ou perdas. Aqui estão algumas etapas para criar um gerenciamento de risco eficaz para o day trade:</p>

                        <h5 className='sobre_gerenciamentorisco_texto'>Defina seu capital de risco</h5>
                        
                        <p>Determine a quantia de dinheiro que você está disposto a arriscar em cada operação. Essa quantia deve ser uma porcentagem do seu capital total disponível para o day trade. 
                        Um valor comum é de 1% a 3% do capital total por operação.</p>
                                              
                        <h5 className='sobre_gerenciamentorisco_texto'>Limite Máximo de Risco POR Trade(LMRT)</h5>

                        <p>Maximize suas chances de sucesso no mercado com uma estratégia inteligente de risco. Ao operar com um Limite Máximo de Risco POR Trade(LMRT), você não só protege seu capital, 
                        mas também abre a porta para múltiplas oportunidades de ganho.</p>
                        <p>Lembre-se, a diversificação não é apenas uma escolha, é uma necessidade. Após atingir o Limite Máximo de Risco POR Trade (LMRT), mude de ativo. Isso não é um recuo, é uma tática para ampliar suas vitórias.</p>
                        <p>Defina um limite máximo de perda diária que você está disposto a suportar. Quando esse limite for atingido, pare de negociar no dia. Isso evita que perdas significativas se acumulem.</p>

                        <h5 className='sobre_gerenciamentorisco_texto'>Limite Máximo de Perda POR DIA (LMPD)</h5>

                        <p>Defina um limite máximo de perda diária (LMPD) que você está disposto a suportar. Quando esse limite for atingido, pare de negociar no dia. Isso evita que perdas significativas se acumulem.</p>

                        <h5 className='sobre_gerenciamentorisco_texto'>Calcule o tamanho da posição</h5>

                        <p>Baseado no seu capital de risco e na distância entre o ponto de entrada e o stop loss, calcule o tamanho da posição. Certifique-se de que, se o stop loss for acionado, 
                        você não perderá mais do que o valor estipulado como risco por operação.</p>

                        <h5 className='sobre_gerenciamentorisco_texto'>Defina seu stop loss</h5>

                        <p>Estabeleça níveis de stop loss para cada operação. O stop loss é o ponto em que você sairá da operação para limitar as perdas. 
                        Ele deve ser calculado de forma apropriada com base na análise técnica do ativo que você está negociando..</p>

                        <h5 className='sobre_gerenciamentorisco_texto'>Determine sua relação risco/recompensa</h5>

                        <p>Antes de entrar em uma operação, defina a relação risco/recompensa. Isso significa que você deve saber quanto está disposto a arriscar em relação ao potencial de lucro. 
                        Uma relação comum é de 1:2, ou seja, você está disposto a arriscar $1 para ganhar $2.</p>

                        <h5 className='sobre_gerenciamentorisco_texto'>Utilize ordens de stop e limite</h5>

                        <p>Use ordens de stop para proteger suas posições em caso de movimentos adversos do mercado. Além disso, 
                        utilize ordens de limite para automatizar a saída quando suas metas de lucro forem atingidas.</p>

                        <h5 className='sobre_gerenciamentorisco_texto'>Evite overtrading</h5>

                        <p>Não negocie em excesso. Estabeleça um número máximo de operações por dia e siga-o rigorosamente. Overtrading pode levar a decisões impulsivas e a um aumento do risco.</p>
                      
                        <h5 className='sobre_gerenciamentorisco_texto'>Mantenha registros detalhados</h5>

                        <p>Registre todas as suas operações, incluindo as razões para entrar e sair de cada uma. Isso permitirá que você avalie seu desempenho e 
                        faça ajustes no seu sistema de gerenciamento de risco conforme necessário.</p>

                        <h5 className='sobre_gerenciamentorisco_texto'>Fique disciplinado</h5>

                        <p>A disciplina é fundamental para o sucesso no day trade. Siga seu plano de gerenciamento de risco e evite tomar decisões emocionais.</p>
                      
                        <h5 className='sobre_gerenciamentorisco_texto'>Aprenda com suas perdas</h5>

                        <p>Não veja as perdas como fracassos, mas como oportunidades de aprendizado. Analise suas operações perdedoras para identificar erros e melhorar o seu sistema de gerenciamento de risco.</p>
                     
                      </article>
                    </h6>
                  </section>

                <section className='calculo-gerenciamento-risco-container'>

                  <h4 className='calculo-gerenciamento-risco-texto'>Cálculo de Gerenciamento de Risco</h4>

                  <div className="gerenciamento-risco-container">
                    <div className="input-container-gerenciamento-risco">
                      <label htmlFor="quantidadeContrato" className="form-label">Quantidade de Contrato</label>
                      <input
                        type="number"
                        id="quantidadeContrato"
                        value={quantidadeContrato}
                        onChange={(e) => setQuantidadeContrato(Number(e.target.value))}
                      />
                    </div>

                    <div className="input-container-gerenciamento-risco">
                      <label htmlFor="quantidadePontos" className="form-label">Quantidade de Pontos</label>
                      <input
                        type="number"
                        id="quantidadePontos"
                        value={quantidadePontos}
                        onChange={(e) => setQuantidadePontos(Number(e.target.value))}
                      />
                    </div>

                    <div className="input-container-gerenciamento-risco">
                      <label htmlFor="valorContrato" className="form-label">Valor do Contrato</label>
                      
                      <input
                        type="text" // Alterado de number para text para permitir a máscara
                        Placeholder="Utilize ponto para decimal"
                        id="valorContrato"
                        value={valorContratoFormatado} // Usar o valor formatado aqui
                        onChange={(e) => atualizarValorContrato(e.target.value)}
                      />
                    </div>

                    <div className="input-container-container-gerenciamento-risco" >
                      <label htmlFor="resultadoRisco" className="form-label">Resultado do Risco</label>
                      <input
                        type="text"
                        value={formatCurrency(resultadoRisco)}
                        readOnly
                      />
                    </div>

                    <button btn className="btn btn-calcular-return" onClick={calcularResultadoRisco}>Calcular</button>
                    <button className="btn btn-Formulario-clear" onClick={limparCalculo}>Limpar</button>

                    </div>
                

            </section>

          </div>
        </div>
      </div>
          );
        };

        export default GerenciamentoRisco;