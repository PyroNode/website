import React from "react";

import "../styles/Header.css"
//static
import logo from "../static/logo.png"

const Header = () => {
  return (
    <>
      <header className="Header__header">
        <div className="Header__container">
          <div className="Header__img-container">
            <img src={logo} alt="Pyronode" />
            <h1>Pyronode</h1>
          </div>
        </div>

        <div className="Header__links">
          <p>Inicio</p>
          <p>Contacto</p>
          <p>Precios</p>
          <p>Otros</p>
        </div>
      </header>
    </>
  );
};

export default Header;
