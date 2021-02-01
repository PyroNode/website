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
      photo: "https://i.imgur.com/5Vk0Rja.png",
      buttonUrl: "/minecraft",
    },
    {
      id: 1,
      title: "Hosting de \nBots de discord",
      subtitle: "Desde 0,70€/mes",
      desc:
        "Despreocupate de tener que hacer un máster en ingeniería para que tu bot esté siempre disponible, nosotros nos encargaremos de toda la parte sucia, tu solo programa y diviértete.",
      photo: "https://i.imgur.com/cPpuqIk.png",
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
  pickus: [
    {
      id: 0,
      title: "Bajo coste",
      desc:
        "Nos hemos encargado de que tus servidores sean accesibles 24/7, con el mejor rendimiento posible. Olvídate de tener que ver publicidad o esperar una cola interminable para jugar.",
      photo: "https://i.imgur.com/5Vk0Rja.png",
    },
    {
      id: 1,
      title: "Mejor soporte",
      desc:
        "Despreocupate de tener que hacer un máster en ingeniería para que tu bot esté siempre disponible, nosotros nos encargaremos de toda la parte sucia, tu solo programa y diviértete.",
      photo: "https://i.imgur.com/cPpuqIk.png",
    },
    {
      id: 2,
      title: "Velocidad",
      desc:
        "¿Vas a otro nivel? Una VPS puede ser tu opción. Nuestras VPS están protegidas con la mejor seguridad y están optimizadas para que no tengas que preocuparte por nada, simplemente usar.",
      photo:
        "https://static.wixstatic.com/media/c545ec_0f6c90577fa44db5a9ec7ad78479e366~mv2.png/v1/fill/w_381,h_319,al_c,q_85,usm_0.66_1.00_0.01/PngItem_3577264.webp",
    },
  ],
  trustpilot: [
    {
      id: 0,
      username: "Danga",
      userphoto: "https://i.imgur.com/BGO38nc.png",
      review_title: "Completamente satisfecho",
      review_desc:
        "Atención al cliente 10/10, me resolvieron y ayudaron con todas las dudas/problemas. Estoy encantado con el servicio tanto de Web Hosting como Discord Bot Hosting todo esto por un precio muy económico. 100% recomendable.",
    },

    {
      id: 1,
      username: "Ali o",
      userphoto: "https://i.imgur.com/BGO38nc.png",
      review_title: "Legit, efectivida",
      review_desc:
        "Muy legit sinceramente, Pedi una vps, y me llego rapido, El discord esta bien configurado, hacen sorteos legales etc, 10/10, Si tendria que comprar algo, mi recomendacion seria aqui, ya que van empezando, y en cuanto calidad precio es lo mejor que hay.! Un cordial saludo de parte de ali¡",
    },
    {
      id: 2,
      username: "MarkusTech ESP",
      userphoto:
        "https://user-images.trustpilot.com/5d66963e832740e4567ccaad/73x73.png",
      review_title: "Excelente calidad de hosting",
      review_desc:
        "Excelente calidad de hosting, los servidores de juegos funcionan perfectamente. No he sufrido ninguna caída ni problema y me han solucionado todas las dudas muy rápido.",
    },
    {
      id: 3,
      username: "Irrxsistible",
      userphoto: "https://i.imgur.com/BGO38nc.png",
      review_title: "Nice host.",
      review_desc: "Lo utilizo para hostear mi bot, y es muy bueno. Nice host.",
    },
    {
      id: 4,
      username: "DarkTWD",
      userphoto: "https://i.imgur.com/BGO38nc.png",
      review_title: "Muy bueno",
      review_desc:
        "Muy bueno, llevo usandolo 3 meses y va rápido, no hay errores, barato y muy fácil de usar, lo recomiendo 100%",
    },
    {
      id: 5,
      username: "Derkand",
      userphoto: "https://i.imgur.com/BGO38nc.png",
      review_title: "Servicio fabuloso",
      review_desc:
        "Tenían unos planes de venda ya marcados, y yo necesitaba algo mas potente, y sin ningún problema me han ofrecido un plan personalizado. Precios muy buenos.",
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
