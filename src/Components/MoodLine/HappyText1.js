import React, { useState } from "react";
import "./HappyText1.css";

const HappyText1 = () => {
  let [isHovering, setIsHovering] = useState(1);
  const covering = () => {
    if (isHovering === 1) {
      return <Cover1 pt={setIsHovering} />;
    } else if (isHovering === 0) {
      return "";
    }
  };

  return (
    <div className="happy_choice">
      <div
        className="selec_1"
        onMouseOver={() => {
          setIsHovering(0);
        }}
      >
        no.1 Select
      </div>
      {covering()}
      <div className="selec_2">no.2 Select</div>
      <div className="selec_cover2">covered</div>
    </div>
  );
};

const Cover1 = () => {
  return <div className="selec_cover1">covered</div>;
};

export default HappyText1;
