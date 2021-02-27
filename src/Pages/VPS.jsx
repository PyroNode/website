import React from "react";

import Layout from "../components/Layout";
import CarouselItem from "../components/CarouselItem";
import PoweredBy from "../components/PoweredBy";
import WebPlanItem from "../components/WebPlanItem";
import TS3PlanItem from "../components/TS3PlanItem";
import "../styles/VPS.css";

import { connect } from "react-redux";
import FeatureItem from "../components/FeatureItem";

const VPS = ({ hero, plans, mobilePlans, features, mobileFeatures }) => {
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  setTimeout(() => {
    setHeight(document.body.scrollHeight);
    setWidth(document.body.scrollWidth);
    console.log(height);
    console.log(width);
  }, 0);

  if (width <= 800) {
    return (
      <>
        <Layout>
          <div className="VPS__Page">
            <div className="Web__container">
              <div className="Web__hero-container">
                <div className="Web__hero">
                  <CarouselItem isMobile content={hero} isInPage />
                </div>
              </div>
            </div>

            <div className="Web__plans-container">
              <div className="Web__mobilePlans">
                {mobilePlans.map((plan) => {
                  return (
                    <TS3PlanItem
                      key={mobilePlans.indexOf(plan)}
                      content={plan}
                    />
                  );
                })}
              </div>
            </div>
            <div className="VPS__Features">
              {mobileFeatures.map((feature) => {
                return (
                  <>
                    <div className="VPS__Features-column">
                      {feature.map((item) => {
                        return (
                          <FeatureItem
                            item={item}
                            length={feature.length - 1}
                            all={feature}
                            change={true}
                            contentID={0}
                          />
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <div className="VPS__Page">
          <div className="Web__container">
            <div className="Web__hero-container">
              <div className="Web__hero">
                <CarouselItem content={hero} isInPage />
              </div>
            </div>
          </div>

          <div className="Web__plans-container">
            <div className="Web__plans">
              {plans.map((item) => {
                console.log(plans.length);
                return (
                  <WebPlanItem
                    key={plans.indexOf(item)}
                    content={item}
                    itemIndex={plans.indexOf(item)}
                    lengthX={plans.length}
                    lengthY={item.rows.length}
                    isVPS={true}
                  />
                );
              })}
            </div>
          </div>

          <div className="VPS__Features">
            {features.map((feature) => {
              return (
                <>
                  <div className="VPS__Features-column">
                    {feature.map((item) => {
                      return (
                        <FeatureItem
                          item={item}
                          length={feature.length - 1}
                          all={feature}
                          change={true}
                          contentID={0}
                        />
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    hero: state.pages.vps.hero,
    plans: state.pages.vps.plans.list,
    mobilePlans: state.pages.vps.plans.mobileList,
    features: state.pages.vps.features,
    mobileFeatures: state.pages.vps.mobileFeatures
  };
};

export default connect(mapStateToProps, null)(VPS);
