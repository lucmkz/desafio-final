import React from "react";

const Header = () => {
  return (
    <section className="header">
      <div className="header-div">
        <div className="header-div_left">
          <div className="header-iconeItau"></div>
          <div className="header-userInfos">
            <div className="header-userInfos_text">
              Olá, Henrique C. Moraes, bem vindo ao
            </div>
            <div className="header-userInfos_personalite"></div>
          </div>
        </div>
        <div className="header-div_right">
          <div className="header-busca">
            <input type="text" placeholder="Buscar" className="header-input" />
          </div>

          <div className="header-help"></div>

          <div className="header-settings"></div>

          <div className="header-notificação"></div>

          <div className="header-foto"></div>
        </div>
      </div>
    </section>
  );
};
export default Header;
