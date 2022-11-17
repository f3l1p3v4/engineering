import React, { Component } from "react";
//import { CgOrganisation } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
//import { MdEmail, MdWatchLater, MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="footer-social">
          <div>
            <div className="social-container">
              <div className="social-icon">
                <ul>
                  <li>
                    <a className="info-link" href="tel:+55-67-3355-2035">
                      <AiFillPhone />
                      <h3>Ligar agora </h3>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social-container">
              <div className="social-icon">
                <ul>
                  <li>
                    <a href="https://wa.me/+5567982183109">
                      <IoLogoWhatsapp />
                      <h3>Enviar um Whats </h3>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social-container">
              <div className="social-icon">
                <ul>
                  <li>
                    <a href="mailto:reitecs@yahoo.com?subject=">
                      <MdEmail />
                      <h3>Enviar </h3>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-container">
            <h3>Contatos</h3>
            <div className="footer-infos">
              <ul>
                <li>
                  <p>
                    <IoLogoWhatsapp />
                    (67) 98218-3109
                  </p>
                </li>
                <li>
                  <p>
                    <AiFillPhone />
                    (67) 3355-2035
                  </p>
                </li>
                <li>
                  <p>
                    <MdEmail />
                    reitecs@yahoo.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/*<div className="footer-container">
            <h3>Endereço</h3>
            <div className="footer-infos">
              <ul>
                <li>
                  <p>
                    <CgOrganisation />
                    Rua não sei N° 000 - 79052-066
                  </p>
                </li>
                <li>
                  <p>
                    <MdLocationOn />
                    Bairro não sei Campo Grande - MS
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-container">
            <h3>Atendimento</h3>
            <div className="footer-infos">
              <ul>
                <li>
                  <p>
                    <MdWatchLater />
                    De Segunda à Sexta Das 06h às 21h
                  </p>
                </li>
                <li>
                  <p>
                    <MdWatchLater />
                    Sábado Das 06h às 14h
                  </p>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <hr />
        <div className="footer-info">
          <p>© 2021 reitec serviços de Engenharia - Todos direitos reservados.</p>
          <p>
            Desenvolvido por <a href="https://felipevaldez.netlify.app">FV</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
