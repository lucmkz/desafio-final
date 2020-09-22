import React from 'react';

const Aside = () => {
  return (
    <section className="menu">
      <div className="main_div_menu">
        <div className="menu-div">
          <div className="menu-home activeMenu">Home<i className="img-home"></i></div>              
          <div className="menu-home">Transferencia<i className="img-transferencia"></i></div>
          <div className="menu-home">Cartões<i className="img-cartoes"></i></div>   
          <div className="menu-home">Pagamento<i className="img-pagamento"></i></div>    
          <div className="menu-home">Empréstimos<i className="img-emprestimo"></i></div>    
          <div className="menu-home">Ajuda<i className="img-ajuda"></i></div>                        
        </div>
        </div>
    </section>
  );
}
export default Aside;