import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Wave from "react-wavify";

import "../styles/NotFound.css";
import logo from "../static/logo.png";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <Header dark />
    <div className="NotFound">
      <div className="textContainer">
        <img src={logo} alt="Pyronode" />
        <div className="NotFound__text">
          <h1>Oops!</h1>
          <p>Esta URL no existe...</p>
          <div className="NotFound__button">
            <Link to="/">Regresar al Home</Link>
          </div>
        </div>
      </div>
    </div>

    <Wave
      className="NotFound__wave wave-2"
      fill="#D25A1E"
      paused={false}
      options={{
        height: 50,
        amplitude: 70,
        speed: 0.185,
        points: 5,
      }}
    />

    <Wave
      className="NotFound__wave"
      fill="#F46923"
      paused={false}
      options={{
        height: 55,
        amplitude: 75,
        speed: 0.185,
        points: 3,
      }}
    />

    <Footer />
  </>
);

export default NotFound;
