import React from 'react';

const Body = () => {
  return (
    <section class="body">
      <main class="geral">
        <div class="saldo-lancamentos">
              <h3>Saldo e extrato da conta</h3>
              <ul class="saldo-lancamentos__menu">
              <li role="presentation" class="saldo-lancamentos__menu active">Últimos Lançamentos</li>
              <li role="presentation" class="saldo-lancamentos__menu">Lançamentos Futuros</li>
              <li role="presentation" class="saldo-lancamentos__menu">Ver Extrato</li>
            </ul>
            <div class="saldo-lancamentos__limite">
                <div class="saldo-lancamentos__limite--fatura-aberta">
                  <img src="./assets/cartao_credito.png" alt="" /> 
                </div>
                <div class="lancamentos__limite--fatura">
                  <p>Limite disponível</p>
                  <h5 ><span class="saldo-lancamentos__limite--simbolo">R$</span>1.000,00</h5>
                  <p>Melhor dia de compras</p>
                </div>
            </div>
            <div class="fatura-aberta">
              <p>Fatura aberta</p>
              <h4 class="fatura-valor">R$ 100,00</h4>
              <p>vencimento 08/09</p>
            </div>

            {/* <div class="saldo-extrato">
              <ul class="saldo-lancamentos__menu tabela-header">
              <li role="presentation" class="saldo-lancamentos__menu tabela-header">Data</li>
              <li role="presentation" class="saldo-lancamentos__menu">Descrição</li>
              <li role="presentation" class="saldo-lancamentos__menu">Valor (RS)</li>
            </ul>
                <div class="extrato-tabela">
                  <ul class="saldo-lancamentos__menu tabela">
                    <li role="presentation" class="saldo-lancamentos__menu tabela">21/08</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">SALDO</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">1.000,00</li>
                  </ul>
                </div>
                <div class="extrato-tabela">
                  <ul class="saldo-lancamentos__menu tabela">
                    <li role="presentation" class="saldo-lancamentos__menu tabela">21/08</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">Energia</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">100,00</li>
                  </ul>
                </div>
                <div class="extrato-tabela">
                  <ul class="saldo-lancamentos__menu tabela">
                    <li role="presentation" class="saldo-lancamentos__menu tabela">21/08</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">Michele</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">100,00</li>
                  </ul>
                </div>
                <div class="extrato-tabela">
                  <ul class="saldo-lancamentos__menu tabela">
                    <li role="presentation" class="saldo-lancamentos__menu tabela">19/08</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">Cinema</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">40,00</li>
                  </ul>
                </div>
                <div class="extrato-tabela">
                  <ul class="saldo-lancamentos__menu tabela">
                    <li role="presentation" class="saldo-lancamentos__menu tabela">19/08</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">Messias</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">80,00</li>
                  </ul>
                </div>
                <div class="extrato-tabela">
                  <ul class="saldo-lancamentos__menu tabela">
                    <li role="presentation" class="saldo-lancamentos__menu tabela">17/08</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">Internet</li>
                    <li role="presentation" class="saldo-lancamentos__menu tabela">120,00</li>
                  </ul>
                </div>
              </div> */}

        </div>
        <div class="dados-user">

          <div class="minha-conta">
            <div>
                <span class="dados-user_nome">Informações do cliente</span>
            </div>

            <div class="menuInfocliente">
              <div class ="menu_card">
                <span class="menuInfocliente_active">Minha Conta</span>
                <span class="menuInfocliente_inactive">Contatos</span>
                <span class="menuInfocliente_inactive">Agencia</span>
              </div>
              <div class = "Gerente">
                Seu Gerente
              </div>
            </div>

            <div class="menuInfocliente_columns">
                <div class="dados-user_informacoesCliente">
                    <h5 class="h5Size">Henrique C. Moraes</h5>
                    <span>Agência: 0704</span>
                    <span>Conta: 10258-8</span>
                    <span>CPF: 123.456.789-58</span>
                </div>
                <div class="dados-user_others">
                    <div>
                        <h5 class="h5Size">Beltrano detal</h5>
                        <div class="foto_beltrano"></div>
                    </div>
                    <span>Telefone: 9999-9999</span>
                    <span>Celular: 99999-9999</span>
                    <button>Enviar Menssagem</button>
                </div>
            </div>
          </div>

          <div class="pagamentos">
            <span class="dados-user_nome">Pagamentos</span>
            <div class="content_card_pagamento">
            <div class ="left_side_card">
              <div class="saldo-extrato_pagamento">
                <span class="pagamentos_span">Últimos pagamentos</span>
                    <div class="saldo-lancamentos__menu__pagamento">
                      <ul class="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">Energia</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div class="saldo-lancamentos__menu__pagamento">
                      <ul class="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">Energia</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div class="saldo-lancamentos__menu__pagamento">
                      <ul class="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">Energia</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div class="saldo-lancamentos__menu__pagamento">
                      <ul class="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">Energia</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class ="right_side_card">
                    <div class="saldo-extrato_pagamento">
                      <span class="pagamentos_span">Top pagamentos</span>
                        <div class="saldo-lancamentos__menu__pagamento">
                          <ul class="saldo-lancamentos__menu tabela__pagamento">
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">Energia</li>
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                          </ul>
                        </div>
                        <div class="saldo-lancamentos__menu__pagamento">
                          <ul class="saldo-lancamentos__menu tabela__pagamento">
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">Energia</li>
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                          </ul>
                        </div>
                      </div>
                        <button class="pagamento_button">
                          +
                        </button>
                    </div>
              </div>
            </div>
          <div class="ultimas-transferencias">
            <span class="dados-user_nome">Transferências</span>
            <div class="content_card_pagamento">
            <div class ="left_side_card">
              <div class="saldo-extrato_pagamento">
                <span class="pagamentos_span">Últimas transferências</span>
                    <div class="saldo-lancamentos__menu__pagamento">
                      <ul class="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">Lucas</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div class="saldo-lancamentos__menu__pagamento">
                      <ul class="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">Fabiano</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div class="saldo-lancamentos__menu__pagamento">
                      <ul class="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">Michele</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div class="saldo-lancamentos__menu__pagamento">
                      <ul class="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">Messias</li>
                        <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class ="right_side_card">
                    <div class="saldo-extrato_pagamento">
                      <span class="pagamentos_span">Top transferências</span>
                        <div class="saldo-lancamentos__menu__pagamento">
                          <ul class="saldo-lancamentos__menu tabela__pagamento">
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">Lucas</li>
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                          </ul>
                        </div>
                        <div class="saldo-lancamentos__menu__pagamento">
                          <ul class="saldo-lancamentos__menu tabela__pagamento">
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">21/08</li>
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">Fabiano</li>
                            <li role="presentation" class="saldo-lancamentos__menu__pagamento">100,00</li>
                          </ul>
                        </div>
                      </div>
                        <button class="pagamento_button">
                          +
                        </button>
                    </div>
              </div>
            </div>
          </div>
        </main>
        </section>
  );
}
export default Body;