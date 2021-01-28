import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducers";

const initialState = {
  carousel: [
    {
      id: 0,
      title: "Servidores de \nMinecraft",
      subtitle: "Desde 0,80€/mes",
      desc:
        "Nos hemos encargado de que tus servidores sean accesibles 24/7, con el mejor rendimiento posible. Olvídate de tener que ver publicidad o esperar una cola interminable para jugar.",
      photo:
        "https://static.wixstatic.com/media/c545ec_5e7acefc929f4b23891b43458a13cecb~mv2.png/v1/fill/w_360,h_461,al_c,q_85,usm_0.66_1.00_0.01/hh.webp",
      buttonUrl: "/minecraft",
    },
    {
      id: 1,
      title: "Hosting de \nBots de discord",
      subtitle: "Desde 0,70€/mes",
      desc:
        "Despreocupate de tener que hacer un máster en ingeniería para que tu bot esté siempre disponible, nosotros nos encargaremos de toda la parte sucia, tu solo programa y diviértete.",
      photo:
        "https://static.wixstatic.com/media/c545ec_eb3ed284b8b546a2a8002bd32cff390b~mv2.png/v1/fill/w_374,h_374,al_c,q_85,usm_0.66_1.00_0.01/dedicado.webp",
      buttonUrl: "/discord",
    },
    {
      id: 2,
      title: "HOSTING de \nVPS",
      subtitle: "Desde 1,49€/mes",
      desc:
        "¿Vas a otro nivel? Una VPS puede ser tu opción. Nuestras VPS están protegidas con la mejor seguridad y están optimizadas para que no tengas que preocuparte por nada, simplemente usar.",
      photo:
        "https://static.wixstatic.com/media/c545ec_0f6c90577fa44db5a9ec7ad78479e366~mv2.png/v1/fill/w_381,h_319,al_c,q_85,usm_0.66_1.00_0.01/PngItem_3577264.webp",
      buttonUrl: "/vps",
    },
    {
      id: 3,
      title: "Hosting de \nSitios Web",
      subtitle: "Desde 2,49€/mes",
      desc:
        "Da vida a tu página personal o a tus proyectos mostrando una página web y teniendo un correo profesional. Con nuestro alojamiento web podrás hacer esto sin complicaciones.",
      photo:
        "https://static.wixstatic.com/media/c545ec_eb3ed284b8b546a2a8002bd32cff390b~mv2.png/v1/fill/w_374,h_374,al_c,q_85,usm_0.66_1.00_0.01/dedicado.webp",
      buttonUrl: "/webhosting",
    },
  ],
};

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, initialState, composeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app")
);
