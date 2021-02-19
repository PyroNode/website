import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setActiveCarouselItem } from "../actions";
import CarouselItem from "./CarouselItem";
import left from "../static/left-arrow.png";
import right from "../static/right-arrow.png";

import "../styles/Carousel.css";
import CarouselDotsControler from "./CarouselDotsControler";

const Carousel = ({
  items,
  setActiveCarouselItem,
  active_item,
  height,
  width,
}) => {
  const [index, setIndex] = useState(0);
  const [customClass, setClass] = useState("Carousel__item active ");
  const [firstElement, setFirstElement] = useState(true);

  useEffect(() => {
    if (firstElement) {
      setActiveCarouselItem(index);
      setClass("Carousel__item active transition");
      setTimeout(() => {
        setClass("Carousel__item transition");
      }, 400);
      setFirstElement(false);
    } else {
      setClass("Carousel__item active transition");
      setTimeout(() => {
        setClass("Carousel__item transition");
      }, 400);

      setTimeout(() => setActiveCarouselItem(index), 400);
    }
  }, [index]);

  const handleBackIndex = () => {
    let i = index;

    i <= 0 ? (i = items.length - 1) : (i -= 1);

    setIndex(i);
    setActiveCarouselItem(index);
  };

  const handleUpIndex = () => {
    let i = index;

    i >= items.length - 1 ? (i = 0) : (i += 1);

    setIndex(i);

    setActiveCarouselItem(index);
  };

  if (width <= 800) {
    return (
      <>
        <div className="Carousel">
          <div className="Carousel__zIndex">
            <div className={customClass}>
              {active_item !== undefined && (
                <CarouselItem isMobile isInPage={false} content={active_item} />
              )}
            </div>
          </div>

          <div className="Carousel__buttons-container">
            <div className="Carousel__button" onClick={handleBackIndex}>
              <img src={right} alt="" />
            </div>

            <div className="Carousel__button" onClick={handleUpIndex}>
              <img src={left} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="Carousel">
        <div className="Carousel__zIndex">
          <div className="Carousel__button" onClick={handleBackIndex}>
            <img src={right} alt="" />
          </div>
          <div className={customClass}>
            {active_item !== undefined && (
              <CarouselItem isInPage={false} content={active_item} />
            )}
          </div>

          <div className="Carousel__button" onClick={handleUpIndex}>
            <img src={left} alt="" />
          </div>
        </div>
        <CarouselDotsControler index={index} arrayLength={items.length} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    active_item: state.carousel_active_item,
  };
};

const mapDispatchToProps = {
  setActiveCarouselItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
