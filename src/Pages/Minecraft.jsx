import React from "react";

import "../styles/Minecraft.css";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import Fade from "react-reveal/Fade";
import CarouselItem from "../components/CarouselItem";
import PlansController from "../components/PlansController";

const Minecraft = ({ hero }) => {
  return (
    <>
      <Layout headerDark={false}>
        <div className="Minecraft__Page">
          <div className="Minecraft__hero-container">
            <div className="Minecraft__hero">
              <CarouselItem isInPage content={hero} />
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
