import React, { useEffect, useState, useCallback } from "react";
import { apiGerente } from "../../services/api";

const Gerente = () => {
  const [gerente, setGerente] = useState();

  useEffect(() => {
    request();
  }, []);

  const request = useCallback(async () => {
    const { data } = await apiGerente.get("/a343ass-9fd9gdf-sf46ds4f5s");
    setGerente(data);
  }, []);

  return (
    <>
      {gerente && (
        <>
          <div>
      <h5 class="h5Size">{gerente.nome}</h5>
            <div class="foto_beltrano"></div>
          </div>
      <span>Telefone: {gerente.contato.telefone}</span>
          <span>Celular: {gerente.contato.celular}</span>
          <span>Email: {gerente.contato.email}</span>
          <button>Enviar Menssagem</button>
        </>
      )}
    </>
  );
};

export default Gerente;
