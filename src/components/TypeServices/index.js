import React from "react";
import cleaning from "../../assets/services/cleaning.png";
import generator from "../../assets/services/generator.png";

import "./styles.css";

const TypeServices = () => {
  return (
    <div id="type-service">
      <h1>Serviços</h1>
      <section>
        <div className="type-service-container">
          <div className="type-service-title" style={{ textAlign: "right" }}>
            <h2>Limpeza e conservação predial</h2>
            <p>
              Consiste em manter um ambiente limpo e organizado, que permite
              transmitir uma imagem positiva para todos os que frequentam o
              prédio.
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
              O plano de manutenção preventiva é fundamental para garantir o
              fornecimento de energia confiável, o bom funcionamento e a
              durabilidade de seu grupo gerador.
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
              A manutenção e a higienização do seu ar-condicionado é muito
              importante para evitar custos maiores, pois diminuem os problemas
              e evitam desgastes desnecessários de peças, além de garantir o
              aumento da vida útil do seu equipamento.
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
              hidráulica e reformar predial.
            </p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
          <div className="type-service-img">
            <img src={cleaning} alt="Limpeza" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TypeServices;
