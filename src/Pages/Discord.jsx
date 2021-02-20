import React from "react";

import Layout from "../components/Layout";
import "../styles/Discord.css";
import { connect } from "react-redux";
import CarouselItem from "../components/CarouselItem";
import DiscordFeatures from "../components/DiscordFeatures";
import DiscordPlans from "../components/DiscordPlans";
import PoweredBy from "../components/PoweredBy";

const Discord = ({ hero, content, plans }) => {
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
        <Layout headerDark={false}>
          <div className="Discord__Page">
            <div className="Discord__hero-container">
              <div className="Discord__hero">
                <CarouselItem isMobile isInPage content={hero} />
              </div>
            </div>
            <DiscordFeatures isMobile content={content} />
            <DiscordPlans isMobile content={plans} />
            <PoweredBy isMobile />
          </div>
        </Layout>
      </>
    );
  }

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
