import React from "react";

import "../styles/Header.css";
import logo from "../static/logo.png";

import classNames from "classnames";
import { Link } from "react-router-dom";

const Header = ({ width, dark }) => {
  const [imgClass, setImgClass] = React.useState("");
  const [pClass, setPClass] = React.useState("");

  const widthDark = width <= 600 ? true : false;

  const headerClass = classNames("Header__header", {
    dark,
  });

  React.useEffect(() => {
    if (imgClass === "") {
      setPClass("Header__fade");
    } else {
      setPClass("");
    }
  }, [imgClass]);

  if (widthDark) {
    return (
      <>
        <header className={"Header__header dark"}>
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
              <p className={pClass}>Inicio</p>
            </Link>
            <p className={pClass}>Contacto</p>
            <p className={pClass}>Precios</p>
            <p className={pClass}>Otros</p>

            <img
              onClick={() => {
                imgClass === "Header__rotate90"
                  ? setImgClass("")
                  : setImgClass("Header__rotate90");
              }}
              src="https://i.imgur.com/J2R4dSK.png"
              className={imgClass}
              alt="bars"
            />
          </div>
        </header>
      </>
    );
  }

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
