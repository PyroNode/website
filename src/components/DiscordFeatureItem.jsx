import React from "react";

const DiscordFeatureItem = ({ content }) => {
  return (
    <>
      <div className="Discord__FeatureItem">
        <div className="Discord__upperZone">
          <img src={content.photo} alt={content.title} />
          <h1>{content.title.toUpperCase()}</h1>
        </div>

        <div className="Discord__downZone">
          <p>{content.desc}</p>
        </div>
      </div>
    </>
  );
};

export default DiscordFeatureItem;
