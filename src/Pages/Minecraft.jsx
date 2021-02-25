import React from "react";

import "../styles/Minecraft.css";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import CarouselItem from "../components/CarouselItem";
import PlansController from "../components/PlansController";

const Minecraft = ({ hero }) => {
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  setTimeout(() => {
    setHeight(document.body.scrollHeight);
    setWidth(document.body.scrollWidth);
    console.log(height);
    console.log(width);
  }, 0);

  if (width <= 800) {
    return (
      <>
        <Layout headerDark={false}>
          <div className="Minecraft__Page">
            <div className="Minecraft__hero-container">
              <div className="Minecraft__hero">
                <CarouselItem isMobile isInPage content={hero} />
              </div>
            </div>
            <PlansController isMobile activePlans={2} />
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout headerDark={false}>
        <div className="Minecraft__Page">
          <div className="Minecraft__hero-container">
            <div className="Minecraft__hero">
              <CarouselItem isInMainCarousel={false} isInPage content={hero} />
            </div>
          </div>
          <PlansController activePlans={2} />
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    hero: state.pages.minecraft.hero,
  };
};

export default connect(mapStateToProps, null)(Minecraft);
