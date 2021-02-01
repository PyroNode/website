import React from "react";

import "../styles/TrustPilotCarousel.css";
import star from "../static/star-solid.png";


const TrustPilotCarouselItem = ({ content }) => {
  function chunkString(str, len) {
    const size = Math.ceil(str.length / len);
    const r = Array(size);
    let offset = 0;

    for (let i = 0; i < size; i++) {
      r[i] = str.substr(offset, len);
      offset += len;
    }

    return r;
  }

  const desc = chunkString(content.review_desc, content.review_desc.length / 2);

  return (
    <>
      <div className="TPItem__all">
        <div className="TPItem__info">
          <blockquote>
            <h1>{content.review_title}</h1>
            <blockquote>
              <p>{`${desc[0]}...`}</p>
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
