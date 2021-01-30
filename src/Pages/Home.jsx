import React from "react";

import "../styles/Home.css";
import { connect } from "react-redux";
import Carousel from "../components/Carousel";
import PickingUs from "../components/PickingUs";

const Home = ({ carousel, pickus }) => {
  return (
    <>
      <div className="Home">
        <Carousel items={carousel} />
        <PickingUs items={pickus} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    carousel: state.carousel,
    pickus: state.pickus,
  };
};

export default connect(mapStateToProps, null)(Home);
