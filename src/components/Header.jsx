import React from "react";

import "../styles/Header.css";
import logo from "../static/logo.png";

import classNames from "classnames";
import { Link } from "react-router-dom";

const Header = ({ dark }) => {
  const headerClass = classNames("Header__header", {
    dark,
  });

  return (
    <>
      <header className={headerClass}>
        <div className="Header__container">
          <Link to="/">
            <div className="Header__img-container">
              <img src={logo} alt="Pyronode" />
              <h1>Pyronode</h1>
            </div>
          </Link>
        </div>

        <div className="Header__links">
          <Link to="/">
            <p>Inicio</p>
          </Link>
          <p>Contacto</p>
          <p>Precios</p>
          <p>Otros</p>
        </div>
      </header>
    </>
  );
};

export default Header;
