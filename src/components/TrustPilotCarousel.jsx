import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setActiveTPItem } from "../actions";
import TrustPilotCarouselItem from "./TrustPilotCarouselItem";
import TrustPilotContainer from "./external/TrustBoxContainer";
import left from "../static/left-arrow.png";
import right from "../static/right-arrow.png";

import "../styles/TrustPilotCarousel.css";
import CarouselDotsControler from "./CarouselDotsControler";

const TrustPilotCarousel = ({ items, active_item, setActiveTPItem }) => {
  const [index, setIndex] = useState(0);
  const [customClass, setClass] = useState("TrustPilot__review active ");
  const [firstElement, setFirstElement] = useState(true);
  let intervalID = 0;

  useEffect(() => {

    if (firstElement) {
      setActiveTPItem(index);
      setClass("TrustPilot__review active transition");
      setTimeout(() => {
        setClass("TrustPilot__review transition");
      }, 400);
      setFirstElement(false);
    } else {
      setClass("TrustPilot__review active transition");
      setTimeout(() => {
        setClass("TrustPilot__review transition");
      }, 400);

      setTimeout(() => setActiveTPItem(index), 400);
    }

    return function clean() {
      clearInterval(intervalID);
      intervalID = 0;
    };
  }, [index]);

  const handleBackIndex = () => {
    let i = index;

    i <= 0 ? (i = items.length - 1) : (i -= 1);

    setIndex(i);
    setActiveTPItem(index);
  };

  const handleUpIndex = () => {
    let i = index;

    i >= items.length - 1 ? (i = 0) : (i += 1);

    setIndex(i);
    setActiveTPItem(index);
  };

  const automaticUpIndex = () => {
    intervalID = setInterval(() => {
      handleUpIndex();
    }, 3500);
  };

  return (
    <>
      <div className="TrustPilot__Carousel">
        <div className="TrustPilot__zIndex">
          <div className="TrustPilot__button button1" onClick={handleBackIndex}>
            <img src={right} alt="" />
          </div>

          <div className={customClass}>
            {active_item !== undefined ? (
              <TrustPilotCarouselItem
                key={active_item.id}
                content={active_item}
              />
            ) : (
              "Loading"
            )}
          </div>

          <div className="TrustPilot__button button2" onClick={handleUpIndex}>
            <img src={left} alt="" />
          </div>
        </div>

        <div className="TrustPilot__container">
          <TrustPilotContainer />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    active_item: state.trustpilot_active_item,
  };
};

const mapDispatchToProps = {
  setActiveTPItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrustPilotCarousel);
