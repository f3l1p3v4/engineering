import React, { Component } from "react";

import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
//import { ImInstagram } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";

import logo from "../../assets/logo.png";

import "./styles.css";

import Drawer from "../Menu/Drawertogglebutton";
import MenuOverlay from "../Menu/MenuOverlay";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOverlayOpen: false
    };
    this.overlayToggleClickHandler = this.overlayToggleClickHandler.bind(this);
  }

  overlayToggleClickHandler = () => {
    this.setState((prevState) => ({
      menuOverlayOpen: !prevState.menuOverlayOpen
    }));
  };

  overlayCloseClickHandler = () => {
    this.setState({ menuOverlayOpen: false });
  };

  render() {
    return (
      <>
        <header>
          <MenuOverlay
            click={this.overlayCloseClickHandler}
            show={this.state.menuOverlayOpen}
          />
          <nav className="navbar">
            <div>
              <a href="/" className="logo-main">
                <img src={logo} alt="Logo DevLoad" className="logo" />
              </a>
            </div>
            <div className="spacer" />
            <div className="navbar-menu">
              <ul>
                <li>
                  <div className="navbar-contact">
                    <AiFillPhone />
                    <div>
                      <h3>Reinaldo</h3>
                      <p>(67) 98218-3109</p> <p>(67) 3355-2035</p>{" "}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="navbar-contact">
                    <MdEmail />
                    <div>
                      <h3>Email</h3>
                      <p>reitecs@yahoo.com</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <Drawer className="drawer" click={this.overlayToggleClickHandler} />
          </nav>
          <nav className="sub-navbar">
            <div className="sub-navbar-menu">
              <ul>
                <li>
                  <a href="/">INÍCIO</a>
                </li>
                <li>
                  <a href="/#type-service">SERVIÇOS</a>
                </li>
                <li>
                  <a href="/#contact">CONTATO</a>
                </li>
              </ul>
              <div className="spacer" />
              <div className="sub-navbar-icon">
                <a href="https://instagram.com/reitecsmp">
                  <IoLogoInstagram />
                  @reitecsmp
                </a>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
