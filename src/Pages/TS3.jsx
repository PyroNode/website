import React from "react";

import CarouselItem from "../components/CarouselItem";
import Layout from "../components/Layout";
import TS3FeatureItem from "../components/TS3FeatureItem";
import TS3PlanItem from "../components/TS3PlanItem";
import "../styles/TS3.css";
import { connect } from "react-redux";

const TS3 = ({ hero, features, plans }) => {
  const styles = {
    width: "200%",
    left: "calc(-5% + -10vw)",
  };

  return (
    <>
      <Layout optionalStyles={styles}>
        <div className="TS3__Page">
          <div className="TS3__container">
            <div className="TS3__hero-container">
              <div className="TS3__hero">
                <CarouselItem content={hero} isInPage />
              </div>
            </div>

            <div className="TS3__features">
              <div className="TS3__features-container">
                <h1 className="TS3__features-title">CARACTERÍSTICAS</h1>
                <div className="TS3__features-list">
                  {features.map((feature) => {
                    return (
                      <TS3FeatureItem
                        key={features.valueOf(feature)}
                        content={feature}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="TS3__plans">
              {plans.map((plan) => {
                return <TS3PlanItem key={plans.indexOf(plan)} content={plan} />;
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    hero: state.pages.ts3.hero,
    features: state.pages.ts3.plans.features,
    plans: state.pages.ts3.plans.list,
  };
};

export default connect(mapStateToProps, null)(TS3);
