import React from "react";

import "../styles/TrustPilotCarousel.css";
import star from "../static/star-solid.png";

const TrustPilotCarouselItem = ({ content }) => {
  return (
    <>
      <div className="TPItem__all">
        <div className="TPItem__info">
          <blockquote>
            <h1>{content.review_title}</h1>
            <blockquote>
              <p>{`${content.review_desc}`}</p>
            </blockquote>
          </blockquote>
        </div>
        <div className="TPItem__user">
          <div className="TPItem__valoration">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>{content.username}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustPilotCarouselItem;
