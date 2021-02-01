import React from "react";

import "../styles/Dots.css";

const CarouselDotsControler = ({ index, arrayLength }) => {
  const arrayForDotsIt = Array(arrayLength).fill(0);

  let i = 0;
  const normalDot = "dot";
  const activeDot = "dot dotactive";

  return (
    <>
      <div className="dots__container">
        {arrayForDotsIt.map((dot) => {
          if (i === index) {
            i++;
            return (
              <>
                <div key={i} className={activeDot}></div>
              </>
            );
          } else {
            i++;
            return (
              <>
                <div key={i} className={normalDot}></div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default CarouselDotsControler;
