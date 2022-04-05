import React from "react";

import solar from "../../assets/services/solar.png";
import camera from "../../assets/services/camera.png";
import evaporative from "../../assets/services/evaporative.png";
import generator from "../../assets/services/generator.png";
import climate from "../../assets/services/climate.png";
import battery from "../../assets/services/battery.png";
import civil from "../../assets/services/civil.png";
import solder from "../../assets/services/solder.png";
import facades from "../../assets/services/facades.png";

import "./styles.css";

const TypeServices = () => {
  return (
    <div id="type-service">
      <h1>Serviços</h1>
      <section>
        <div className="type-service-container">
          <div className="type-service-title" style={{ textAlign: "right" }}>
            {/*
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
            */}
            <h2>
              Elaboração e execução de projetos de sistemas de energia solar
              fotovoltaico
            </h2>
            <p>Microgeração e Minigeração.</p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
          <div className="type-service-img">
            <img src={solar} alt="Placas Solares" />
          </div>
        </div>

        <div className="type-service-container">
          <div className="type-service-img">
            <img src={camera} alt="Gerador" />
          </div>
          <div className="type-service-title">
            <h2>Sistemas de CFTV</h2>
            <p>Venda, aluguel, instalação, monitoramento e manutenção.</p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
        </div>

        <div className="type-service-container">
          <div className="type-service-title" style={{ textAlign: "right" }}>
            <h2>Climatizadores evaporativo</h2>
            <p>Venda, instalação e manutenção.</p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
          <div className="type-service-img">
            <img src={evaporative} alt="Climatização Evaporativa" />
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
            <h2>Sistemas de climatização</h2>
            <p>Venda, instalação e manutenção.</p>
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
              Instalação de fontes de corrente contínua, bancos de baterias,
              QDCA's, QDCC's, inversores e nobreak's.
            </p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
        </div>

        <div className="type-service-container">
          {/*<div className="type-service-title" style={{ textAlign: "right" }}>
            <h2>Serviços de manutenção e reparos civil</h2>
            <p>
              Pintura, Drywall, trocas de fechaduras, serralheria, marcenaria,
              elétrica, hidráulica e reforma predial.
            </p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
          <div className="type-service-img">
            <img src={civil} alt="Civil" />
          </div>*/}
          <div className="type-service-title" style={{ textAlign: "right" }}>
            <h2>Serviços de reforma e manutenção predial</h2>
            <p>
              Serviços de reforma predial em geral, como manutenção de telhados
              e fachadas, pintura, revestimentos, elétrica, blindex, drywall,
              toldos de policarbonato, calhas e rufos, entre outros.
            </p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
          <div className="type-service-img">
            <img src={civil} alt="Civil" />
          </div>
        </div>

        <div className="type-service-container">
          <div className="type-service-img">
            <img src={solder} alt="Bateria" />
          </div>
          <div className="type-service-title">
            <h2>Serviços de Caldeiraria</h2>
            <p>
              Os serviços de confecção, manutenção, eleboração
              e reparos com soldas e instrumentos metálicos.
            </p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
        </div>

        <div className="type-service-container">
          <div className="type-service-title" style={{ textAlign: "right" }}>
            <h2>Fachadas em ACM</h2>
            <p>Instalação de fachadas em ACM</p>
            <div>
              <a href="/#contact">FAZER ORÇAMENTO</a>
            </div>
          </div>
          <div className="type-service-img">
            <img src={facades} alt="Climatização" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TypeServices;
