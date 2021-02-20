import React, { useState } from "react";
import { connect } from "react-redux";
import Plan from "../components/Plan";
import { Fade } from "react-awesome-reveal";
import "../styles/PlansController.css";
import PlanDetails from "./PlanDetails";

const PlansController = ({ plans, activePlans, isMobile }) => {
  const [index, setIndex] = useState(0);
  const [change, setChange] = useState(false);
  let taskId = 0;
  const actPlansArray = [];

  for (let i = 0; i < plans.length; i++) {
    const element = plans[i];
    if (i <= activePlans - 1) {
      console.log(element);
      actPlansArray.push(element);
    }
  }

  const handleClick = (i) => {
    setChange(!change);

    taskId = setTimeout(() => {
      setIndex(i);
    }, 750);
  };

  React.useEffect(() => {
    clearTimeout(taskId);
  }, [index]);

  return (
    <>
      <div className="Plans__container">
        <div className="Plans__grid">
          {actPlansArray.map((item) => {
            return (
              <Plan
                handleClick={handleClick}
                index={index}
                key={item.id}
                content={item}
              />
            );
          })}
        </div>
      </div>
      <div className="Plans__container-details">
        <Fade className="react-reveal">
          <PlanDetails
            change={change}
            isMobile={isMobile}
            content={plans[index]}
          />
        </Fade>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    plans: state.pages.minecraft.plans.list,
  };
};

export default connect(mapStateToProps, null)(PlansController);
