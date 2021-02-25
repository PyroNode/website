import React from "react";

const WebPlanItem = ({ content, itemIndex, lengthY, lengthX, isVPS }) => {
  const widthStyles = {
    width: `calc(100% / ${lengthX})`,
  };

  const heightStyles = {
    height: `calc(100% / ${lengthY})`,
    width: "100%",
  };

  if (isVPS) {
    const lengthInX = lengthY;
    const lengthInY = lengthX;

    const widthStylesInverted = {
      height: `calc(100% / ${lengthInY})`,
      width: "100%",
    };

    const heightStylesInverted = {
      width: `calc(100% / ${lengthInY})`,
      height: "100%",
    };

    return (
      <>
        <div style={widthStylesInverted} className="WebPlanItem__item">
          <div
            className={`WebPlanItem__container ${
              itemIndex === 0 && "WebPlanItem__container-first_child"
            } ${
              itemIndex === lengthInY - 1 && "WebPlanItem__container-last_child"
            }`}
          >
            {content.rows.map((row) => {
              return (
                <>
                  <div
                    key={content.rows.indexOf(row)}
                    style={heightStylesInverted}
                    className={`WebPlanItem__row 
                  WebPlanItem__row-${itemIndex}_${content.rows.indexOf(row)}`}
                  >
                    {content.rows.indexOf(row) <= 5 && itemIndex === 0 && (
                      <img src={row.photo} />
                    )}

                    {content.rows.indexOf(row) === lengthInX - 1 &&
                    itemIndex <= lengthInY - 1 &&
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
                        {content.rows.indexOf(row) === 2 &&
                        itemIndex <= lengthInY - 1 &&
                        itemIndex >= 1 ? (
                          <>
                            <p>{row.value}</p>
                            <span>NVMe SSD</span>
                          </>
                        ) : (
                          <p>{row.value}</p>
                        )}
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
  }

  return (
    <>
      <div style={widthStyles} className="WebPlanItem__item">
        <div
          className={`WebPlanItem__container ${
            itemIndex === 0 && "WebPlanItem__container-first_child"
          } ${
            itemIndex === lengthX - 1 && "WebPlanItem__container-last_child"
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

                  {content.rows.indexOf(row) === lengthY - 1 &&
                  itemIndex <= lengthX - 1 &&
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
