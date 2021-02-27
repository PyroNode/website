import React from "react";

import "../styles/Header.css";
import logo from "../static/logo.png";

import classNames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Fade } from "react-awesome-reveal";

const Header = ({ width, dark, headerItems }) => {
  const [imgClass, setImgClass] = React.useState("");
  const [pClass, setPClass] = React.useState("");
  const [showHeaderItem, setVisibilityItem] = React.useState(false);
  const [showHeaderItem2, setVisibilityItem2] = React.useState(false);
  const [headerExpandClass, setClassHeader] = React.useState("");

  const [showHeaderItemPC, setVisibilityItemPC] = React.useState(false);
  const [showHeaderItemPC2, setVisibilityItemPC2] = React.useState(false);
  const [headerPCItem, setHPCItemClass] = React.useState("");
  const [headerPCItem2, setHPCItemClass2] = React.useState("");

  const widthDark = width <= 800 ? true : false;

  const headerClass = classNames("Header__header", {
    dark,
  });

  React.useEffect(() => {
    if (showHeaderItemPC2) {
      if (headerPCItem === " ") {
        setHPCItemClass("Header__clickActivePC");
      } else {
        setHPCItemClass(" ");
      }
      setVisibilityItemPC2(false);
    }
    if (headerPCItem === " ") {
      setHPCItemClass("Header__clickActivePC");
    } else {
      setHPCItemClass(" ");
    }
  }, [showHeaderItemPC]);

  React.useEffect(() => {
    if (showHeaderItemPC) {
      if (headerPCItem2 === " ") {
        setHPCItemClass2("Header__clickActivePC");
      } else {
        setHPCItemClass2(" ");
      }
      setVisibilityItemPC(false);
    }
    if (headerPCItem2 === " ") {
      setHPCItemClass2("Header__clickActivePC");
    } else {
      setHPCItemClass2(" ");
    }
  }, [showHeaderItemPC2]);

  React.useEffect(() => {
    if (imgClass === "") {
      setPClass("Header__fade");
      setVisibilityItem(false);
      setVisibilityItem2(false);
    } else {
      setPClass("");
    }
  }, [imgClass]);

  React.useEffect(() => {
    if (showHeaderItem2) {
      setVisibilityItem2(false);
    }
  }, [showHeaderItem]);

  React.useEffect(() => {
    if (showHeaderItem) {
      setVisibilityItem(false);
    }
  }, [showHeaderItem2]);

  React.useEffect(() => {
    if (showHeaderItem || showHeaderItem2) {
      setClassHeader("Header__expand");
    } else {
      setClassHeader("");
    }
  }, [showHeaderItem, showHeaderItem2]);

  if (widthDark) {
    return (
      <>
        <header className={`Header__header dark ${headerExpandClass}`}>
          <div className="Header__container">
            <Link to="/">
              <div className="Header__img-container">
                <img src={logo} alt="PyroNode" />
                <h1>PyroNode</h1>
              </div>
            </Link>
          </div>

          <div className="Header__links">
            <div className="Header__links-columnContainer">
              <div className="Header__links-container">
                <div className="Header__Inicio">
                  <Link to="/">
                    <p className={pClass}>Inicio</p>
                  </Link>
                </div>
                <div
                  onClick={() => {
                    if (pClass === "") {
                      setVisibilityItem(!showHeaderItem);
                    }
                  }}
                  className="Header__Productos"
                >
                  <p className={pClass}>Productos</p>
                </div>
                <div
                  onClick={() => {
                    if (pClass === "") {
                      setVisibilityItem2(!showHeaderItem2);
                    }
                  }}
                  className="Header__Pages"
                >
                  <p className={pClass}>Páginas</p>
                </div>
              </div>

              <div className="Header__links-clickItems">
                <div className="Header__links-map">
                  {headerItems.map((array) => {
                    if (showHeaderItem) {
                      if (headerItems.indexOf(array) === 0) {
                        console.log(array);
                        return (
                          <>
                            <Fade cascade damping={0.2}>
                              {array.map((keyvalue) => {
                                return (
                                  <>
                                    <Link
                                      className="Header__expand-item-p"
                                      key={array.indexOf(keyvalue)}
                                      to={keyvalue.key}
                                    >
                                      <p>{keyvalue.value}</p>
                                    </Link>
                                  </>
                                );
                              })}
                            </Fade>
                          </>
                        );
                      }
                    }
                    if (showHeaderItem2) {
                      if (headerItems.indexOf(array) === 1) {
                        console.log(array);

                        return (
                          <>
                            <Fade cascade damping={0.2}>
                              {array.map((keyvalue) => {
                                console.log(keyvalue);
                                return (
                                  <>
                                    <a
                                      className="Header__expand-item-p"
                                      key={array.indexOf(keyvalue)}
                                      href={keyvalue.key}
                                    >
                                      <p>{keyvalue.value}</p>
                                    </a>
                                  </>
                                );
                              })}
                            </Fade>
                          </>
                        );
                      }
                    }
                  })}
                </div>
              </div>
            </div>

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
              <h1>PyroNode</h1>
            </div>
          </Link>
        </div>

        <div className="Header__links">
          <div className="Header__Inicio">
            <Link to="/">
              <p>Inicio</p>
            </Link>
          </div>

          <div className="Header__Productos-PC">
            <p
              onClick={() => {
                setVisibilityItemPC(!showHeaderItemPC);
              }}
            >
              Productos
            </p>
            <div className={`Header__product-hover-PC ${headerPCItem}`}>
              <Link to="/minecraft">
                <p>Minecraft</p>
              </Link>
              <Link to="/vps">
                <p>VPS Linux</p>
              </Link>
              <Link to="/voice">
                <p>Servidores de Voz</p>
              </Link>
              <Link to="/discord">
                <p>Bots Discord</p>
              </Link>
              <Link to="/web">
                <p>Hosting Web</p>
              </Link>
            </div>
          </div>

          <div className="Header__Pages-PC">
            <p
              onClick={() => {
                setVisibilityItemPC2(!showHeaderItemPC2);
              }}
            >
              Páginas
            </p>

            <div className={`Header__pages-hover-PC ${headerPCItem2}`}>
              <a href="https://billing.pyronode.com/clientarea.php">
                <p>Área de Clientes</p>
              </a>
              <a href="https://panel.pyronode.com/">
                <p>Panel de Juegos</p>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    headerItems: state.header,
  };
};

export default connect(mapStateToProps, null)(Header);
