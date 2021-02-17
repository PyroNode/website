import React from "react";

import tw from "../static/tw.png";
import { Link } from "react-router-dom";
import logo from "../static/logo.png";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__redes">
          <h1>REDES SOCIALES</h1>
          <div>
            <a href="https://twitter.com/PyroNode">
              <img src={tw} alt="" />
            </a>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__column">
            <h1>SERVICIOS</h1>
            <Link to="/minecraft">
              <p>Servidores Minecraft</p>
            </Link>

            <p>Servidores VPS</p>
            <p>Bots de Discord</p>
            <p>Hosting Web</p>
          </div>
          <div className="footer__column">
            <h1>NOSOTROS</h1>
            <p>¿Quiénes somos?</p>
            <p>Soporte técnico</p>
            <p>Preguntas frecuentes</p>
          </div>
          <div className="footer__column">
            <h1>ENLACES</h1>
            <p>Área de Clientes</p>
            <p>Panel VPS</p>
            <p>Panel Minecraft</p>
          </div>
        </div>
        <div className="footer__logo">
          <img src={logo} alt="" />
          <h1>PyroNode</h1>
          <p>COPYRIGHT © 2021</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
