import React from "react";

import Layout from "../components/Layout";
import CarouselItem from "../components/CarouselItem";
import PoweredBy from "../components/PoweredBy";
import WebPlanItem from "../components/WebPlanItem";
import "../styles/WebHosting.css";

import { connect } from "react-redux";

const WebHosting = ({ hero, plans }) => {
  return (
    <>
      <Layout>
        <div className="Web__Page">
          <div className="Web__container">
            <div className="Web__hero-container">
              <div className="Web__hero">
                <CarouselItem content={hero} isInPage />
              </div>
            </div>
          </div>
          <PoweredBy />
          <div className="Web__plans-container">
            <div className="Web__plans">
              {plans.map((item) => {
                  console.log(plans.length)
                return (
                  <WebPlanItem
                    key={plans.indexOf(item)}
                    content={item}
                    itemIndex={plans.indexOf(item)}
                    lengthX={plans.length}
                    lengthY={item.rows.length}
                  />
                );
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
    hero: state.pages.webhosting.hero,
    plans: state.pages.webhosting.plans.list,
  };
};

export default connect(mapStateToProps, null)(WebHosting);
