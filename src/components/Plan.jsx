import React from "react";

import "../styles/Plan.css";
import PlanDetails from "./PlanDetails";

const Plan = ({ content, handleClick }) => {
  const [style, setStyle] = React.useState("Plan__button Plan__transition");

  const handleStyles = () => {
    setTimeout(() => {
      setStyle(style + " Plan__buttonColor");
    }, 200);

    setTimeout(() => {
      setStyle("Plan__button Plan__transition");
    }, 750*2+250);
  };

  return (
    <>
      <div className="Plan" id="planes">
        <div className="Plan__upper">
          <img src={content.photo} alt="" />
          <p id="title">{content.title}</p>
          <div className="Plan__price">
            <span>{content.price_prefix}</span>
            <h1>{content.price}</h1>
          </div>
          <p>{content.price_desc.toLowerCase()}</p>
        </div>
        <div className="Plan__down">
          <div className="Plan__desc">
            {content.desc.map((item) => {
              return (
                <div
                  key={content.desc.indexOf(item)}
                  className="Plan__desc-item"
                >
                  <div className="Plan__desc-key">
                    <p>{item.feature}</p>
                  </div>
                  <div className="Plan__desc-value">
                    <p>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => {
              handleClick(content.id);
              handleStyles()
            }}
            className={style}
          >
            <h1 className="Plan__transition">{content.button_text}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
