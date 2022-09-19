import React, { Component } from "react";

import rfnsa from "../../assets/partners/rfnsa.png";
import msdigital from "../../assets/partners/msdigital.png";
import brdigital from "../../assets/partners/brdigital.png";
import alt from "../../assets/partners/alt.png";
import oggi from "../../assets/partners/oggi.png";
import transpetro from "../../assets/partners/transpetro.png";
import acelera from "../../assets/partners/acelera.png";
import paratinet from "../../assets/partners/paratinet.png";

import "./styles.css";

class Partners extends Component {
  render() {
    return (
      <div className="partners">
        <h1>Clientes</h1>
        <ul>
          <li>
            <img src={rfnsa} alt="Rfnsa logo empresa" />
          </li>
          <li>
            <img src={msdigital} alt="msdigital logo empresa" />
          </li>
          <li>
            <img src={brdigital} alt="brdigital logo empresa" />
          </li>
          <li>
            <img src={alt} alt="alt logo empresa" />
          </li>
          <li>
            <img src={oggi} alt="Oggi logo empresa" />
          </li>
          <li>
            <img src={transpetro} alt="Transpetro logo empresa" />
          </li>
          <li>
            <img src={paratinet} alt="Paratinet logo empresa" />
          </li>
          <li>
            <img src={acelera} alt="Acelera logo empresa" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Partners;
