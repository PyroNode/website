import React from "react";
import Wave from "react-wavify";

import Header from "./Header";
import Footer from "./Footer";

import "../styles/Layout.css";
import "../styles/Animations.css";
const Layout = (props) => {
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [margin, setMargin] = React.useState(0);
  const children = props.children;

  setTimeout(() => {
    setHeight(document.body.scrollHeight);
    setWidth(document.body.scrollWidth);
    console.log(height);
    console.log(width);
  }, 0);

  let styles = {
    height: `${height}px`,
    width: `${width}px`,
  };

  let waveStyles = {
    width: `${height}px`,
    margin: `auto auto`,
  };

  return (
    <>
      <div className="Layout">
        <Header width={width} dark={props.headerDark} />
        {children}

        <Footer />
      </div>

      {width >= 900 && (
        <div style={styles} className="Layout__waves-container">
          <Wave
            className="Layout__wave wave-2"
            style={waveStyles}
            fill="#D25A1E"
            paused={false}
            options={{
              height: 50,
              amplitude: 60,
              speed: 0.185,
              points: 5,
            }}
          />

          <Wave
            className="Layout__wave"
            style={waveStyles}
            fill="#F46923"
            paused={false}
            options={{
              height: 50,
              amplitude: 65,
              speed: 0.185,
              points: 3,
            }}
          />
        </div>
      )}
    </>
  );
};

export default Layout;
