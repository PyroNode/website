import React from "react";

import "../styles/PlansController.css";

import FeatureItem from "../components/FeatureItem";
import MachineItem from "../components/MachineItem";
import { Fade } from "react-awesome-reveal";

const PlanDetails = ({ content, change, isMobile }) => {
  const [listChange, setChange] = React.useState(false);
  const list1 = [];
  const list2 = [];

  const featuresCopy = content.include.feature;
  const machines = content.include.machines;
  const machinesLength =
    machines.list.length / 2 + (machines.cards.list.length * 3) / 2;
  const fadeR = "right";
  const fadeL = "left";
  let fadeDirection = fadeR;

  //inline-styles
  const grid_style = {
    gridTemplateRows: `repeat(${machinesLength}, calc(100% / ${machinesLength}))`,
    gridTemplateColumns: `repeat(2, 50%)`,
    width: "85%",
  };

  //columns filter method
  content.include.feature.map((item) => {
    Math.ceil(content.include.feature.length / 2) >=
    content.include.feature.indexOf(item) + 1
      ? list1.push(item)
      : list2.push(item);
  });

  //filter method for mobile
  var chunks = function (array, size) {
    var copy = [...array];
    var chunks = [];
    while (copy.length) {
      chunks.push(copy.splice(0, size));
    }
    return chunks;
  };

  const mobileLists = chunks(featuresCopy, 3);

  const isEven = (value) => {
    return value % 2 == 0 ? true : false;
  };

  React.useEffect(() => {
    setChange(!listChange);
  }, [change]);

  if (isMobile) {
    return (
      <>
        <div className="PlanDetails__modal">
          <div className="PlanDetails__columns">
            {mobileLists.map((list) => {
              return (
                <>
                  <div
                    className={`PlanDetails__${mobileLists.indexOf(list) + 1}`}
                  >
                    {list.map((item) => {
                      return (
                        <FeatureItem
                          key={
                            list.indexOf(item) +
                            1 +
                            (mobileLists.indexOf(list) === 1 ? 1 : 0) +
                            mobileLists.indexOf(list) *
                              (mobileLists.indexOf(list) + 1)
                          }
                          item={item}
                          length={list.length}
                          all={content.include.feature}
                          change={listChange}
                          contentID={content.id}
                        />
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="PlanDetails__modal PlanDetails__modal-2">
          <div className="PlanDetails__machines">
            {machines.list.map((machine) => {
              {
                isEven(machines.list.indexOf(machine))
                  ? (fadeDirection = fadeL)
                  : (fadeDirection = fadeR);
              }
              return (
                <Fade cascade direction={fadeDirection} triggerOnce>
                  <MachineItem
                    key={machines.list.indexOf(machine)}
                    content={machine}
                    isMobile
                  />
                </Fade>
              );
            })}

            {machines.cards.list.map((machineCard) => {
              {
                isEven(machines.cards.list.indexOf(machineCard))
                  ? (fadeDirection = fadeL)
                  : (fadeDirection = fadeR);
              }
              return (
                <Fade
                  className="MachineItem__card"
                  cascade
                  direction={fadeDirection}
                  triggerOnce
                >
                  <MachineItem
                    key={
                      machines.cards.list.indexOf(machineCard) +
                      machines.list.indexOf(
                        machines.list[machines.list.length - 1]
                      ) +
                      1
                    }
                    content={machineCard}
                    isCard
                    isMobile
                  />
                </Fade>
              );
            })}

            <Fade className="MachineItem__single" direction="up" triggerOnce>
              <MachineItem
                key={
                  machines.cards.list.indexOf(
                    machines.cards.list[machines.cards.list.length - 1]
                  ) +
                  machines.list.indexOf(
                    machines.list[machines.list.length - 1]
                  ) +
                  1
                }
                content={machines.cards.single}
                isSingle
                isMobile
              />
            </Fade>
          </div>
        </div>
      </>
    );
  }

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

        <div className="PlanDetails__machines">
          <div style={grid_style} className="PlanDetails__machines-grid">
            {machines.list.map((machine) => {
              {
                isEven(machines.list.indexOf(machine))
                  ? (fadeDirection = fadeL)
                  : (fadeDirection = fadeR);
              }
              return (
                <Fade cascade direction={fadeDirection} triggerOnce>
                  <MachineItem
                    key={machines.list.indexOf(machine)}
                    content={machine}
                  />
                </Fade>
              );
            })}

            {machines.cards.list.map((machineCard) => {
              {
                isEven(machines.cards.list.indexOf(machineCard))
                  ? (fadeDirection = fadeL)
                  : (fadeDirection = fadeR);
              }
              return (
                <Fade
                  className="MachineItem__card"
                  cascade
                  direction={fadeDirection}
                  triggerOnce
                >
                  <MachineItem
                    key={
                      machines.cards.list.indexOf(machineCard) +
                      machines.list.indexOf(
                        machines.list[machines.list.length - 1]
                      ) +
                      1
                    }
                    content={machineCard}
                    isCard
                  />
                </Fade>
              );
            })}

            <Fade className="MachineItem__single" direction="up" triggerOnce>
              <MachineItem
                key={
                  machines.cards.list.indexOf(
                    machines.cards.list[machines.cards.list.length - 1]
                  ) +
                  machines.list.indexOf(
                    machines.list[machines.list.length - 1]
                  ) +
                  1
                }
                content={machines.cards.single}
                isSingle
              />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanDetails;
