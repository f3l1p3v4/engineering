import React, { Component } from "react";

import rfnsa from "../../assets/partners/rfnsa.png";
import msdigital from "../../assets/partners/msdigital.png";
import oggi from "../../assets/partners/oggi.png";
import sanches from "../../assets/partners/sanches.png";

import "./styles.css";

class Partners extends Component {
  render() {
    return (
      <div className="partners">
        <h1>Parceiros</h1>
        <ul>
          <li>
            <a href="/">
              <img src={rfnsa} alt="Placas Solares" />
            </a>
          </li>
          <li>
            <a href="/#type-service">
              <img src={msdigital} alt="Placas Solares" />
            </a>
          </li>
          <li>
            <a href="/#contact">
              <img src={oggi} alt="Placas Solares" />
            </a>
          </li>
          <li>
            <a href="/#contact">
              <img src={sanches} alt="Placas Solares" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Partners;
