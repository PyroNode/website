import React from "react";

import "../styles/PickingUs.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const PickingUsItem = ({ content, isRight }) => {
  return (
    <>
      {isRight ? (
        <Fade right>
          <div className="pickUsItem">
            <div className="pickUsItem__upperZone">
              <img src={content.photo} alt={content.title} />
              <h1>{content.title.toUpperCase()}</h1>
            </div>

            <div className="pickUsItem__downZone">
              <p>{content.desc}</p>
            </div>
          </div>
        </Fade>
      ) : (
        <Fade left>
          <div className="pickUsItem">
            <div className="pickUsItem__upperZone">
              <h1>{content.title.toUpperCase()}</h1>
              <img src={content.photo} alt={content.title} />
            </div>

            <div className="pickUsItem__downZone">
              <p>{content.desc}</p>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
};

export default PickingUsItem;
