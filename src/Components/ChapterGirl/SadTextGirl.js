import React, { useState } from "react";
import GSound2in2 from "../Girlmusic/GSound2in2";
import GSound2in1 from "../Girlmusic/GSound2in1";
import "../../css/Card.css";

const SadTextGirl = () => {
  return (
    <>
      <div className="wrap">
        <div className="card">
          <div className="card-front">사운드 1앞면</div>
          <div className="card-back">
            <GSound2in1 />
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="card2">
          <div className="card-front2">사운드 2앞면</div>
          <div className="card-back2">
            <GSound2in2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default SadTextGirl;
