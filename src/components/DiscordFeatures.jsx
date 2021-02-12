import React from "react";
import DiscordFeatureItem from "./DiscordFeatureItem";
import PickingUsItem from "./PickingUsItem";
import { Fade } from "react-awesome-reveal";
const DiscordFeatures = ({ content }) => {
  return (
    <>
      <div className="Discord__features">
        <Fade className="Discord__fade" cascade direction="up" triggerOnce>
          {content.map((item) => {
            return (
              <DiscordFeatureItem key={content.indexOf(item)} content={item} />
            );
          })}
        </Fade>
      </div>
    </>
  );
};

export default DiscordFeatures;
