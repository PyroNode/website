import React from "react";

import Layout from "../components/Layout";
import CarouselItem from "../components/CarouselItem";
import PoweredBy from "../components/PoweredBy";
import WebPlanItem from "../components/WebPlanItem";
import TS3PlanItem from "../components/TS3PlanItem";
import "../styles/VPS.css";

import { connect } from "react-redux";

const VPS = ({ hero, plans, mobilePlans }) => {
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
            <PoweredBy cPanel isMobile />
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
          <PoweredBy cPanel />
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
  };
};

export default connect(mapStateToProps, null)(VPS);
