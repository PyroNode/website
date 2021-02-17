import React from "react";
import { Fade } from "react-awesome-reveal";
import "../styles/PoweredBy.css";

const PoweredBy = () => {
  const [index, setIndex] = React.useState(1);

  const baseUrl = "https://cdn.pterodactyl.io/site-assets/carousel/screenshot-";

  let intervalID = 0;

  let varUrl = `${index}.png`;

  React.useEffect(() => {
    automaticUpIndex();

    return function clean() {
      clearInterval(intervalID);
      intervalID = 0;
    };
  }, [index]);

  const handleUpIndex = () => {
    let i = index;

    i >= 11 ? (i = 1) : (i += 1);

    setIndex(i);
  };

  const automaticUpIndex = () => {
    intervalID = setInterval(() => {
      handleUpIndex();
    }, 3500);
  };

  return (
    <>
      <div className="PoweredBy__container">
        <div className="PoweredBy__item">
          <div className="PoweredBy__inside">
            <Fade
              cascade
              triggerOnce
              duration={1200}
              damping={0.25}
              direction="right"
            >
              <h1>Impulsado por</h1>
              <h1 className="PoweredBy-orange">Pterodactyl</h1>
              <p>Impulsado por el panel de control Pterodactyl.</p>
              <p>Es fácil de usar hasta en las situaciones más difíciles.</p>
            </Fade>
          </div>
        </div>
        <div className="PoweredBy__item">
          <Fade triggerOnce>
            <img src={baseUrl + varUrl} alt={`photo ${index}`} />
          </Fade>
        </div>
      </div>
    </>
  );
};

export default PoweredBy;
