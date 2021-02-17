import React from "react";

import "../styles/Home.css";
import { connect } from "react-redux";
import Carousel from "../components/Carousel";
import PickingUs from "../components/PickingUs";
import TrustPilotCarousel from "../components/TrustPilotCarousel";
import Layout from "../components/Layout";

const Home = ({ carousel, pickus, trustpilot }) => {

  return (
    <>
      <Layout  headerDark={false}>
        <div className="Home">
          <Carousel items={carousel} />
          <PickingUs items={pickus} />
          <TrustPilotCarousel items={trustpilot} />
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    carousel: state.carousel,
    pickus: state.pickus,
    trustpilot: state.trustpilot,
  };
};

export default connect(mapStateToProps, null)(Home);
