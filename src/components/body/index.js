import React from 'react';

import Extrato from '../extrato'
import Gerente from '../gerente'

const Body = () => {
  return (
    <section className="body">
      <main className="geral">
        <div className="saldo-lancamentos">
              <h3>Saldo e extrato da conta</h3>
              <ul className="saldo-lancamentos__menu">
              <li role="presentation" className="saldo-lancamentos__menu active">Últimos Lançamentos</li>
              <li role="presentation" className="saldo-lancamentos__menu">Lançamentos Futuros</li>
              <li role="presentation" className="saldo-lancamentos__menu">Ver Extrato</li>
            </ul>
            <div className="saldo-lancamentos__limite">
                <div className="saldo-lancamentos__limite--fatura-aberta">
                  <div className="cartao_img" src="../../assets/cartao_credito.png" alt="" /> 
                </div>
                <div className="lancamentos__limite--fatura">
                  <p>Limite disponível</p>
                  <h5 ><span className="saldo-lancamentos__limite--simbolo">R$</span>1.000,00</h5>
                  <p>Melhor dia de compras</p>
                </div>
            </div>
            <div className="fatura-aberta">
              <p>Fatura aberta</p>
              <h4 className="fatura-valor">R$ 100,00</h4>
              <p>vencimento 08/09</p>
            </div>

            <Extrato />

        </div>
        <div className="dados-user">

          <div className="minha-conta">
            <div>
                <span className="dados-user_nome">Informações do cliente</span>
            </div>

            <div className="menuInfocliente">
              <div className ="menu_card">
                <span className="menuInfocliente_active">Minha Conta</span>
                <span className="menuInfocliente_inactive">Contatos</span>
                <span className="menuInfocliente_inactive">Agencia</span>
              </div>
              <div className = "Gerente">
                Seu Gerente
              </div>
            </div>

            <div className="menuInfocliente_columns">
                <div className="dados-user_informacoesCliente">
                    <h5 className="h5Size">Henrique C. Moraes</h5>
                    <span>Agência: 0704</span>
                    <span>Conta: 10258-8</span>
                    <span>CPF: 123.456.789-58</span>
                </div>
                
                <div className="dados-user_others">
                    <Gerente />
                </div>

            </div>
          </div>

          <div className="pagamentos">
            <span className="dados-user_nome">Pagamentos</span>
            <div className="content_card_pagamento">
            <div className ="left_side_card">
              <div className="saldo-extrato_pagamento">
                <span className="pagamentos_span">Últimos pagamentos</span>
                    <div className="saldo-lancamentos__menu__pagamento">
                      <ul className="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">Energia</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div className="saldo-lancamentos__menu__pagamento">
                      <ul className="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">Energia</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div className="saldo-lancamentos__menu__pagamento">
                      <ul className="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">Energia</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div className="saldo-lancamentos__menu__pagamento">
                      <ul className="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">Energia</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className ="right_side_card">
                    <div className="saldo-extrato_pagamento">
                      <span className="pagamentos_span">Top pagamentos</span>
                        <div className="saldo-lancamentos__menu__pagamento">
                          <ul className="saldo-lancamentos__menu tabela__pagamento">
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">Energia</li>
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                          </ul>
                        </div>
                        <div className="saldo-lancamentos__menu__pagamento">
                          <ul className="saldo-lancamentos__menu tabela__pagamento">
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">Energia</li>
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                          </ul>
                        </div>
                      </div>
                        <button className="pagamento_button">
                          +
                        </button>
                    </div>
              </div>
            </div>
          <div className="ultimas-transferencias">
            <span className="dados-user_nome">Transferências</span>
            <div className="content_card_pagamento">
            <div className ="left_side_card">
              <div className="saldo-extrato_pagamento">
                <span className="pagamentos_span">Últimas transferências</span>
                    <div className="saldo-lancamentos__menu__pagamento">
                      <ul className="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">Lucas</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div className="saldo-lancamentos__menu__pagamento">
                      <ul className="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">Fabiano</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div className="saldo-lancamentos__menu__pagamento">
                      <ul className="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">Michele</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                    <div className="saldo-lancamentos__menu__pagamento">
                      <ul className="saldo-lancamentos__menu tabela__pagamento">
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">Messias</li>
                        <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className ="right_side_card">
                    <div className="saldo-extrato_pagamento">
                      <span className="pagamentos_span">Top transferências</span>
                        <div className="saldo-lancamentos__menu__pagamento">
                          <ul className="saldo-lancamentos__menu tabela__pagamento">
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">Lucas</li>
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                          </ul>
                        </div>
                        <div className="saldo-lancamentos__menu__pagamento">
                          <ul className="saldo-lancamentos__menu tabela__pagamento">
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">21/08</li>
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">Fabiano</li>
                            <li role="presentation" className="saldo-lancamentos__menu__pagamento">100,00</li>
                          </ul>
                        </div>
                      </div>
                        <button className="pagamento_button">
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