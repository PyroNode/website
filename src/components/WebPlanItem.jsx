import React from "react";

const WebPlanItem = ({ content, itemIndex, lengthY, lengthX }) => {
  const widthStyles = {
    width: `calc(100% / ${lengthX})`,
  };

  const heightStyles = {
    height: `calc(100% / ${lengthY})`,
    width: "100%",
  };

  return (
    <>
      <div style={widthStyles} className="WebPlanItem__item">
        <div
          className={`WebPlanItem__container ${itemIndex===0 && "WebPlanItem__container-first_child"} ${
            itemIndex === 3 && "WebPlanItem__container-last_child"
          }`}
        >
          {content.rows.map((row) => {
            return (
              <>
                <div
                  key={content.rows.indexOf(row)}
                  style={heightStyles}
                  className={`WebPlanItem__row 
                  WebPlanItem__row-${content.rows.indexOf(row)}_${itemIndex}`}
                >
                  {content.rows.indexOf(row) <= 8 && itemIndex === 0 && (
                    <img src={row.photo} />
                  )}

                  {content.rows.indexOf(row) === 8 &&
                  itemIndex <= 3 &&
                  itemIndex >= 1 ? (
                    <>
                      <div className="WebPlanItem__button">
                        <a href={row.url}>
                          <p>{row.value}</p>
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <p>{row.value}</p>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WebPlanItem;
