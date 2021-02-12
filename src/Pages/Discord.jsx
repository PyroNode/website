import React from "react";

import Layout from "../components/Layout";
import "../styles/Discord.css";
import { connect } from "react-redux";
import CarouselItem from "../components/CarouselItem";
import DiscordFeatures from "../components/DiscordFeatures";
import DiscordPlans from "../components/DiscordPlans";

const Discord = ({ hero, content, plans }) => {
  const styles = {
    width: "200%",
    left: "calc(-5% + -10vw)",
  };

  return (
    <>
      <Layout optionalStyles={styles} headerDark={false}>
        <div className="Discord__Page">
          <div className="Discord__hero-container">
            <div className="Discord__hero">
              <CarouselItem isInPage content={hero} />
            </div>
          </div>
          <DiscordFeatures content={content} />
          <DiscordPlans content={plans} />
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
