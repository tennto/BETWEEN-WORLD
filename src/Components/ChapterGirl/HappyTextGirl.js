import React, { useState } from "react";
import GSound1in2 from "../Girlmusic/GSound1in2";
import GSound1in1 from "../Girlmusic/GSound1in1";
import "../../css/Card.css";

const HappyTextGirl = () => {
  return (
    <>
      <div className="wrap">
        <div className="card">
          <div className="card-front">사운드 1앞면</div>
          <div className="card-back">
            <GSound1in1 />
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="card2">
          <div className="card-front2">사운드 2앞면</div>
          <div className="card-back2">
            <GSound1in2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyTextGirl;
