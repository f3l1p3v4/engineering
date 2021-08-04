import React from "react";
import { Link } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

import "./styles.css";

const MenuOverlay = (props) => {
  let overlayClasses = "menu-overlay";
  if (props.show) {
    overlayClasses = "menu-overlay open";
  }
  return (
    <nav className={overlayClasses}>
      <ul>
        <li onClick={props.click}>
          <Link to="/">Início</Link>
        </li>
        <li onClick={props.click}>
          <a href="/#type-service">Serviços</a>
        </li>
        <li onClick={props.click}>
          <a href="/#contact">Contato</a>
        </li>
        <li onClick={props.click} className="contact">
          <a href="www.google.com" style={{ marginTop: 30 }}>
            <AiFillPhone />
            <div>
              <h3>Reinaldo</h3>
              <p>(67) 98218-3109</p>
            </div>
          </a>
        </li>
        <li onClick={props.click} className="contact">
          <a href="www.google.com">
            <MdEmail />
            <div>
              <h3>Email</h3>
              <p>reinaldoeng@yahoo.com</p>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverlay;
