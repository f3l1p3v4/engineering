import React, { Component } from "react";

import Header from "../components/Header";
import About from "../components/About";
import TypeServices from "../components/TypeServices";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <TypeServices />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default HomePage;
