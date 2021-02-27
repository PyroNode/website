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
      buttonUrl: "/web",
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
        "Atención al cliente 10/10, me ayudaron con todas las dudas/problemas. 100% recomendable.",
    },
    {
      id: 1,
      username: "MarkusTech ESP",
      userphoto: "https://i.imgur.com/BGO38nc.png",
      review_title: "Excelente calidad de hosting",
      review_desc:
        "Excelente calidad de hosting, los servidores de juegos funcionan perfectamente.",
    },
    {
      id: 2,
      username: "Shine",
      userphoto: "https://i.imgur.com/BGO38nc.png",
      review_title: "Nice hosting",
      review_desc:
        "Es un muy buen hosting, tengo alojado un bot en discord y va demasiado bien!",
    },
    {
      id: 3,
      username: "DarkTWD",
      userphoto: "https://i.imgur.com/BGO38nc.png",
      review_title: "Muy bueno",
      review_desc:
        "Muy bueno, rápido, barato y muy fácil de usar, lo recomiendo 100%",
    },
    {
      id: 4,
      username: "Derkand",
      userphoto: "https://i.imgur.com/BGO38nc.png",
      review_title: "Servicio fabuloso",
      review_desc:
        "Necesitaba más y sin ningún problema me han ofrecido un plan personalizado. Precios muy buenos.",
    },
    {
      id: 5,
      username: "TheKing_DMB",
      userphoto: "https://i.imgur.com/BGO38nc.png",
      review_title: "El mejor servicio que he tenido nunca",
      review_desc:
        "Gracias a este host Mintos se mantiene día a día con una buena calidad.",
    },
  ],
  header: [
    [
      {
        value: "Minecraft",
        key: "/minecraft",
      },
      {
        value: "VPS Linux",
        key: "/vps",
      },
      {
        value: "Servidores de Voz",
        key: "/voice",
      },
      {
        value: "Bots Discord",
        key: "/discord",
      },
      {
        value: "Hosting Web",
        key: "/web",
      },
    ],
    [
      {
        value: "Área de Clientes",
        key: "https://billing.pyronode.com/clientarea.php",
      },
      {
        value: "Panel de Juegos",
        key: "https://panel.pyronode.com",
      },
    ],
  ],
  pages: {
    minecraft: {
      hero: {
        title: "Hosting de Minecraft",
        subtitle: "¡Más adquirido!",
        desc:
          "Con un par de clicks, podrás tener tu servidor activo para jugar con tus amigos.",
        photo: "https://i.imgur.com/6Y3eLOb.png",
        buttonUrl: "#planes",
        buttonText: "Ver planes",
      },
      plans: {
        list: [
          {
            id: 0,
            title: "Budget",
            photo: "https://i.imgur.com/5Vk0Rja.png",
            desc: [
              {
                feature: "Procesador",
                value: "I7 7700K",
              },
              {
                feature: "RAM",
                value: "Hasta 32GB",
              },
              {
                feature: "Disco duro SSD",
                value: "Ilimitado",
              },
            ],
            price: "0.70€",
            price_prefix: "Desde",
            price_desc: "Por mes",
            button_text: "Ver planes",
            include: {
              feature: [
                {
                  title: "Espacio SSD Ilimitado",
                  icon: "https://i.imgur.com/8iFkQ8X.png",
                },
                {
                  title: "Protección DDOS",
                  icon: "https://i.imgur.com/De6y63y.png",
                },
                {
                  title: "Bases de datos MySQL gratuitas",
                  icon: "https://i.imgur.com/chmUXgr.png",
                },
                {
                  title: "Panel Pterodactyl",
                  icon: "https://i.imgur.com/pE7byUk.png",
                },
                {
                  title: "Instalación instantánea",
                  icon: "https://i.imgur.com/oDCRwO4.png",
                },
                {
                  title: "Soporte para múltiples versiones",
                  icon: "https://i.imgur.com/3Sk4emg.png",
                },
                {
                  title: "Subdominio gratuito",
                  icon: "https://i.imgur.com/lylROAO.png",
                },
                {
                  title: "Slots ilimitados",
                  icon: "https://i.imgur.com/uoKhty6.png",
                },
                {
                  title: "99.9% uptime",
                  icon: "https://i.imgur.com/0Zgy6yY.png",
                },
              ],
              machines: {
                list: [
                  {
                    title: "Dirt",
                    price: "0.70€",
                    ram: "0.5GB",
                    icon: "https://i.imgur.com/0GzNc2x.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                    url: "https://billing.pyronode.com/cart.php?a=add&pid=9",
                  },
                  {
                    title: "Stone",
                    price: "1.49€",
                    ram: "1GB",
                    icon: "https://i.imgur.com/bXBZTKm.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                    url: "https://billing.pyronode.com/cart.php?a=add&pid=10",
                  },
                  {
                    title: "Coal",
                    price: "2.49€",
                    ram: "2GB",
                    icon: "https://i.imgur.com/bZBt8ds.png",
                    best_option: true,
                    recommended: false,
                    recommended_for_mods: false,
                    url: "https://billing.pyronode.com/cart.php?a=add&pid=11",
                  },

                  {
                    title: "Iron",
                    price: "3.49€",
                    ram: "3GB",
                    icon: "https://i.imgur.com/TckV8Tz.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                    url: "https://billing.pyronode.com/cart.php?a=add&pid=12",
                  },
                  // {
                  //   title: "Gold",
                  //   price: "4.49€",
                  //   ram: "6GB",
                  //   icon: "https://i.imgur.com/abkLYyY.png",
                  //   best_option: false,
                  //   recommended: true,
                  //   recommended_for_mods: false,
                  //   url: "https://billing.pyronode.com/cart.php?a=add&pid=13",
                  // },
                  // {
                  //   title: "Diamond",
                  //   price: "7.49€",
                  //   ram: "6GB",
                  //   icon: "https://i.imgur.com/ptAxyZS.png",
                  //   best_option: false,
                  //   recommended: false,
                  //   recommended_for_mods: false,
                  //   url: "https://billing.pyronode.com/cart.php?a=add&pid=16",
                  // },
                ],
                cards: {
                  list: [
                    {
                      title: "GOLD",
                      icon: "https://i.imgur.com/abkLYyY.png",
                      best_option: false,
                      recommended: false,
                      recommended_for_mods: false,
                      url: "https://billing.pyronode.com/cart.php?a=add&pid=24",
                      specs: [
                        {
                          key: "Ram",
                          value: "6GB",
                        },
                        {
                          key: "Precio",
                          value: "6.49€",
                        },
                      ],
                    },
                    {
                      title: "DIAMOND",
                      icon: "https://i.imgur.com/ptAxyZS.png",
                      best_option: false,
                      recommended: false,
                      recommended_for_mods: false,
                      url: "https://billing.pyronode.com/cart.php?a=add&pid=25",
                      specs: [
                        {
                          key: "Ram",
                          value: "8GB",
                        },
                        {
                          key: "Precio",
                          value: "7.99€",
                        },
                      ],
                    },
                  ],
                  single: {
                    title: "PERSONALIZADO",
                    price: "31.99€",
                    ram: "Hasta 32GB",
                    icon: "https://i.imgur.com/B2SrHOH.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                    url: "https://billing.pyronode.com/cart.php?a=add&pid=26",
                  },
                },
              },
            },
          },
          {
            id: 1,
            title: "Premium",
            photo: "https://i.imgur.com/5Vk0Rja.png",
            desc: [
              {
                feature: "Procesador",
                value: "I9 9900K",
              },
              {
                feature: "RAM",
                value: "Hasta 32GB",
              },
              {
                feature: "Disco duro SSD",
                value: "Ilimitado",
              },
            ],
            price: "1.99€",
            price_prefix: "Desde",
            price_desc: "Por mes",
            button_text: "Ver planes",
            include: {
              feature: [
                {
                  title: "Mejores CPU",
                  icon: "https://i.imgur.com/IghxZcb.png",
                },
                {
                  title: "Espacio SSD Ilimitado",
                  icon: "https://i.imgur.com/8iFkQ8X.png",
                },
                {
                  title: "Protección DDOS",
                  icon: "https://i.imgur.com/De6y63y.png",
                },
                {
                  title: "Bases de datos MySQL gratuitas",
                  icon: "https://i.imgur.com/chmUXgr.png",
                },
                {
                  title: "Panel Pterodactyl",
                  icon: "https://i.imgur.com/pE7byUk.png",
                },
                {
                  title: "Instalación instantánea",
                  icon: "https://i.imgur.com/oDCRwO4.png",
                },
                {
                  title: "Soporte para múltiples versiones",
                  icon: "https://i.imgur.com/3Sk4emg.png",
                },
                {
                  title: "Subdominio gratuito",
                  icon: "https://i.imgur.com/lylROAO.png",
                },
                {
                  title: "Slots ilimitados",
                  icon: "https://i.imgur.com/uoKhty6.png",
                },
                {
                  title: "99.9% uptime",
                  icon: "https://i.imgur.com/0Zgy6yY.png",
                },
              ],
              machines: {
                list: [
                  {
                    title: "Dirt",
                    price: "1.99€",
                    ram: "0.5GB",
                    icon: "https://i.imgur.com/0GzNc2x.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                  },
                  {
                    title: "Stone",
                    price: "2.99€",
                    ram: "1GB",
                    icon: "https://i.imgur.com/bXBZTKm.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                  },
                  {
                    title: "Coal",
                    price: "3.99€",
                    ram: "2GB",
                    icon: "https://i.imgur.com/bZBt8ds.png",
                    best_option: true,
                    recommended: false,
                    recommended_for_mods: false,
                  },

                  {
                    title: "Iron",
                    price: "4.99€",
                    ram: "3GB",
                    icon: "https://i.imgur.com/TckV8Tz.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                  },
                  {
                    title: "Gold",
                    price: "5.99€",
                    ram: "4GB",
                    icon: "https://i.imgur.com/abkLYyY.png",
                    best_option: false,
                    recommended: true,
                    recommended_for_mods: false,
                  },
                  {
                    title: "Lapis",
                    price: "6.99€",
                    ram: "5GB",
                    icon: "https://i.imgur.com/h3DWxM6.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                  },
                  {
                    title: "Redstone",
                    price: "7.99€",
                    ram: "6GB",
                    icon: "https://i.imgur.com/dY9IQBL.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: true,
                  },
                  {
                    title: "Diamond",
                    price: "8.99€",
                    ram: "7GB",
                    icon: "https://i.imgur.com/ptAxyZS.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                  },
                  {
                    title: "Emerald",
                    price: "10€",
                    ram: "8GB",
                    icon: "https://i.imgur.com/U7yVcAJ.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                  },
                  {
                    title: "Obsidian",
                    price: "11.99€",
                    ram: "9GB",
                    icon: "https://i.imgur.com/pLtL2pf.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                  },
                  {
                    title: "Bedrock",
                    price: "12.99€",
                    ram: "10GB",
                    icon: "https://i.imgur.com/BDkGySF.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                  },
                  {
                    title: "Steve",
                    price: "14.99€",
                    ram: "12GB",
                    icon: "https://i.imgur.com/TFVBwL1.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                  },
                ],
                cards: {
                  list: [
                    {
                      title: "Villager",
                      price: "17.99€",
                      ram: "16GB",
                      icon: "https://i.imgur.com/KhpsiQJ.png",
                      best_option: false,
                      recommended: false,
                      recommended_for_mods: false,
                    },
                    {
                      title: "Wither",
                      price: "26.99€",
                      ram: "24GB",
                      icon: "https://i.imgur.com/jh7rAWS.png",
                      best_option: false,
                      recommended: false,
                      recommended_for_mods: false,
                    },
                  ],
                  single: {
                    title: "Ender Dragon",
                    price: "34.99€",
                    ram: "32GB",
                    icon: "https://i.imgur.com/B2SrHOH.png",
                    best_option: false,
                    recommended: false,
                    recommended_for_mods: false,
                  },
                },
              },
            },
          },
        ],
      },
    },
    discord: {
      hero: {
        title: "Bots de Discord",
        subtitle: "Muy sencillo",
        desc:
          "No tienes que ser un ingeniero para poder alojar tu bot de discord. En PyroNode te facilitamos todo para que solo tengas que programar, y divertirte",
        photo:
          "https://i.ibb.co/YhVz6BY/b941bc1dfe379db6cc1f2acc5a612f41-4x-1.png",
        buttonUrl: "#planes",
        buttonText: "Ver planes",
      },
      plans: {
        features: [
          {
            id: 0,
            title: "Siempre online",
            desc:
              "Nos hemos encargado de que tus servidores sean accesibles 24/7, con el mejor rendimiento posible.",
            photo: "https://i.imgur.com/oDCRwO4.png",
          },
          {
            id: 1,
            title: "Soporte inmediato",
            desc:
              "¿Tienes algún problema? Escribenos, intentaremos ayudarte lo más rápido posible",
            photo: "https://i.imgur.com/uoKhty6.png",
          },
          {
            id: 2,
            title: "Librerías",
            desc:
              "Nuestro hosting está preparado para que puedas programar tanto con la librería de JavaScript, o la de Python",
            photo: "https://i.imgur.com/mOvLgAA.png",
          },
        ],
        list: {
          down: [
            {
              title: "Nano",
              price: "0.99€",
              url: "https://billing.pyronode.com/cart.php?a=add&pid=4",
              features: [
                {
                  key: "512MB",
                  value: "RAM",
                },
                {
                  key: "10GB",
                  value: "SSD",
                },
                {
                  key: "0.99€",
                  value: "PRECIO",
                },
              ],
            },
            {
              title: "Classic",
              price: "1.99€",
              url: "https://billing.pyronode.com/cart.php?a=add&pid=5",
              features: [
                {
                  key: "1024MB",
                  value: "RAM",
                },
                {
                  key: "15GB",
                  value: "SSD",
                },
                {
                  key: "1.99€",
                  value: "PRECIO",
                },
              ],
            },
          ],
          up: [
            {
              title: "Advanced",
              price: "2.99€",
              url: "https://billing.pyronode.com/cart.php?a=add&pid=6",
              features: [
                {
                  key: "1.5GB",
                  value: "RAM",
                },
                {
                  key: "20GB",
                  value: "SSD",
                },
              ],
            },
            {
              title: "Extreme",
              price: "3.99€",
              url: "https://billing.pyronode.com/cart.php?a=add&pid=7",
              features: [
                {
                  key: "2GB",
                  value: "RAM",
                },
                {
                  key: "30GB",
                  value: "SSD",
                },
              ],
            },
          ],
        },
      },
    },
    ts3: {
      hero: {
        title: "Servidores de TS3",
        subtitle: "¡Para hablar con tus amigos!",
        desc:
          "En PyroNode te facilitamos un servidor ts3 para poder hablar con tus amigos, elige el plan adecuado, o el número de slots y empieza a comunicarte",
        photo:
          "https://i.ibb.co/YhVz6BY/b941bc1dfe379db6cc1f2acc5a612f41-4x-1.png",
        buttonUrl: "#planes",
        buttonText: "Ver planes",
      },
      plans: {
        features: [
          {
            title: "ANTI-DDOS",
            desc:
              "Nuestros servidores de TS3 cuentan con anti-ddos, para que puedas disfrutar de tu servicio sin que ningún envidioso arruine tu momento de diversión, trabajo, o ocio.",
          },
          {
            title: "DOMINIOS",
            desc:
              "Al comprar cualquiera de los TS3 podrás conectar tu servidor a un subdominio, como por ejemplo .ts3.vip, para evitar tener que utilizar la IP númerica. ¡También puedes conectar tu propio dominio!",
          },
          {
            title: "ALMACENAMIENTO INFINITO",
            desc:
              "PyroNode cuenta con almacenamiento ilimitado en SSD. ¡Podrás hasta compartir juegos con tus amigos a través de tu servidor!",
          },
          {
            title: "PANEL INTUITIVO",
            desc:
              "Hemos diseñado un panel para que puedas manejar tu servidor de tu TS3. Incluye todas las características necesarias para controlar tu servidor de TS3 de manera autónoma",
          },
        ],
        list: [
          {
            title: "TS3 INICIAL",
            subtitle: "Hosteado en Europa",
            photo: "https://i.imgur.com/u2cduOE.png",
            desc: [
              {
                value: "32 SLOTS",
              },
              {
                value: "1 SUBDOMINIO GRATUITO",
              },
            ],
            price: "0.99€",
            buttonText: "Ver más",
          },
          {
            title: "TS3 CUSTOM",
            subtitle: "Hosteado en Europa",
            photo: "https://i.imgur.com/u2cduOE.png",
            desc: [
              {
                value: "SLOTS ILIMITADOS",
              },
              {
                value: "1 SUBDOMINIO GRATUITO",
              },
            ],
            price: "3.99€",
            buttonText: "Ver más",
          },
        ],
      },
    },
    webhosting: {
      hero: {
        title: "Hosting de sitios web",
        subtitle: "¡Para mostrar tus proyectos!",
        desc:
          "Da vida a tu página personal o a tus proyectos mostrando una página web y teniendo un correo profesional. Con nuestro alojamiento web podrás hacer esto sin complicaciones",
        photo: "https://i.imgur.com/OVRS9MR.png",
        buttonUrl: "#planes",
        buttonText: "Ver planes",
      },
      plans: {
        list: [
          {
            rows: [
              {
                photo: "https://i.imgur.com/NiuAXdD.png",
                value: "Plan",
              },
              {
                photo: "https://i.imgur.com/8iFkQ8X.png",
                value: "Almacenamiento SSD",
              },
              {
                photo: "https://i.imgur.com/De6y63y.png",
                value: "Sitios web",
              },
              {
                photo: "https://i.imgur.com/lylROAO.png",
                value: "Subdominios",
              },
              {
                photo: "https://i.imgur.com/nDMklmE.png",
                value: "Bandejas de correo",
              },
              {
                photo: "https://i.imgur.com/chmUXgr.png",
                value: "Bases de datos MySQL",
              },
              {
                photo: "https://i.imgur.com/S4BAJ8e.png",
                value: "Memoria RAM",
              },
              {
                photo: "https://i.imgur.com/LkHBcaG.png",
                value: "Coste",
              },
              {
                value: "",
              },
            ],
          },
          {
            rows: [
              {
                value: "Basic",
              },
              {
                value: "15GB",
              },
              {
                value: "1",
              },
              {
                value: "ilimitados",
              },
              {
                value: "10",
              },
              {
                value: "1",
              },
              {
                value: "1GB",
              },
              {
                value: "2.49€",
              },
              {
                value: "ADQUIRIR",
                url: "https://billing.pyronode.com/cart.php?a=add&pid=1",
              },
            ],
          },
          {
            rows: [
              {
                value: "Ultra",
              },
              {
                value: "ilimitado",
              },
              {
                value: "10",
              },
              {
                value: "ilimitados",
              },
              {
                value: "100",
              },
              {
                value: "10",
              },
              {
                value: "1.5GB",
              },
              {
                value: "3.99€",
              },
              {
                value: "ADQUIRIR",
                url: "https://billing.pyronode.com/cart.php?a=add&pid=2",
              },
            ],
          },
          {
            rows: [
              {
                value: "Master",
              },
              {
                value: "ilimitado",
              },
              {
                value: "ilimitados",
              },
              {
                value: "ilimitados",
              },
              {
                value: "ilimitadas",
              },
              {
                value: "ilimitadas",
              },
              {
                value: "2GB",
              },
              {
                value: "6.99€",
              },
              {
                value: "ADQUIRIR",
                url: "https://billing.pyronode.com/cart.php?a=add&pid=3",
              },
            ],
          },
        ],
        mobileList: [
          {
            title: "PLAN BASIC",
            subtitle: "Hosteado en Europa",
            photo: "https://i.imgur.com/lylROAO.png",
            desc: [
              {
                value: "Almacenamiento SSD: 15GB",
              },
              {
                value: "Sitios Web: 1",
              },
              {
                value: "Subdominios: Ilimitados",
              },
              {
                value: "Bandejas de correo: 10",
              },
              {
                value: "Bases de datos: 10",
              },
              {
                value: "Memoria RAM: 1GB",
              },
            ],
            price: "2,49€",
            buttonText: "Ver más",
          },
          {
            title: "PLAN ULTRA",
            subtitle: "Hosteado en Europa",
            photo: "https://i.imgur.com/lylROAO.png",
            desc: [
              {
                value: "Almacenamiento SSD: Ilimitado",
              },
              {
                value: "Sitios Web: 10",
              },
              {
                value: "Subdominios: Ilimitados",
              },
              {
                value: "Bandejas de correo: 100",
              },
              {
                value: "Bases de datos: 10",
              },
              {
                value: "Memoria RAM: 1.5GB",
              },
            ],
            price: "3.99€",
            buttonText: "Ver más",
          },
          {
            title: "PLAN MASTER",
            subtitle: "Hosteado en Europa",
            photo: "https://i.imgur.com/lylROAO.png",
            desc: [
              {
                value: "Almacenamiento SSD: Ilimitado",
              },
              {
                value: "Sitios Web: Ilimitados",
              },
              {
                value: "Subdominios: Ilimitados",
              },
              {
                value: "Bandejas de correo: Ilimitadas",
              },
              {
                value: "Bases de datos: Ilimitadas",
              },
              {
                value: "Memoria RAM: 2GB",
              },
            ],
            price: "6.99€",
            buttonText: "Ver más",
          },
        ],
      },
    },
    vps: {
      hero: {
        title: "Hosting de VPS",
        subtitle: "¡Para lo que quieras!",
        desc:
          "Da vida a tu página personal o a tus proyectos mostrando una página web, o utilizala para lo que quieras. Con nuestro alojamiento de VPS podrás hacer esto sin complicaciones",
        photo: "https://i.imgur.com/IcahspC.png",
        buttonUrl: "#planes",
        buttonText: "Ver planes",
      },
      plans: {
        list: [
          {
            rows: [
              {
                photo: "https://i.imgur.com/NiuAXdD.png",
                value: "Plan",
              },

              {
                photo: "https://i.imgur.com/De6y63y.png",
                value: "vCores",
              },

              {
                photo: "https://i.imgur.com/8iFkQ8X.png",
                value: "Storage",
              },
              {
                photo: "https://i.imgur.com/S4BAJ8e.png",
                value: "RAM",
              },
              {
                photo: "https://i.imgur.com/LkHBcaG.png",
                value: "Coste",
              },
              {
                value: "",
              },
            ],
          },
          {
            rows: [
              {
                value: "Mini",
              },
              {
                value: "1",
              },
              {
                value: "20GB",
              },
              {
                value: "512MB",
              },
              {
                value: "1.59€",
              },
              {
                value: "ADQUIRIR",
                url: "https://billing.pyronode.com/cart.php?a=add&pid=1",
              },
            ],
          },
          {
            rows: [
              {
                value: "Classic",
              },
              {
                value: "1",
              },
              {
                value: "20GB",
              },
              {
                value: "1GB",
              },
              {
                value: "2.44€",
              },
              {
                value: "ADQUIRIR",
                url: "https://billing.pyronode.com/cart.php?a=add&pid=1",
              },
            ],
          },
          {
            rows: [
              {
                value: "Normal",
              },
              {
                value: "2",
              },
              {
                value: "30GB",
              },
              {
                value: "2GB",
              },
              {
                value: "3.07€",
              },
              {
                value: "ADQUIRIR",
                url: "https://billing.pyronode.com/cart.php?a=add&pid=1",
              },
            ],
          },
          {
            rows: [
              {
                value: "Advanced",
              },
              {
                value: "2",
              },
              {
                value: "40GB",
              },
              {
                value: "4GB",
              },
              {
                value: "4.33€",
              },
              {
                value: "ADQUIRIR",
                url: "https://billing.pyronode.com/cart.php?a=add&pid=1",
              },
            ],
          },
          {
            rows: [
              {
                value: "Ultimate",
              },
              {
                value: "4",
              },
              {
                value: "50GB",
              },
              {
                value: "6GB",
              },
              {
                value: "5.59€",
              },
              {
                value: "ADQUIRIR",
                url: "https://billing.pyronode.com/cart.php?a=add&pid=1",
              },
            ],
          },
        ],
        mobileList: [
          {
            title: "PLAN MINI",
            subtitle: "Hosteado en Europa",
            photo: "https://i.imgur.com/8iFkQ8X.png",
            desc: [
              {
                value: "vCores: 1",
              },
              {
                value: "Storage: 20GB NVMe SSD",
              },
              {
                value: "RAM: 512MB",
              },
            ],
            price: "1,59€",
            buttonText: "Ver más",
          },
          {
            title: "PLAN CLASSIC",
            subtitle: "Hosteado en Europa",
            photo: "https://i.imgur.com/8iFkQ8X.png",
            desc: [
              {
                value: "vCores: 1",
              },
              {
                value: "Storage: 20GB NVMe SSD",
              },
              {
                value: "RAM: 1GB",
              },
            ],
            price: "2,44€",
            buttonText: "Ver más",
          },
          {
            title: "PLAN NORMAL",
            subtitle: "Hosteado en Europa",
            photo: "https://i.imgur.com/8iFkQ8X.png",
            desc: [
              {
                value: "vCores: 2",
              },
              {
                value: "Storage: 30GB NVMe SSD",
              },
              {
                value: "RAM: 2GB",
              },
            ],
            price: "3,07€",
            buttonText: "Ver más",
          },
          {
            title: "PLAN ADVANCED",
            subtitle: "Hosteado en Europa",
            photo: "https://i.imgur.com/8iFkQ8X.png",
            desc: [
              {
                value: "vCores: 2",
              },
              {
                value: "Storage: 40GB NVMe SSD",
              },
              {
                value: "RAM: 4GB",
              },
            ],
            price: "4,33€",
            buttonText: "Ver más",
          },
          {
            title: "PLAN ULTIMATE",
            subtitle: "Hosteado en Europa",
            photo: "https://i.imgur.com/8iFkQ8X.png",
            desc: [
              {
                value: "vCores: 4",
              },
              {
                value: "Storage: 50GB NVMe SSD",
              },
              {
                value: "RAM: 6GB",
              },
            ],
            price: "5,59€",
            buttonText: "Ver más",
          },
        ],
      },
      features: [
        [
          {
            title: "1Gbps Uplink",
            icon: "https://i.imgur.com/oDCRwO4.png",
          },
          {
            title: "Virtualización KVM",
            icon: "https://i.imgur.com/De6y63y.png",
          },
          {
            title: "AntiDDoS",
            icon: "https://i.imgur.com/8iFkQ8X.png",
          },

          {
            title: "Instalación en 120s",
            icon: "https://i.imgur.com/Ak3icRE.png",
          },
          {
            title: "Soporte de calidad",
            icon: "https://i.imgur.com/3Sk4emg.png",
          },
          {
            title: "Uptime 99.9%",
            icon: "https://i.imgur.com/0Zgy6yY.png",
          },
        ],
      ],
    },
  },
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
