import React, { useState, useEffect, useCallback } from "react";

import { apiClientes } from "../../services/api";

const Extrato = () => {
  const [cliente, setCliente] = useState();

  useEffect(() => {
    request();
  }, []);

  const request = useCallback(async () => {
    const { data } = await apiClientes.get("/asd23423-sad3211-ssd546ad");
    setCliente(data);
  }, []);

  return (
    <div Nameclass="saldo-extrato">
      <ul class="saldo-lancamentos__menu tabela-header">
        <li role="presentation" class="saldo-lancamentos__menu tabela-header">
          Movimentação
        </li>
        <li role="presentation" class="saldo-lancamentos__menu">
          Operação
        </li>
        <li role="presentation" class="saldo-lancamentos__menu">
          Valor (R$)
        </li>
      </ul>
      {cliente?.contaCorrente?.movimentacao.slice(0, 20).map((iten) => (
        <h1>
          {
            <div class="extrato-tabela">
              <ul class="saldo-lancamentos__menu tabela">
                <li role="presentation" class="saldo-lancamentos__menu tabela">
                {iten.operacao} 
                </li>
                <li role="presentation" class="saldo-lancamentos__menu tabela">
                {iten.action} 
                </li>
                <li role="presentation" class="saldo-lancamentos__menu tabela">
                {iten.custo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
                </li>
              </ul>
            </div>
          }
        </h1>
      ))}
    </div>
  );
};
export default Extrato;
