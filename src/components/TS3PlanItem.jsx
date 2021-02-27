import React from "react";

const TS3PlanItem = ({ content }) => {
  return (
    <>
      <div className="TS3PlanItem__item">
        <div className="TS3PlanItem__container">
          <div className="TS3PlanItem__info">
            <div className="TS3PlanItem__titleSide">
              <img src={content.photo} alt={content.title} />
              <h1>{content.title}</h1>
              <p>{content.subtitle}</p>
            </div>
            <div className="TS3PlanItem__priceSide">
              <p>{content.price}</p>
              <div className="TS3PlanItem__priceButton">
                <p>por mes</p>
              </div>
            </div>
          </div>
          <div className="TS3PlanItem__desc">
            {content.desc.map((descItem) => {
              return (
                <>
                  <div className="TS3PlanItem_descItem">
                    <p>
                      <span>· </span>
                      {descItem.value}
                    </p>
                  </div>
                </>
              );
            })}
          </div>

          <div className="TS3Planitem__buttonSide">
            <div className="TS3PlanItem__button-container">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href={content.buttonUrl}
              >
                <h1>{content.buttonText.toUpperCase()}</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TS3PlanItem;
