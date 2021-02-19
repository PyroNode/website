import React from "react";

import Layout from "../components/Layout";
import CarouselItem from "../components/CarouselItem";
import PoweredBy from "../components/PoweredBy";
import WebPlanItem from "../components/WebPlanItem";
import "../styles/VPS.css";

import { connect } from "react-redux";

const VPS = ({ hero, plans }) => {
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
  };
};

export default connect(mapStateToProps, null)(VPS);
