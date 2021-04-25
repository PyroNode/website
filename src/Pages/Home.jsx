import React from "react";

import "../styles/Home.css";
import { connect } from "react-redux";
import Carousel from "../components/Carousel";
import PickingUs from "../components/PickingUs";
import TrustPilotCarousel from "../components/TrustPilotCarousel";
import Layout from "../components/Layout";

const Home = ({ carousel, pickus, trustpilot }) => {
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  setTimeout(() => {
    setHeight(document.body.scrollHeight);
    setWidth(document.body.scrollWidth);
  }, 0);

  return (
    <>
      <Layout headerDark={false}>
        <div className="Home">
          <Carousel height={height} width={width} items={carousel} />
          <PickingUs height={height} width={width} items={pickus} />
          <TrustPilotCarousel
            height={height}
            width={width}
            items={trustpilot}
          />
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
