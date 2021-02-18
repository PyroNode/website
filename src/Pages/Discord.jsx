import React from "react";

import Layout from "../components/Layout";
import "../styles/Discord.css";
import { connect } from "react-redux";
import CarouselItem from "../components/CarouselItem";
import DiscordFeatures from "../components/DiscordFeatures";
import DiscordPlans from "../components/DiscordPlans";
import PoweredBy from "../components/PoweredBy";

const Discord = ({ hero, content, plans }) => {
  const styles = {
    width: "calc(220vh)",
    left: "calc(-5% + -10vw)",
  };

  return (
    <>
      <Layout headerDark={false}>
        <div className="Discord__Page">
          <div className="Discord__hero-container">
            <div className="Discord__hero">
              <CarouselItem isInPage content={hero} />
            </div>
          </div>
          <DiscordFeatures content={content} />
          <DiscordPlans content={plans} />
          <PoweredBy />
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    hero: state.pages.discord.hero,
    content: state.pages.discord.plans.features,
    plans: state.pages.discord.plans.list,
  };
};

export default connect(mapStateToProps, null)(Discord);
