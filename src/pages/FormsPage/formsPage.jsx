import React, { useState } from "react";
import "./formsPage.css";

import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer"

import instagram from "../../assets/img/instagram.png"
import whatsapp from "../../assets/img/whatsapp.png"

const FormsPage = () => {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <div className="header">
        <div className="top-header">
          <div className={navBar ? "menu-div sticky" : "menu-div"}>
            <Menu
              inicio="#inicio"
              cme="#cme"
              beneficio="#beneficio"
              etapa="#etapa"
              beneficio2="#beneficio2"
            />
          </div>
        </div>
        <div className="title-content">
          <p className="title">LetsInove Web Solutions</p>
        </div>
      </div>
      <div className="container forms">
        <p className="textCenter">
          O contato imediato é importante para que seu sistema fique pronto o
          mais rápido possível
        </p>
        <form>
          <div className="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Telefone
            </label>
            <input
              type="phone"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Mensagem
            </label>
            <input
              type="message"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <p>Assunto</p>
            <select className="form-select" aria-label="Default select example">
              <option selected>Selecione o tipo de assunto</option>
              <option value="1">Dúvidas sobre serviços</option>
              <option value="2">Orçamento de aplicação</option>
              <option value="3">Outro</option>
            </select>
          </div>
          <div className="buttonSend mb-3">
            <button type="submit" className="buttonSend" >
                Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="anotherContact">
        <p>Não deseja preencher um formulário?</p>
        <p>Contate pela plataforma de sua preferência!</p>
        <div className="icons">
            <a href="https://www.instagram.com/letsinove/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" className="imagemIcon" /></a>
            <a href="https://wa.me/5545999587883" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp" className="imagemIcon"/></a>
         </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default FormsPage;
