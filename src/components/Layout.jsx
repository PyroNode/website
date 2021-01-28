import React from "react";
import Wave from "react-wavify";

import Header from "./Header";
import Footer from "./Footer";

import "../styles/Layout.css";

const Layout = ({ children }) => (
  <div className="Layout">
    <Header />
    {children}
    <Footer />

    <Wave
      className="Layout__wave wave-2"
      fill="#D25A1E"
      paused={false}
      options={{
        height: 50,
        amplitude: 70,
        speed: 0.25,
        points: 5,
      }}
    />

    <Wave
      className="Layout__wave"
      fill="#F46923"
      paused={false}
      options={{
        height: 55,
        amplitude: 75,
        speed: 0.25,
        points: 3,
      }}
    />
  </div>
);

export default Layout;
