import React from "react";

import "../styles/Home.css";
import { connect } from "react-redux";
import Carousel from "../components/Carousel";

const Home = ({ carousel }) => {
  return (
    <>
      <div className="Home">
        <Carousel items={carousel} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    carousel: state.carousel,
  };
};

export default connect(mapStateToProps, null)(Home);
