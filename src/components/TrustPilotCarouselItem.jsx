import React from "react";

import "../styles/TrustPilotCarousel.css";
import star from "../static/star-solid.png";

const TrustPilotCarouselItem = ({ content, isMobile }) => {
  return (
    <>
      <div className="TPItem__all">
        <div className="TPItem__info">
          <blockquote>
            <h1>{content.review_title}</h1>
            <h2>{content.username}</h2>
            <blockquote>
              <p>{`${content.review_desc}`}</p>
            </blockquote>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default TrustPilotCarouselItem;
