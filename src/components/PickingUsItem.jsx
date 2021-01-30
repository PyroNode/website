import React from "react";

import "../styles/PickingUs.css";
import { Link } from "react-router-dom";

const PickingUsItem = ({ content }) => {
  return (
    <>
      <div className="pickUsItem__container">
        <div className="pickUsItem__upperZone">
          <img src={content.photo} alt={content.title} />
          <h1>{content.title.toUpperCase()}</h1>
        </div>

        <div className="pickUsItem__downZone">
          <p>{content.desc}</p>
          <Link
            className="pickUsItem__button"
            to={content.buttonUrl !== undefined ? content.buttonUrl : "/"}
          >
            {content.buttonText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default PickingUsItem;
