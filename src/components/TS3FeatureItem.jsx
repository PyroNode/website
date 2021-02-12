import React from "react";

const TS3FeatureItem = ({ content }) => {
  return (
    <>
      <div className="TS3_featureItemContainer">
        <div className="TS3__featureItem">
          <div className="TS3__content">
            <h1>{content.title}</h1>
          </div>
          <div className="TS3__content-active">
            <div className="TS3__content-title">
              <div className="TS3__content-title-border">
                <p>{content.title}</p>
              </div>
            </div>
            <div className="TS3__content-desc">
              <p>{content.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TS3FeatureItem;
