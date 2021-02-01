import React from "react";

import "../styles/PickingUs.css";
import { Link } from "react-router-dom";

const PickingUsItem = ({ content }) => {
  return (
    <>
      <div className="pickUsItem">
        <div className="pickUsItem__upperZone">
          <img src={content.photo} alt={content.title} />
          <h1>{content.title.toUpperCase()}</h1>
        </div>

        <div className="pickUsItem__downZone">
          <p>{content.desc}</p>
        </div>
      </div>
    </>
  );
};

export default PickingUsItem;
