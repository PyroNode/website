import React from "react";

const DiscordPlans = ({ content, isMobile }) => {
  if (isMobile) {
    return (
      <>
        <div className="Discord__plans">
          <div className="Discord__plans-container">
            {content.down.map((item) => {
              return (
                <div
                  key={content.down.indexOf(item)}
                  className="Discord__plans-lowerPlan"
                >
                  <div className="Discord__plans-lowerPlan-left">
                    <h1>{item.title.toUpperCase()}</h1>
                    <div className="Discord__plans-lowerPlan-button">
                      <a href={item.url}>
                        <p>ADQUIRIR</p>
                      </a>
                    </div>
                  </div>

                  <div className="Discord__plans-lowerPlan-right">
                    <div className="Discord__plans-lowerPlan-right-all">
                      {item.features.map((object) => {
                        return (
                          <>
                            <div className="Discord__plans-lowerPlan-right-row">
                              <p>{object.key.toUpperCase()}</p>

                              <span>{object.value.toUpperCase()}</span>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {content.up.map((item) => {
              return (
                <div
                  key={content.up.indexOf(item)}
                  className="Discord__plans-upperPlan"
                >
                  <div className="Discord__plans-upperPlan-left">
                    <h1>{item.title.toUpperCase()}</h1>

                    <div className="Discord__plans-upperPlan-price">
                      <h1>{item.price}</h1>
                      <p>por mes</p>
                    </div>

                    <div className="Discord__plans-upperPlan-button">
                      <a href={item.url}>
                        <p>ADQUIRIR</p>
                      </a>
                    </div>
                  </div>
                  <div className="Discord__plans-upperPlan-right">
                    <div className="Discord__plans-upperPlan-features">
                      {item.features.map((object) => {
                        return (
                          <div
                            key={item.features.indexOf(object)}
                            className="Discord__plans-upperPlan-features-item"
                          >
                            <div className="Discord__plans-upperPlan-features-item-key">
                              <p>{object.key}</p>
                            </div>
                            <div className="Discord__plans-upperPlan-features-item-value">
                              <p>{object.value.toUpperCase()}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="Discord__plans">
        <div className="Discord__plans-container">
          <div className="Discord__plans-lower">
            {content.down.map((item) => {
              return (
                <div
                  key={content.down.indexOf(item)}
                  className="Discord__plans-lowerPlan"
                >
                  <div className="Discord__plans-lowerPlan-left">
                    <h1>{item.title.toUpperCase()}</h1>
                    <div className="Discord__plans-lowerPlan-button">
                      <a href={item.url}>
                        <p>ADQUIRIR</p>
                      </a>
                    </div>
                  </div>

                  <div className="Discord__plans-lowerPlan-right">
                    <div className="Discord__plans-lowerPlan-right-all">
                      {item.features.map((object) => {
                        return (
                          <>
                            <div className="Discord__plans-lowerPlan-right-row">
                              <p>{object.key.toUpperCase()}</p>

                              <span>{object.value.toUpperCase()}</span>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Discord__plans-upper">
            {content.up.map((item) => {
              return (
                <div
                  key={content.up.indexOf(item)}
                  className="Discord__plans-upperPlan"
                >
                  <div className="Discord__plans-upperPlan-left">
                    <h1>{item.title.toUpperCase()}</h1>

                    <div className="Discord__plans-upperPlan-price">
                      <h1>{item.price}</h1>
                      <p>por mes</p>
                    </div>

                    <div className="Discord__plans-upperPlan-button">
                      <a href={item.url}>
                        <p>ADQUIRIR</p>
                      </a>
                    </div>
                  </div>
                  <div className="Discord__plans-upperPlan-right">
                    <div className="Discord__plans-upperPlan-features">
                      {item.features.map((object) => {
                        return (
                          <div
                            key={item.features.indexOf(object)}
                            className="Discord__plans-upperPlan-features-item"
                          >
                            <div className="Discord__plans-upperPlan-features-item-key">
                              <p>{object.key}</p>
                            </div>
                            <div className="Discord__plans-upperPlan-features-item-value">
                              <p>{object.value.toUpperCase()}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscordPlans;
