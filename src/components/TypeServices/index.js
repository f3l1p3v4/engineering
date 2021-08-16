import React from "react";

import cleaning from "../../assets/services/cleaning.png";
import generator from "../../assets/services/generator.png";
import climate from "../../assets/services/climate.png";
import battery from "../../assets/services/battery.png";
import civil from "../../assets/services/civil.png";

import "./styles.css";

const TypeServices = () => {
  return (
    <div id="type-service">
      <h1>Serviços</h1>
      <section>
        <div className="type-service-container">
          <div className="type-service-title" style={{ textAlign: "right" }}>
            <h2>Jardinagem, limpeza e conservação predial</h2>
            <p>
              Manter um ambiente limpo e organizado permite transmitir uma
              imagem positiva para todos os que frequentam sua empresa.
            </p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
          <div className="type-service-img">
            <img src={cleaning} alt="Limpeza" />
          </div>
        </div>

        <div className="type-service-container">
          <div className="type-service-img">
            <img src={generator} alt="Gerador" />
          </div>
          <div className="type-service-title">
            <h2>Manutenção de grupos geradores</h2>
            <p>
              O bom funcionamento de seu grupo gerador é fundamental para
              garantir o fornecimento de energia confiável.
            </p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
        </div>

        <div className="type-service-container">
          <div className="type-service-title" style={{ textAlign: "right" }}>
            <h2>Manutenção em sistemas de climatização</h2>
            <p>
              A manutenção e a higienização de seu ar-condicionado é muito
              importante para evitar problemas desnecessários e garantir o
              aumento da vida útil do seu equipamento.
            </p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
          <div className="type-service-img">
            <img src={climate} alt="Climatização" />
          </div>
        </div>

        <div className="type-service-container">
          <div className="type-service-img">
            <img src={battery} alt="Bateria" />
          </div>
          <div className="type-service-title">
            <h2>Implantação e manutenção de sistemas de energia AC/DC</h2>
            <p>
              Instalação de fontes de corrente continua, bancos de baterias,
              QDCA's, QDCC's, inversores e nobreak's.
            </p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
        </div>

        <div className="type-service-container">
          <div className="type-service-title" style={{ textAlign: "right" }}>
            <h2>Serviços de manutenção e reparos civil</h2>
            <p>
              Pintura, trocas de fechaduras, serralheria, marcenaria, elétrica,
              hidráulica e reforma predial.
            </p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
          <div className="type-service-img">
            <img src={civil} alt="Civil" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TypeServices;
