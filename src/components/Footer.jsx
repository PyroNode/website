import React from "react";

import tw from "../static/tw.png";
import { Link } from "react-router-dom";
import logo from "../static/logo.png";
import discord from "../static/discord.png";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__redes">
          <h2>REDES SOCIALES</h2>
          <div>
            <a href="https://twitter.com/PyroNode">
              <img src={tw} alt="" />
            </a>
            <a href="https://discord.gg/EAVWf3P">
              <img src={discord} alt="" />
            </a>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__column">
            <h2>SERVICIOS</h2>
            <Link to="/minecraft">
              <p>Servidores Minecraft</p>
            </Link>
            <Link to="/vps">
              <p>Servidores VPS</p>
            </Link>
            <Link to="/voice">
              <p>Servidores de TS3</p>
            </Link>
            <Link to="/discord">
              <p>Bots de Discord</p>
            </Link>
            <Link to="/web">
              <p>Hosting Web</p>
            </Link>
          </div>
          <div className="footer__column">
            <h2>ENLACES</h2>
            <a href="https://billing.pyronode.com/clientarea.php">
              <p>Área de Clientes</p>
            </a>
            <a href="https://panel.pyronode.com/">
              <p>Panel de Juegos</p>
            </a>
            <a href="https://pyronode.com/tos.pdf">
              <p>Terminos y condiciones</p>
            </a>
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
