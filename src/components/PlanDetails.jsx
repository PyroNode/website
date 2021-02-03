import React from "react";

import "../styles/PlansController.css";

import FeatureItem from "../components/FeatureItem";

const PlanDetails = ({ content, change }) => {
  const [listChange, setChange] = React.useState(false);
  const list1 = [];
  const list2 = [];

  content.include.feature.map((item) => {
    Math.ceil(content.include.feature.length / 2) >=
    content.include.feature.indexOf(item) + 1
      ? list1.push(item)
      : list2.push(item);
  });

  React.useEffect(() => {
    setChange(!listChange);
  }, [change]);

  return (
    <>
      <div className="PlanDetails__modal">
        <div className="PlanDetails__columns">
          <div className="PlanDetails__firstColumn">
            {list1.map((item) => {
              return (
                <FeatureItem
                  key={content.include.feature.indexOf(item)}
                  item={item}
                  length={list1.length}
                  all={content.include.feature}
                  change={listChange}
                  contentID={content.id}
                />
              );
            })}
          </div>
          <div className="PlanDetails__secondColumn">
            {list2.map((item) => {
              return (
                <FeatureItem
                  key={content.include.feature.indexOf(item)}
                  item={item}
                  length={list2.length}
                  all={content.include.feature}
                  change={listChange}
                  contentID={content.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanDetails;
