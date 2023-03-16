import React, { useState } from "react";
import "../../css/Card.css";
import GSound3in2 from "../Girlmusic/GSound3in2";
import GSound3in1 from "../Girlmusic/GSound3in1";

const ThrillTextGirl = () => {
  return (
    <>
      <div className="wrap">
        <div className="card">
          <div className="card-front">사운드 1앞면</div>
          <div className="card-back">
            <GSound3in1 />
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="card2">
          <div className="card-front2">사운드 2앞면</div>
          <div className="card-back2">
            <GSound3in2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThrillTextGirl;
