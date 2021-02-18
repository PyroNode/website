import React from "react";
import classnames from "classnames";

import "../styles/MachineItem.css";

const MachineItem = ({ content, isCard }) => {
  const customclass = classnames(
    "MachineItem__content",
    `${content.best_option ? "best_option" : ""}`,
    `${content.recommended ? "recommended" : ""}`,
    `${content.recommended_for_mods ? "recommended_for_mods" : ""}`
  );

  if (isCard) {
    return (
      <>
        <div className="MachineItem__container MachineItem__card">
          <div className={customclass}>
            <div className="MachineItem__title MachineItem__card-title">
              <img src={content.icon} alt={content.title} />
            </div>
            <div className="MachineItem__card-info">
              <div className="MachineItem__card-info-title">
                <p>{content.title.toUpperCase()}</p>
              </div>

              <div className="MachineItem__card-specDiv">
                {content.specs.map((spec) => {
                  return (
                    <>
                      <div className="MachineItem__card-spec">
                        <div className="MachineItem__card-spec-half">
                          <p>{spec.key.toUpperCase()}</p>
                        </div>
                        <div className="MachineItem__card-spec-half MachineItem__card-flex-end">
                          <p>{spec.value}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              <div className="MachineItem__card-button">
                <div>
                  <a href={content.url}>
                    <p>ADQUIRIR</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="MachineItem__container">
        <div className={customclass}>
          <div className="MachineItem__title">
            <img src={content.icon} alt={content.title} />

            <p>{content.title.toUpperCase()}</p>
          </div>
          <div className="MachineItem__ram">
            <p>{content.ram}</p>
            <span>RAM</span>
          </div>

          <div className="MachineItem__price">
            <p>{content.price}</p>
            <span>PRECIO</span>
          </div>

          <div className="MachineItem__button">
            <div>
              <a href={content.url}>
                <p>ADQUIRIR</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MachineItem;
