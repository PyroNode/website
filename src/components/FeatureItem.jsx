import React from "react";

const FeatureItem = ({ item, length, all, change, contentID }) => {
  const [opacity, setOpacity] = React.useState(0);
  const [sameContentID, setSameContentID] = React.useState(false);

  const style = {
    width: `calc(100% / ${length})`,
    height: "100%",
    opacity: opacity,
    transition: "0.4s",
  };

  const index = all.indexOf(item) * 100;

  React.useEffect(() => {
    if (contentID === 1 && all[all.length - 1] === item && length === 5) {
      return true;
    }

    const id = setTimeout(() => {
      setOpacity(1);
    }, 750 + index);

    return () => {
      clearTimeout(id);
    };
  }, []);

  React.useEffect(() => {
    if (!sameContentID) {
      if (contentID === 1 && all[all.length - 1] === item && length === 5) {
        setSameContentID(true);
        const id = setTimeout(() => {
          setOpacity(0);
        }, 0 + index);

        const id2 = setTimeout(() => {
          setOpacity(1);
        }, 1000);

        return () => {
          clearTimeout(id);
          clearTimeout(id2);
        };
      }
    }

    const id = setTimeout(() => {
      setOpacity(0);
    }, 0 + index);

    const id2 = setTimeout(() => {
      setOpacity(1);
    }, 750 + index);

    return () => {
      clearTimeout(id);
      clearTimeout(id2);
    };
  }, [change]);

  return (
    <>
      <div style={style} className="PlanDetails__item">
        <img src={item.icon} alt={item.title} />
        <h1>{item.title}</h1>
      </div>
    </>
  );
};

export default FeatureItem;
