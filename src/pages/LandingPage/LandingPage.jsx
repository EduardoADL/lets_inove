import { useState } from "react";
import "./landingPage.css";
import caracteristicas from "../../assets/img/Caracteristicas.png";
import desenvolvimento from "../../assets/img/desenvolvimento.png";
import entrega from "../../assets/img/entrega.png";
import ButtonLarge from "../../components/ButtonLarge/buttonLarge";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";

import informationBen from "../../assets/data/informationBen.json";

const LandingPage = () => {
  const [navBar, setNavBar] = useState(false);

  function abreLink() {
    window.open("https://wa.me/5545999587883");
  }

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div id="inicio">
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
      <div className="mid-page">
        <div id="cme" className="container-texts-1">
          <div className="text-questions">
            <p>Você já tem um sistema para sua empresa?</p>
            <p>Como está o controle e gestão da sua empresa?</p>
          </div>
          <div className="response-questions">
            <p className="responses">
              A gestão da empresa é algo vital para o negócio, sendo
              importantíssimo uma boa organização nos dados gerais, desde uma
              venda até a organização de seu estoque e a gerencia de seus
              funcionários.
            </p>
            <p id="beneficio2" className="responses">
              Um sistema de gestão de fácil acesso, intuitivo para novos
              funcionários utilizarem, com tecnologias modernas , sendo possível
              acessar todas as informações nos smartphones ou computadores.
            </p>
          </div>
        </div>
        <div id="beneficio" className="container-texts-2">
          <div className="divBox">
            {informationBen[0].map((content) => (
              <div className="div-spec" key={content.id}>
                <p className="icon-espec">{content.name}</p>
                <p className="espec">{content.text}</p>
              </div>
            ))}
          </div>
          <div className="divBox">
            {informationBen[1].map((content) => (
              <div className="div-spec" key={content.id}>
                <p className="icon-espec">{content.name}</p>
                <p className="espec">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="scrolling-wrapper">
          {informationBen[0].map((content) => (
            <div className="div-spec-scroll" key={content.id}>
              <p className="icon-espec">{content.name}</p>
              <p className="espec-scroll">{content.text}</p>
            </div>
          ))}
          {informationBen[1].map((content) => (
            <div className="div-spec-scroll" key={content.id}>
              <p className="icon-espec">{content.name}</p>
              <p className="espec-scroll">{content.text}</p>
            </div>
          ))}
        </div>

        <div id="etapa" className="container-texts-3">
          <p className="title-plan">
            Etapas para o Desenvolvimento do seu Sistema! :D
          </p>
          <div className="divs-plan">
            <div className="div-plan">
              <div className="icon-plan">
                <img src={caracteristicas} alt="caracteristicas" />
                <p className="text-plan">Características do sistema</p>
              </div>
              <p className="plan">
                Com nossa equipe de profissionais iremos coletar as
                características e funcionalidades da aplicação. De acordo com a
                necessidade de seu negócio.
              </p>
            </div>
            <div className="div-plan">
              <div className="icon-plan">
                <img src={desenvolvimento} alt="desenvolvimento" />
                <p className="text-plan">Desenvolvimento</p>
              </div>
              <p className="plan">
                Nessa etapa é desenvolvido o seu sistema completo de acordo com
                as especificações da etapa anterior. Durante essa etapa você
                pode dar feedbacks e solicitar alterações.
              </p>
            </div>
            <div className="div-plan">
              <div className="icon-plan">
                <img src={entrega} alt="entrega" />
                <p className="text-plan">Entrega</p>
              </div>
              <p className="plan">
                Você recebe o sistema completo com todas as funcionalidades
                solicitadas e com possibilidade de manutenção mensal em seu
                sistema!
              </p>
            </div>
          </div>
          <ButtonLarge text="Quero meu sistema" click={() => abreLink()} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default LandingPage;
