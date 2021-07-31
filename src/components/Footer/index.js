import React, { Component } from "react";
import { CgOrganisation } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdWatchLater, MdLocationOn } from "react-icons/md";
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
                    <a className="info-link" href="tel:+55-67-99265-6801">
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
                    <a href="https://wa.me/+5567992656801">
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
                    <a href="mailto:reinaldoeng@yahoo.com?subject=">
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
            <h3>Contato</h3>
            <div className="footer-infos">
              <ul>
                <li>
                  <p>
                    <IoLogoWhatsapp />
                    (67) 123456789
                  </p>
                </li>
                <li>
                  <p>
                    <MdEmail />
                    reinaldoeng@yahoo.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-container">
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
                    De Segunda à Sexta Das 09h às 18h
                  </p>
                </li>
                <li>
                  <p>
                    <MdWatchLater />
                    Sábado Das 09h às 14h
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-info">
          <p>© 2021 reitec serviços - Todos direitos reservados.</p>
          <p>
            Desenvolvido por <a href="https://felipevaldez.netlify.app">FV</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
