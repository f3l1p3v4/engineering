import React, { Component } from "react";

import rfnsa from "../../assets/partners/rfnsa.png";
import msdigital from "../../assets/partners/msdigital.png";
import oggi from "../../assets/partners/oggi.png";
import sanches from "../../assets/partners/sanches.png";
import transpetro from "../../assets/partners/transpetro.png";
import janny from "../../assets/partners/janny.png";
import acelera from "../../assets/partners/acelera.png";

import "./styles.css";

class Partners extends Component {
  render() {
    return (
      <div className="partners">
        <h1>Parceiros</h1>
        <ul>
          <li>
            <img src={rfnsa} alt="Placas Solares" />
          </li>
          <li>
            <img src={msdigital} alt="Placas Solares" />
          </li>
          <li>
            <img src={oggi} alt="Placas Solares" />
          </li>
          <li>
            <img src={sanches} alt="Placas Solares" />
          </li>
          <li>
            <img src={transpetro} alt="Placas Solares" />
          </li>
          <li>
            <img src={janny} alt="Placas Solares" />
          </li>
          <li>
            <img src={acelera} alt="Placas Solares" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Partners;
