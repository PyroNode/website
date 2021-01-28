import React from "react";

import "../styles/Carousel.css";
import { Link } from "react-router-dom";

const CarouselItem = ({ content }) => {
  const titleArr = content.title.toUpperCase().split("\n");

  return (
    <>
      <div className="CarouselItem__grid">
        <div className="CarouselItem__info">
          <h1>{titleArr[0]}</h1>
          <h1>{titleArr[1]}</h1>
          <h2>{content.subtitle}</h2>
          <p>{content.desc}</p>

          <Link className="CarouselItem__td" to={content.buttonUrl !== undefined ? content.buttonUrl : "/"}>
            <span className="CarouselItem__button">Ver más</span>
          </Link>
        </div>
        <div className="CarouselItem__photo">
          <img src={content.photo} alt="" />
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
